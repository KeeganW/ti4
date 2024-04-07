export const PLANET_TRAITS = {
    "HAZARDOUS": "hazardous",
    "INDUSTRIAL": "industrial",
    "CULTURAL": "cultural",
    "NONE": null
};

export const TECH_SPECIALTIES = {
    "BIOTIC": "biotic",
    "WARFARE": "warfare",
    "PROPULSION": "propulsion",
    "CYBERNETIC": "cybernetic",
    "NONE": null
};

export const ANOMALIES = {
    "NEBULA": "nebula",
    "GRAVITY_RIFT": "gravity-rift",
    "ASTEROID_FIELD": "asteroid-field",
    "SUPERNOVA": "supernova",
};

export const WORMHOLES = {
    "ALPHA": "alpha",
    "BETA": "beta",
    "GAMMA": "gamma",
    "DELTA": "delta",
    "EPSILON": "epsilon",
    "ZETA": "zeta",
    "ETA": "eta",
    "THETA": "theta",
    "IOTA": "iota",
    "KAPPA": "kappa",
};

const tileData = {
    
    "base": [
        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
       11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
       22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
       33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
       44, 45, 46, 47, 48, 49, 50, 51
     ],
    "pok": [
       51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
       61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 
       71, 72, 73, 74, 75, 76, 77, 78, 79, 80
     ],
    "uncharted": [
        4253, 4254, 4255, 4256, 4257, 4258, 4259, 4260,
        4261, 4262, 4263, 4264, 4265, 4266, 4267, 4268, 4269, 4270, 
        4271, 4272, 4273, 4274, 4275, 4276
     ],
    
    "green": [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
        11, 12, 13, 14, 15, 16, 
        51, 52, 53, 54, 55, 56, 57, 58
    ],
    "blue": [
        19, 20, 
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
        31, 32, 33, 34, 35, 36, 37, 38, 59, 60, 61, 62, 63, 64, 65, 66, 69, 70, 71, 72, 73, 74, 75, 76,
        4253, 4254, 4255, 4256, 4257, 4258, 4259, 4260,
        4261, 4262, 4263, 4264, 4265, 4266, 4267, 4268
    ],
    "red": [
        39, 40, 
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
        67, 68, 77, 78, 79, 80,
        4269, 4270, 
        4271, 4272, 4273, 4274, 4275, 4276
    ],
    "anomaly": [
        41, 42, 43, 44, 45, 
        67, 68, 
        79, 80,
        4269, 4272, 4273, 4274, 4275, 4276
    ],
    "blankRed": [39, 40, 
        46, 47, 48, 49, 
        50, 
        77, 78,
        4270, 4271
    ],
    "alphaWormholes": [26, 39, 79, 4276],
    "betaWormholes": [25, 40, 64, 4272],
    "asteroidFields": [44, 45, 79, 4273, 4274],
    "gravityRifts": [41, 67, 4274],
    "nebulae": [42, 68, 4269, 4273],
    "supernovas": [43, 80, 4276],
    "hyperlanes": ["83A", "83B", "84A", "84B", "85A", "85B", "86A", "86B", "87A", "87B", "88A", "88B", "89A", "89B", "90A", "90B", "91A", "91B"],
    "all": {
        "1": {
            "type": "green",
            "race": "The Federation of Sol",
            "wormhole": [],
            "planets": [
                {
                    "name": "Jord",
                    "resources": 4,
                    "influence": 2,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "2": {
            "type": "green",
            "race": "The Mentak Coalition",
            "wormhole": [],
            "planets": [
                {
                    "name": "Moll Primus",
                    "resources": 4,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "3": {
            "type": "green",
            "race": "The Yin Brotherhood",
            "wormhole": [],
            "planets": [
                {
                    "name": "Darien",
                    "resources": 4,
                    "influence": 4,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "4": {
            "type": "green",
            "race": "The Embers of Muaat",
            "wormhole": [],
            "planets": [
                {
                    "name": "Muaat",
                    "resources": 4,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "5": {
            "type": "green",
            "race": "The Arborec",
            "wormhole": [],
            "planets": [
                {
                    "name": "Nestphar",
                    "resources": 3,
                    "influence": 2,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "6": {
            "type": "green",
            "race": "The Lizix Mindnet",
            "wormhole": [],
            "planets": [
                {
                    "name": "[0.0.0]",
                    "resources": 5,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "7": {
            "type": "green",
            "race": "The Winnu",
            "wormhole": [],
            "planets": [
                {
                    "name": "Winnu",
                    "resources": 3,
                    "influence": 4,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "8": {
            "type": "green",
            "race": "The Nekro Virus",
            "wormhole": [],
            "planets": [
                {
                    "name": "Mordai II",
                    "resources": 4,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "9": {
            "type": "green",
            "race": "The Naalu Collective",
            "wormhole": [],
            "planets": [
                {
                    "name": "Maaluuk",
                    "resources": 2,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Druaa",
                    "resources": 3,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "10": {
            "type": "green",
            "race": "The Barony of Letnev",
            "wormhole": [],
            "planets": [
                {
                    "name": "Arc Prime",
                    "resources": 4,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Wren Terra",
                    "resources": 2,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "11": {
            "type": "green",
            "race": "The Clan of Saar",
            "wormhole": [],
            "planets": [
                {
                    "name": "Lisis II",
                    "resources": 1,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Ragh",
                    "resources": 2,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "12": {
            "type": "green",
            "race": "The Universities of Jol-Nar",
            "wormhole": [],
            "planets": [
                {
                    "name": "Nar",
                    "resources": 2,
                    "influence": 3,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Jol",
                    "resources": 1,
                    "influence": 2,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "13": {
            "type": "green",
            "race": "Sardakk N'orr",
            "wormhole": [],
            "planets": [
                {
                    "name": "Tren'lak",
                    "resources": 1,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Quinarra",
                    "resources": 3,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "14": {
            "type": "green",
            "race": "The Xxcha Kingdom",
            "wormhole": [],
            "planets": [
                {
                    "name": "Archon Ren",
                    "resources": 2,
                    "influence": 3,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Archon Tau",
                    "resources": 1,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "15": {
            "type": "green",
            "race": "The Yssaril Tribes",
            "wormhole": [],
            "planets": [
                {
                    "name": "Retillion",
                    "resources": 2,
                    "influence": 3,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Shalloq",
                    "resources": 1,
                    "influence": 2,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "16": {
            "type": "green",
            "race": "The Emirates of Hacan",
            "wormhole": [],
            "planets": [
                {
                    "name": "Arretze",
                    "resources": 2,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Hercant",
                    "resources": 1,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Kamdorn",
                    "resources": 0,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "17": {
            "type": "green",
            "race": "The Ghosts of Creuss",
            "wormhole": "delta",
            "planets": [
            ]
        },
        "18": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Mecatol Rex",
                    "resources": 1,
                    "influence": 6,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "19": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Wellon",
                    "resources": 1,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": "cybernetic",
                    "legendary": false
                }
            ]
        },
        "20": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Vefut II",
                    "resources": 2,
                    "influence": 2,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "21": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Thibah",
                    "resources": 1,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": "propulsion",
                    "legendary": false
                }
            ]
        },
        "22": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Tar'mann",
                    "resources": 1,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": "biotic",
                    "legendary": false
                }
            ]
        },
        "23": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Saudor",
                    "resources": 2,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "24": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Mehar Xull",
                    "resources": 1,
                    "influence": 3,
                    "trait": "hazardous",
                    "specialty": "warfare",
                    "legendary": false
                }
            ]
        },
        "25": {
            "type": "blue",
            "wormhole": ["beta"],
            "planets": [
                {
                    "name": "Quann",
                    "resources": 2,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "26": {
            "type": "blue",
            "wormhole": ["alpha"],
            "planets": [
                {
                    "name": "Lodor",
                    "resources": 3,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "27": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "New Albion",
                    "resources": 1,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": "biotic",
                    "legendary": false
                },
                {
                    "name": "Starpoint",
                    "resources": 3,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "28": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Tequ'ran",
                    "resources": 2,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Torkan",
                    "resources": 0,
                    "influence": 3,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "29": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Qucen'n",
                    "resources": 1,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Rarron",
                    "resources": 0,
                    "influence": 3,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "30": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Mellon",
                    "resources": 0,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Zohbat",
                    "resources": 3,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "31": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Lazar",
                    "resources": 1,
                    "influence": 0,
                    "trait": "industrial",
                    "specialty": "cybernetic",
                    "legendary": false
                },
                {
                    "name": "Sakulag",
                    "resources": 2,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "32": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Dal Bootha",
                    "resources": 0,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Xxehan",
                    "resources": 1,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "33": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Corneeq",
                    "resources": 1,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Resulon",
                    "resources": 2,
                    "influence": 0,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "34": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Centauri",
                    "resources": 1,
                    "influence": 3,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Gral",
                    "resources": 1,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": "propulsion",
                    "legendary": false
                }
            ]
        },
        "35": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Bereg",
                    "resources": 3,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Lirta IV",
                    "resources": 2,
                    "influence": 3,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "36": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Arnor",
                    "resources": 2,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Lor",
                    "resources": 1,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "37": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Arinam",
                    "resources": 1,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Meer",
                    "resources": 0,
                    "influence": 4,
                    "trait": "hazardous",
                    "specialty": "warfare",
                    "legendary": false
                }
            ]
        },
        "38": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Abyz",
                    "resources": 3,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Fria",
                    "resources": 2,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "39": {
            "type": "red",
            "wormhole": ["alpha"],
            "anomaly": [],
            "planets": [
            ]
        },
        "40": {
            "type": "red",
            "wormhole": ["beta"],
            "anomaly": [],
            "planets": [
            ]
        },
        "41": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["gravity-rift"],
            "planets": [
            ]
        },
        "42": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["nebula"],
            "planets": [
            ]
        },
        "43": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["supernova"],
            "planets": [
            ]
        },
        "44": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["asteroid-field"],
            "planets": [
            ]
        },
        "45": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["asteroid-field"],
            "planets": [
            ]
        },
        "46": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "47": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "48": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "49": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "50": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "51": {
            "type": "green",
            "wormhole": "delta",
            "planets": [
                {
                    "name": "Creuss",
                    "resources": 4,
                    "influence": 2,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "52": {
            "type": "green",
            "race": "The Mahact Gene-sorcerers",
            "wormhole": [],
            "planets": [
                {
                    "name": "Ixth",
                    "resources": 3,
                    "influence": 5,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "53": {
            "type": "green",
            "race": "The Nomad",
            "wormhole": [],
            "planets": [
                {
                    "name": "Arcturus",
                    "resources": 4,
                    "influence": 4,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "54": {
            "type": "green",
            "race": "The Vuil'raith Cabal",
            "wormhole": [],
            "planets": [
                {
                    "name": "Acheron",
                    "resources": 4,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "55": {
            "type": "green",
            "race": "The Titans of Ul",
            "wormhole": [],
            "planets": [
                {
                    "name": "Elysium",
                    "resources": 4,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "56": {
            "type": "green",
            "race": "The Empyrean",
            "wormhole": [],
            "planets": [
                {
                    "name": "The Dark",
                    "resources": 3,
                    "influence": 4,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "57": {
            "type": "green",
            "race": "The Naaz-Rokha Alliance",
            "wormhole": [],
            "planets": [
                {
                    "name": "Naazir",
                    "resources": 2,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Rokha",
                    "resources": 1,
                    "influence": 2,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "58": {
            "type": "green",
            "race": "The Argent Flight",
            "wormhole": [],
            "planets": [
                {
                    "name": "Valk",
                    "resources": 2,
                    "influence": 0,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Avar",
                    "resources": 1,
                    "influence": 1,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Ylir",
                    "resources": 0,
                    "influence": 2,
                    "trait": null,
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "59": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Archon Vail",
                    "resources": 1,
                    "influence": 3,
                    "trait": "hazardous",
                    "specialty": "propulsion",
                    "legendary": false
                }
            ]
        },
        "60": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Perimeter",
                    "resources": 2,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "61": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Ang",
                    "resources": 2,
                    "influence": 0,
                    "trait": "industrial",
                    "specialty": "warfare",
                    "legendary": false
                }
            ]
        },
        "62": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Sem-Lore",
                    "resources": 3,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": "cybernetic",
                    "legendary": false
                }
            ]
        },
        "63": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Vorhal",
                    "resources": 0,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": "biotic",
                    "legendary": false
                }
            ]
        },
        "64": {
            "type": "blue",
            "wormhole": ["beta"],
            "planets": [
                {
                    "name": "Atlas",
                    "resources": 3,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "65": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Primor",
                    "resources": 2,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": true
                }
            ]
        },
        "66": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Hope's End",
                    "resources": 3,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": true
                }
            ]
        },
        "67": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["gravity-rift"],
            "planets": [
                {
                    "name": "Cormund",
                    "resources": 2,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "68": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["nebula"],
            "planets": [
                {
                    "name": "Everra",
                    "resources": 3,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "69": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Accoen",
                    "resources": 2,
                    "influence": 3,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Jeol Ir",
                    "resources": 2,
                    "influence": 3,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "70": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Kraag",
                    "resources": 2,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Siig",
                    "resources": 0,
                    "influence": 2,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "71": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Ba'Kal",
                    "resources": 3,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Alio Prima",
                    "resources": 1,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "72": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Lisis",
                    "resources": 2,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Velnor",
                    "resources": 2,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": "warfare",
                    "legendary": false
                }
            ]
        },
        "73": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Lisis",
                    "resources": 0,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": "cybernetic",
                    "legendary": false
                },
                {
                    "name": "Xanhact",
                    "resources": 0,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "74": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Vega Major",
                    "resources": 2,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Vega Minor",
                    "resources": 1,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": "propulsion",
                    "legendary": false
                }
            ]
        },
        "75": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Loki",
                    "resources": 1,
                    "influence": 2,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Abaddon",
                    "resources": 1,
                    "influence": 0,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Ashtroth",
                    "resources": 2,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                }
            ]
        },
        "76": {
            "type": "blue",
            "wormhole": [],
            "planets": [
                {
                    "name": "Rigel I",
                    "resources": 0,
                    "influence": 1,
                    "trait": "hazardous",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Rigel II",
                    "resources": 1,
                    "influence": 2,
                    "trait": "industrial",
                    "specialty": null,
                    "legendary": false
                },
                {
                    "name": "Rigel III",
                    "resources": 1,
                    "influence": 1,
                    "trait": "industrial",
                    "specialty": "biotic",
                    "legendary": false
                }
            ]
        },
        "77": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "78": {
            "type": "red",
            "wormhole": [],
            "anomaly": [],
            "planets": [
            ]
        },
        "79": {
            "type": "red",
            "wormhole": ["alpha"],
            "anomaly": ["asteroid-field"],
            "planets": [
            ]
        },
        "80": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["supernova"],
            "planets": [
            ]
        },
        "81": {
            "type": "red",
            "wormhole": [],
            "anomaly": ["muaat-supernova"],
            "planets": [
            ]
        },
        "82": {
            "type": "blue",
            "wormhole": [WORMHOLES.ALPHA, WORMHOLES.BETA, WORMHOLES.GAMMA],
            "planets": [
                {
                    "name": "Mallice",
                    "resources": 0,
                    "influence": 3,
                    "trait": "cultural",
                    "specialty": null,
                    "legendary": true
                }
            ]
        },
        "83A": {
            "type": "hyperlane",
            "hyperlanes": [
                [1, 4]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "83B": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 3],
                [0, 2],
                [3, 5]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "84A": {
            "type": "hyperlane",
            "hyperlanes": [
                [2, 5]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "84B": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 3],
                [0, 4],
                [1, 3]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "85A": {
            "type": "hyperlane",
            "hyperlanes": [
                [1, 5]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "85B": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 3],
                [0, 2],
                [3, 5]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "86A": {
            "type": "hyperlane",
            "hyperlanes": [
                [1, 5]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "86B": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 3],
                [0, 4],
                [1, 3]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "87A": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 2],
                [2, 4],
                [2, 5]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "87B": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 2],
                [0, 3]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "88A": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 4],
                [1, 4],
                [2, 4]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "88B": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 3],
                [0, 2],
                [3, 5]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "89A": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 2],
                [0, 4],
                [2, 4]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "89B": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 3],
                [0, 4]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "90A": {
            "type": "hyperlane",
            "hyperlanes": [
                [1, 5],
                [2, 4]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "90B": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 3],
                [0, 4]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "91A": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 3],
                [0, 4],
                [1, 3]
            ],
            "wormhole": [],
            "planets": [
            ]
        },
        "91B": {
            "type": "hyperlane",
            "hyperlanes": [
                [0, 2],
                [0, 3]
            ],
            "wormhole": [],
            "planets": [
            ]
        },

        "4253": {
            "type": "blue",
            "planets": [
                {
                    "name": "Silence",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": true,
                    "ability": "Imperial Salvage Yard - You may exhaust this card at the end of your turn to place 1 cruiser from your reinforcements in any system that contains 1 or more of your ships.",
                    "resources": 2,
                    "influence": 2,
                }
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4254": {
            "type": "blue",
            "planets": [
                {
                    "name": "Echo",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": true,
                    "ability": "Bi-Phasic Generators - You may exhaust this card at the end of your turn to place 1 frontier token in a system that does not contain a planet.",
                    "resources": 1,
                    "influence": 2,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4255": {
            "type": "blue",
            "planets": [
                {
                    "name": "Tarock",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": true,
                    "ability": "Council Black Site - You may exhaust this card when an agenda is revealed to predict aloud an outcome of that agenda. If your prediction is correct, draw 1 secret objective.",
                    "resources": 3,
                    "influence": 0,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4256": {
            "type": "blue",
            "planets": [
                {
                    "name": "Prism",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": true,
                    "ability": "Mystic Library - ACTION: Exhaust this card to replace 1 of your non-faction non-unit upgrade technologies with another technology from your technology deck with the same number of prerequisites.",
                    "resources": 0,
                    "influence": 3,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4257": {
            "type": "blue",
            "planets": [
                {
                    "name": "Troac",
                    "trait": PLANET_TRAITS.CULTURAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 0,
                    "influence": 4,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4258": {
            "type": "blue",
            "planets": [
                {
                    "name": "Etir V",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 4,
                    "influence": 0,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4259": {
            "type": "blue",
            "planets": [
                {
                    "name": "Vioss",
                    "trait": PLANET_TRAITS.CULTURAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 3,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4260": {
            "type": "blue",
            "planets": [
                {
                    "name": "Fakrenn",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 2,
                },
            ],
            "anomaly": [],
            "wormhole": [WORMHOLES.ALPHA]
        },
        "4261": {
            "type": "blue",
            "planets": [
                {
                    "name": "San-Vit",
                    "trait": PLANET_TRAITS.CULTURAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 1,
                }, 
                {
                    "name": "Lodran",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "tech_specialty": TECH_SPECIALTIES.CYBERNETIC,
                    "legendary": false,
                    "resources": 0,
                    "influence": 2,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4262": {
            "type": "blue",
            "planets": [
                {
                    "name": "Dorvok",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "tech_specialty": TECH_SPECIALTIES.WARFARE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                }, 
                {
                    "name": "Derbrae",
                    "trait": PLANET_TRAITS.CULTURAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 3,
                }
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4263": {
            "type": "blue",
            "planets": [
                {
                    "name": "Moln",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "tech_specialty": TECH_SPECIALTIES.PROPULSION,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                }, 
                {
                    "name": "Rysaa",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "tech_specialty": TECH_SPECIALTIES.BIOTIC,
                    "legendary": false,
                    "resources": 2,
                    "influence": 0,
                }
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4264": {
            "type": "blue",
            "planets": [
                {
                    "name": "Salin",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                },
                {
                    "name": "Gwiyun",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 2,
                }
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4265": {
            "type": "blue",
            "planets": [
                {
                    "name": "Inan",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                },
                {
                    "name": "Swog",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 0,
                }
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4266": {
            "type": "blue",
            "planets": [
                {
                    "name": "Detic",
                    "trait": PLANET_TRAITS.CULTURAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 2,
                }, 
                {
                    "name": "Lliot",
                    "trait": PLANET_TRAITS.CULTURAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 0,
                    "influence": 1,
                }
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4267": {
            "type": "blue",
            "planets": [
                {
                    "name": "Qaak",
                    "trait": PLANET_TRAITS.CULTURAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 1,
                }, 
                {
                    "name": "Larred",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 1,
                }, 
                {
                    "name": "Nairb",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 1,
                }
            ],
            "anomaly": [],
            "wormhole": []
        },
        "4268": {
            "type": "blue",
            "planets": [
                {
                    "name": "Sierpen",
                    "trait": PLANET_TRAITS.CULTURAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 0,
                }, 
                {
                    "name": "Mandle",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 1,
                }, 
                {
                    "name": "Regnem",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 0,
                    "influence": 2,
                }],
            "anomaly": [],
            "wormhole": []
        },
        "4269": {
            "type": "red",
            "planets": [
                {
                    "name": "Domna",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "tech_specialty": TECH_SPECIALTIES.NONE,
                    "legendary": true,
                    "ability": "Fractal Gate - You may exhaust this card at the end of your turn to remove 1 of your ships from the game board and place that unit in an adjacent system that does not contain another player’s ships.",
                    "resources": 2,
                    "influence": 1,
                }
            ],
            "anomaly": [ANOMALIES.NEBULA],
            "wormhole": []
        },
        "4270": {
            "type": "red",
            "planets": [],
            "anomaly": [],
            "wormhole": []
        },
        "4271": {
            "type": "red",
            "planets": [],
            "anomaly": [],
            "wormhole": []
        },
        "4272": {
            "type": "red",
            "planets": [],
            "anomaly": [ANOMALIES.NEBULA],
            "wormhole": [WORMHOLES.BETA]
        },
        "4273": {
            "type": "red",
            "planets": [],
            "anomaly": [ANOMALIES.ASTEROID_FIELD, ANOMALIES.NEBULA],
            "wormhole": []
        },
        "4274": {
            "type": "red",
            "planets": [],
            "anomaly": [ANOMALIES.GRAVITY_RIFT, ANOMALIES.ASTEROID_FIELD],
            "wormhole": []
        },
        "4275": {
            "type": "red",
            "planets": [],
            "anomaly": [ANOMALIES.GRAVITY_RIFT],
            "wormhole": [WORMHOLES.GAMMA]
        },
        "4276": {
            "type": "red",
            "planets": [],
            "anomaly": [ANOMALIES.SUPERNOVA],
            "wormhole": [WORMHOLES.ALPHA, WORMHOLES.BETA]
        }
    }
}
export default tileData