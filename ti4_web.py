#!/usr/bin/env python3
"""
The main starting file for this flask project, which is in charge of creating the application and
starting it based off of configuration and environment variables.
"""
import os
import random

from logging.config import dictConfig
from flask import Flask, render_template, jsonify, request, json
from flask.logging import create_logger
from helpers.sys_config import config
from ti4_map_generator import TI4Board


def create_application():
    """
    Initialize the ti4 website, as a flask application.
    :return: The new flask application, and the logger it uses.
    """
    # Setup logging
    dictConfig({
        'version': 1,
        'formatters': {'default': {
            'format': '%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        }},
        'handlers': {'wsgi': {
            'class': 'logging.StreamHandler',
            'stream': 'ext://flask.logging.wsgi_errors_stream',
            'formatter': 'default'
        }},
        'root': {
            'level': 'DEBUG' if bool(os.getenv('DEBUG', 'False')) else 'INFO',
            'handlers': ['wsgi']
        }
    })

    # Initialize the app
    app = Flask(__name__)
    log = create_logger(app)

    # Secret Key
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', os.urandom(32))

    # Debug
    env = os.getenv('ENVIRONMENT', 'production')
    app.config['ENV'] = env
    app.config['DEBUG'] = os.getenv('DEBUG', config[env]['debug'])

    # Main route
    @app.route("/")
    def index() -> str:
        """
        The main page for the ti4 generator, which displays a set of options and calculates
        potential map layouts.
        :return: The page as a string, to render on a browser
        """
        log.debug('Running the main page. Application is running as a %s server.', env)

        # Initial values for the first load of the page
        ti_board = TI4Board(6)
        form_info = {
            'player_count': [6, 5, 4, 3, 2],
            'pick_style': ti_board.get_pick_styles(),
            'board_style': ti_board.get_board_styles(),
            'seed': '',
            'shuffle_boards': True
        }

        all_board_styles = ti_board.get_all_board_styles()

        # Generate a new set of offsets
        offsets_46 = calculate_offsets(46)  # Height is 40
        offsets_76 = calculate_offsets(76)  # Height is 66
        offsets_106 = calculate_offsets(106)  # Height is 92
        offsets_136 = calculate_offsets(136)  # Height is 119

        return render_template('index.html',
                               form_info=form_info,
                               all_board_styles=all_board_styles,
                               offsets_46=offsets_46,
                               offsets_76=offsets_76,
                               offsets_106=offsets_106,
                               offsets_136=offsets_136)

    def calculate_offsets(image_width: int) -> list:
        """
        Calculates the various x/y offsets given an image width, using the 317hx364w ratio that
        images in static/img/tiles use.
        :param image_width: The width of the image
        :return: A list of tuple offsets organized by tile number 37 long
        """
        image_height = int(317 / 364 * image_width)
        full_left = -image_width
        full_top = -image_height
        base_left = int(full_left * 0.5)
        base_top = int(full_top * 0.5)
        half_left = int(full_left * 0.75)

        offsets = [
            (base_left, base_top),  # Mecatol Rex
            # Inner ring
            (base_left, base_top + full_top),
            (base_left - half_left, base_top + base_top),
            (base_left - half_left, 0),
            (base_left, base_top - full_top),
            (base_left + half_left, 0),
            (base_left + half_left, base_top + base_top),
            # Middle ring
            (base_left, base_top + full_top + full_top),
            (base_left - half_left, base_top + full_top + base_top),
            (base_left - full_left - base_left, base_top + full_top),
            (base_left - full_left - base_left, base_top),
            (base_left - full_left - base_left, base_top - full_top),
            (base_left - half_left, base_top - full_top - base_top),
            (base_left, base_top - full_top - full_top),
            (base_left + half_left, base_top - full_top - base_top),
            (base_left + full_left + base_left, base_top - full_top),
            (base_left + full_left + base_left, base_top),
            (base_left + full_left + base_left, base_top + full_top),
            (base_left + half_left, base_top + full_top + base_top),
            # Outer Ring
            (base_left, base_top + full_top + full_top + full_top),
            (base_left - half_left, base_top + full_top + full_top + base_top),
            (base_left - full_left - base_left, base_top + full_top + full_top),
            (base_left - half_left - full_left - base_left, base_top + full_top + base_top),
            (base_left - half_left - full_left - base_left, base_top + base_top),
            (base_left - half_left - full_left - base_left, base_top - base_top),
            (base_left - half_left - full_left - base_left, base_top - full_top - base_top),
            (base_left - full_left - base_left, base_top - full_top - full_top),
            (base_left - half_left, base_top - full_top - full_top - base_top),
            (base_left, base_top - full_top - full_top - full_top),
            (base_left + half_left, base_top - full_top - full_top - base_top),
            (base_left + full_left + base_left, base_top - full_top - full_top),
            (base_left + half_left + full_left + base_left, base_top - full_top - base_top),
            (base_left + half_left + full_left + base_left, base_top - base_top),
            (base_left + half_left + full_left + base_left, base_top + base_top),
            (base_left + half_left + full_left + base_left, base_top + full_top + base_top),
            (base_left + full_left + base_left, base_top + full_top + full_top),
            (base_left + half_left, base_top + full_top + full_top + base_top)
        ]
        return offsets

    @app.route("/generate/", methods=['POST'])
    def generate() -> json:
        """
        Generates a new TI4 map, and returns a json object representing the tiles on the map.
        :return: a json list of the tiles of the map
        """
        # Get form data
        try:
            player_count = int(request.form.get('player-count', 6))
        except ValueError:
            player_count = 6

        try:
            pick_style = str(request.form.get('pick-style', 'random'))
        except ValueError:
            pick_style = 'random'

        try:
            board_style = str(request.form.get('board-style', 'normal'))
        except ValueError:
            board_style = 'normal'

        try:
            seed = int(request.form.get('seed', random.randint(0, 9999)))
        except ValueError:
            seed = random.randint(0, 9999)

        try:
            shuffle_boards = bool(request.form.get('shuffle-boards') == 'on')
        except ValueError:
            shuffle_boards = True

        # Create the model of the board
        new_ti_board = TI4Board(player_count)
        new_ti_board.set_pick_style(pick_style)
        new_ti_board.set_board_style(board_style)
        new_ti_board.set_shuffle_boards_before_placement(shuffle_boards)
        new_ti_board.set_seed(seed)

        # Use form data to create a new TI4 board with options
        tiles = new_ti_board.generate_new_board()

        # Return tile string as json to caller
        return jsonify(tiles)

    return app, log


if __name__ == "__main__":
    # Get the flask application and its logger
    application, logger = create_application()
    environment = os.getenv('ENVIRONMENT', 'production')

    # Configure host and port
    host = os.getenv('HOST', config[environment]['host'])
    port = os.getenv('PORT', config[environment]['port'])

    # Depending on the environment, run as a waitress server or a flask server
    if environment == 'production':
        from waitress import serve
        serve(application, host=host, port=port)
        logger.debug('Application is running at http://%s:%d', host, port)
    else:
        application.run(host, port)
