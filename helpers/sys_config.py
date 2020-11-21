"""
General static configurations, for when you know what the environment is going to be between
your deployments. These are defaults, and can be overridden by environment variables.
"""
config = {
    'production': {
        'host': '0.0.0.0',
        'port': 80,
        'debug': False,
    },
    'development': {
        'host': 'localhost',
        'port': 8080,
        'debug': True,
    },
}
