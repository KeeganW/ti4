#!/usr/bin/env python3
"""
The main starting file for this flask project, which is in charge of creating the application and
starting it based off of configuration and environment variables.
"""
import os

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

        tiles: str = request.args.get('tiles', '[]')

        ti_board = TI4Board(6)
        form_info = {
            'player_count': [6, 5, 4, 3, 2],
            'pick_style': ti_board.get_pick_styles(),
            'board_style': ti_board.get_board_styles(),
            'seed': '',
            'shuffle_boards': False
        }

        all_board_styles = ti_board.get_all_board_styles()

        return render_template('index.html',
                               tiles=tiles,
                               form_info=form_info,
                               all_board_styles=all_board_styles,
                               races=[
                                   "Sardakk N'orr", "The Arborec", "The Barony of Letnev",
                                   "The Clan of Saar", "The Embers of Muaat",
                                   "The Emirates of Hacan", "The Federation of Sol",
                                   "The Ghosts of Creuss", "The Lizix Mindnet",
                                   "The Mentak Coalition", "The Naalu Collective",
                                   "The Nekro Virus", "The Universities of Jol-Nar", "The Winnu",
                                   "The Xxcha Kingdom", "The Yin Brotherhood", "The Yssaril Tribes"
                               ])

    @app.route("/generate/", methods=['POST'])
    def generate() -> json:
        """
        Generates a new TI4 map, and returns a json object representing the tiles on the map.
        :return: a json list of the tiles of the map
        """
        # Create the model of the board
        new_ti_board = TI4Board(form_data=request.form)

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
