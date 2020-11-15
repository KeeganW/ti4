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
1-17 are home systems
Mecatol Rex is tile 18
19-38 are safe
39-50 are hazards
"""
tile_data = {
    '1': {
        'type': 'home',
        'planets': [
            {
                'name': 'Jord',
                'resources': 4,
                'influence': 2,
                'specialty': None
            }
        ]
    },
    '2': {
        'type': 'home',
        'planets': [
            {
                'name': 'Moll Primus',
                'resources': 4,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '3': {
        'type': 'home',
        'planets': [
            {
                'name': 'Darien',
                'resources': 4,
                'influence': 4,
                'specialty': None
            }
        ]
    },
    '4': {
        'type': 'home',
        'planets': [
            {
                'name': 'Muaat',
                'resources': 4,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '5': {
        'type': 'home',
        'planets': [
            {
                'name': 'Nestphar',
                'resources': 3,
                'influence': 2,
                'specialty': None
            }
        ]
    },
    '6': {
        'type': 'home',
        'planets': [
            {
                'name': '[0.0.0]',
                'resources': 5,
                'influence': 0,
                'specialty': None
            }
        ]
    },
    '7': {
        'type': 'home',
        'planets': [
            {
                'name': 'Winnu',
                'resources': 3,
                'influence': 4,
                'specialty': None
            }
        ]
    },
    '8': {
        'type': 'home',
        'planets': [
            {
                'name': 'Mordai II',
                'resources': 4,
                'influence': 0,
                'specialty': None
            }
        ]
    },
    '9': {
        'type': 'home',
        'planets': [
            {
                'name': 'Maaluuk',
                'resources': 2,
                'influence': 0,
                'specialty': None
            },
            {
                'name': 'Druaa',
                'resources': 3,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '10': {
        'type': 'home',
        'planets': [
            {
                'name': 'Arc Prime',
                'resources': 4,
                'influence': 0,
                'specialty': None
            },
            {
                'name': 'Wren Terra',
                'resources': 2,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '11': {
        'type': 'home',
        'planets': [
            {
                'name': 'Lisis II',
                'resources': 1,
                'influence': 0,
                'specialty': None
            },
            {
                'name': 'Ragh',
                'resources': 2,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '12': {
        'type': 'home',
        'planets': [
            {
                'name': 'Nar',
                'resources': 2,
                'influence': 3,
                'specialty': None
            },
            {
                'name': 'Jol',
                'resources': 1,
                'influence': 2,
                'specialty': None
            }
        ]
    },
    '13': {
        'type': 'home',
        'planets': [
            {
                'name': 'Tren\'lak',
                'resources': 1,
                'influence': 0,
                'specialty': None
            },
            {
                'name': 'Quinarra',
                'resources': 3,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '14': {
        'type': 'home',
        'planets': [
            {
                'name': 'Archon Ren',
                'resources': 2,
                'influence': 3,
                'specialty': None
            },
            {
                'name': 'Archon Tau',
                'resources': 1,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '15': {
        'type': 'home',
        'planets': [
            {
                'name': 'Retillion',
                'resources': 2,
                'influence': 3,
                'specialty': None
            },
            {
                'name': 'Shalloq',
                'resources': 1,
                'influence': 2,
                'specialty': None
            }
        ]
    },
    '16': {
        'type': 'home',
        'planets': [
            {
                'name': 'Arretze',
                'resources': 2,
                'influence': 0,
                'specialty': None
            },
            {
                'name': 'Hercant',
                'resources': 1,
                'influence': 1,
                'specialty': None
            },
            {
                'name': 'Kamdorn',
                'resources': 0,
                'influence': 1,
                'specialty': None
            },
        ]
    },
    '17': {
        'type': 'home',
        'planets': [
            {
                'name': 'Creuss',
                'resources': 4,
                'influence': 2,
                'specialty': None
            },
        ]
    },
    '18': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Mecatol Rex',
                'resources': 1,
                'influence': 6,
                'specialty': None
            }
        ]
    },
    '19': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Wellon',
                'resources': 1,
                'influence': 2,
                'specialty': None
            }
        ]
    },
    '20': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Vefut II',
                'resources': 2,
                'influence': 2,
                'specialty': None
            }
        ]
    },
    '21': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Thibah',
                'resources': 1,
                'influence': 1,
                'specialty': 'blue'
            }
        ]
    },
    '22': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Tar\'mann',
                'resources': 1,
                'influence': 1,
                'specialty': 'green'
            }
        ]
    },
    '23': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Saudor',
                'resources': 2,
                'influence': 2,
                'specialty': None
            }
        ]
    },
    '24': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Mehar Xull',
                'resources': 1,
                'influence': 3,
                'specialty': 'red'
            }
        ]
    },
    '25': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Quann',
                'resources': 2,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '26': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Lodor',
                'resources': 3,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '27': {
        'type': 'safe',
        'planets': [
            {
                'name': 'New Albion',
                'resources': 1,
                'influence': 1,
                'specialty': 'green'
            },
            {
                'name': 'Starpoint',
                'resources': 3,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '28': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Tequ\'ran',
                'resources': 2,
                'influence': 0,
                'specialty': None
            },
            {
                'name': 'Torkan',
                'resources': 0,
                'influence': 3,
                'specialty': None
            }
        ]
    },
    '29': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Qucen\'n',
                'resources': 1,
                'influence': 2,
                'specialty': None
            },
            {
                'name': 'Rarron',
                'resources': 0,
                'influence': 3,
                'specialty': None
            }
        ]
    },
    '30': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Mellon',
                'resources': 0,
                'influence': 2,
                'specialty': None
            },
            {
                'name': 'Zohbat',
                'resources': 3,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '31': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Lazar',
                'resources': 1,
                'influence': 0,
                'specialty': 'yellow'
            },
            {
                'name': 'Sakulag',
                'resources': 2,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '32': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Dal Bootha',
                'resources': 0,
                'influence': 2,
                'specialty': None
            },
            {
                'name': 'Xxehan',
                'resources': 1,
                'influence': 1,
                'specialty': None
            }
        ]
    },
    '33': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Corneeq',
                'resources': 1,
                'influence': 2,
                'specialty': None
            },
            {
                'name': 'Resulon',
                'resources': 2,
                'influence': 0,
                'specialty': None
            }
        ]
    },
    '34': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Centauri',
                'resources': 1,
                'influence': 3,
                'specialty': None
            },
            {
                'name': 'Gral',
                'resources': 1,
                'influence': 1,
                'specialty': 'blue'
            }
        ]
    },
    '35': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Bereg',
                'resources': 3,
                'influence': 1,
                'specialty': None
            },
            {
                'name': 'Lirta IV',
                'resources': 2,
                'influence': 3,
                'specialty': None
            }
        ]
    },
    '36': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Arnor',
                'resources': 2,
                'influence': 1,
                'specialty': None
            },
            {
                'name': 'Lor',
                'resources': 1,
                'influence': 2,
                'specialty': None
            }
        ]
    },
    '37': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Arinam',
                'resources': 1,
                'influence': 2,
                'specialty': None
            },
            {
                'name': 'Meer',
                'resources': 0,
                'influence': 4,
                'specialty': 'red'
            }
        ]
    },
    '38': {
        'type': 'safe',
        'planets': [
            {
                'name': 'Abyz',
                'resources': 3,
                'influence': 0,
                'specialty': None
            },
            {
                'name': 'Fria',
                'resources': 2,
                'influence': 0,
                'specialty': None
            }
        ]
    },
    '39': {
        'type': 'hazard',
        'planets': [
        ]
    },
    '40': {
        'type': 'hazard',
        'planets': [
        ]
    },
    '41': {
        'type': 'hazard',
        'planets': [
        ]
    },
    '42': {
        'type': 'hazard',
        'planets': [
        ]
    },
    '43': {
        'type': 'hazard',
        'planets': [
        ]
    },
    '44': {
        'type': 'hazard',
        'planets': [
        ]
    },
    '45': {
        'type': 'hazard',
        'planets': [
        ]
    },
    '46': {
        'type': 'hazard',
        'planets': [
        ]
    },
    '47': {
        'type': 'hazard',
        'planets': [
        ]
    },
    '48': {
        'type': 'hazard',
        'planets': [
        ]
    },
    '49': {
        'type': 'hazard',
        'planets': [
        ]
    },
    '50': {
        'type': 'hazard',
        'planets': [
        ]
    },
}
