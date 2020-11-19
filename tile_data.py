"""
Data format:
'tile number': {
    'type': 'safe',  # Can be safe, hazard, home
    'planets': [  # Can be 0 to 3 planets on a tile
        {
            'name': 'name',
            'resources': 0,
            'influence': 0,
            'specialty': None  # Can be red, yellow, green, or blue
        }
    ]
}

Tile information:
1-17 are home worlds
18 is Mecatol Rex
19-38 are safe
39-50 are anomaly
51 is Cruess wormhole home world
"""
tiles = {
    1: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Jord',
                'resources': 4,
                'influence': 2,
                'trait': None,
                'specialty': None
            }
        ]
    },
    2: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Moll Primus',
                'resources': 4,
                'influence': 1,
                'trait': None,
                'specialty': None
            }
        ]
    },
    3: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Darien',
                'resources': 4,
                'influence': 4,
                'trait': None,
                'specialty': None
            }
        ]
    },
    4: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Muaat',
                'resources': 4,
                'influence': 1,
                'trait': None,
                'specialty': None
            }
        ]
    },
    5: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Nestphar',
                'resources': 3,
                'influence': 2,
                'trait': None,
                'specialty': None
            }
        ]
    },
    6: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': '[0.0.0]',
                'resources': 5,
                'influence': 0,
                'trait': None,
                'specialty': None
            }
        ]
    },
    7: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Winnu',
                'resources': 3,
                'influence': 4,
                'trait': None,
                'specialty': None
            }
        ]
    },
    8: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Mordai II',
                'resources': 4,
                'influence': 0,
                'trait': None,
                'specialty': None
            }
        ]
    },
    9: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Maaluuk',
                'resources': 2,
                'influence': 0,
                'trait': None,
                'specialty': None
            },
            {
                'name': 'Druaa',
                'resources': 3,
                'influence': 1,
                'trait': None,
                'specialty': None
            }
        ]
    },
    10: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Arc Prime',
                'resources': 4,
                'influence': 0,
                'trait': None,
                'specialty': None
            },
            {
                'name': 'Wren Terra',
                'resources': 2,
                'influence': 1,
                'trait': None,
                'specialty': None
            }
        ]
    },
    11: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Lisis II',
                'resources': 1,
                'influence': 0,
                'trait': None,
                'specialty': None
            },
            {
                'name': 'Ragh',
                'resources': 2,
                'influence': 1,
                'trait': None,
                'specialty': None
            }
        ]
    },
    12: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Nar',
                'resources': 2,
                'influence': 3,
                'trait': None,
                'specialty': None
            },
            {
                'name': 'Jol',
                'resources': 1,
                'influence': 2,
                'trait': None,
                'specialty': None
            }
        ]
    },
    13: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Tren\'lak',
                'resources': 1,
                'influence': 0,
                'trait': None,
                'specialty': None
            },
            {
                'name': 'Quinarra',
                'resources': 3,
                'influence': 1,
                'trait': None,
                'specialty': None
            }
        ]
    },
    14: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Archon Ren',
                'resources': 2,
                'influence': 3,
                'trait': None,
                'specialty': None
            },
            {
                'name': 'Archon Tau',
                'resources': 1,
                'influence': 1,
                'trait': None,
                'specialty': None
            }
        ]
    },
    15: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Retillion',
                'resources': 2,
                'influence': 3,
                'trait': None,
                'specialty': None
            },
            {
                'name': 'Shalloq',
                'resources': 1,
                'influence': 2,
                'trait': None,
                'specialty': None
            }
        ]
    },
    16: {
        'type': 'home',
        'wormhole': None,
        'planets': [
            {
                'name': 'Arretze',
                'resources': 2,
                'influence': 0,
                'trait': None,
                'specialty': None
            },
            {
                'name': 'Hercant',
                'resources': 1,
                'influence': 1,
                'trait': None,
                'specialty': None
            },
            {
                'name': 'Kamdorn',
                'resources': 0,
                'influence': 1,
                'trait': None,
                'specialty': None
            },
        ]
    },
    17: {
        'type': 'home',
        'wormhole': 'delta',
        'planets': [
        ]
    },
    18: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Mecatol Rex',
                'resources': 1,
                'influence': 6,
                'trait': None,
                'specialty': None
            }
        ]
    },
    19: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Wellon',
                'resources': 1,
                'influence': 2,
                'trait': 'industrial',
                'specialty': None
            }
        ]
    },
    20: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Vefut II',
                'resources': 2,
                'influence': 2,
                'trait': 'hazardous',
                'specialty': None
            }
        ]
    },
    21: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Thibah',
                'resources': 1,
                'influence': 1,
                'trait': 'industrial',
                'specialty': 'blue'
            }
        ]
    },
    22: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Tar\'mann',
                'resources': 1,
                'influence': 1,
                'trait': 'industrial',
                'specialty': 'green'
            }
        ]
    },
    23: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Saudor',
                'resources': 2,
                'influence': 2,
                'trait': 'industrial',
                'specialty': None
            }
        ]
    },
    24: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Mehar Xull',
                'resources': 1,
                'influence': 3,
                'trait': 'hazardous',
                'specialty': 'red'
            }
        ]
    },
    25: {
        'type': 'safe',
        'wormhole': 'beta',
        'planets': [
            {
                'name': 'Quann',
                'resources': 2,
                'influence': 1,
                'trait': 'cultural',
                'specialty': None
            }
        ]
    },
    26: {
        'type': 'safe',
        'wormhole': 'alpha',
        'planets': [
            {
                'name': 'Lodor',
                'resources': 3,
                'influence': 1,
                'trait': 'cultural',
                'specialty': None
            }
        ]
    },
    27: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'New Albion',
                'resources': 1,
                'influence': 1,
                'trait': 'industrial',
                'specialty': 'green'
            },
            {
                'name': 'Starpoint',
                'resources': 3,
                'influence': 1,
                'trait': 'hazardous',
                'specialty': None
            }
        ]
    },
    28: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Tequ\'ran',
                'resources': 2,
                'influence': 0,
                'trait': 'hazardous',
                'specialty': None
            },
            {
                'name': 'Torkan',
                'resources': 0,
                'influence': 3,
                'trait': 'cultural',
                'specialty': None
            }
        ]
    },
    29: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Qucen\'n',
                'resources': 1,
                'influence': 2,
                'trait': 'industrial',
                'specialty': None
            },
            {
                'name': 'Rarron',
                'resources': 0,
                'influence': 3,
                'trait': 'cultural',
                'specialty': None
            }
        ]
    },
    30: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Mellon',
                'resources': 0,
                'influence': 2,
                'trait': 'cultural',
                'specialty': None
            },
            {
                'name': 'Zohbat',
                'resources': 3,
                'influence': 1,
                'trait': 'hazardous',
                'specialty': None
            }
        ]
    },
    31: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Lazar',
                'resources': 1,
                'influence': 0,
                'trait': 'industrial',
                'specialty': 'yellow'
            },
            {
                'name': 'Sakulag',
                'resources': 2,
                'influence': 1,
                'trait': 'hazardous',
                'specialty': None
            }
        ]
    },
    32: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Dal Bootha',
                'resources': 0,
                'influence': 2,
                'trait': 'cultural',
                'specialty': None
            },
            {
                'name': 'Xxehan',
                'resources': 1,
                'influence': 1,
                'trait': 'cultural',
                'specialty': None
            }
        ]
    },
    33: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Corneeq',
                'resources': 1,
                'influence': 2,
                'trait': 'cultural',
                'specialty': None
            },
            {
                'name': 'Resulon',
                'resources': 2,
                'influence': 0,
                'trait': 'cultural',
                'specialty': None
            }
        ]
    },
    34: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Centauri',
                'resources': 1,
                'influence': 3,
                'trait': 'cultural',
                'specialty': None
            },
            {
                'name': 'Gral',
                'resources': 1,
                'influence': 1,
                'trait': 'industrial',
                'specialty': 'blue'
            }
        ]
    },
    35: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Bereg',
                'resources': 3,
                'influence': 1,
                'trait': 'hazardous',
                'specialty': None
            },
            {
                'name': 'Lirta IV',
                'resources': 2,
                'influence': 3,
                'trait': 'hazardous',
                'specialty': None
            }
        ]
    },
    36: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Arnor',
                'resources': 2,
                'influence': 1,
                'trait': 'industrial',
                'specialty': None
            },
            {
                'name': 'Lor',
                'resources': 1,
                'influence': 2,
                'trait': 'industrial',
                'specialty': None
            }
        ]
    },
    37: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Arinam',
                'resources': 1,
                'influence': 2,
                'trait': 'industrial',
                'specialty': None
            },
            {
                'name': 'Meer',
                'resources': 0,
                'influence': 4,
                'trait': 'hazardous',
                'specialty': 'red'
            }
        ]
    },
    38: {
        'type': 'safe',
        'wormhole': None,
        'planets': [
            {
                'name': 'Abyz',
                'resources': 3,
                'influence': 0,
                'trait': 'hazardous',
                'specialty': None
            },
            {
                'name': 'Fria',
                'resources': 2,
                'influence': 0,
                'trait': 'hazardous',
                'specialty': None
            }
        ]
    },
    39: {
        'type': 'anomaly',
        'wormhole': 'alpha',
        'anomaly': None,
        'planets': [
        ]
    },
    40: {
        'type': 'anomaly',
        'wormhole': 'beta',
        'anomaly': None,
        'planets': [
        ]
    },
    41: {
        'type': 'anomaly',
        'wormhole': None,
        'anomaly': 'gravity-rift',
        'planets': [
        ]
    },
    42: {
        'type': 'anomaly',
        'wormhole': None,
        'anomaly': 'nebula',
        'planets': [
        ]
    },
    43: {
        'type': 'anomaly',
        'wormhole': None,
        'anomaly': 'supernova',
        'planets': [
        ]
    },
    44: {
        'type': 'anomaly',
        'wormhole': None,
        'anomaly': 'asteroid-field',
        'planets': [
        ]
    },
    45: {
        'type': 'anomaly',
        'wormhole': None,
        'anomaly': 'asteroid-field',
        'planets': [
        ]
    },
    46: {
        'type': 'anomaly',
        'wormhole': None,
        'anomaly': None,
        'planets': [
        ]
    },
    47: {
        'type': 'anomaly',
        'wormhole': None,
        'anomaly': None,
        'planets': [
        ]
    },
    48: {
        'type': 'anomaly',
        'wormhole': None,
        'anomaly': None,
        'planets': [
        ]
    },
    49: {
        'type': 'anomaly',
        'wormhole': None,
        'anomaly': None,
        'planets': [
        ]
    },
    50: {
        'type': 'anomaly',
        'wormhole': None,
        'anomaly': None,
        'planets': [
        ]
    },
    51: {
        'type': 'home',
        'wormhole': 'delta',
        'planets': [
            {
                'name': 'Creuss',
                'resources': 4,
                'influence': 2,
                'specialty': None
            }
        ]
    },
}
