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

export const EXPANSIONS = {
    "POK": "Prophecy of Kings",
    "DS": "Discordant Stars",
    "UnS": "Uncharted Space",
    "AS": "Ascendant Sun",
    "Async": "Async Hyperlanes"
}

export const WORMHOLE_SYMBOLS = Object.fromEntries([
    [WORMHOLES.ALPHA, "α"],
    [WORMHOLES.BETA, "β"],
    [WORMHOLES.GAMMA, "γ"],
    [WORMHOLES.DELTA, "δ"],
    [WORMHOLES.EPSILON, "ε"],
    [WORMHOLES.ZETA, "ζ"],
    [WORMHOLES.ETA, "η"],
    [WORMHOLES.THETA, "θ"],
    [WORMHOLES.IOTA, "ι"],
    [WORMHOLES.KAPPA, "κ"],
])

const tileData = {
    "hyperlanes": ["83A", "83B", "84A", "84B", "85A", "85B", "86A", "86B", "87A", "87B", "88A", "88B", "89A", "89B", "90A", "90B", "91A", "91B",
        
    'hypspaghet',
    'hyp4squeeze',
    'hypbball',
    'hypcrossed',
    'hypflair',
    'hypfrost',
    'hypfrostcross',
    'hyphorizon',
    'hypmergeleft',
    'hypmergeright',
    'hypno',
    'hypoops',
    'hypriftabout1',
    'hypriftabout2',
    'hypriftabout3',
    'hypriftabout6',
    'hyproundabout1',
    'hyproundabout2',
    'hyproundabout3',
    'hyproundabout6'
    ],
    "all": {
        "1": {
            "type": "green",
            "race": "The Federation of Sol",
            "wormhole": [],
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "wormhole": ["delta"],
            "anomaly": [],
            "planets": []
        },
        "18": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "special": true,
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [ANOMALIES.NEBULA],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
            "planets": [
                {
                    "name": "Primor",
                    "resources": 2,
                    "influence": 1,
                    "trait": "cultural",
                    "specialty": null,
                    "ability": "The Atrament - You may exhaust this card at the end of your turn to place up to 2 infantry from your reinforcements on any planet you control.",
                    "legendary": true
                }
            ]
        },
        "66": {
            "type": "blue",
            "wormhole": [],
            "anomaly": [],
            "planets": [
                {
                    "name": "Hope's End",
                    "resources": 3,
                    "influence": 0,
                    "trait": "hazardous",
                    "specialty": null,
                    "ability": "Imperial Arms Vault - You may exhaust this card at the end of your turn to place 1 mech from your reinforcements on any planet you control, or draw 1 action card.",
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "special": true,
            "wormhole": [],
            "anomaly": ["muaat-supernova"],
            "planets": [
            ]
        },
        "82": {
            "type": "blue",
            "special": true,
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
            "anomaly": [],
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
            "anomaly": [],
            "planets": [
            ]
        },
        "84A": {
            "type": "hyperlane",
            "hyperlanes": [
                [2, 5]
            ],
            "wormhole": [],
            "anomaly": [],
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
            "anomaly": [],
            "planets": [
            ]
        },
        "85A": {
            "type": "hyperlane",
            "hyperlanes": [
                [1, 5]
            ],
            "wormhole": [],
            "anomaly": [],
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
            "anomaly": [],
            "planets": [
            ]
        },
        "86A": {
            "type": "hyperlane",
            "hyperlanes": [
                [1, 5]
            ],
            "wormhole": [],
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
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
            "anomaly": [],
            "planets": [
            ]
        },

        "3201": {
            "type": "green",
            "planets": [
                {
                    "name": "Rhune",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 4,
                }
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3202": {
            "type": "green",
            "planets": [
                {
                    "name": "Idyn",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 0,
                },
                {
                    "name": "Kroll",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 1,
                },
                {
                    "name": "Cyrra",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 0,
                    "influence": 1,
                }
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3203": {
            "type": "green",
            "planets": [
                {
                    "name": "Kyr",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 0,
                },
                {
                    "name": "Pax",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                },
                {
                    "name": "Vess",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 0,
                    "influence": 1,
                }
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3204": {
            "type": "green",
            "planets": [
                {
                    "name": "Ogdun",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 0,
                },
                {
                    "name": "Brthkul",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 3,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3205": {
            "type": "green",
            "planets": [
                {
                    "name": "Drah",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                },
                {
                    "name": "Trykk",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 1,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3206": {
            "type": "green",
            "planets": [
                {
                    "name": "Vadarian",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 0,
                },
                {
                    "name": "Norvus",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3207": {
            "type": "green",
            "planets": [
                {
                    "name": "Biaheo",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 0,
                },
                {
                    "name": "Empero",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 0,
                    "influence": 3,
                },
            ],
            "anomaly": [ANOMALIES.NEBULA],
            "wormhole": []
        },
        "3208": {
            "type": "green",
            "planets": [
                {
                    "name": "Demis",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 2,
                },
                {
                    "name": "Chrion",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 3,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3209": {
            "type": "green",
            "planets": [
                {
                    "name": "Axis",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 5,
                    "influence": 0,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3210": {
            "type": "green",
            "planets": [
                {
                    "name": "Sanctuary",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 4,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3211": {
            "type": "green",
            "planets": [
                {
                    "name": "Shi-Halaum",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 4,
                    "influence": 0,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3212": {
            "type": "green",
            "planets": [
                {
                    "name": "Discordia",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 4,
                    "influence": 1,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3213": {
            "type": "green",
            "planets": [
                {
                    "name": "Cymiae",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 1,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3214": {
            "type": "green",
            "planets": [
                {
                    "name": "Prind",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 3,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3215": {
            "type": "green",
            "planets": [
                {
                    "name": "Gen",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 0,
                },
                {
                    "name": "Zelian",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 3,
                },
            ],
            "anomaly": [ANOMALIES.ASTEROID_FIELD],
            "wormhole": []
        },
        "3216": {
            "type": "green",
            "planets": [
                {
                    "name": "Vaylar",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 2,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3217": {
            "type": "green",
            "planets": [
                {
                    "name": "Delmor",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 1,
                },
                {
                    "name": "Kyd",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3218": {
            "type": "green",
            "planets": [
                {
                    "name": "Abyssus",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 4,
                    "influence": 2,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3219": {
            "type": "green",
            "planets": [
                {
                    "name": "Louk",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 1,
                },
                {
                    "name": "Auldane",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 3,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3220": {
            "type": "green",
            "planets": [
                {
                    "name": "Ellas",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 3,
                },
            ],
            "anomaly": [ANOMALIES.GRAVITY_RIFT],
            "wormhole": []
        },
        "3221": {
            "type": "green",
            "planets": [
                {
                    "name": "Aldra",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 3,
                },
                {
                    "name": "Beata",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 1,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3222": {
            "type": "green",
            "planets": [
                {
                    "name": "Bohl-Dhur",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 4,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3223": {
            "type": "green",
            "planets": [
                {
                    "name": "Susuros",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 4,
                    "influence": 4,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3224": {
            "type": "green",
            "planets": [
                {
                    "name": "Poh",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 0,
                },
                {
                    "name": "Orad",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 1,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3226": {
            "type": "green",
            "planets": [
                {
                    "name": "Kjalengard",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 2,
                },
                {
                    "name": "Hulgade",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 0,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3227": {
            "type": "green",
            "planets": [
                {
                    "name": "Benc",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 0,
                },
                {
                    "name": "Hau",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3228": {
            "type": "green",
            "planets": [
                {
                    "name": "Zarr",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 1,
                },
                {
                    "name": "Nokk",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 1,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3229": {
            "type": "green",
            "planets": [
                {
                    "name": "Last Stop",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 0,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3230": {
            "type": "green",
            "planets": [
                {
                    "name": "Aysis' Rest",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 4,
                    "influence": 3,
                },
                {
                    "name": "Solitude",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 0,
                    "influence": 1,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3231": {
            "type": "green",
            "planets": [
                {
                    "name": "Avicenna",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 4,
                    "influence": 0,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3232": {
            "type": "green",
            "planets": [
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3233": {
            "type": "green",
            "planets": [
                {
                    "name": "Alesna",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 0,
                },
                {
                    "name": "Azle",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 0,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3234": {
            "type": "green",
            "planets": [
                {
                    "name": "Arche",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 2,
                },
                {
                    "name": "Gghurn Theta",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 1,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },
        "3235": {
            "type": "green",
            "planets": [
                {
                    "name": "Edyn",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 3,
                },
                {
                    "name": "Ekko",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 0,
                    "influence": 1,
                },
                {
                    "name": "Okke",
                    "trait": PLANET_TRAITS.NONE,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 0,
                    "influence": 1,
                },
            ],
            "anomaly": [],
            "wormhole": []
        },

        "4253": {
            "type": "blue",
            "planets": [
                {
                    "name": "Silence",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 1,
                },
                {
                    "name": "Lodran",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "specialty": TECH_SPECIALTIES.CYBERNETIC,
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
                    "specialty": TECH_SPECIALTIES.WARFARE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                },
                {
                    "name": "Derbrae",
                    "trait": PLANET_TRAITS.CULTURAL,
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.PROPULSION,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                },
                {
                    "name": "Rysaa",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "specialty": TECH_SPECIALTIES.BIOTIC,
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
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                },
                {
                    "name": "Gwiyun",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                },
                {
                    "name": "Swog",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 3,
                    "influence": 2,
                },
                {
                    "name": "Lliot",
                    "trait": PLANET_TRAITS.CULTURAL,
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 1,
                },
                {
                    "name": "Larred",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 1,
                },
                {
                    "name": "Nairb",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 0,
                },
                {
                    "name": "Mandle",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 1,
                },
                {
                    "name": "Regnem",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "specialty": TECH_SPECIALTIES.NONE,
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
                    "specialty": TECH_SPECIALTIES.NONE,
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
        },

        // Eronous Tiles
        "er01": {
            type: 'blue',
            planets: [
                {
                    name: 'Rial Archon',
                    trait: 'hazardous',
                    specialty: 'propulsion',
                    legendary: false,
                    resources: 1,
                    influence: 1
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er02": {
            type: 'blue',
            planets: [
                {
                    name: 'Eshonia',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 1
                }
            ],
            anomaly: ['nebula'],
            wormhole: []
        },
        "er03": {
            type: 'red',
            planets: [
                {
                    name: "Hell's Maw",
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 3,
                    influence: 0
                },
                {
                    name: "Death's Gate",
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 1
                }
            ],
            anomaly: ['gravity-rift'],
            wormhole: ['epsilon']
        },
        "er04": {
            type: 'blue',
            planets: [
                {
                    name: "Su'Prima",
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er05": { 
            type: 'blue', 
            planets: [
                {
                    "name": "Kkita Ul'in",
                    "trait": PLANET_TRAITS.CULTURAL,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 0,
                    "influence": 2,
                }
            ], 
            anomaly: [], 
            wormhole: [] 
        },
        "er06": {
            type: 'blue',
            planets: [
                {
                    name: 'Solin Tu',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 1
                },
                {
                    name: 'Solin Uo',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er07": {
            type: 'blue',
            planets: [
                {
                    name: 'Khjan',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 1
                },
                {
                    name: 'Shul',
                    trait: 'cultural',
                    specialty: 'propulsion',
                    legendary: false,
                    resources: 1,
                    influence: 1
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er08": {
            type: 'blue',
            planets: [
                {
                    name: 'Rayon V',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: ['epsilon']
        },
        "er09": {
            type: 'red',
            planets: [
                {
                    name: 'Ulon Gamma',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 1
                },
                {
                    name: 'Ulon Rho',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 1
                }
            ],
            anomaly: ['asteroid-field'],
            wormhole: []
        },
        "er10": {
            type: 'red',
            planets: [
                {
                    name: 'Elok Phi',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 1
                },
                {
                    name: 'Elok Nu',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 1
                }
            ],
            anomaly: ['nebula'],
            wormhole: []
        },
        "er11": {
            type: 'red',
            planets: [],
            anomaly: ['asteroid-field'],
            wormhole: ['beta']
        },
        "er12": {
            type: 'red',
            planets: [],
            anomaly: ['asteroid-field'],
            wormhole: ['iota']
        },
        "er13": { type: 'red', planets: [], anomaly: [], wormhole: ['iota'] },
        "er14": {
            type: 'red',
            planets: [],
            anomaly: ['gravity-rift'],
            wormhole: ['iota']
        },
        "er15": {
            type: 'red',
            planets: [],
            anomaly: ['nebula'],
            wormhole: ['iota']
        },
        "er16": { type: 'red', planets: [], anomaly: ['supernova'], wormhole: [] },
        "er17": {
            type: 'red',
            planets: [],
            anomaly: ['gravity-rift', 'asteroid-field'],
            wormhole: []
        },
        "er18": {
            type: 'red',
            planets: [],
            anomaly: ['nebula', 'asteroid-field'],
            wormhole: []
        },
        "er19": {
            type: 'red',
            planets: [],
            anomaly: ['gravity-rift'],
            wormhole: ['alpha', 'beta']
        },
        "er20": {
            type: 'blue',
            planets: [
                {
                    name: 'Erodius',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 1
                }
            ],
            anomaly: [],
            wormhole: ['epsilon']
        },
        "er21": {
            type: 'red',
            planets: [],
            anomaly: ['asteroid-field', 'nebula', 'supernova', 'gravity-rift'],
            wormhole: []
        },
        "er22": {
            type: 'blue',
            planets: [
                {
                    name: 'Il Voshu',
                    trait: 'cultural',
                    specialty: 'biotic',
                    legendary: false,
                    resources: 2,
                    influence: 1
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er23": {
            type: 'red',
            planets: [
                {
                    name: 'Xyon',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 1
                }
            ],
            anomaly: [ANOMALIES.GRAVITY_RIFT],
            wormhole: []
        },
        "er24": {
            type: 'red',
            planets: [
                {
                    name: 'Ynnis',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 3
                }
            ],
            anomaly: [ANOMALIES.GRAVITY_RIFT],
            wormhole: []
        },
        "er25": { type: 'red', planets: [], anomaly: [], wormhole: ['epsilon'] },
        "er26": {
            type: 'red',
            planets: [],
            anomaly: ['gravity-rift'],
            wormhole: ['epsilon']
        },
        "er27": {
            type: 'red',
            planets: [],
            anomaly: ['nebula'],
            wormhole: ['epsilon']
        },
        "er28": {
            type: 'red',
            planets: [],
            anomaly: ['asteroid-field'],
            wormhole: ['epsilon']
        },
        "er29": { type: 'red', planets: [], anomaly: [], wormhole: ['zeta'] },
        "er30": {
            type: 'red',
            planets: [],
            anomaly: ['gravity-rift'],
            wormhole: ['zeta']
        },
        "er31": {
            type: 'red',
            planets: [],
            anomaly: ['nebula'],
            wormhole: ['zeta']
        },
        "er32": {
            type: 'red',
            planets: [],
            anomaly: ['asteroid-field'],
            wormhole: ['zeta']
        },
        "er33": {
            type: 'red',
            planets: [],
            anomaly: [],
            wormhole: ['epsilon', 'zeta']
        },
        "er34": { type: 'red', planets: [], anomaly: [], wormhole: ['eta'] },
        "er35": {
            type: 'red',
            planets: [],
            anomaly: ['gravity-rift'],
            wormhole: ['eta']
        },
        "er36": {
            type: 'red',
            planets: [],
            anomaly: ['nebula'],
            wormhole: ['eta']
        },
        "er37": {
            type: 'red',
            planets: [],
            anomaly: ['asteroid-field'],
            wormhole: ['eta']
        },
        "er38": { type: 'red', planets: [], anomaly: [], wormhole: ['theta'] },
        "er39": {
            type: 'red',
            planets: [],
            anomaly: ['gravity-rift'],
            wormhole: ['theta']
        },
        "er40": {
            type: 'red',
            planets: [],
            anomaly: ['nebula'],
            wormhole: ['theta']
        },
        "er41": {
            type: 'red',
            planets: [],
            anomaly: ['asteroid-field'],
            wormhole: ['theta']
        },
        "er42": {
            type: 'red',
            planets: [],
            anomaly: [],
            wormhole: ['eta', 'theta']
        },
        "er43": { type: 'red', planets: [], anomaly: [], wormhole: ['kappa'] },
        "er44": {
            type: 'red',
            planets: [],
            anomaly: ['gravity-rift'],
            wormhole: ['kappa']
        },
        "er45": {
            type: 'red',
            planets: [],
            anomaly: ['nebula'],
            wormhole: ['kappa']
        },
        "er46": {
            type: 'red',
            planets: [],
            anomaly: ['asteroid-field'],
            wormhole: ['kappa']
        },
        "er47": {
            type: 'red',
            planets: [],
            anomaly: [],
            wormhole: ['iota', 'kappa']
        },
        "er48": {
            type: 'blue',
            planets: [
                {
                    name: 'Zhgen',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 2
                },
                {
                    name: 'Sehnn',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er49": {
            type: 'blue',
            planets: [
                {
                    name: 'Myrwater',
                    trait: 'hazardous',
                    specialty: 'biotic',
                    legendary: false,
                    resources: 1,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er50": {
            type: 'blue',
            planets: [
                {
                    name: 'Adrian',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 0
                },
                {
                    name: 'Telahas',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 0
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er51": {
            type: 'blue',
            planets: [
                {
                    name: 'Grywon',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: ['theta']
        },
        "er52": {
            type: 'blue',
            planets: [
                {
                    name: 'Ikrus III',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 2
                },
                {
                    name: 'Tir',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 2
                },
            ],
            anomaly: [],
            wormhole: []
        },
        "er53": {
            type: 'blue',
            planets: [
                {
                    name: 'Meko II',
                    trait: 'cultural',
                    specialty: 'propulsion',
                    legendary: false,
                    resources: 0,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er54": {
            type: 'blue',
            planets: [
                {
                    name: "Tethn'Sekus",
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 1
                },
                {
                    "name": "Tethn'Tirs",
                    "trait": PLANET_TRAITS.HAZARDOUS,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 2,
                    "influence": 2,
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er55": { 
            type: 'blue', 
            planets: [
                {
                    "name": "Dwuuit",
                    "trait": PLANET_TRAITS.CULTURAL,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 1,
                },
                {
                    "name": "Uhott",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 0,
                    "influence": 3,
                }
            ],
            anomaly: [], 
            wormhole: [] 
        },
        "er56": {
            type: 'blue',
            planets: [
                {
                    name: 'Breakpoint',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 3,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: ['theta']
        },
        "er57": {
            type: 'blue',
            planets: [
                {
                    name: 'Akhassi',
                    trait: 'hazardous',
                    specialty: 'warfare',
                    legendary: false,
                    resources: 0,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er58": {
            type: 'blue',
            planets: [
                {
                    name: 'Rhyah',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 0
                },
                {
                    name: "Taal'Dorn",
                    trait: 'industrial',
                    specialty: 'cybernetic',
                    legendary: false,
                    resources: 1,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er59": {
            type: 'blue',
            planets: [
                {
                    name: 'Volra',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 3,
                    influence: 1
                },
                {
                    "name": "Venhalo",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 1,
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er60": {
            type: 'blue',
            planets: [
                {
                    name: 'Orchard',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er61": {
            type: 'blue',
            planets: [
                {
                    name: 'Erissiha',
                    trait: undefined,
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 1
                },
                {
                    name: 'Renhult',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er62": {
            type: 'blue',
            planets: [
                {
                    name: 'Heska',
                    trait: 'industrial',
                    specialty: 'cybernetic',
                    legendary: false,
                    resources: 2,
                    influence: 0
                }
            ],
            anomaly: [],
            wormhole: ['iota']
        },
        "er63": {
            type: 'blue',
            planets: [
                {
                    name: 'Mayris',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 1
                },
                {
                    name: 'Quwon',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er64": {
            type: 'blue',
            planets: [
                {
                    name: 'Grywon',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: ['eta']
        },
        "er65": {
            type: 'blue',
            planets: [
                {
                    name: 'Kris',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 1
                },
                {
                    name: 'Shigonas',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er66": {
            type: 'red',
            planets: [],
            anomaly: ['gravity-rift'],
            wormhole: []
        },
        "er67": { type: 'red', planets: [], anomaly: ['nebula'], wormhole: [] },
        "er68": { type: 'red', planets: [], anomaly: ['supernova'], wormhole: [] },
        "er69": {
            type: 'red',
            planets: [],
            anomaly: ['gravity-rift'],
            wormhole: []
        },
        "er70": { type: 'red', planets: [], anomaly: ['nebula'], wormhole: [] },
        "er71": {
            type: 'red',
            planets: [],
            anomaly: ['asteroid-field'],
            wormhole: []
        },
        "er72": {
            type: 'red',
            planets: [],
            anomaly: ['asteroid-field'],
            wormhole: []
        },
        "er75": { type: 'red', planets: [], anomaly: [], wormhole: [] },
        "er76": { type: 'red', planets: [], anomaly: [], wormhole: [] },
        "er77": { type: 'red', planets: [], anomaly: [], wormhole: [] },
        "er78": { type: 'red', planets: [], anomaly: [], wormhole: [] },
        "er79": { type: 'red', planets: [], anomaly: [], wormhole: [] },
        "er80": { type: 'red', planets: [], anomaly: [], wormhole: [] },
        "er81": { type: 'red', planets: [], anomaly: [], wormhole: [] },
        "er82": {
            type: 'red',
            planets: [
                {
                    name: 'Ako.4.0.m',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: true,
                    ability: "Gravitational Gambit - At the end of your turn, you may exhaust this card to roll a die. On a result of 1-3 purge each attachment to this planet, and remove all units on this planet from the game board. Otherwise, attach an Improvement card to this planet. (Improvement - ATTACH: This planet's resource and influence values are each increased by 1.)",
                    resources: 1,
                    influence: 1
                }
            ],
            anomaly: ['gravity-rift'],
            wormhole: []
        },
        "er83": {
            type: 'blue',
            planets: [
                {
                    name: 'Kelgate',
                    trait: 'industrial',
                    specialty: null,
                    legendary: true,
                    ability: 'Experimental Gate - At the start of your turn, you may exhaust this card to treat this system as if it had an alpha and beta wormhole until the end of this tactical action.',
                    resources: 1,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er84": {
            type: 'blue',
            planets: [
                {
                    name: 'Casibann',
                    trait: 'cultural',
                    specialty: null,
                    legendary: true,
                    ability: 'Sacrifice - When you exhaust Casibann to spend its resources or influence, you may exhaust this card to remove any number of infantry on that planet to spend them as resources or influence as well.',
                    resources: 0,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er85": {
            type: 'blue',
            planets: [
                {
                    name: 'Station 309',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 3,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er86": {
            type: 'blue',
            planets: [
                {
                    name: 'Meranna',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 1
                },
                {
                    name: 'Hurigati',
                    trait: 'hazardous',
                    specialty: 'cybernetic',
                    legendary: false,
                    resources: 0,
                    influence: 1
                },
                {
                    name: 'Ferrust',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 0
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er87": {
            type: 'blue',
            planets: [
                {
                    name: 'Argenum',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 3,
                    influence: 3
                },
                {
                    name: 'Vernium',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 0
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er88": {
            "type": 'blue',
            "planets": [
                {
                    name: "Elan's Rest",
                    "trait": 'industrial',
                    specialty: null,
                    legendary: false,
                    "resources": 1,
                    "influence": 2
                },
                {
                    name: 'Verdis',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 3,
                    influence: 1
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er89": {
            type: 'blue',
            planets: [
                {
                    name: 'Brilenci',
                    trait: 'cultural',
                    specialty: 'cybernetic',
                    legendary: false,
                    resources: 1,
                    influence: 1
                }
            ],
            anomaly: [],
            wormhole: ['epsilon']
        },
        "er90": {
            type: 'red',
            planets: [
                {
                    name: 'Char',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 0
                }
            ],
            anomaly: [ANOMALIES.SUPERNOVA],
            wormhole: []
        },
        "er91": {
            type: 'red',
            planets: [
                {
                    name: 'Dognui',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 0
                }
            ],
            anomaly: [ANOMALIES.GRAVITY_RIFT],
            wormhole: []
        },
        "er92": {
            type: 'blue',
            planets: [
                {
                    name: 'Fyrain',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 3,
                    influence: 0
                },
                {
                    name: 'Leonelli',
                    trait: 'hazardous',
                    specialty: 'cybernetic',
                    legendary: false,
                    resources: 2,
                    influence: 1
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er93": {
            type: 'blue',
            planets: [
                {
                    name: 'Sigilus',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 4
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er94": {
            type: 'blue',
            planets: [
                {
                    name: 'Iynntani',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: ['beta']
        },
        "er95": {
            type: 'blue',
            planets: [
                {
                    name: 'Kytos',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 1
                },
                {
                    "name": "Prymis",
                    "trait": PLANET_TRAITS.INDUSTRIAL,
                    "specialty": TECH_SPECIALTIES.NONE,
                    "legendary": false,
                    "resources": 1,
                    "influence": 2,
                },
            ],
            anomaly: [],
            wormhole: ['alpha', 'beta']
        },
        "er96": {
            type: 'red',
            planets: [
                {
                    name: 'Mecantor',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 1
                }
            ],
            anomaly: ['gravity-rift'],
            wormhole: []
        },
        "er97": {
            type: 'blue',
            planets: [
                {
                    name: 'Merjae',
                    trait: 'industrial',
                    specialty: 'propulsion',
                    legendary: false,
                    resources: 2,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er98": {
            type: 'blue',
            planets: [
                {
                    name: 'Mor Rock',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 1
                },
                {
                    name: 'Migyro',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er99": {
            type: 'red',
            planets: [
                {
                    name: 'Mornn',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 3
                }
            ],
            anomaly: ['nebula'],
            wormhole: ['epsilon']
        },
        "er100": {
            type: 'blue',
            planets: [
                {
                    name: 'Nix',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 1
                },
                {
                    name: 'Nokturn',
                    trait: 'hazardous',
                    specialty: 'warfare',
                    legendary: false,
                    resources: 0,
                    influence: 2
                },
                {
                    name: 'Viliguard',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 0
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er101": {
            type: 'blue',
            planets: [
                {
                    name: 'Ryl Fang',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 0
                },
                {
                    name: 'Syvian',
                    trait: 'cultural',
                    specialty: 'biotic',
                    legendary: false,
                    resources: 0,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er102": {
            type: 'blue',
            planets: [
                {
                    name: 'Norrk',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er103": {
            type: 'red',
            planets: [
                {
                    name: 'Perpetual',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 2
                }
            ],
            anomaly: [ANOMALIES.SUPERNOVA, ANOMALIES.NEBULA],
            wormhole: []
        },
        "er104": {
            type: 'blue',
            planets: [
                {
                    name: 'Thenphase',
                    trait: 'hazardous',
                    specialty: 'biotic',
                    legendary: false,
                    resources: 2,
                    influence: 1
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er105": {
            type: 'blue',
            planets: [
                {
                    name: 'Vent',
                    trait: 'industrial',
                    specialty: undefined,
                    legendary: false,
                    resources: 2,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er106": {
            type: 'blue',
            planets: [
                {
                    name: 'Vygar II',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 0
                },
                {
                    name: 'Yncranti',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er107": {
            type: 'blue',
            planets: [
                {
                    name: 'Limbo',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: true,
                    ability: 'Equilibrium - When a player would win a combat, you may exhaust this card to treat that combat as a draw instead',
                    resources: 0,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er108": {
            type: 'blue',
            planets: [
                {
                    name: 'Lust',
                    trait: 'cultural',
                    specialty: null,
                    legendary: true,
                    ability: 'Vigorous Winds - After you activate a system, you may exhaust this card to apply +1 to the movement value of up to 2 of your ships during this tactical action.',
                    resources: 1,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er109": {
            type: 'blue',
            planets: [
                {
                    name: 'Cerberus',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: true,
                    ability: 'Desperation - At the start of a ground combat on a planet you control, you may exhaust this card to choose 1 ground force in the active system; that ground force rolls 1 additional die during each round of that ground combat.',
                    resources: 3,
                    influence: 1
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er110": {
            type: 'blue',
            planets: [
                {
                    name: 'Plutus',
                    trait: 'industrial',
                    specialty: null,
                    legendary: true,
                    ability: 'Curse of Wealth - At the start of the Strategy phase, you may exhaust this card and any number of planets you control to place a number of trade goods on this card equal to either the combined resource or influence value of those planets. When you ready this card, gain all trade goods on this card.',
                    resources: 1,
                    influence: 0
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er111": {
            type: 'blue',
            planets: [
                {
                    name: 'Stygain',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: true,
                    ability: 'Undying Legions - After 1 of your infantry units is destroyed during combat, you may place that unit on this card. When you pass, you may exhaust this card to place each unit on this card on Stygain.',
                    resources: 3,
                    influence: 0
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er112": {
            type: 'blue',
            planets: [
                {
                    name: 'Hersey',
                    trait: 'cultural',
                    specialty: null,
                    legendary: true,
                    ability: "Betrayers' Dagger - Before a player casts votes, you may exhaust this card to choose a player; that player must give you 1 promissory note from their hand, or cast at least 1 vote for the outcome of your choice on that agenda.",
                    resources: 0,
                    influence: 5
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er113": {
            type: 'blue',
            planets: [
                {
                    name: 'Violence',
                    trait: 'industrial',
                    specialty: null,
                    legendary: true,
                    ability: 'Violent Demise - At the end of a ground combat on a planet you control, you may exhaust this card to roll 3 dice. For each result of 6 or greater, destroy 1 ground force on that planet.',
                    resources: 3,
                    influence: 1
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er114": {
            type: 'blue',
            planets: [
                {
                    name: 'Malbolge',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: true,
                    ability: 'Hand of Force - At the start of your turn, you may exhaust this card to choose 1 of your neighbors; that player must give you 1 promissory note or 1 action card from their hand, if able.',
                    resources: 1,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er115": {
            type: 'blue',
            planets: [
                {
                    name: 'Cantris',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: true,
                    ability: 'Starlight Throne - When you gain this card, gain 1 victory point; when you lose this card, lose 1 victory point. You score last during the status phase.',
                    resources: 4,
                    influence: 4
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er116": {
            type: 'blue',
            planets: [
                {
                    name: 'Phylo',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: ['iota']
        },
        "er117": {
            type: 'blue',
            planets: [
                {
                    name: 'Cahgaris',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: [WORMHOLES.KAPPA]
        },
        "er118": {
            type: 'blue',
            planets: [
                {
                    name: 'Ultimur',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 3,
                    influence: 0
                }
            ],
            anomaly: [],
            wormhole: [WORMHOLES.KAPPA]
        },
        "er119": {
            type: 'red',
            planets: [],
            anomaly: ['nebula'],
            wormhole: ['alpha', 'beta']
        },
        "er120": {
            type: 'blue',
            planets: [
                {
                    name: 'Sentuim',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 1
                },
                {
                    name: 'Volgan',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 3,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er121": {
            type: 'blue',
            planets: [
                {
                    name: 'Aranndan',
                    trait: 'hazardous',
                    specialty: null,
                    legendary: false,
                    resources: 3,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: ['zeta']
        },
        "er122": {
            type: 'blue',
            planets: [
                {
                    name: "Hr'an Cus",
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 1
                },
                {
                    name: "Kan'His",
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 0,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er123": {
            type: 'blue',
            planets: [
                {
                    name: 'Vylanua',
                    trait: 'hazardous',
                    specialty: 'warfare',
                    legendary: false,
                    resources: 0,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er124": {
            type: 'blue',
            planets: [
                {
                    name: 'Ghanis',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 0
                },
                {
                    name: 'Behjan',
                    trait: 'cultural',
                    specialty: 'cybernetic',
                    legendary: false,
                    resources: 1,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er125": {
            type: 'blue',
            planets: [
                {
                    name: 'Veyhrune',
                    trait: 'industrial',
                    specialty: 'propulsion',
                    legendary: false,
                    resources: 2,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er126": {
            type: 'blue',
            planets: [
                {
                    name: 'Sokaris',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 3
                },
                {
                    name: 'Lunerus',
                    trait: 'hazardous',
                    specialty: 'cybernetic',
                    legendary: false,
                    resources: 2,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "er127": {
            type: 'blue',
            planets: [
                {
                    name: 'Maon-Lor',
                    trait: 'industrial',
                    specialty: 'biotic',
                    legendary: false,
                    resources: 3,
                    influence: 2
                }
            ],
            anomaly: [],
            wormhole: ['zeta']
        },
        "er128": {
            type: 'blue',
            planets: [
                {
                    name: 'Adoriah',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 1,
                    influence: 1
                }
            ],
            anomaly: [],
            wormhole: ['eta']
        },
        "er129": {
            type: 'blue',
            planets: [
                {
                    name: 'Grishinu',
                    trait: 'cultural',
                    specialty: null,
                    legendary: false,
                    resources: 3,
                    influence: 2
                },
                {
                    name: 'Gryenorn',
                    trait: 'industrial',
                    specialty: null,
                    legendary: false,
                    resources: 2,
                    influence: 3
                }
            ],
            anomaly: [],
            wormhole: []
        },
        "hypspaghet": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 1],
                [0, 2],
                [0, 3],
                [0, 4],
                [0, 5],
                [1, 2],
                [1, 3],
                [1, 4],
                [1, 5],
                [2, 3],
                [2, 4],
                [2, 5],
                [3, 4],
                [3, 5],
                [4, 5]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hyp4squeeze": {
			"type": "hyperlane",
			"hyperlanes": [
                [1, 4],
                [1, 5],
                [2, 4],
                [2, 5]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hypbball": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 2],
                [1, 4],
                [3, 5],
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hypcrossed": {
			"type": "hyperlane",
			"hyperlanes": [
                [3, 5],
                [0, 4]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hypflair": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 2],
                [0, 4],
                [2, 4],
                [1, 3],
                [1, 5],
                [3, 5]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hypfrost": {
			"type": "hyperlane",
			"hyperlanes": [
                [1, 3],
                [3, 5]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hypfrostcross": {
			"type": "hyperlane",
			"hyperlanes": [
                [1, 3],
                [3, 5],
                [0, 2],
                [0, 4]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hyphorizon": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 3],
                [0, 4],
                [3, 5]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hypmergeleft": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 2],
                [0, 3],
                [3, 5],
                [1, 4]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hypmergeright": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 2],
                [2, 5],
                [3, 5],
                [1, 4]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hypno": {
			"type": "hyperlane",
			"hyperlanes": [
                [1, 4], 
                [2, 5]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hypoops": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 2],
                [0, 3],
                [0, 4],
                [1, 3],
                [1, 4],
                [1, 5],
                [2, 4],
                [2, 5],
                [3, 5]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hypriftabout1": {
			"type": "hyperlane",
			"hyperlanes": [
                [3, 3]
            ],
			"wormhole": [],
			"anomaly":[ANOMALIES.GRAVITY_RIFT],
			"planets": []
		},
        "hypriftabout2": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 3]
            ],
			"wormhole": [],
			"anomaly":[ANOMALIES.GRAVITY_RIFT],
			"planets": []
		},
        "hypriftabout3": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 2],
                [0, 4],
                [2, 4],
            ],
			"wormhole": [],
			"anomaly":[ANOMALIES.GRAVITY_RIFT],
			"planets": []
		},
        "hypriftabout6": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 1],
                [0, 2],
                [0, 3],
                [0, 4],
                [0, 5],
                [1, 2],
                [1, 3],
                [1, 4],
                [1, 5],
                [2, 3],
                [2, 4],
                [2, 5],
                [3, 4],
                [3, 5],
                [4, 5]
            ],
			"wormhole": [],
			"anomaly":[ANOMALIES.GRAVITY_RIFT],
			"planets": []
		},
        "hyproundabout1": {
			"type": "hyperlane",
			"hyperlanes": [
                [3, 3]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hyproundabout2": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 3]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hyproundabout3": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 2],
                [0, 4],
                [2, 4],
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		},
        "hyproundabout6": {
			"type": "hyperlane",
			"hyperlanes": [
                [0, 1],
                [0, 2],
                [0, 3],
                [0, 4],
                [0, 5],
                [1, 2],
                [1, 3],
                [1, 4],
                [1, 5],
                [2, 3],
                [2, 4],
                [2, 5],
                [3, 4],
                [3, 5],
                [4, 5]
            ],
			"wormhole": [],
			"anomaly":[],
			"planets": []
		}
    },

    "base": [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
        "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32",
        "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43",
        "44", "45", "46", "47", "48", "49", "50", "51"
    ],
    "pok": [
        "52", "53", "54", "55", "56", "57", "58", "59", "60",
        "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
        "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
        "81", "82"
    ],
    "uncharted": [
        "4253", "4254", "4255", "4256", "4257", "4258", "4259", "4260",
        "4261", "4262", "4263", "4264", "4265", "4266", "4267", "4268", "4269", "4270",
        "4271", "4272", "4273", "4274", "4275", "4276"
    ],
    "sun": [
        'er01', 'er02', 'er03', 'er04', 'er05', 'er06', 'er07', 'er08', 'er09', 'er10',
        'er11', 'er12', 'er13', 'er14', 'er15', 'er16', 'er17', 'er18', 'er19', 'er20',
        'er21', 'er22', 'er23', 'er24', 'er25', 'er26', 'er27', 'er28', 'er29', 'er30',
        'er31', 'er32', 'er33', 'er34', 'er35', 'er36', 'er37', 'er38', 'er39', 'er40',
        'er41', 'er42', 'er43', 'er44', 'er45', 'er46', 'er47', 'er48', 'er49', 'er50',
        'er51', 'er52', 'er53', 'er54', 'er55', 'er56', 'er57', 'er58', 'er59', 'er60',
        'er61', 'er62', 'er63', 'er64', 'er65', 'er66', 'er67', 'er68', 'er69', 'er70',
        'er71', 'er72', 'er75', 'er76', 'er77', 'er78', 'er79', 'er80',
        'er81', 'er82', 'er83', 'er84', 'er85', 'er86', 'er87', 'er88', 'er89', 'er90',
        'er91', 'er92', 'er93', 'er94', 'er95', 'er96', 'er97', 'er98', 'er99', 'er100',
        'er101', 'er102', 'er103', 'er104', 'er105', 'er106', 'er107', 'er108', 'er109', 'er110',
        'er111', 'er112', 'er113', 'er114', 'er115', 'er116', 'er117', 'er118', 'er119', 'er120',
        'er121', 'er122', 'er123', 'er124', 'er125', 'er126', 'er127', 'er128', 'er129',
    ],
    "asyncLanes": [
        'hypspaghet',
        'hyp4squeeze',
        'hypbball',
        'hypcrossed',
        'hypflair',
        'hypfrost',
        'hypfrostcross',
        'hyphorizon',
        'hypmergeleft',
        'hypmergeright',
        'hypno',
        'hypoops',
        'hypriftabout1',
        'hypriftabout2',
        'hypriftabout3',
        'hypriftabout6',
        'hyproundabout1',
        'hyproundabout2',
        'hyproundabout3',
        'hyproundabout6'
    ],

    // "green": [
    //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    //     11, 12, 13, 14, 15, 16,
    //     51, 52, 53, 54, 55, 56, 57, 58,
    //     3201, 3202, 3203, 3204, 3205,
    //     3206, 3207, 3208, 3209, 3210,
    //     3211, 3212, 3213, 3214, 3215,
    //     3216, 3217, 3218, 3219, 3220,
    //     3221, 3222, 3223, 3224,
    //     3226, 3227, 3228, 3229, 3230,
    //     3231, 3232, 3233, 3234, 3235
    // ],
    // "blue": [
    //     19, 20,
    //     21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    //     31, 32, 33, 34, 35, 36, 37, 38, 59, 60, 61, 62, 63, 64, 65, 66, 69, 70, 71, 72, 73, 74, 75, 76,
    //     4253, 4254, 4255, 4256, 4257, 4258, 4259, 4260,
    //     4261, 4262, 4263, 4264, 4265, 4266, 4267, 4268,
    //     'er01', 'er04', 'er05', 'er06', 'er07', 'er08', 'er20',
    //     'er22', 'er48', 'er49', 'er50',
    //     'er51', 'er52', 'er53', 'er54', 'er55', 'er56', 'er57', 'er58', 'er59', 'er60',
    //     'er61', 'er62', 'er63', 'er64', 'er65', 
    //     'er83', 'er84', 'er85', 'er86', 'er87', 'er88', 'er89', 
    //     'er92', 'er93', 'er94', 'er95', 'er97', 'er98', 'er100',
    //     'er101', 'er102', 'er104', 'er105', 'er106', 'er107', 'er108', 'er109', 'er110',
    //     'er111', 'er112', 'er113', 'er114', 'er115', 'er116', 'er117', 'er118', 'er120',
    //     'er121', 'er122', 'er123', 'er124', 'er125', 'er126', 'er127', 'er128', 'er129',
    // ],
    // "red": [
    //     39, 40,
    //     41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    //     67, 68, 77, 78, 79, 80,
    //     4269, 4270,
    //     4271, 4272, 4273, 4274, 4275, 4276,
    //     'er02', 'er03', 'er09', 'er10',
    //     'er11', 'er12', 'er13', 'er14', 'er15', 'er16', 'er17', 'er18', 'er19', 
    //     'er21', 'er23', 'er24', 'er25', 'er26', 'er27', 'er28', 'er29', 'er30',
    //     'er31', 'er32', 'er33', 'er34', 'er35', 'er36', 'er37', 'er38', 'er39', 'er40',
    //     'er41', 'er42', 'er43', 'er44', 'er45', 'er46', 'er47', 
    //     'er66', 'er67', 'er68', 'er69', 'er70',
    //     'er71', 'er72', 'er75', 'er76', 'er77', 'er78', 'er79', 'er80',
    //     'er81', 'er82', 'er90', 'er91', 'er96', 'er99', 
    //     'er103', 
    //     'er119', 
    // ],
    // "anomaly": [
    //     41, 42, 43, 44, 45,
    //     67, 68,
    //     79, 80,
    //     4269, 4272, 4273, 4274, 4275, 4276,
    //     'er02', 'er03', 'er09', 'er10',
    //     'er11', 'er12', 'er14', 'er15', 'er16', 'er17', 'er18', 'er19',
    //     'er21', 'er23', 'er24', 'er26', 'er27', 'er28', 
    // ],
    // "blankRed": [39, 40,
    //     46, 47, 48, 49,
    //     50,
    //     77, 78,
    //     4270, 4271
    // ],
    // "alphaWormholes": [26, 39, 79, 4276],
    // "betaWormholes": [25, 40, 64, 4272],
    // "asteroidFields": [44, 45, 79, 4273, 4274],
    // "gravityRifts": [41, 67, 4274],
    // "nebulae": [42, 68, 4269, 4273],
    // "supernovas": [43, 80, 4276],
}

tileData.green = Object.keys(tileData.all).filter(id => tileData.all[id].type === "green").filter(id => !tileData.all[id].special)
tileData.blue = Object.keys(tileData.all).filter(id => tileData.all[id].type === "blue").filter(id => !tileData.all[id].special)
tileData.red = Object.keys(tileData.all).filter(id => tileData.all[id].type === "red").filter(id => !tileData.all[id].special)
tileData.anomaly = tileData.red.filter(id => tileData.all[id].anomaly.length > 0)
tileData.blankRed = tileData.red.filter(id => tileData.all[id].anomaly.length === 0)
tileData.wormholes = Object.keys(tileData.all).filter(id => tileData.all[id].wormhole.length > 0).filter(id => !tileData.all[id].special)
tileData.asteroidFields = tileData.anomaly.filter(id => tileData.all[id].anomaly.includes(ANOMALIES.ASTEROID_FIELD))
tileData.gravityRifts = tileData.anomaly.filter(id => tileData.all[id].anomaly.includes(ANOMALIES.ASTEROID_FIELD))
tileData.nebulae = tileData.anomaly.filter(id => tileData.all[id].anomaly.includes(ANOMALIES.NEBULA))
tileData.supernovas = tileData.anomaly.filter(id => tileData.all[id].anomaly.includes(ANOMALIES.SUPERNOVA))

for (const wormhole in WORMHOLES){
    tileData[`${WORMHOLES[wormhole]}Wormholes`] = Object.keys(tileData.all).filter(id => tileData.all[id].wormhole.includes(WORMHOLES[wormhole])).filter(id => !tileData.all[id].special)
}

export default tileData