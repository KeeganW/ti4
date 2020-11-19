#!/usr/bin/env python3
"""
The main starting file for this flask project, which is in charge of creating the application and
starting it based off of configuration and environment variables.
"""
import os

from logging.config import dictConfig
from flask import Flask, render_template
from flask.logging import create_logger
from config import config


def create_application():
    """
    Initialize our flask application
    :return: The new flask application
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
    def index():
        log.debug('Running the main page. Application is running as a {} server.'.format(env))
        return render_template('index.html')

    return app, log


if __name__ == "__main__":
    # Get and start the flask application
    application, logger = create_application()
    environment = os.getenv('ENVIRONMENT', 'production')

    # Configure host and port
    host = os.getenv('HOST', config[environment]['host'])
    port = os.getenv('PORT', config[environment]['port'])

    # Depending on the environment, run as a waitress server or a flask server
    if environment == 'production':
        from waitress import serve
        serve(application, host=host, port=port)
        logger.debug('Application is running at http://{}:{}'.format(host, port))
    else:
        application.run(host, port)
