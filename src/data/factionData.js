export const TECH_TYPES = {
  BIOTIC: "biotic",
  WARFARE: "warfare",
  PROPULSION: "propulsion",
  CYBERNETIC: "cybernetic",
  UNIT_UPGRADE: "unit-upgrade",
  NONE: null,
};

export const LEADER_TYPES = {
  AGENT: "agent",
  COMMANDER: "commander",
  HERO: "hero",
};

export const FACTION_UNIT_TYPES = {
  FLAGSHIP: "flagship",
  MECH: "mech",
  BREAKTHROUGH: "breakthrough",
  INFANTRY: "infantry",
  CARRIER: "carrier",
  CRUISER: "cruiser",
  DESTROYER: "destroyer",
  DREADNOUGHT: "dreadnought",
  FIGHTER: "fighter",
  WAR_SUN: "war-sun",
  PDS: "pds",
  SPACE_DOCK: "space-dock",
};

const factionData = {
  factions: [
    "The Arborec",
    "The Barony of Letnev",
    "The Clan of Saar",
    "The Embers of Muaat",
    "The Emirates of Hacan",
    "The Federation of Sol",
    "The Ghosts of Creuss",
    "The L1Z1X Mindnet",
    "The Mentak Coalition",
    "The Naalu Collective",
    "The Nekro Virus",
    "Sardakk N'orr",
    "The Universities of Jol-Nar",
    "The Winnu",
    "The Xxcha Kingdom",
    "The Yin Brotherhood",
    "The Yssaril Tribes",
  ],
  pokFactions: [
    "The Argent Flight",
    "The Empyrean",
    "The Mahact Gene-sorcerers",
    "The Naaz-Rokha Alliance",
    "The Nomad",
    "The Titans of Ul",
    "The Vuil'raith Cabal",
  ],
  teFactions: [
    "The Crimson Rebellion",
    "The Deepwrought Scholarate",
    "The Firmament",
    "Last Bastion",
    "The Ral Nel Consortium",
  ],
  dsFactions: [
    "The Shipwrights of Axis",
    "The Celdauri Trade Confederation",
    "The Savages of Cymiae",
    "The Dih-Mohn Flotilla",
    "The Florzen Profiteers",
    "The Free Systems Compact",
    "The Ghemina Raiders",
    "The Augurs of Ilyxum",
    "The Kollecc Society",
    "The Kortali Tribunal",
    "The Li-Zho Dynasty",
    "The L'tokk Khrask",
    "The Mirveda Protectorate",
    "The Glimmer of Mortheus",
    "The Myko-Mentori",
    "The Nivyn Star Kings",
    "The Olradin League",
    "The Zealots of Rhodun",
    "Roh'Dhna Mechatronics",
    "The Tnelis Syndicate",
    "The Vaden Banking Clans",
    "The Vaylerian Scourge",
    "The Veldyr Sovereignty",
    "The Zelian Purifier",
    "The Bentor Conglomerate",
    "The Cheiran Hordes",
    "The Edyn Mandate",
    "The Ghoti Wayfarers",
    "The Gledge Union",
    "The Berserkers of Kjalengard",
    "The Monks of Kolume",
    "The Kyro Sodality",
    "The Lanefir Remnants",
    "The Nokar Sellships",
  ],
  homeSystems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  pokHomeSystems: [52, 53, 54, 55, 56, 57, 58],
  teHomeSystems: [92, 93, 94, 95, 96],
  dsHomeSystems: [
    3201, 3202, 3203, 3204, 3205, 3206, 3207, 3208, 3209, 3210, 3211, 3212,
    3213, 3214, 3215, 3216, 3217, 3218, 3219, 3220, 3221, 3222, 3223, 3224,
    3226, 3227, 3228, 3229, 3230, 3231, 3232, 3233, 3234, 3235,
  ],
  homeSystemToFactionMap: {
    1: "The Federation of Sol",
    2: "The Mentak Coalition",
    3: "The Yin Brotherhood",
    4: "The Embers of Muaat",
    5: "The Arborec",
    6: "The L1Z1X Mindnet",
    7: "The Winnu",
    8: "The Nekro Virus",
    9: "The Naalu Collective",
    10: "The Barony of Letnev",
    11: "The Clan of Saar",
    12: "The Universities of Jol-Nar",
    13: "Sardakk N'orr",
    14: "The Xxcha Kingdom",
    15: "The Yssaril Tribes",
    16: "The Emirates of Hacan",
    17: "The Ghosts of Creuss",
    52: "The Mahact Gene-sorcerers",
    53: "The Nomad",
    54: "The Vuil'raith Cabal",
    55: "The Titans of Ul",
    56: "The Empyrean",
    57: "The Naaz-Rokha Alliance",
    58: "The Argent Flight",
    92: "Last Bastion",
    93: "The Ral Nel Consortium",
    94: "The Crimson Rebellion",
    95: "The Deepwrought Scholarate",
    96: "The Firmament",

    3201: "The Veldyr Sovereignty",
    3202: "The Free Systems Compact",
    3203: "The Li-Zho Dynasty",
    3204: "The Kortali Tribunal",
    3205: "The Ghemina Raiders",
    3206: "The Vaden Banking Clans",
    3207: "The Glimmer of Mortheus",
    3208: "The Augurs of Ilyxum",
    3209: "The Shipwrights of Axis",
    3210: "The Olradin League",
    3211: "The Myko-Mentori",
    3212: "The Tnelis Syndicate",
    3213: "The Savages of Cymiae",
    3214: "Roh'Dhna Mechatronics",
    3215: "The Zelian Purifier",
    3216: "The Vaylerian Scourge",
    3217: "The Florzen Profiteers",
    3218: "The Dih-Mohn Flotilla",
    3219: "The Celdauri Trade Confederation",
    3220: "The Nivyn Star Kings",
    3221: "The Mirveda Protectorate",
    3222: "The L'tokk Khrask",
    3223: "The Kollecc Society",
    3224: "The Zealots of Rhodun",
    3226: "The Berserkers of Kjalengard",
    3227: "The Bentor Conglomerate",
    3228: "The Nokar Sellships",
    3229: "The Gledge Union",
    3230: "The Lanefir Remnants",
    3231: "The Kyro Sodality",
    3232: "The Ghoti Wayfarers",
    3233: "The Monks of Kolume",
    3234: "The Cheiran Hordes",
    3235: "The Edyn Mandate",
  },
  factionToHomeSystemMap: {
    "The Federation of Sol": 1,
    "The Mentak Coalition": 2,
    "The Yin Brotherhood": 3,
    "The Embers of Muaat": 4,
    "The Arborec": 5,
    "The L1Z1X Mindnet": 6,
    "The Winnu": 7,
    "The Nekro Virus": 8,
    "The Naalu Collective": 9,
    "The Barony of Letnev": 10,
    "The Clan of Saar": 11,
    "The Universities of Jol-Nar": 12,
    "Sardakk N'orr": 13,
    "The Xxcha Kingdom": 14,
    "The Yssaril Tribes": 15,
    "The Emirates of Hacan": 16,
    "The Ghosts of Creuss": 17,
    "The Mahact Gene-sorcerers": 52,
    "The Nomad": 53,
    "The Vuil'raith Cabal": 54,
    "The Titans of Ul": 55,
    "The Empyrean": 56,
    "The Naaz-Rokha Alliance": 57,
    "The Argent Flight": 58,
    "Last Bastion": 92,
    "The Ral Nel Consortium": 93,
    "The Crimson Rebellion": 94,
    "The Deepwrought Scholarate": 95,
    "The Firmament": 96,

    "The Veldyr Sovereignty": 3201,
    "The Free Systems Compact": 3202,
    "The Li-Zho Dynasty": 3203,
    "The Kortali Tribunal": 3204,
    "The Ghemina Raiders": 3205,
    "The Vaden Banking Clans": 3206,
    "The Glimmer of Mortheus": 3207,
    "The Augurs of Ilyxum": 3208,
    "The Shipwrights of Axis": 3209,
    "The Olradin League": 3210,
    "The Myko-Mentori": 3211,
    "The Tnelis Syndicate": 3212,
    "The Savages of Cymiae": 3213,
    "Roh'Dhna Mechatronics": 3214,
    "The Zelian Purifier": 3215,
    "The Vaylerian Scourge": 3216,
    "The Florzen Profiteers": 3217,
    "The Dih-Mohn Flotilla": 3218,
    "The Celdauri Trade Confederation": 3219,
    "The Nivyn Star Kings": 3220,
    "The Mirveda Protectorate": 3221,
    "The L'tokk Khrask": 3222,
    "The Kollecc Society": 3223,
    "The Zealots of Rhodun": 3224,
    "The Berserkers of Kjalengard": 3226,
    "The Bentor Conglomerate": 3227,
    "The Nokar Sellships": 3228,
    "The Gledge Union": 3229,
    "The Lanefir Remnants": 3230,
    "The Kyro Sodality": 3231,
    "The Ghoti Wayfarers": 3232,
    "The Monks of Kolume": 3233,
    "The Cheiran Hordes": 3234,
    "The Edyn Mandate": 3235,
  },
  factionDetails: {
    "Last Bastion": {
      abilities: [
        {
          name: "LIBERATE",
          description:
            "When you gain control of a planet, ready that planet if it contains a number of your infantry equal to or greater than that planet's resource value; otherwise, place 1 infantry on that planet.",
        },
        {
          name: "GALVANIZE",
          description:
            "When a game effect instructs a player to galvanize a unit, they place a galvanize token beneath it, if it does not have one. Galvanized units roll 1 additional die for combat rolls and unit abilities.",
        },
        {
          name: "PHOENIX STANDARD",
          description:
            "At the end of combat, you may galvanize 1 of your units that participated.",
        },
      ],
      promissoryNote: {
        name: "Raise the Standard",
        description:
          "At the end of a combat: Galvanize 1 of your units that participated. Then, return this card to the Last Bastion player.",
      },
      technologies: [
        {
          name: "Proxima Targeting VI",
          type: TECH_TYPES.WARFARE,
          description:
            "Cancel 1 hit produced by BOMBARDMENT rolls made against your ground forces for each of your galvanized units present. At the start of a round of ground combat, you may resolve BOMBARDMENT 8 (x3) against your opponents ground forces; if you do, make an identical roll against your own ground forces.",
        },
      ],
      startingTechnologyChoice: {
        count: 1,
        options: [
          "antimass-deflectors",
          "dark-energy-tap",
          "sarween-tools",
          "scanlink-drone-network",
        ],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "The Egeiro",
          stats: {
            cost: 8,
            combat: 9,
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "Production 1",
            "Apply +1 to the results of each of this unit's combat rolls for each non-home system that contains a planet you control.",
          ],
        },
        mech: {
          name: "A3 Valiance",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "When this unit is destroyed, if it was galvanized, galvanize up to 3 of your infantry in its system",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "The Icon",
          description:
            "When you produce ships, you may exhaust this card to place those ships in a system that contains one of your command tokens, at least one of your ground forces, and no other player's ships.",
        },
        "space-dock": {
          tiers: [
            {
              name: '4X41C "HELIOS" V1',
              stats: {},
              abilities: [
                "This unit's PRODUCTION value is equal to 2 more than the resource value of this planet. The resource value of this planet is increased by 1. Up to 3 fighters in this system do not count against your ships' capacity. Production X",
              ],
            },
            {
              name: '4X41C "HELIOS" V2',
              stats: {},
              abilities: [
                "This unit's PRODUCTION value is equal to 4 more than the resource value of this planet. The resource value of this planet is increased by 2. Up to 3 fighters in this system do not count against your ships' capacity. Production X",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Dame Briar",
          unlockCriteria: "At Game Start",
          ability:
            "When a player's unit is destroyed: You may exhaust this card to galvanize another of that player's units in the destroyed unit's system.",
        },
        commander: {
          name: "Nip and Tuck",
          unlockCriteria: "There are 3 galvanized units on the game board",
          ability:
            'Your action cards cannot be canceled by "Sabotage" action cards. The Nekro Virus cannot place assimilator tokens on your components.',
        },
        hero: {
          name: "Lyra Keen",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            'ENTITY 4X41A "APOLLO" When one of your galvanized units is destroyed: You may purge this card to roll 1 die for each unit in its system that belongs to another player; if the result is equal to or greater than the galvanized unit\'s combat value, destroy that unit.',
        },
      },
    },
    "Sardakk N'orr": {
      abilities: [
        {
          name: "UNRELENTING",
          description:
            "Apply +1 to the result of each of your unit's combat rolls.",
        },
      ],
      promissoryNote: {
        name: "Tekklar Legion",
        description:
          "At the start of an invasion combat: Apply +1 to the result of each of your unit's combat rolls during this combat. If your opponent is the N'orr player, apply -1 to the result of each of his unit's combat rolls during this combat. Then, return this card to the N'orr player.",
      },
      technologies: [
        {
          name: "Valkyrie Particle Weave",
          type: TECH_TYPES.WARFARE,
          description:
            "After making combat rolls during a round of ground combat, if your opponent produced 1 or more hits, you produce 1 additional hit",
        },
      ],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 5,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "C'Morran N'orr",
          stats: {
            cost: 8,
            combat: "6 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "Apply +1 to the result of each of your other ship's combat rolls in this system.",
          ],
        },
        mech: {
          name: "Valkyrie Exoskeleton",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "After this unit uses its SUSTAIN DAMAGE ability during Ground Combat, it produces 1 hit against your opponent's ground forces on this planet.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "N'orr Supremacy",
          description:
            "After you win a combat, either gain 1 command token or research a unit upgrade technology.",
        },
        dreadnought: {
          description:
            "Sardakk N'orr Dreadnoughts and their upgraded variety have stronger bombardment than all other Dreadnoughts.",
          tiers: [
            {
              name: "Exotrireme I",
              stats: { cost: 4, combat: 5, move: 1, capacity: 1 },
              abilities: ["Sustain Damage Bombardment 4 (x2)"],
            },
            {
              name: "Exotrireme II",
              stats: { cost: 4, combat: 5, move: 2, capacity: 1 },
              abilities: [
                'Sustain Damage Bombardment 4 (x2) This unit cannot be destroyed by "Direct Hit" action cards. After a round of space combat, you may destroy this unit to destroy up to 2 ships in this system.',
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "T'ro",
          unlockCriteria: "At Game Start",
          ability:
            "At the end of a player's tactical action: You may exhaust this card; if you do, that player may place 2 infantry from their reinforcements on a planet they control in the active system.",
        },
        commander: {
          name: "G'hom Sek'kus",
          unlockCriteria: "Control 5 planets in non-home systems",
          ability:
            'During the " Commit Ground Forces " step: You can commit up to 1 ground force from each planet in the active system and each planet in adjacent systems that do not contain 1 of your command tokens.',
        },
        hero: {
          name: "Sh'val, Harbinger",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            'TEKKLAR CONDITIONING After you move ships into the active system: You may skip directly to the "Commit Ground Forces" step. If you do, after you commit ground forces to land on planets, purge this card and return each of your ships in the active system to your reinforcements.',
        },
      },
    },
    "The Arborec": {
      abilities: [
        {
          name: "MITOSIS",
          description:
            "Your space docks cannot produce infantry. At the start of the status phase, place 1 infantry from your reinforcements on any planet you control.",
        },
      ],
      promissoryNote: {
        name: "Stymie",
        description:
          "ACTION: Place this card face up in your play area. While this card is in your play area, the Arborec player cannot produce units in or adjacent to non-home systems that contain 1 or more of your units. If you activate a system that contains 1 or more of the Arborec player's units, return this card to the Arborec player. After another player moves ships into a system that contains 1 or more of your units: You may place 1 command token from that player's reinforcements in any non-home system. Then, return this card to the Arborec player.",
      },
      technologies: [
        {
          name: "Bioplasmosis",
          type: TECH_TYPES.BIOTIC,
          description:
            "At the end of the status phase, you may remove any number of infantry from planets you control and place them on 1 or more planets you control in the same or adjacent systems.",
        },
      ],
      startingTechnologies: ["magen-defense-grid"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Duha Menaimon",
          stats: {
            cost: 8,
            combat: "7 (x2)",
            move: 1,
            capacity: 5,
          },
          abilities: [
            "Sustain Damage",
            "After you activate this system, you may produce up to 5 units in this system.",
          ],
        },
        mech: {
          name: "Letani Behemoth",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "DEPLOY: When you would use your MITOSIS faction ability you may replace 1 of your infantry with 1 mech from your reinforcements instead.",
            "Sustain Damage",
            "Production 2",
            "Planetary Shield",
          ],
        },
        breakthrough: {
          name: "Psychospore",
          description:
            "ACTION: Exhaust this card to remove a command token from a system that contains 1 or more of your infantry and return it to your reinforcements. Then, place 1 infantry in that system.",
        },
        infantry: {
          description: "Arborec Infantry have the Production ability.",
          tiers: [
            {
              name: "Letani Warrior I",
              stats: { cost: "1x2", combat: 8 },
              abilities: ["Production 1"],
            },
            {
              name: "Letani Warrior II",
              stats: { cost: "1x2", combat: 7 },
              abilities: [
                "Production 2 After this unit is destroyed, roll 1 die. If the result is 6 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Letani Ospha",
          unlockCriteria: "At Game Start",
          ability:
            "ACTION: Exhaust this card and choose a player's non-fighter ship; that player may replace that ship with one from their reinforcements that costs up to 2 more than the replaced ship.",
        },
        commander: {
          name: "Dirzuga Rophal",
          unlockCriteria: "Have 12 Ground Forces on Planets you control.",
          ability:
            "After another player activates a system that contains 1 or more of your units that have PRODUCTION: You may produce 1 unit in that system.",
        },
        hero: {
          name: "Letani Miasmiala",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "ULTRASONIC EMITTER ACTION: Produce any number of units in any number of systems that contain 1 or more of your ground forces. Then, purge this card.",
        },
      },
    },
    "The Argent Flight": {
      abilities: [
        {
          name: "ZEAL",
          description:
            "You always vote first during the agenda phase. When you cast at least 1 vote, cast 1 additional vote for each player in the game including you.",
        },
        {
          name: "RAID FORMATION",
          description:
            "When 1 or more of your units uses ANTI-FIGHTER BARRAGE, for each hit produced in excess of your opponent's Fighters, choose 1 of your opponent's ships that has SUSTAIN DAMAGE to become damaged.",
        },
      ],
      promissoryNote: {
        name: "Strike Wing Ambuscade",
        description:
          "When 1 or more of your units make a roll for a unit ability: Choose 1 of those units to roll 1 additional die Then, return this card to the Argent player",
      },
      technologies: [
        {
          name: "Aerie Hololattice",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "Other players cannot move ships through systems that contain your structures. Each planet that contains 1 or more of your structures gains the PRODUCTION 1 ability as if it were a unit",
        },
      ],
      startingTechnologyChoice: {
        count: 2,
        options: ["neural-motivator", "sarween-tools", "plasma-scoring"],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 5,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 2,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Quetzecoatl",
          stats: {
            cost: 8,
            combat: "7 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "Other players cannot use space cannon against your ships in this system",
          ],
        },
        mech: {
          name: "Aerie Sentinel",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "This unit does not count against capacity if it is being transported or if it is in a space area with 1 or more of your ships that have capacity values",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Wing Transfer",
          description:
            "When you activate a system that contains only your units, you may place command tokens from your reinforcements into any system adjacent to that system that contain only your units; at the end of this action, you may move ships among the active system and systems adjacent to it that contain your command tokens.",
        },
        destroyer: {
          description:
            "Argent Flight Destroyers have capacity and they hit on an 8 rather than a 9.",
          tiers: [
            {
              name: "Strike Wing Alpha I",
              stats: { cost: 1, combat: 8, move: 2, capacity: 1 },
              abilities: ["Anti-Fighter Barrage 9 (x2)"],
            },
            {
              name: "Strike Wing Alpha II",
              stats: { cost: 1, combat: 7, move: 2, capacity: 1 },
              abilities: [
                "Anti-Fighter Barrage 6 (x3) When this unit uses ANTI-FIGHTER BARRAGE, each result of 9 or 10 also destroys 1 of your opponent's infantry in the space area of the active system",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Trillossa Aun Mirik",
          unlockCriteria: "At Game Start",
          ability:
            "When a player produces ground forces in a system: You may exhaust this card; that player may place those units on any planets they control in that system and any adjacent systems.",
        },
        commander: {
          name: "Trrakan Aun Zulok",
          unlockCriteria:
            "Have 6 units that have ANTI-FIGHTER BARRAGE, SPACE CANNON or BOMBARDMENT on the game board",
          ability:
            "When 1 or more of your units make a roll for a unit ability: You may choose 1 of those units to roll 1 additional die.",
        },
        hero: {
          name: "Mirik Aun Sissiri",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "HELIX PROTOCOL ACTION: Move any number of your ships from any systems to any number of other systems that contain 1 of your command tokens and no other players' ships. Then, purge this card.",
        },
      },
    },
    "The Barony of Letnev": {
      abilities: [
        {
          name: "MUNITIONS RESERVES",
          description:
            "At the start of each round of space combat, you may spend 2 trade goods; you may re-roll any number of your dice during that combat round.",
        },
        {
          name: "ARMADA",
          description:
            "The maximum number of non-fighter ships you can have in each system is equal to 2 more than the number of tokens in your fleet pool.",
        },
      ],
      promissoryNote: {
        name: "War Funding",
        description:
          "At the start of a round of space combat: The Letnev player loses 2 trade goods. During this combat round, re-roll any number of your dice. Then, return this card to the Letnev player. After you and your opponent roll dice during space combat: You may reroll all of your opponent's dice. You may reroll any number of your dice. Then, return this card to the Letnev player.",
      },
      technologies: [
        {
          name: "L4 Disruptors",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "During an invasion, units cannot use SPACE CANNON against your units.",
        },
        {
          name: "Non-Euclidean Shielding",
          type: TECH_TYPES.WARFARE,
          description:
            "When 1 of your units uses SUSTAIN DAMAGE, cancel 2 hits instead of 1.",
        },
      ],
      startingTechnologies: ["antimass-deflectors", "plasma-scoring"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Arc Secundus",
          stats: {
            cost: 8,
            combat: "5 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "Bombardment 5 (x3)",
            "Other players' units in this system lose PLANETARY SHIELD. At the start of each space combat round, repair this ship.",
          ],
        },
        mech: {
          name: "Dunlain Reaper",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "DEPLOY: At the start of a round of ground combat, you may spend 2 resources to replace 1 of your infantry in that combat with 1 mech.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Gravleash Maneuvers",
          description:
            "Before you roll dice during space combat, apply +X to the results of 1 of your ship's rolls, where X is the number of ship types you have in the combat. During movement, your non-fighter ships' move values are equal to the highest move value amongst moving ships in the system they started in.",
        },
      },
      leaders: {
        agent: {
          name: "Viscount Unlenn",
          unlockCriteria: "At Game Start",
          ability:
            "At the start of a Space Combat round: You may exhaust this card to choose 1 ship in the active system. That ship rolls 1 additional die during this combat round.",
        },
        commander: {
          name: "Rear Admiral Farran",
          unlockCriteria: "Have 5 non-fighter ships in 1 system",
          ability:
            "After 1 of your units uses SUSTAIN DAMAGE: You may gain 1 Trade Good.",
        },
        hero: {
          name: "Darktalon Treilla",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "DARK MATTER AFFINITY ACTION: Place this card near the game board; the number of non-fighter ships you can have in systems is not limited by laws or by the number of command tokens in your fleet pool during this game round. At the end of that game round, purge this card.",
        },
      },
    },
    "The Clan of Saar": {
      abilities: [
        {
          name: "SCAVENGE",
          description: "After you gain control of a planet, gain 1 trade good.",
        },
        {
          name: "NOMADIC",
          description:
            "You can score objectives even if you do not control the planets in your home system.",
        },
      ],
      promissoryNote: {
        name: "Ragh's Call",
        description:
          "After you commit 1 or more units to land on a planet: Remove all of the Saar player's ground forces from that planet and place them on a planet controlled by the Saar player. Then, return this card to the Saar player.",
      },
      technologies: [
        {
          name: "Chaos Mapping",
          type: TECH_TYPES.PROPULSION,
          description:
            "Other players cannot activate asteroid fields that contain 1 or more of your ships. At the start of your turn during the action phase, you may produce 1 unit in a system that contains at least 1 of your units that has Production.",
        },
      ],
      startingTechnologies: ["antimass-deflectors"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Son of Ragh",
          stats: {
            cost: 8,
            combat: "5 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: ["Sustain Damage", "Anti-Fighter Barrage 6 (x4)"],
        },
        mech: {
          name: "Scavenger Zeta",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "DEPLOY: After you gain control of a planet, you may spend 1 trade good to place 1 mech on that planet.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Deorbit Barrage",
          description:
            "ACTION: Exhaust this card and spend any amount of resources to choose a planet up to 2 systems away from an asteroid field that contains your ships; roll a number of dice equal to the amount spent, and assign 1 hit to a ground force on that planet for each roll of 4 or greater",
        },
        "space-dock": {
          description:
            "Saar Space Docks are placed in the space area of their system instead of on a planet. They can move as ships and have capacity. They also have a set Production value.",
          tiers: [
            {
              name: "Floating Factory I",
              stats: { move: 1, capacity: 4 },
              abilities: [
                "Production 5 This unit is placed in a space area instead of on a planet. This unit can move and retreat as if it were a ship. If this unit is blockaded, it is destroyed.",
              ],
            },
            {
              name: "Floating Factory II",
              stats: { move: 2, capacity: 5 },
              abilities: [
                "Production 7 This unit is placed in a space area instead of on a planet. This unit can move and retreat as if it were a ship. If this unit is blockaded, it is destroyed.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Captain Mendosa",
          unlockCriteria: "At Game Start",
          ability:
            "After a player activates a system: You may exhaust this card to increase the move value of 1 of that player's ships to match the move value of the ship on the game board that has the highest move value.",
        },
        commander: {
          name: "Rowl Sarrig",
          unlockCriteria: "Have 3 space docks on the game board",
          ability:
            "When you produce fighters or infantry: You may place each of those units at any of your space docks that are not blockaded.",
        },
        hero: {
          name: "Gurno Aggero",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "ARMAGEDDON RELAY ACTION: Choose 1 system that is adjacent to 1 of your space docks. Destroy all other player's infantry and fighters in that system. Then, purge this card.",
        },
      },
    },
    "The Council Keleres": {
      abilities: [
        {
          name: "THE TRIBUNII Ω",
          description:
            "During setup, choose a Keleres hero that corresponds to an unused faction; take that faction's home system, command tokens and control tokens. The unchosen Keleres heroes are not used.",
        },
        {
          name: "COUNCIL PATRONAGE",
          description:
            "Replenish your commodities at the start of the strategy phase, then gain 1 trade good.",
        },
        {
          name: "LAW'S ORDER Ω",
          description:
            "You may spend 1 trade good or 1 commodity at the start of any player's turn to treat all laws as blank until the end of that turn.",
        },
      ],
      promissoryNote: {
        name: "Keleres Rider",
        description:
          "After an agenda is revealed: You cannot vote on this agenda. Predict aloud an outcome of this agenda. If your prediction is correct, draw 1 action card and gain 2 trade goods. Then, return this card to the Keleres player.",
      },
      technologies: [
        {
          name: "I.I.H.Q. Modernization",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "You are neighbors with all players that have units or control planets in or adjacent to the Mecatol Rex system. Gain the Custodia Vigilia planet card and its legendary planet ability card. You cannot lose these cards, and this card cannot have an X or Y assimilator token placed on it.",
        },
        {
          name: "Agency Supply Network",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "Whenever you resolve one of your PRODUCTION abilities, you may resolve an additional one of your PRODUCTION abilities in any system; the additional use does not trigger this ability.",
        },
        {
          name: "Executive Order",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "ACTION: Exhaust this card and draw the top or bottom card of the agenda deck. Players immediately vote on this agenda as if you were the speaker; you can spend trade goods and resources on this agenda as if they were votes.",
        },
      ],
      startingTechnologyChoice: {
        count: 2,
        options: [],
        description:
          "Choose 2 non-faction technologies owned by other players.",
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 2,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Artemiris",
          stats: {
            cost: 8,
            combat: "7 (x2)",
            move: 1,
            capacity: 6,
          },
          abilities: [
            "Sustain Damage",
            "Other players must spend 2 influence to activate the system that contains this ship.",
          ],
        },
        mech: {
          name: "Omniopiares",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "Other players must spend 1 influence to commit ground forces to the planet that contains this unit.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "I.I.H.Q. Modernization",
          description:
            "When you gain this card, gain the Custodia Vigilia planet card and its legendary planet ability card. You are neighbors with all players that have units or control planets in or adjacent to the Mecatol Rex system.",
        },
      },
      leaders: {
        agent: {
          name: "Xander Alexin Victori III",
          unlockCriteria: "At Game Start",
          ability:
            "At any time: You may exhaust this card to allow any player to spend commodities as if they were trade goods",
        },
        commander: {
          name: "Suffi An",
          unlockCriteria:
            "Spend 1 trade good after you play an action card that has a component action",
          ability:
            "After you perform a component action: You may perform an additional action.",
        },
        hero: {
          name: "Kuuasi Aun Jalatai",
          unlockCriteria: "Have 3 Scored objectives",
          ability:
            "OVERWING ZETA At the start of a round of space combat in a system that contains a planet you control: Place your flagship and up to a total of 2 cruisers and/or destroyers from your reinforcements in the active system. Then, purge this card.",
          condition: "If Argent Flight Chosen for Tribunii",
        },
        hero2: {
          name: "Odlynn Myrr",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "OPERATION ARCHON After an agenda is revealed: You may cast up to 6 additional votes on this agenda. Predict aloud an outcome for this agenda. For each player that votes for another outcome, gain 1 trade good and 1 command token. Then, purge this card.",
          condition: "If Xxcha Chosen for Tribunii",
        },
        hero3: {
          name: "Harka Leeds",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "ERWAN'S COVENANT ACTION: Reveal cards from the action card deck until you reveal 3 action cards that have component actions. Draw those cards and shuffle the rest back into the action card deck. Then, purge this card.",
          condition: "If Mentak Chosen for Tribunii",
        },
      },
    },
    "The Crimson Rebellion": {
      abilities: [
        {
          name: "SUNDERED",
          description:
            "You cannot use wormholes other than epsilon wormholes. Other players' units that move or are placed into your home system are destroyed.",
        },
        {
          name: "INCURSION",
          description:
            "When you activate a system that contains a breach, you may flip that breach; systems that contain active breaches are adjacent. At the end of the status phase, any player with ships in a system that contain an active breach may remove that breach.",
        },
        {
          name: "THE SORROW",
          description:
            "When you create the game board, place the Sorrow (tile 94) where your home system would normally be placed, then place a inactive breach there. The Sorrow is not a home system. Then, place your home system (tile 118) in your play area.",
        },
      ],
      promissoryNote: {
        name: "Sever",
        description:
          "ACTION: Place this card faceup in your play area, and place the sever token in a system that contains your units; wormholes in that system have no effect during movement. Remove the sever token and return this card to the Rebellion player at end of the status phase.",
      },
      technologies: [
        {
          name: "Subatomic Splicer",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "When one of your ships is destroyed, you may produce a ship of the same type at a space dock in your home system.",
        },
      ],
      startingTechnologyChoice: {
        count: 1,
        options: [
          "dark-energy-tap",
          "antimass-deflectors",
          "plasma-scoring",
          "ai-development-algorithm",
        ],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 2,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Quietus",
          stats: {
            cost: 8,
            combat: "5 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "While this unit is in a system that contains an active breach, other players' units in systems with active breaches lose all their unit abilities.",
          ],
        },
        mech: {
          name: "Revenant",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            'DEPLOY: During the "Commit Ground Forces" step of your tactical action in a system that contains an active breach, you may commit 1 mech, even if you have no units in the system',
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Resonance Generator",
          description:
            "During your tactical actions, apply +1 to the move value of each of your ships that start in your home system or in a system that contains an active breach. ACTION: Exhaust this card to flip any breach or place an active breach in a non-home system that contains your units.",
        },
        destroyer: {
          description:
            "Crimson Rebellion Destroyers interact with the Breach mechanic, allowing the placement of Inactive Breach tokens after combat in, or adjacent to the Destroyer's system. They are also stronger than regular Destroyers.",
          tiers: [
            {
              name: "Exile I",
              stats: { cost: 1, combat: 8, move: 2 },
              abilities: [
                "At the end of any player's combat in this unit's system or an adjacent system, you may place 1 inactive breach in that system. Anti-Fighter Barrage 9 (x2)",
              ],
            },
            {
              name: "Exile II",
              stats: { cost: 1, combat: 7, move: 2 },
              abilities: [
                "At the end of any player's combat in this unit's system or up to 2 systems away, you may place 1 active or inactive breach in that system. Anti-Fighter Barrage 6 (x3)",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Ahk Ravin",
          unlockCriteria: "At Game Start",
          ability:
            "ACTION: Exhaust this card to choose 1 player. That player may swap the position of 2 of their ships in any systems; they may transport units when they swap.",
        },
        commander: {
          name: "Ahk Siever",
          unlockCriteria:
            "Place a breach token in a system that contains another player's unit.",
          ability:
            "At the end of a combat between any players: Gain 1 commodity or convert 1 of your commodities to a trade good.",
        },
        hero: {
          name: "Homesick Phantom",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "FRAGMENT REALITY When you produce ships: You may place any of those ships on this card. At the start of a space combat, you may purge this card to place all ships from this card into the active system.",
        },
      },
    },
    "The Deepwrought Scholarate": {
      abilities: [
        {
          name: "RESEARCH TEAM",
          description:
            "When ground forces are committed, if your units on the planet are not already coexisting, you may choose for your units to coexist.",
        },
        {
          name: "OCEANBOUND",
          description:
            "When your units begin coexisting on a planet, gain an ocean card and ready it. Any time you have more ocean cards than there are planets that have your coexisting units, discard ocean cards until you do not.",
        },
      ],
      promissoryNote: {
        name: "Share Knowledge",
        description:
          "ACTION: Place this card faceup in your play area and gain 1 non-faction, non-unit upgrade technology that the Deepwrought player owns; place that technology on this card. Return that technology to the deck and this card to the Deepwrought player at the end of the status phase.",
      },
      technologies: [
        {
          name: "Radical Advancement",
          type: TECH_TYPES.BIOTIC,
          description:
            "At the start of the status phase, you may replace one of your non-unit upgrade technologies with a technology of the same color that has exactly 1 more prerequisite.",
        },
        {
          name: "Hydrothermal Mining",
          type: TECH_TYPES.BIOTIC,
          description:
            "At the start of the status phase, gain 1 trade good for each ocean card in play.",
        },
      ],
      startingTechnologyChoice: {
        count: 2,
        options: [],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 4,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "D.W.S. Luminous",
          stats: {
            cost: 8,
            combat: "7 (x2)",
            move: 1,
            capacity: 6,
          },
          abilities: [
            "Sustain Damage",
            "This ship can move through systems that contain your units, even if other players' units are present: if it would, apply +1 to its move value for each of those systems.",
          ],
        },
        mech: {
          name: "Eanautic",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "When another player activates this system, if this unit is coexisting, you may move it and any of your infantry on its planet to a planet you control in your home system.",
            "Sustain Damage",
            "Production 1",
          ],
        },
        breakthrough: {
          name: "Visionaria Select",
          description:
            "ACTION: Exhaust this card to allow each other player to spend 3 trade goods and give you 1 promissory note. Each player that does may research a non-faction, non-unit upgrade technology. You also gain each technology researched this way.",
        },
      },
      leaders: {
        agent: {
          name: "Doctor Carrina",
          unlockCriteria: "At Game Start",
          ability:
            "When another player researches a technology: You may exhaust this card to allow that player to ignore 1 prerequisite; if they do, you may place 1 infantry from your reinforcements into coexistence on a non-home planet they control",
        },
        commander: {
          name: "Aello",
          unlockCriteria: "Have an ocean card in play.",
          ability:
            "When another player spends resources to research a technology: That player may reduce the cost by 1, if they do, gain 1 commodity or convert 1 of your commodities to a trade good.",
        },
        hero: {
          name: "Ta Zern",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "WAVE FUNCTION COLLAPSE ACTION: Purge this card and a non-unit upgrade technology you own or from your deck; then, purge all cards with the same name owned by other players and in other players' decks. Then, each player that purged a technology they owned researches another technology.",
        },
      },
    },
    "The Embers of Muaat": {
      abilities: [
        {
          name: "STAR FORGE",
          description:
            "ACTION: Spend 1 token from your strategy pool to place either 2 fighters or 1 destroyer from your reinforcements in a system that contains 1 or more of your war suns.",
        },
        {
          name: "GASHLAI PHYSIOLOGY",
          description: "Your ships can move through supernovas.",
        },
      ],
      promissoryNote: {
        name: "Fires of the Gashlai",
        description:
          "ACTION: Remove 1 token from the Muaat player's fleet pool and return it to their reinforcements. Then, gain your war sun unit upgrade technology card. Then, return this card to the Muaat player.",
      },
      technologies: [
        {
          name: "Magmus Reactor",
          type: TECH_TYPES.WARFARE,
          description:
            "Your ships can move into supernovas. After 1 or more of your units use Production in a system that either contains a war sun or is adjacent to a supernova, gain 1 trade good.",
        },
        {
          name: "Magmus Reactor Ω",
          type: TECH_TYPES.WARFARE,
          description:
            "Your ships can move into supernovas. Each supernova that contains 1 or more of your units gains the PRODUCTION 5 ability as if it were 1 of your units.",
        },
      ],
      startingTechnologies: ["plasma-scoring"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.WAR_SUN]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "The Inferno",
          stats: {
            cost: 8,
            combat: "5 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "ACTION: Spend 1 token from your strategy pool to place 1 cruiser in this unit's system.",
          ],
        },
        mech: {
          name: "Ember Colossus",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "When you use your STAR FORGE faction ability in this system or an adjacent system, you may place 1 infantry from your reinforcements with this unit.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Stellar Genesis",
          description:
            "When you gain this card, place the Avernus planet token into a non-home system that is adjacent to a planet you control; gain control of and ready it. After you move 1 of your war suns out of or through Avernus's system and into a non-home system, you may move the Avernus token with it.",
        },
        "war-sun": {
          description:
            "The Embers of Muaat are the only faction that begins play with the ability to build War Suns. Muaat War Suns are slower than base War Suns, but upgraded Muaat War Suns are faster and cheaper.",
          tiers: [
            {
              name: "Prototype War Sun I",
              stats: { cost: 12, combat: "3 (x3)", move: 1, capacity: 6 },
              abilities: [
                "Sustain Damage Bombardment 3 (x3) Other players' units in this system lose Planetary Shield.",
              ],
            },
            {
              name: "Prototype War Sun II",
              stats: { cost: 10, combat: "3 (x3)", move: 3, capacity: 6 },
              abilities: [
                "Sustain Damage Bombardment 3 (x3) Other players' units in this system lose Planetary Shield.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Umbat",
          unlockCriteria: "At Game Start",
          ability:
            "ACTION: Exhaust this card to choose a player; that player may produce up to 2 units that each have a cost of 4 or less in a system that contains one of their war suns or their flagship.",
        },
        commander: {
          name: "Magmus",
          unlockCriteria: "Produce a War Sun",
          ability:
            "After you spend a token from your strategy pool: You may gain 1 trade good.",
        },
        hero: {
          name: "Adjudicator Ba'al",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "NOVA SEED After you move a war sun into a non-home system other than Mecatol Rex: You may destroy all other players' units in that system and replace that system tile with the Muaat supernova tile. If you do, purge this card and each planet card that corresponds to the replaced system tile.",
        },
      },
    },
    "The Emirates of Hacan": {
      abilities: [
        {
          name: "MASTERS OF TRADE",
          description:
            'You do not have to spend a command token to resolve the secondary ability of the "Trade" strategy card.',
        },
        {
          name: "GUILD SHIPS",
          description:
            "You can negotiate transactions with players who are not your neighbor.",
        },
        {
          name: "ARBITERS",
          description:
            "When you are negotiating a transaction, action cards can be exchanged as part of that transaction.",
        },
      ],
      promissoryNote: {
        name: "Trade Convoys",
        description:
          "ACTION: Place this card face-up in your play area. While this card is in your play area, you may negotiate transactions with players who are not your neighbor. If you activate a system that contains 1 or more of the Hacan player's units, return this card to the Hacan player.",
      },
      technologies: [
        {
          name: "Production Biomes",
          type: TECH_TYPES.BIOTIC,
          description:
            "ACTION: Exhaust this card and spend 1 token from your strategy pool to gain 4 trade goods and choose 1 other player; that player gains 2 trade goods",
        },
        {
          name: "Quantum Datahub Node",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "At the end of the strategy phase, you may spend 1 token from your strategy pool and give another player 3 of your trade goods. If you do, give 1 of your strategy cards to that player and take 1 of their strategy cards.",
        },
      ],
      startingTechnologies: ["sarween-tools", "antimass-deflectors"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Wrath of Kenara",
          stats: {
            cost: 8,
            combat: "7 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "After you roll a die during a space combat in this system, you may spend 1 trade good to apply +1 to the result.",
          ],
        },
        mech: {
          name: "Pride of Kenara",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "This planet's card may be traded as part of a transaction; if you do, move all of your units from this planet to another planet you control.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Auto-Factories",
          description:
            "When you produce 3 or more non-fighter ships, place 1 command token from your reinforcements into your fleet pool.",
        },
      },
      leaders: {
        agent: {
          name: "Carth of Golden Sands",
          unlockCriteria: "At Game Start",
          ability:
            "During the action phase: You may exhaust this card to gain 2 commodities or replenish another player's commodities.",
        },
        commander: {
          name: "Gila the Silvertongue",
          unlockCriteria: "Have 10 Trade Goods",
          ability:
            "When you cast votes: You may spend any number of trade goods; cast 2 additional votes for each trade good spent.",
        },
        hero: {
          name: "Harrugh Gefhara",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "GALACTIC SECURITIES NET When 1 or more of your units use PRODUCTION: You may reduce the cost of each of your units to 0 during this use of PRODUCTION. If you do, purge this card.",
        },
      },
    },
    "The Empyrean": {
      abilities: [
        {
          name: "VOIDBORN",
          description: "Nebulae do not affect your ships' movement.",
        },
        {
          name: "AETHERPASSAGE",
          description:
            "After a player activates a system, you may allow that player to move their ships through systems that contain your ships.",
        },
        {
          name: "DARK WHISPERS",
          description:
            "During setup, take the additional Empyrean faction promissory note; you have 2 faction promissory notes.",
        },
      ],
      promissoryNote: {
        name: "Dark Pact",
        description:
          "ACTION: Place this card face up in your play area. When you give a number of commodities to the Empyrean player equal to your maximum commodity value, you each gain 1 trade good. If you activate a system that contains 1 or more of the Empyrean player's units, return this card to the Empyrean player. ACTION: Place this card face up in your play area. When you and the Empyrean player cast votes for the same outcome, cast 4 additional votes for that outcome. If you activate a system that contains 1 or more of the Empyrean player's units, return this card to the Empyrean player.",
      },
      technologies: [
        {
          name: "Aetherstream",
          type: TECH_TYPES.PROPULSION,
          description:
            "After you or one of your neighbors activates a system that is adjacent to an anomaly, you may apply +1 to the move value of all of that player's ships during this tactical action.",
        },
        {
          name: "Voidwatch",
          type: TECH_TYPES.BIOTIC,
          description:
            "After a player moves ships into a system that contains 1 or more of your units, they must give you 1 promissory note from their hand, if able.",
        },
      ],
      startingTechnologies: ["dark-energy-tap"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Dynamo",
          stats: {
            cost: 8,
            combat: "5 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "After any player's unit in this system or an adjacent system uses SUSTAIN DAMAGE, you may spend 2 influence to repair that unit.",
          ],
        },
        mech: {
          name: "Watcher",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "You may remove this unit from a system that contains or is adjacent to another player's units to cancel an action card played by that player.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Void Tether",
          description:
            "When you activate a system that contains or is adjacent to a unit or planet you control, you may place or move 1 of your void tether tokens onto a border that system shares with another system; other players do not treat those systems as adjacent to each other unless you allow it.",
        },
      },
      leaders: {
        agent: {
          name: "Acamar",
          unlockCriteria: "At Game Start",
          ability:
            "After a player moves ships into a system that does not contain any planets: You may exhaust this card; that player gains 1 command token.",
        },
        commander: {
          name: "Xuange",
          unlockCriteria: "Be neighbors with all other players",
          ability:
            "After another player moves ships into a system that contains 1 of your command tokens: You may return that token to your reinforcements.",
        },
        hero: {
          name: "Conservator Procyon",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "MULTIVERSE SHIFT ACTION: Place 1 frontier token in each system that does not contain any planets and does not already have a frontier token. Then, explore each frontier token that is in a system that contains 1 or more of your ships. Then, purge this card.",
        },
      },
    },
    "The Federation of Sol": {
      abilities: [
        {
          name: "ORBITAL DROP",
          description:
            "ACTION: Spend 1 token from your strategy pool to place 2 infantry from your reinforcements on 1 planet you control.",
        },
        {
          name: "VERSATILE",
          description:
            "When you gain command tokens during the status phase, gain 1 additional command token.",
        },
      ],
      promissoryNote: {
        name: "Military Support",
        description:
          "At the start of the Sol player's turn: Remove 1 token from the Sol player's strategy pool, if able, and return it to their reinforcements. Then, you may place 2 infantry from your reinforcements on any planet you control. Then, return this card to the Sol player.",
      },
      startingTechnologies: ["antimass-deflectors", "neural-motivator"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 5,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Genesis",
          stats: {
            cost: 8,
            combat: "5 (x2)",
            move: 1,
            capacity: 12,
          },
          abilities: [
            "Sustain Damage",
            "At the end of the status phase, place 1 infantry from your reinforcements in this system's space area.",
          ],
        },
        mech: {
          name: "ZS Thunderbolt M2",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "DEPLOY: After you use your ORBITAL DROP faction ability, you may spend 3 resources to place 1 mech on that planet.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Bellum Gloriosum",
          description:
            "When you produce a ship that has capacity, you may also produce any combination of ground forces or fighters up to that ship's capacity; they do not count against your PRODUCTION limit.",
        },
        infantry: {
          description:
            "Federation of Sol Infantry are better at combat than standard Infantry, and once upgraded are more likely to be returned to their home system when destroyed.",
          tiers: [
            {
              name: "Spec Ops I",
              stats: { cost: "1x2", combat: 7 },
              abilities: [],
            },
            {
              name: "Spec Ops II",
              stats: { cost: "1x2", combat: 6 },
              abilities: [
                "After this unit is destroyed, roll 1 die. If the result is 5 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system.",
              ],
            },
          ],
        },
        carrier: {
          description:
            "Federation of Sol Carriers have 2 more capacity than regular Carriers, and when upgraded gain the Sustain Damage ability.",
          tiers: [
            {
              name: "Advanced Carrier I",
              stats: { cost: 3, combat: 9, move: 1, capacity: 6 },
              abilities: [],
            },
            {
              name: "Advanced Carrier II",
              stats: { cost: 3, combat: 9, move: 2, capacity: 8 },
              abilities: ["Sustain Damage"],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Evelyn Delouis",
          unlockCriteria: "At Game Start",
          ability:
            "At the start of a ground combat round: You may exhaust this card to choose 1 ground force in the active system; that ground force rolls 1 additional die during that combat round.",
        },
        commander: {
          name: "Claire Gibson",
          unlockCriteria:
            "Control planets that have a combined total of at least 12 resources.",
          ability:
            "At the start of a ground combat on a planet you control: You may place 1 infantry from your reinforcements on that planet.",
        },
        hero: {
          name: "Jace X. 4th Air Legion",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "HELIO COMMAND ARRAY ACTION: Remove each of your command tokens from the game board and return them to your reinforcements. Then, purge this card.",
        },
      },
    },
    "The Firmament": {
      abilities: [
        {
          name: "PLOTS WITHIN PLOTS",
          description:
            "You can score secret objectives already scored by other players, if you fulfill their requirements; This does not count against your secret objective limit or the number you can score in a round. When you score another player's secret objective do not score a victory point. Instead, place a face down plot card into your play area with that player's control token on it.",
        },
        {
          name: "PUPPETS OF THE BLADE",
          description:
            "If you have at least one plot card in your play area, gain the following ability: ACTION: Purge the Firmaments faction sheet, leaders, planet card, and promissory note, then gain all of the faction components for The Obsidian.",
        },
      ],
      promissoryNote: {
        name: "Black Ops",
        description:
          "When you receive this card: If you are not The Firmament, the Firmament player may place 1 facedown plot card in their play area with your control token on it. Then, gain 2 command tokens, gain 2 trade goods, and purge this card.",
      },
      technologies: [
        {
          name: "Plane Splitter",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "When you gain this card, put The Fracture into play. Flip this card if the Obsidian faction is in play.",
        },
        {
          name: "Neural Parasite",
          type: TECH_TYPES.BIOTIC,
          description:
            "At the start of the status phase, you may place 1 infantry from your reinforcements on a planet you control in your home system. Flip this card if the Obsidian faction is in play.",
        },
      ],
      startingTechnologyChoice: {
        count: 1,
        options: [
          "neural-motivator",
          "psychoarchaeology",
          "sarween-tools",
          "scanlink-drone-network",
        ],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Heaven's Eye",
          stats: {
            cost: 8,
            combat: "5 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "If the Active System contains units that belong to a player who has a Control Token on one of your Plots, apply +1 to this ship's move value and repair it at the end of every Combat Round.",
          ],
        },
        mech: {
          name: "Viper EX-23",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "When ground forces are committed to this planet, you may choose for your units to coexist, if they were not already. Flip this card if your faction becomes the Obsidian.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "The Sowing",
          description:
            "When you gain this card and at the start of the status phase, you may place up to three of your trade goods on this card. Flip this card if you become The Obsidian faction.",
        },
      },
      leaders: {
        agent: {
          name: "Myru Vos",
          unlockCriteria: "At Game Start",
          ability:
            "When a player moves ships: You may exhaust this card; if you do, SPACE CANNON cannot be used against those ships. If they are not transporting units, they can also move through other players' ships.",
        },
        commander: {
          name: "Captain Aroz",
          unlockCriteria: "Have one plot card in play.",
          ability:
            "You may treat planets in systems that contain your ships as if you controlled them for the purpose of scoring secret objectives.",
        },
        hero: {
          name: "Sharsiss",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "THE BLADE BECKONS ACTION: Place 1 of your plot cards in play with any other player's control token on it. Then, you may place any player's control token on 1 of your in-play plot cards; one plot cannot have two of the same player's tokens. Then, purge this card.",
        },
      },
    },
    "The Ghosts of Creuss": {
      abilities: [
        {
          name: "QUANTUM ENTANGLEMENT",
          description:
            "You treat all systems that contain either an alpha or beta wormhole as adjacent to each other. Game effects cannot prevent you from using this ability.",
        },
        {
          name: "SLIPSTREAM",
          description:
            "During your tactical actions, apply +1 to the move value of each of your ships that starts its movement in your home system or in a system that contains either an alpha or beta wormhole.",
        },
        {
          name: "CREUSS GATE",
          description:
            "When you create the game board, place the Creuss Gate (tile 17) where your home system would normally be placed. The Creuss Gate system is not a home system. Then, place your home system (tile 51) in your play area.",
        },
      ],
      promissoryNote: {
        name: "Creuss Iff",
        description:
          "At the start of your turn during the action phase: Place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player's ships. Then, return this card to the Creuss player.",
      },
      technologies: [
        {
          name: "Wormhole Generator",
          type: TECH_TYPES.PROPULSION,
          description:
            "At the start of the status phase, place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player's ships",
        },
        {
          name: "Wormhole Generator Ω",
          type: TECH_TYPES.PROPULSION,
          description:
            "ACTION: Exhaust this card to place or move a Creuss wormhole token into either a system that contains a planet you control or a non-home system that does not contain another player's ships.",
        },
        {
          name: "Dimensional Splicer",
          type: TECH_TYPES.WARFARE,
          description:
            "At the start of space combat in a system that contains a wormhole and 1 or more of your ships, you may produce 1 hit and assign it to 1 of your opponent's ships.",
        },
      ],
      startingTechnologies: ["gravity-drive"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 2,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Hil Colish",
          stats: {
            cost: 8,
            combat: 5,
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "This ship's system contains a delta wormhole. During movement, this ship may move before or after your other ships.",
          ],
        },
        mech: {
          name: "Icarus Drive",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "After any player activates a system, you may remove this unit from the game board to place or move a Creuss wormhole token into this system.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Particle Synthesis",
          description:
            "Each wormhole in a system that contains your ships gains PRODUCTION 1 as if it were a unit you control. Reduce the combined cost of units you produce in systems that contain wormholes by 1 for each wormhole in that system.",
        },
      },
      leaders: {
        agent: {
          name: "Emissary Taivra",
          unlockCriteria: "At Game Start",
          ability:
            "After a player activates a system that contains a non-delta wormhole: You may exhaust this card; if you do, that system is adjacent to all other systems that contain a wormhole during this tactical action.",
        },
        commander: {
          name: "Sai Seravus",
          unlockCriteria:
            "Have units in 3 systems that contain alpha or beta wormholes.",
          ability:
            "After your ships move: For each ship that has a capacity value and moved through 1 or more wormholes, you may place 1 fighter from your reinforcements with that ship if you have unused capacity in the active system.",
        },
        hero: {
          name: "Riftwalker Meian",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "SINGULARITY REACTOR ACTION: Swap the positions of any 2 systems that contain wormholes or your units, other than the Creuss system and the Wormhole Nexus. Then, purge this card.",
        },
      },
    },
    "The L1Z1X Mindnet": {
      abilities: [
        {
          name: "ASSIMILATE",
          description:
            "When you gain control of a planet, replace each PDS and space dock that is on that planet with a matching unit from your reinforcements.",
        },
        {
          name: "HARROW",
          description:
            "At the end of each round of ground combat, your ships in the active system may use their Bombardment abilities against your opponent's ground forces on the planet.",
        },
      ],
      promissoryNote: {
        name: "Cybernetic Enhancements",
        description:
          "At the start of your turn: Remove 1 token from the L1Z1X player's strategy pool and return it to his reinforcements. Then, place 1 command token from your reinforcements in your strategy pool. Then, return this card to the L1Z1X player. When you gain command tokens during the status phase: Gain 1 additional command token. Then, return this card to the L1Z1X player.",
      },
      technologies: [
        {
          name: "Inheritance Systems",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "You may exhaust this card and spend 2 resources when you research a technology; ignore all of that technology's prerequisites.",
        },
      ],
      startingTechnologies: ["plasma-scoring", "neural-motivator"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 5,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "[0.0.1]",
          stats: {
            cost: 8,
            combat: "5 (x2)",
            move: 1,
            capacity: 5,
          },
          abilities: [
            "Sustain Damage",
            "During a space combat, hits produced by this ship and by your dreadnoughts in this system must be assigned to non-fighter ships if able.",
          ],
        },
        mech: {
          name: "Annihilator",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "While not participating in ground combat, this unit can use its BOMBARDMENT ability on planets in its system as if it were a ship.",
            "Sustain Damage",
            "Bombardment 8",
          ],
        },
        breakthrough: {
          name: "Fealty Uplink",
          description:
            "When you gain control of a planet, place infantry from your reinforcements equal to that planet's influence value on that planet.",
        },
        dreadnought: {
          description:
            "L1Z1X Dreadnoughts have a greater capacity than regular Dreadnoughts, and once upgraded have more effective bombardment.",
          tiers: [
            {
              name: "Super-Dreadnought I",
              stats: { cost: 4, combat: 5, move: 1, capacity: 2 },
              abilities: ["Sustain Damage Bombardment 5"],
            },
            {
              name: "Super-Dreadnought II",
              stats: { cost: 4, combat: 4, move: 2, capacity: 2 },
              abilities: [
                'Sustain Damage Bombardment 4 This unit cannot be destroyed by "Direct Hit" action cards.',
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "I48S",
          unlockCriteria: "At Game Start",
          ability:
            "After a player activates a system: You may exhaust this card to allow that player to replace 1 of their infantry in the active system with 1 mech from their reinforcements.",
        },
        commander: {
          name: "2RAM",
          unlockCriteria: "Have 4 dreadnoughts on the Board",
          ability:
            "Units that have PLANETARY SHIELD do not prevent you from using Bombardment.",
        },
        hero: {
          name: "The Helmsman",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "DARK SPACE NAVIGATION ACTION: Choose 1 system that does not contain other players' ships; you may move your flagship and any number of your dreadnoughts from other systems into the chosen system. Then, purge this card.",
        },
      },
    },
    "The Mahact Gene-sorcerers": {
      abilities: [
        {
          name: "EDICT",
          description:
            "When you win a combat, place 1 command token from your opponent's reinforcements in your fleet pool if it does not already contain 1 of that player's tokens; other player's tokens in your fleet pool increase your fleet limit but cannot be redistributed.",
        },
        {
          name: "IMPERIA",
          description:
            "While another player's command token is in your fleet pool, you can use the ability of that player's commander, if it is unlocked.",
        },
        {
          name: "HUBRIS",
          description:
            'During setup, purge your " Alliance " promissory note. Other players cannot give you their "Alliance" promissory note.',
        },
      ],
      promissoryNote: {
        name: "Scepter of Dominion",
        description:
          "At the start of the strategy phase: Choose 1 non-home system that contains your units; each other player who has a token on the Mahact player's command sheet places a token from their reinforcements in that system. Then, return this card to the Mahact player.",
      },
      technologies: [
        {
          name: "Genetic Recombination",
          type: TECH_TYPES.BIOTIC,
          description:
            "You may exhaust this card before a player casts votes; that player must cast at least 1 vote for an outcome of your choice or remove 1 token from their fleet pool and return it to their reinforcements.",
        },
      ],
      startingTechnologies: ["predictive-intelligence", "bio-stims"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Arvicon Rex",
          stats: {
            cost: 8,
            combat: "5 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "During combat against an opponent whose command token is not in your fleet pool, apply +2 to the results of this unit's combat rolls.",
          ],
        },
        mech: {
          name: "Starlancer",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "After a player whose command token is in your fleet pool activates this system, you may spend their token from your fleet pool to end their turn; they gain that token.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Vaults of the Heir",
          description:
            "ACTION: Exhaust this card and purge 1 of your technologies to gain 1 relic.",
        },
        infantry: {
          description:
            "Mahact Infantry turn into commodities or trade goods when they are destroyed.",
          tiers: [
            {
              name: "Crimson Legionnaire I",
              stats: { cost: "1x2", combat: 8 },
              abilities: [
                "After this unit is destroyed, gain 1 commodity or convert 1 of your commodities to a trade good.",
              ],
            },
            {
              name: "Crimson Legionnaire II",
              stats: { cost: "1x2", combat: 7 },
              abilities: [
                "After this unit is destroyed, gain 1 commodity or convert 1 of your commodities to a trade good. Then, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Jae Mir Kan",
          unlockCriteria: "At Game Start",
          ability:
            "When you would spend a command token during the secondary ability of a strategic action: You may exhaust this card to remove 1 of the active player's command tokens from the board and use it instead.",
        },
        commander: {
          name: "Il Na Viroset",
          unlockCriteria:
            "Have 2 other factions' command tokens in your fleet pool.",
          ability:
            "During your tactical actions, you can activate systems that contain your command tokens. If you do, return both command tokens to your reinforcements and end your turn.",
        },
        hero: {
          name: "Airo Shir Aur",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "BENEDICTION ACTION: Move all units in the space area of any system to an adjacent system that contains a different player's ships. Space Combat is resolved in that system; neither player can retreat or resolve abilities that would move their ships. Then, purge this card.",
        },
      },
    },
    "The Mentak Coalition": {
      abilities: [
        {
          name: "AMBUSH",
          description:
            "At the start of a space combat, you may roll 1 die for each of up to 2 of your cruisers or destroyers in the system. For each result equal to or greater than that ship's combat value, produce 1 hit; your opponent must assign it to 1 of their ships.",
        },
        {
          name: "PILLAGE",
          description:
            "After 1 of your neighbors gains trade goods or resolves a transaction, if they have 3 or more trade goods, you may take 1 of their trade goods or commodities.",
        },
      ],
      promissoryNote: {
        name: "Promise of Protection",
        description:
          "ACTION: Place this card face-up in your play area. While this card is in your play area, the Mentak player cannot use their Pillage faction ability against you. If you activate a system that contains 1 or more of the Mentak player's units, return this card to the Mentak player.",
      },
      technologies: [
        {
          name: "Salvage Operations",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "After you win or lose a space combat, gain 1 trade good; if you won the combat, you may also produce 1 ship in that system of any ship type that was destroyed during the combat",
        },
        {
          name: "Mirror Computing",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "When you spend trade goods, each trade good is worth 2 resources or influence instead of 1",
        },
      ],
      startingTechnologies: ["plasma-scoring", "sarween-tools"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 2,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Fourth Moon",
          stats: {
            cost: 8,
            combat: "7 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "Other players' ships in this system cannot use Sustain Damage.",
          ],
        },
        mech: {
          name: "Moll Terminus",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "Other players' ground forces on this planet cannot use SUSTAIN DAMAGE.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "The Table's Grace",
          description:
            "If you have the Cruiser II unit upgrade technology, flip this card and place it on top of Cruiser II.",
        },
      },
      leaders: {
        agent: {
          name: "Suffi An",
          unlockCriteria: "At Game Start",
          ability:
            "After the PILLAGE faction ability is used against another player: You may exhaust this card; if you do, you and that player each draw 1 action card.",
        },
        commander: {
          name: "S'Ula Mentarion",
          unlockCriteria: "Have 4 cruisers on the game board",
          ability:
            "After you win a space combat: You may force your opponent to give you 1 promissory note from their hand.",
        },
        hero: {
          name: "Ipswitch, Loose Cannon",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "SLEEPER CELL At the start of space combat that you are participating in: You may purge this card; if you do, for each other player's ship that is destroyed during this combat, place 1 ship of that type from your reinforcements in the active system.",
        },
      },
    },
    "The Naalu Collective": {
      abilities: [
        {
          name: "TELEPATHIC",
          description:
            'At the end of the strategy phase, place the Naalu "0" token on your strategy card; you are first in initiative order.',
        },
        {
          name: "FORESIGHT",
          description:
            "After another player moves ships into a system that contains 1 or more of your ships, you may place 1 token from your strategy pool in an adjacent system that does not contain another player's ships; move your ships from the active system into that system.",
        },
      ],
      promissoryNote: {
        name: "Gift of Prescience",
        description:
          'At the end of the strategy phase: Place this card face-up in your play area and place the Naalu "0" token on your strategy card; you are first in the initiative order. The Naalu player cannot use their TELEPATHIC faction ability during this game round. Return this card to the Naalu player at the end of the status phase.',
      },
      technologies: [
        {
          name: "Neuroglaive",
          type: TECH_TYPES.BIOTIC,
          description:
            "After another player activates a system that contains 1 or more of your ships, that player removes 1 token from their fleet pool and returns it to their reinforcements.",
        },
      ],
      startingTechnologies: ["sarween-tools", "neural-motivator"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Matriarch",
          stats: {
            cost: 8,
            combat: "9 (x2)",
            move: 1,
            capacity: 6,
          },
          abilities: [
            "Sustain Damage",
            "During an invasion in this system, you may commit fighters to planets as if they were ground forces. When combat ends, return those units to the space area.",
          ],
        },
        mech: {
          name: "Iconoclast",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "During combat against an opponent who has at least 1 relic fragment, apply +2 to the results of this unit's combat rolls.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Mindsieve",
          description:
            "When you would resolve the secondary ability of another player's strategy card, you may give them a promissory note to resolve it without spending a command token.",
        },
        fighter: {
          description:
            "Naalu Fighters are stronger than standard Fighters. When upgraded, they gain further improved combat and only count as 1/2 toward the fleet limit as opposed to 1.",
          tiers: [
            {
              name: "Hybrid Crystal Fighter I",
              stats: { cost: "1x2", combat: 8 },
              abilities: [],
            },
            {
              name: "Hybrid Crystal Fighter II",
              stats: { cost: "1x2", combat: 7, move: 2 },
              abilities: [
                "This unit may move without being transported. Each fighter in excess of your ships' capacity counts as 1/2 of a ship against your fleet pool.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Z'eu",
          unlockCriteria: "At Game Start",
          ability:
            "After an agenda is revealed: You may exhaust this card to look at the top card of the agenda deck. Then, you may show that card to 1 other player.",
        },
        commander: {
          name: "M'aban",
          unlockCriteria: "Have 12 fighters on the game board",
          ability:
            "You may produce 1 additional fighter for their cost; these additional units do not count against your production limit.",
        },
        hero: {
          name: "The Oracle",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "C-RADIUM GEOMETRY At the end of the status phase: You may force each other player to give you 1 promissory note from their hand. If you do, purge this card.",
        },
      },
    },
    "The Naaz-Rokha Alliance": {
      abilities: [
        {
          name: "DISTANT SUNS",
          description:
            "When you explore a planet that contains 1 of your mechs, you may draw 1 additional card; choose 1 to resolve and discard the rest.",
        },
        {
          name: "FABRICATION",
          description:
            "ACTION: Either purge 2 of your relic fragments of the same type to gain 1 relic; or purge 1 of your relic fragments to gain 1 command token.",
        },
      ],
      promissoryNote: {
        name: "Black Market Forgery",
        description:
          "ACTION: Purge 2 of your relic fragments of the same type to gain 1 relic. Then, return this card to the Naaz-Rokha player.",
      },
      technologies: [
        {
          name: "Supercharge",
          type: TECH_TYPES.WARFARE,
          description:
            "At the start of a combat round, you may exhaust this card to apply +1 to the result of each of your unit's combat rolls during this combat round.",
        },
        {
          name: "Pre-Fab Arcologies",
          type: TECH_TYPES.BIOTIC,
          description: "After you explore a planet, ready that planet.",
        },
      ],
      startingTechnologies: ["psychoarchaeology", "ai-development-algorithm"],
      startingUnits: {
        [FACTION_UNIT_TYPES.MECH]: 1,
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Visz el Vir",
          stats: {
            cost: 8,
            combat: "9 (x2)",
            move: 1,
            capacity: 4,
          },
          abilities: [
            "Sustain Damage",
            "Your mechs in this system roll 1 additional die during combat.",
          ],
        },
        mech: {
          name: "Eidolon",
          stats: {
            cost: 2,
            combat: "6 (x2)",
          },
          abilities: [
            "If this unit is in the space area of the active system at the start of a space combat, flip this card.",
            "Sustain Damage",
            "(This card begins the game with this side face up)",
          ],
        },
        breakthrough: {
          name: "Absolute Synergy",
          description:
            "When you have 4 mechs in the same system, you may return 3 of those mechs to your reinforcements to flip this card and place it on top of your mech card.",
        },
      },
      leaders: {
        agent: {
          name: "Garv and Gunn",
          unlockCriteria: "At Game Start",
          ability:
            "At the end of a player's turn: You may exhaust this card to allow that player to explore 1 of their planets.",
        },
        commander: {
          name: "Dart and Tai",
          unlockCriteria: "Have 3 mechs in 3 systems",
          ability:
            "After you gain control of a planet that was controlled by another player: You may explore that planet.",
        },
        hero: {
          name: "Hesh and Prit",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "PERFECT SYNTHESIS ACTION: Gain 1 relic and perform the secondary ability of up to 2 readied or unchosen strategy cards; during this action, spend command tokens from your reinforcements instead of your strategy pool. Then, purge this card.",
        },
      },
    },
    "The Nekro Virus": {
      abilities: [
        {
          name: "GALACTIC THREAT",
          description:
            "You cannot vote on agendas. Once per agenda phase, after an agenda is revealed, you may predict aloud the outcome of that agenda. If your prediction is correct, gain 1 technology that is owned by a player who voted how you predicted.",
        },
        {
          name: "TECHNOLOGICAL SINGULARITY",
          description:
            "Once per combat, after 1 of your opponent's units is destroyed, you may gain 1 technology that is owned by that player.",
        },
        {
          name: "PROPAGATION",
          description:
            "You cannot research technology. When you would research a technology, gain 3 command tokens instead.",
        },
      ],
      promissoryNote: {
        name: "Antivirus",
        description:
          "At the start of a combat: Place this card face-up in your play area. While this card is in your play area, the Nekro player cannot use their TECHNOLOGICAL SINGULARITY faction ability against you. If you activate a system that contains 1 or more of the Nekro player's units, return this card to the Nekro player.",
      },
      technologies: [
        {
          name: "Valefar Assimilator X",
          type: TECH_TYPES.NONE,
          description:
            "When you would gain another player's technology using 1 of your faction abilities, you may place the \"X\" assimilator token on a faction technology owned by that player instead. While that token is on a technology, this card gains that technology's text. You cannot place an assimilator token on technology that already has an assimilator token.",
        },
        {
          name: "Valefar Assimilator Y",
          type: TECH_TYPES.NONE,
          description:
            'When you would gain another players technology using 1 of your faction abilities, you may place the "Y" assimilator token on a faction technology owned by that player instead. While that token is on a technology, this card gains that technology\'s text. You cannot place an assimilator token on technology that already has an assimilator token.',
        },
      ],
      startingTechnologies: ["dacxive-animators"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 2,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "The Alastor",
          stats: {
            cost: 8,
            combat: "9 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "At the start of a space combat, choose any number of your ground forces in this system to participate in that combat as if they were ships.",
          ],
        },
        mech: {
          name: "Mordred",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            'During combat against an opponent who has an "X" or "Y" token on 1 or more of their technologies, apply +2 to the result of each of this unit\'s combat rolls.',
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Valefar Assimilator Z",
          description:
            "When you would gain another player's technology using one of your faction abilities, you may instead place one of your \"Z\" assimilator tokens on that player's faction sheet. Your flagship gains the text abilities of that faction's flagship in addition to its own.",
        },
      },
      leaders: {
        agent: {
          name: "Nekro Malleon",
          unlockCriteria: "At Game Start",
          ability:
            "During the action phase: You may exhaust this card to choose a player; that player may discard 1 action card or spend 1 command token from their command sheet to gain 2 trade goods.",
        },
        commander: {
          name: "Nekro Acidos",
          unlockCriteria:
            'Own 3 technologies. A "Valefar Assimilator" technology counts only if its X or Y token is on a technology',
          ability: "After you gain a technology: You may draw 1 action card.",
        },
        hero: {
          name: "UNIT.DSGN. FLAYESH",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "POLYMORPHIC ALGORITHM ACTION: Choose a planet that has a technology specialty in a system that contains your units. Destroy any other player's units on that planet. Gain trade goods equal to that planet's combined resource and influence values and gain 1 technology that matches the specialty of that planet. Then, purge this card.",
        },
      },
    },
    "The Nomad": {
      abilities: [
        {
          name: "THE COMPANY",
          description:
            "During setup, take the 2 additional Nomad faction agents and place them next to your faction sheet; you have 3 agents.",
        },
        {
          name: "FUTURE SIGHT",
          description:
            "During the Agenda phase, after an outcome that you voted for or predicted is resolved, gain 1 trade good.",
        },
      ],
      promissoryNote: {
        name: "The Cavalry",
        description:
          "At the start of a space combat against a player other than the Nomad: During this combat, treat 1 of your non-fighter ships as if it has the SUSTAIN DAMAGE ability, combat value, and ANTI-FIGHTER BARRAGE value of the Nomad's flagship. Return this card to the Nomad player at the end of this combat.",
      },
      technologies: [
        {
          name: "Temporal Command Suite",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "After any player's agent becomes exhausted, you may exhaust this card to ready that agent; if you ready another player's agent, you may perform a transaction with that player.",
        },
      ],
      startingTechnologies: ["sling-relay"],
      startingUnits: {
        [FACTION_UNIT_TYPES.FLAGSHIP]: 1,
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Memoria",
          stats: {
            cost: 8,
            combat: "7 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "Anti-Fighter Barrage 8 (x3)",
            "You may treat this unit as if it were adjacent to systems that contain one or more of your mechs.",
          ],
        },
        mech: {
          name: "Quantum Manipulator",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "While this unit is in a space area during combat, you may use its SUSTAIN DAMAGE ability to cancel a hit that is produced against your ships in this system.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Thunder's Paradox",
          description:
            "At the start of any player's turn, you may exhaust 1 of your agents to ready any other agent.",
        },
      },
      leaders: {
        agent: {
          name: "Artuno the Betrayer",
          unlockCriteria: "At Game Start",
          ability:
            "When you gain trade goods from the supply: You may exhaust this card to place an equal number of trade goods on this card. When this card readies, gain the trade goods on this card.",
        },
        agent2: {
          name: "Field Marshal Mercer",
          unlockCriteria: "At Game Start",
          ability:
            "At the end of a player's turn: You may exhaust this card to allow that player to remove up to 2 of their ground forces from the game board and place them on planets they control in the active system.",
        },
        agent3: {
          name: "The Thundarian",
          unlockCriteria: "At Game Start",
          ability:
            'After the "Roll Dice" step of combat: You may exhaust this card. If you do, hits are not assigned to either players\' units. Return to the start of this combat round\'s "Roll Dice" step.',
        },
        commander: {
          name: "Navarch Feng",
          unlockCriteria: "Have 1 scored secret objective",
          ability: "You can produce your flagship without spending resources.",
        },
        hero: {
          name: "Ahk-Syl Siven",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "PROBABILITY MATRIX ACTION: Place this card near the game board; your flagship and units it transports can move out of systems that contain your command tokens during this game round. At the end of that game round, purge this card.",
        },
      },
    },
    "The Ral Nel Consortium": {
      abilities: [
        {
          name: "SURVIVAL INSTINCT",
          description:
            "After another player activates a system that contains your ships, you may move up to 2 of your ships into the active system from adjacent systems that do not contain your command tokens.",
        },
        {
          name: "MINIATURIZATION",
          description:
            "Your structures can be transported by any ship; this does not require or count against capacity. While your structures are in the space area, they cannot use their unit abilities. At the end of your tactical actions, you may place your structures that are in space areas onto planets you control in their respective systems.",
        },
      ],
      promissoryNote: {
        name: "Nano-Link Permit",
        description:
          "After you activate a system: You may move your structures from adjacent systems that do not contain your command tokens onto planets you control in the active system. Then, return this card to the Ral Nel player.",
      },
      technologies: [
        {
          name: "Nanomachines",
          type: TECH_TYPES.WARFARE,
          description:
            "ACTION: Exhaust this card to place 1 PDS on a planet you control. ACTION: Exhaust this card to repair all of your damaged units. ACTION: Exhaust this card and discard 1 action card to draw 1 action card.",
        },
      ],
      startingTechnologyChoice: {
        count: 1,
        options: [
          "neural-motivator",
          "psychoarchaeology",
          "plasma-scoring",
          "ai-development-algorithm",
        ],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.PDS]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Last Dispatch",
          stats: {
            cost: 8,
            combat: "8 (x2)",
            move: 2,
            capacity: 4,
          },
          abilities: [
            "Sustain Damage",
            "When this unit retreats, you may destroy 1 ship in the active system that does not have SUSTAIN DAMAGE.",
          ],
        },
        mech: {
          name: "Alarum",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "At the end of a round of combat on this planet, you may move up to 2 of your ground forces to this planet from planets in adjacent systems.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Data Skimmer",
          description:
            "During the action phase, if you have not passed, when other players would discard action cards, they are placed on this card instead. When you pass, take 1 action card from this card and discard the rest.",
        },
        destroyer: {
          description:
            "Ral Nel Destroyers are able to use the SPACE CANNON ability of structures they carry (via their Miniaturization faction ability). They are also faster than regular Destroyers.",
          tiers: [
            {
              name: "Linkship I",
              stats: { cost: 1, combat: 9, move: 3 },
              abilities: [
                "This unit can use the SPACE CANNON ability of one of your structures in its space area; each structure can only be triggered once. Anti-Fighter Barrage 9 (x2)",
              ],
            },
            {
              name: "Linkship II",
              stats: { cost: 1, combat: 8, move: 4 },
              abilities: [
                "This unit can use the SPACE CANNON ability of one of your structures in its space area; each linkship can trigger the same structure. Anti-Fighter Barrage 6 (x3)",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Kan Kip Rel",
          unlockCriteria: "At Game Start",
          ability:
            "ACTION: Exhaust this card to draw 2 action cards; give 1 of those cards to another player.",
        },
        commander: {
          name: "Watchful Ojz",
          unlockCriteria: "Be the last person to pass during the Action Phase",
          ability:
            "When you declare a retreat: Immediately retreat up to 2 of your ships from the active system to an adjacent system that does not contain another player's ships. Place a command token from your reinforcements into that system.",
        },
        hero: {
          name: "Director Nel",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "SIGNAL INTRUSION After the last player passes: You may choose to no longer be passed; if you do, gain 2 command tokens, draw 1 action card, and purge this card.",
        },
      },
    },
    "The Titans of Ul": {
      abilities: [
        {
          name: "TERRAGENESIS",
          description:
            "After you explore a planet that does not have a sleeper token, you may place or move 1 sleeper token onto that planet.",
        },
        {
          name: "AWAKEN",
          description:
            "After you activate a system that contains 1 or more of your sleeper tokens, you may replace each of those tokens with 1 PDS from your reinforcements.",
        },
        {
          name: "COALESCENCE",
          description:
            'If your flagship or your AWAKEN faction ability places your units into the same space area or onto the same planet as another player\'s units, your units must participate in combat during " Space Combat " or " Ground Combat " steps.',
        },
      ],
      promissoryNote: {
        name: "Terraform",
        description:
          "ACTION: Attach this card to a non-home planet you control other than Mecatol Rex. Its resource and influence values are each increased by 1 and it is treated as having all 3 planet traits (Cultural, Hazardous, and Industrial).",
      },
      startingTechnologies: ["antimass-deflectors", "scanlink-drone-network"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CRUISER]: 2,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Ouranos",
          stats: {
            cost: 8,
            combat: "7 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "DEPLOY: After you activate a system that contains 1 or more of your PDS, you may replace 1 of those PDS with this unit.",
          ],
        },
        mech: {
          name: "Hecatoncheires",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "DEPLOY: When you would place a PDS on a planet, you may place 1 mech and 1 infantry on that planet instead.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Slumberstate Computing",
          description:
            "When COALESCENCE results in a ground combat, if you commit no other units, you may choose for your units to coexist instead. During the status phase, for each player you are coexisting with, you and that player each draw 1 additional action card. Other players may allow you to place a sleeper token on a planet they control.",
        },
        cruiser: {
          description:
            "Titans of Ul Cruisers start with capacity and when upgraded gain the Sustain Damage ability.",
          tiers: [
            {
              name: "Saturn Engine I",
              stats: { cost: 2, combat: 7, move: 2, capacity: 1 },
              abilities: [],
            },
            {
              name: "Saturn Engine II",
              stats: { cost: 2, combat: 6, move: 3, capacity: 2 },
              abilities: ["Sustain Damage"],
            },
          ],
        },
        pds: {
          description:
            "Titans of Ul PDS can participate in Ground Combat and have a Production value.",
          tiers: [
            {
              name: "Hel-Titan I",
              stats: { combat: 7 },
              abilities: [
                "Planetary Shield Space Cannon 6 Sustain Damage Production 1 This unit is treated as both a structure and a ground force. It cannot be transported.",
              ],
            },
            {
              name: "Hel-Titan II",
              stats: { combat: 6 },
              abilities: [
                "Planetary Shield Space Cannon 5 Sustain Damage Production 1 This unit is treated as both a structure and a ground force. It cannot be transported. You may use this unit's SPACE CANNON against ships that are adjacent to this unit's system.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Tellurian",
          unlockCriteria: "At Game Start",
          ability:
            "When a hit is produced against a unit: You may exhaust this card to cancel that hit.",
        },
        commander: {
          name: "Tungstantus",
          unlockCriteria: "Have 5 structures on the game board",
          ability:
            "When 1 or more of your units use PRODUCTION: You may gain 1 trade good.",
        },
        hero: {
          name: "Ul The Progenitor",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "GEOFORM ACTION: Ready Elysium and attach this card to it. Its resource and influence values are each increased by 3, and it gains the SPACE CANNON 5 (x3) ability as if it were a unit.",
        },
      },
    },
    "The Universities of Jol-Nar": {
      abilities: [
        {
          name: "FRAGILE",
          description:
            "Apply -1 to the result of each of your unit's combat rolls.",
        },
        {
          name: "BRILLIANT",
          description:
            'When you spend a command token to resolve the secondary ability of the "Technology" strategy card, you may resolve the primary ability instead.',
        },
        {
          name: "ANALYTICAL",
          description:
            "When you research a technology that is not a unit upgrade technology, you may ignore 1 prerequisite.",
        },
      ],
      promissoryNote: {
        name: "Research Agreement",
        description:
          "After the Jol-Nar player researches a technology that is not a faction technology: Gain that technology. Then, return this card to the Jol-Nar player.",
      },
      technologies: [
        {
          name: "E-Res Siphons",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "After another player activates a system that contains 1 or more of your ships, gain 4 trade goods.",
        },
        {
          name: "Spatial Conduit Cylinder",
          type: TECH_TYPES.PROPULSION,
          description:
            "You may exhaust this card after you activate a system that contains 1 or more of your units; that system is adjacent to all other systems that contain 1 or more of your units during this activation.",
        },
      ],
      startingTechnologies: [
        "antimass-deflectors",
        "sarween-tools",
        "neural-motivator",
        "plasma-scoring",
      ],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 2,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 1,
        [FACTION_UNIT_TYPES.PDS]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "J.N.S. Hylarim",
          stats: {
            cost: 8,
            combat: "6 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "When making a combat roll for this ship, each result of 9 or 10, before applying modifiers, produces 2 additional hits.",
          ],
        },
        mech: {
          name: "Shield Paling",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "Your infantry on this planet are not affected by your FRAGILE faction ability.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Specialized Compounds",
          description:
            'When you research technology using the "Technology" strategy card, you may exhaust a planet that has a technology specialty instead of spending resources; if you do you must research a technology of that colour.',
        },
      },
      leaders: {
        agent: {
          name: "Doctor Sucaban",
          unlockCriteria: "At Game Start",
          ability:
            "When a player spends resources to research: You may exhaust this card to allow that player to remove any number of their infantry from the game board. For each unit removed, reduce the resources spent by 1.",
        },
        commander: {
          name: "Ta Zern",
          unlockCriteria: "Own 8 technologies",
          ability:
            "After you roll dice for a unit ability: You may reroll any of those dice.",
        },
        hero: {
          name: "Rin, The Master's Legacy",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "GENETIC MEMORY ACTION: For each non-unit upgrade technology you own, you may replace that technology with any technology of the same color from the deck. Then, purge this card.",
        },
      },
    },
    "The Vuil'raith Cabal": {
      abilities: [
        {
          name: "DEVOUR",
          description:
            "Capture your opponent's non-structure units that are destroyed during combat.",
        },
        {
          name: "AMALGAMATION",
          description:
            "When you produce a unit, you may return 1 captured unit of that type to produce that unit without spending resources.",
        },
        {
          name: "RIFTMELD",
          description:
            "When you research a unit upgrade technology, you may return 1 captured unit of that type to ignore all of the technology's prerequisites.",
        },
      ],
      promissoryNote: {
        name: "Crucible",
        description:
          "After you activate a system: Your ships do not roll for gravity rifts during this movement; apply an additional +1 to the move values of your ships that would move out of or through a gravity rift instead. Then, return this card to the Vuil'raith player.",
      },
      technologies: [
        {
          name: "Vortex",
          type: TECH_TYPES.WARFARE,
          description:
            "ACTION: Exhaust this card to choose another player's non-structure unit in a system that is adjacent to 1 or more of your space docks. Capture 1 unit of that type from that player's reinforcements",
        },
      ],
      startingTechnologies: ["self-assembly-routines"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "The Terror Between",
          stats: {
            cost: 8,
            combat: "5 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "Bombardment 5",
            "Capture all other non-structure units that are destroyed in this system, including your own.",
          ],
        },
        mech: {
          name: "Reanimator",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "When your infantry on this planet are destroyed, place them on your faction sheet; those units are captured.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Al'Raith Ix Ianovar",
          description:
            "This breakthrough causes The Fracture to enter play without a roll, if it is not already in play. After this card enters play, move up to 2 ingress tokens into systems that contain gravity rifts. Apply +1 to the Move value of each of your ships that start their movement in The Fracture.",
        },
        "space-dock": {
          description:
            "Vuil'Raith Dimensional Tears are Gravity Rifts, meaning they give +1 movement to all ships moving out of their system. These gravity rifts are represented by a token placed under the space dock. If a space dock that has a dimensional tear token under it is destroyed, the dimensional tear token is immediately removed from the board.",
          tiers: [
            {
              name: "Dimensional Tear I",
              stats: {},
              abilities: [
                "This system is a gravity rift; your ships do not roll for this gravity rift. Place a dimensional tear token beneath this unit as a reminder. Up to 6 fighters in this system do not count against your ships' capacity.",
              ],
            },
            {
              name: "Dimensional Tear II",
              stats: {},
              abilities: [
                "This system is a gravity rift; your ships do not roll for this gravity rift. Place a dimensional tear token beneath this unit as a reminder. Up to 12 fighters in this system do not count against your ships' capacity.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "The Stillness of Stars",
          unlockCriteria: "At Game Start",
          ability:
            "After another player replenishes commodities: You may exhaust this card to convert their commodities to trade goods and capture 1 unit from their reinforcements that has a cost equal to or lower than their commodity value.",
        },
        commander: {
          name: "That Which Molds Flesh",
          unlockCriteria: "Have units in 3 Gravity Rifts",
          ability:
            "When you produce fighter or infantry units: Up to 2 of those units do not count against your PRODUCTION limit.",
        },
        hero: {
          name: "It Feeds on Carrion",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "DIMENSIONAL ANCHOR ACTION: Each other player rolls a die for each of their non-fighter ships that are in or adjacent to a system that contains a dimensional tear; on a 1-3, capture that unit. If this causes a player's ground forces or fighters to be removed, also capture those units. Then, purge this card.",
        },
      },
    },
    "The Winnu": {
      abilities: [
        {
          name: "BLOOD TIES",
          description:
            "You do not have to spend influence to remove the custodians token from Mecatol Rex.",
        },
        {
          name: "RECLAMATION",
          description:
            "After you resolve a tactical action during which you gained control of Mecatol Rex, you may place 1 PDS and 1 space dock from your reinforcements on Mecatol Rex.",
        },
      ],
      promissoryNote: {
        name: "Acquiescence",
        description:
          "At the end of the strategy phase: Exchange 1 of your strategy cards with a strategy card that was chosen by the Winnu player. Then, return this card to the Winnu player. When the Winnu player resolves a strategic action: You do not have to spend or place a command token to resolve the secondary ability of that strategy card. Then, return this card to the Winnu player",
      },
      technologies: [
        {
          name: "Lazax Gate Folding",
          type: TECH_TYPES.PROPULSION,
          description:
            "During your tactical actions, if you do not control Mecatol Rex, treat its system as if it contains both an alpha and beta wormhole. ACTION: If you control Mecatol Rex, exhaust this card to place 1 infantry from your reinforcements on Mecatol Rex.",
        },
        {
          name: "Hegemonic Trade Policy",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "Exhaust this card when 1 or more of your units use PRODUCTION; swap the resource and influence values of 1 planet you control during that use of Production",
        },
      ],
      startingTechnologyChoice: {
        count: 1,
        options: [
          "antimass-deflectors",
          "dark-energy-tap",
          "neural-motivator",
          "psychoarchaeology",
          "sarween-tools",
          "scanlink-drone-network",
          "plasma-scoring",
          "ai-development-algorithm",
        ],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 2,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Salai Sai Corian",
          stats: {
            cost: 8,
            combat: 7,
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "When this unit makes a combat roll, it rolls a number of dice equal to the number of your opponent's non-fighter ships in this system.",
          ],
        },
        mech: {
          name: "Reclaimer",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "After you resolve a tactical action where you gained control of this planet, you may place 1 PDS or 1 Space Dock from your reinforcements on this planet.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Imperator",
          description:
            "Apply +1 to the results of each of your unit's combat rolls for each \"Support for the Throne\" in your opponent's play area. After you activate a system that contains a legendary planet, apply +1 to the move value of 1 of your ships during this tactical action.",
        },
      },
      leaders: {
        agent: {
          name: "Berekar Berekon",
          unlockCriteria: "At Game Start",
          ability:
            "When 1 or more of a player's units use PRODUCTION: You may exhaust this card to reduce the combined cost of the produced units by 2.",
        },
        commander: {
          name: "Rickar Rickani",
          unlockCriteria:
            "Control Mecatol Rex or enter into a combat in the Mecatol Rex system.",
          ability:
            "During combat: Apply +2 to the result of each of your unit's combat rolls in the Mecatol Rex system, your home system, and each system that contains a legendary planet",
        },
        hero: {
          name: "Mathis Mathinus",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "IMPERIAL SEAL ACTION: Perform the primary ability of any strategy card. Then, choose any number of other players. Those players may perform the secondary ability of that strategy card. Then, purge this card.",
        },
      },
    },
    "The Xxcha Kingdom": {
      abilities: [
        {
          name: "PEACE ACCORDS",
          description:
            'After you resolve the primary or secondary ability of the "Diplomacy" strategy card, you may gain control of 1 planet other than Mecatol Rex that does not contain any units and is in a system that is adjacent to a planet you control.',
        },
        {
          name: "QUASH",
          description:
            "When an agenda is revealed, you may spend 1 token from your strategy pool to discard that agenda and reveal 1 agenda from the top of the deck. Players vote on this agenda instead.",
        },
      ],
      promissoryNote: {
        name: "Political Favor",
        description:
          "When an agenda is revealed: Remove 1 token from the Xxcha player's strategy pool and return it to their reinforcements. Then, discard the revealed agenda and reveal 1 agenda from the top of the deck. Players vote on this agenda instead. Then, return this card to the Xxcha player.",
      },
      technologies: [
        {
          name: "Nullification Field",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "After another player activates a system that contains 1 or more of your ships, you may exhaust this card and spend 1 token from your strategy pool; immediately end that player's turn.",
        },
        {
          name: "Instinct Training",
          type: TECH_TYPES.BIOTIC,
          description:
            "You may exhaust this card and spend 1 token from your strategy pool when another player plays an action card; cancel that action card.",
        },
      ],
      startingTechnologies: ["graviton-laser-system"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 2,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Loncara Ssodu",
          stats: {
            cost: 8,
            combat: "7 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "Space Cannon 5 (x3)",
            "You may use this unit's SPACE CANNON against ships that are in adjacent systems.",
          ],
        },
        mech: {
          name: "Indomitus",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "You may use this unit's Space Cannon ability against ships that are in adjacent systems.",
            "Sustain Damage",
            "Space Cannon 8",
          ],
        },
        breakthrough: {
          name: "Archon's Gift",
          description:
            "You can spend influence as if it were resources. You can spend resources as if it were influence.",
        },
      },
      leaders: {
        agent: {
          name: "Ggrocuto Rinn",
          unlockCriteria: "At Game Start",
          ability:
            "ACTION: Exhaust this card to ready any planet; if that planet is in a system that is adjacent to a planet you control, you may remove 1 infantry from that planet and return it to its reinforcements.",
        },
        commander: {
          name: "Elder Qanoj",
          unlockCriteria:
            "Control planets that have a combined value of at least 12 influence",
          ability:
            "Each planet you exhaust to cast votes provides 1 additional vote. Game effects cannot prevent you from voting on an agenda.",
        },
        hero: {
          name: "Xxekir Grom",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "POLITICAL DATA NEXUS ACTION: You may discard 1 law from play. Look at the top 5 cards of the agenda deck. Choose 2 to reveal, and resolve each as if you had cast 1 vote for an outcome of your choice; discard the rest. Other players cannot resolve abilities during this action. Then, purge this card.",
        },
      },
    },
    "The Yin Brotherhood": {
      abilities: [
        {
          name: "INDOCTRINATION",
          description:
            "At the start of a ground combat, you may spend 2 influence to replace 1 of your opponent's participating infantry with 1 infantry from your reinforcements.",
        },
        {
          name: "DEVOTION",
          description:
            "After each space battle round, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit and assign it to 1 of your opponent's ships in that system.",
        },
      ],
      promissoryNote: {
        name: "Greyfire Mutagen",
        description:
          "After a system is activated: The Yin player cannot use faction abilities or faction technology during this tactical action. Then, return this card to the Yin player. At the start of a ground combat against 2 or more ground forces that are not controlled by the Yin player: Replace 1 of your opponent's infantry with 1 infantry from your reinforcements. Then, return this card to the Yin player.",
      },
      technologies: [
        {
          name: "Impulse Core",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "At the start of a space combat, you may destroy 1 of your cruisers or destroyers in the active system to produce 1 hit against your opponent's ships; that hit must be assigned by your opponent to 1 of their non-fighter ships, if able.",
        },
        {
          name: "Yin Spinner",
          type: TECH_TYPES.BIOTIC,
          description:
            "After 1 or more of your units use PRODUCTION, place 1 infantry from your reinforcements on a planet you control in that system.",
        },
        {
          name: "Yin Spinner Ω",
          type: TECH_TYPES.BIOTIC,
          description:
            "After you produce units, place up to 2 infantry from your reinforcements on any planet you control or in any space area that contains 1 or more of your ships.",
        },
      ],
      startingTechnologies: ["sarween-tools"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 4,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Van Hauge",
          stats: {
            cost: 8,
            combat: "9 (x2)",
            move: 1,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "When this ship is destroyed, destroy all ships in this system.",
          ],
        },
        mech: {
          name: "Moyin's Ashes",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "DEPLOY: When you use your INDOCTRINATION faction ability, you may spend 1 additional influence to replace your opponent's unit with 1 mech instead of 1 infantry.",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Yin Ascendant",
          description:
            "When you gain this card or score a public objective, gain the alliance ability of a random, unused faction.",
        },
      },
      leaders: {
        agent: {
          name: "Brother Milor",
          unlockCriteria: "At Game Start",
          ability:
            "After a player's destroyer or cruiser is destroyed: You may exhaust this card; if you do, that player may place up to 2 fighters from their reinforcements in that unit's system.",
        },
        commander: {
          name: "Brother Omar",
          unlockCriteria: "Use your INDOCTRINATION faction ability",
          ability:
            "This card satisfies a green technology prerequisite. You may produce 1 additional infantry for their cost. These infantry do not count against your production limit.",
        },
        hero: {
          name: "Dannel of the Tenth",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "SPINNER OVERDRIVE ACTION: For each planet that contains any number of your infantry, either ready that planet or place an equal number of infantry from your reinforcements on that planet. Then, purge this card.",
        },
      },
    },
    "The Yssaril Tribes": {
      abilities: [
        {
          name: "STALL TACTICS",
          description: "ACTION: Discard 1 action card from your hand.",
        },
        {
          name: "SCHEMING",
          description:
            "When you draw 1 or more action cards, draw 1 additional action card. Then, choose and discard 1 action card from your hand.",
        },
        {
          name: "CRAFTY",
          description:
            "You can have any number of action cards in your hand. Game effects cannot prevent you from using this ability.",
        },
      ],
      promissoryNote: {
        name: "Spy Net",
        description:
          "At the start of your turn: Look at the Yssaril player's hand of action cards. Choose 1 of those cards and add it to your hand. Then, return this card to the Yssaril player.",
      },
      technologies: [
        {
          name: "Transparasteel Plating",
          type: TECH_TYPES.BIOTIC,
          description:
            "During your turn of the action phase, players that have passed cannot play action cards.",
        },
        {
          name: "Mageon Implants",
          type: TECH_TYPES.BIOTIC,
          description:
            "ACTION: Exhaust this card to look at another player's hand of action cards. Choose 1 of those cards and add it to your hand.",
        },
      ],
      startingTechnologies: ["neural-motivator"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 5,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Y'sia Y'ssrila",
          stats: {
            cost: 8,
            combat: "5 (x2)",
            move: 2,
            capacity: 3,
          },
          abilities: [
            "Sustain Damage",
            "This ship can move through systems that contain other player's ships.",
          ],
        },
        mech: {
          name: "Blackshade Infiltrator",
          stats: {
            cost: 2,
            combat: 6,
          },
          abilities: [
            "DEPLOY: After you use your STALL TACTICS faction ability, you may place 1 mech on a planet you control",
            "Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Deepgloom Executable",
          description:
            "You can allow other players to use your STALL TACTICS or SCHEMING faction abilities; when you do, you may resolve a transaction with that player. During the action phase, that transaction does not count against the once-per-player transactions limit for that turn.",
        },
      },
      leaders: {
        agent: {
          name: "Ssruu",
          unlockCriteria: "At Game Start",
          ability:
            "This card has the text ability of each other player's agent, even if that agent is exhausted.",
        },
        commander: {
          name: "So Ata",
          unlockCriteria: "Have 7 action cards",
          ability:
            "After another player activates a system that contains your units: You may look at that player's action cards, promissory notes, or secret objectives.",
        },
        hero: {
          name: "Kyver, Blade and Key",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "GUILD OF SPIES ACTION: Each other player shows you 1 action card from their hand. For each player, you may either take that card or force that player to discard 3 random action cards from their hand. Then, purge this card.",
        },
      },
    },
    "The Monks of Kolume": {
      abilities: [
        {
          name: "STARFALL GUNNERY",
          description:
            "During movement, while you are not the active player, you may only use 1 of your unit's SPACE CANNON. During each of your actions, up to 3 of your non- fighter ships gain SPACE CANNON 8.",
        },
        {
          name: "DELIBERATE ACTION",
          description:
            "You cannot redistribute command tokens during the status phase. When you pass, you may place 1 command token from your reinforcements in 1 pool on your command sheet that contains no command tokens.",
        },
        {
          name: "MEDITATION",
          description:
            "ACTION: Spend 1 command token from your strategy pool to ready 1 of your technologies.",
        },
      ],
      promissoryNote: {
        name: "Combinatorial Bypass",
        description:
          "At the start of invasion, place this card in your play area. During this invasion, all other player’s units lose SPACE CANNON and PLANETARY SHIELD. At the start of your next turn, return this card to the Kolume player.",
      },
      technologies: [
        {
          name: "Applied Biothermics",
          type: TECH_TYPES.WARFARE,
          description:
            "When you pass, you may gain 1 commodity for each other player who has already passed. ACTION: Exhaust this card.",
        },
        {
          name: "Omniscience Field",
          type: TECH_TYPES.WARFARE,
          description:
            "After a system is activated, you may exhaust this card to choose 1 player. Apply +1 or -1 to all rolls that player makes during this tactical action.",
        },
      ],
      startingTechnologyChoice: {
        count: 1,
        options: ["graviton-laser-system", "predictive-intelligence"],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Halberd",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage Space Cannon 7 Hits produced by the SPACE CANNON abilities of your units in this system cannot be canceled.",
          ],
        },
        mech: {
          name: "Rook",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "Hits produced by this unit cannot be assigned to non- fighter ships. After you spend a command token from your strategy pool, repair this unit. Space Cannon 8 (x2) Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Synchronicity VI",
          description:
            "ACTION : Exhaust this card to either gain 1 command token, or research a technology of the same color as one of your exhausted technologies. When you exhaust a technology, gain 1 commodity.",
        },
      },
      leaders: {
        agent: {
          name: "Disciple Fran - Meditative Prodigy",
          unlockCriteria: "At Game Start",
          ability:
            "ACTION: Exhaust this card to allow a player to redistribute 1 of their command tokens on their command sheet.",
        },
        commander: {
          name: "Issac of Sinci - Kinematics Specialist",
          unlockCriteria:
            "During the action phase, ready 1 of your technologies",
          ability: "Apply +1 to each of your unit's ability rolls.",
        },
        hero: {
          name: "Wonell the Silent - Grandmaster of the Order",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "COIL OVERCHARGE - STREAKS IN THE NIGHT ACTION: Place this card near the game board; during this game round, after you perform a component action, you may use 1 of your unit's SPACE CANNON against ships in or adjacent to that unit's system, without rolling additional dice. At the end of this game round, purge this card.",
        },
      },
    },
    "The Free Systems Compact": {
      abilities: [
        {
          name: "RALLY TO THE CAUSE",
          description:
            "Once per action, after you produce 1 or more ships in your home system, you may produce up to 2 ships in a system that contains a cultural, hazardous, or industrial planet and does not contain a legendary planet or other players’ units.",
        },
        {
          name: "DIPLOMATS",
          description:
            "Once per action, you may exhaust 1 uncontrolled planet’s planet card that is on the game board to spend its resources or influence.",
        },
        {
          name: "FREE PEOPLE",
          description:
            "During setup, for each non-home planet other than Mecatol Rex on the game board, place that planet’s planet card face up on the game board.",
        },
      ],
      promissoryNote: {
        name: "Broadcast Teams",
        description:
          "When you gain control of a planet during a tactical action : If the active system does not contain another player’s ships, you may produce up to 2 ships in that system. Then, return this card to the Free Systems player.",
      },
      technologies: [
        {
          name: "Envoy Network",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "At the start of the agenda phase, you may choose and exhaust 1 cultural, 1 hazardous, and 1 industrial planet. When you cast 1 or more votes, if you exhaust at least 1 cultural, 1 hazardous, and 1 industrial planet to cast votes, you may cast 4 additional votes.",
        },
        {
          name: "Covert Strike Teams",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "At the start of a ground combat, you may roll 1 die for each of up to 2 of your ground forces on that planet. For each result equal to or greater than that unit's combat value, produce 1 hit; your opponent must assign it to 1 of their units on that planet.",
        },
      ],
      startingTechnologies: ["psychoarchaeology"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 2,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          tiers: [
            {
              name: "Vox",
              stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
              abilities: [
                "Sustain Damage When this unit makes a combat roll, it rolls 1 additional die for each planet in this system of any single trait.",
              ],
            },
            {
              name: "",
              stats: {},
              abilities: [],
            },
          ],
        },
        mech: {
          name: "Liberator",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "DEPLOY : After you use your RALLY TO THE CAUSE faction ability in a system, you may spend 1 trade good to place 1 mech on a planet you control adjacent to that system. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Galactic Movement",
          description:
            "After you spend a strategy token, you may place 1 infantry from your reinforcements into coexistence on any cultural, hazardous, or industrial planet that contains the active player's ground forces. Your infantry tokens on planets you control can be accompanied by your control tokens instead of plastic pieces.",
        },
      },
      leaders: {
        agent: {
          name: "Cordo Haved - Friendly Diplomat",
          unlockCriteria: "At Game Start",
          ability:
            "While ready, this card has the text ability of each legendary planet ability card any player controls, even if that card is exhausted. You may allow another player to use this card's ability.",
        },
        commander: {
          name: "President Cyhn - Crisis Leader",
          unlockCriteria:
            "Each non- legendary planet on the game board is controlled",
          ability:
            "After you gain control of a non-home planet during a tactical action : If you have 1 or more ships in the active system, you may produce 1 ship in that system.",
        },
        hero: {
          name: "Count Otto P’may - Inspiring Rhetorician",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "HEART OF REBELLION - FREEDOM OR DEATH ACTION: Ready a non-home planet other than Mecatol Rex that you control, remove all units on that planet and attach this card to it. Units cannot be committed to, produced on, or placed on this planet.",
        },
      },
    },
    "The Cheiran Hordes": {
      abilities: [
        {
          name: "TEEMING",
          description:
            "During setup, place 2 additional dreadnoughts and 1 additional mech in your reinforcements.",
        },
        {
          name: "MOULT",
          description:
            "After you win a space combat as the defender, you may produce 1 ship in the active system, reducing the cost by 1 for each of your non- fighter ships destroyed during that combat.",
        },
        {
          name: "BYSSUS",
          description:
            "You may treat your mechs on planets you control as structures for any purpose other than scoring objectives.",
        },
      ],
      promissoryNote: {
        name: "Carcinisation",
        description:
          "When 1 of your non- fighter ships is destroyed during combat in a system: You may place 2 fighters from your reinforcements in the space area of that system. At the end of that combat, return this card to the Cheiran Hordes player.",
      },
      technologies: [
        {
          name: "Brood Pod",
          type: TECH_TYPES.WARFARE,
          description:
            "After another player activates a system that contains 1 of your structures, you may exhaust this card to produce 1 ship in the active system. For each of your structures in the active system, you may remove that unit from the game board to reduce the cost of the produced ship by 3.",
        },
      ],
      startingTechnologyChoice: {
        count: 1,
        options: ["magen-defense-grid", "self-assembly-routines"],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.MECH]: 1,
        [FACTION_UNIT_TYPES.INFANTRY]: 2,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Lithodax",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage Anti-Fighter Barrage 7 (x2) When this unit makes a combat or ability roll, it rolls 1 additional die if this system is adjacent to or contains 1 of your structures.",
          ],
        },
        mech: {
          name: "Nauplius",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "When this unit is destroyed, you may place 1 infantry from your reinforcements on this planet. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Matriphagy",
          description:
            "At the end of your turn, you may exhaust this card to choose 1 of your non-fighter ships on the game board; replace that ship with 1 or more units from your reinforcements that have a total combined cost less than that ship's cost value.",
        },
        dreadnought: {
          tiers: [
            {
              name: "Chitin Hulk I",
              stats: { cost: 4, combat: 5, move: 1, capacity: 1 },
              abilities: [
                "Sustain Damage Bombardment 5 When this unit is destroyed, you may place 1 fighter from your reinforcements in this system’s space area.",
              ],
            },
            {
              name: "Chitin Hulk II",
              stats: { cost: 4, combat: 5, move: 2, capacity: 1 },
              abilities: [
                'Sustain Damage Bombardment 5 This unit cannot be destroyed by "Direct Hit" action cards. When this unit is destroyed, you may place 1 fighter or 1 destroyer from your reinforcements in this system’s space area.',
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Operator Kkavras - Subspace Grapple",
          unlockCriteria: "At Game Start",
          ability:
            "At the end of a player’s turn: Exhaust this card to allow that player to remove 1 of their command tokens from the game board and place that token in an adjacent system that contains 1 or more of their structures and none of their command tokens.",
        },
        commander: {
          name: "Spc. Phquaiset - Alloyed Carapace",
          unlockCriteria: "Have 4 structures on non-home planets",
          ability:
            "While you are the defender during ground combat : After your opponent produces 1 or more hits against your units, you may spend 1 commodity or 1 trade good to cancel 1 of those hits.",
        },
        hero: {
          name: "Thakt Clqua - Polemarch",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "CONTINGENCY PLAN - BIOMASS EVENT ACTION: Gather units from your reinforcements up to equal to your starting units. Place these units, in any combination, in the space area of any systems that contain 1 of your structures and no other players’ ships, or on planets you control. Then, purge this card.",
        },
      },
    },
    "The Nokar Sellships": {
      abilities: [
        {
          name: "HIRED GUNS",
          description:
            "After a system is activated, you may choose up to 3 of your ships. Those ships are also treated as the active player’s and participate in combat as their units. At the end of this tactical action, that player may replace each of those ships in the active system with their own of the same unit type. Then, remove the rest from the game board.",
        },
        {
          name: "PRIVATE FLEET",
          description:
            "During setup, place 4 additional destroyers in your reinforcements.",
        },
        {
          name: "DESPERADOS",
          description:
            "When 1 or more of your units use PRODUCTION, 1 destroyer does not count against your PRODUCTION limit. Apply +1 to your destroyers ' move values while you are not the active player.",
        },
      ],
      promissoryNote: {
        name: "Nokar Navigator",
        description:
          "At the start of a space combat : During this combat, the active system is adjacent to each system that contains a planet you control for the purposes of announcing and resolving retreats. At the end of this combat, return this card to the Nokar player.",
      },
      technologies: [
        {
          name: "Local Contracts",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "During the action phase : You may exhaust this card to use the PRODUCTION ability of 1 of your units. Then, place 1 command token from your reinforcements in that unit’s system.",
        },
      ],
      startingTechnologyChoice: {
        count: 2,
        options: [
          "dark-energy-tap",
          "psychoarchaeology",
          "ai-development-algorithm",
        ],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Annah Regia",
          stats: { cost: 8, combat: "9 (x2)", move: 2, capacity: 3 },
          abilities: [
            "Sustain Damage Apply +1 to the results of this unit’s combat rolls for every 2 destroyers you control.",
          ],
        },
        mech: {
          name: "Freelance Outfit",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "You may treat this system as adjacent to the active system for the purposes of declaring and resolving retreats. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Mercenary Captains",
          description:
            "ACTION : Exhaust this card to place 1 neutral cruiser and 2 neutral destroyers into a non-fracture system that contains no non-neutral ships. After another player wins a space combat in a system that contains your ships, gain 2 commodities or 1 command token.",
        },
        destroyer: {
          tiers: [
            {
              name: "Sabre I",
              stats: { cost: 1, combat: 8, move: 2 },
              abilities: [
                "Anti-Fighter Barrage 9 (x2) After this unit is destroyed during combat, roll a die, on a result of 9 or 10, produce up to 1 hit against your opponent’s ships.",
              ],
            },
            {
              name: "Sabre II",
              stats: { cost: 1, combat: 7, move: 2 },
              abilities: [
                "Anti-Fighter Barrage 6 (x3) After this unit is destroyed during combat, roll a die, on a result equal to or greater than 7, produce up to 1 hit against your opponent’s ships.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Sal Sparrow - The Privateer",
          unlockCriteria: "At Game Start",
          ability:
            "After movement : You may exhaust this card to allow 1 player with 1 or more ships in the active system to place 1 destroyer from their reinforcements in that system. Then, you may resolve 1 transaction with that player.",
        },
        commander: {
          name: "Jack Hallard - The Commodore",
          unlockCriteria: "Another player moves 1 of your ships",
          ability:
            "Before you assign hits to your ships during a space combat, if you announced a retreat, cancel up to 2 hits. During combat, you may treat the active system as adjacent to each system adjacent to your home system.",
        },
        hero: {
          name: "Starsails - Mercenary King",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "IRREFUTABLE OFFER - GALACTICE PRESS GANG ACTION: Place this card near the game board, until the end of this game round, each of your planets gains the PRODUCTION 3 ability as if it were a unit. At the end of this game round, purge this card.",
        },
      },
    },
    "The Lanefir Remnants": {
      abilities: [
        {
          name: "A NEW EDIFICE",
          description:
            "You may not use technology specialties. When you would gain a relic, instead purge it and explore up to 3 planets you control.",
        },
        {
          name: "ICONOCLASM",
          description:
            "When researching a non- unit upgrade technology, you may purge 1 of your relic fragments to ignore 1 prerequisite on the technology you are researching.",
        },
        {
          name: "WAR STORIES",
          description:
            "Once per action, after you win a combat, you may explore 1 planet you control, or if the active system does not contain any planets, the frontier exploration deck in the active system.",
        },
      ],
      promissoryNote: {
        name: "Spoils of War",
        description:
          "After you win a combat : Place this card face-up in your play area to explore 1 planet you control. At the start of the Lanefir player’s turn, return this card to the Lanefir player.",
      },
      technologies: [
        {
          name: "Spark Thrusters",
          type: TECH_TYPES.WARFARE,
          description:
            "ACTION: Spend 1 command token from your strategy pool or purge 1 relic fragment to move 1 of your ships to an adjacent system that contains no other player’s ships. If you spent a command token, exhaust this card.",
        },
        {
          name: "ATS Armaments",
          type: TECH_TYPES.WARFARE,
          description:
            "After you explore, or purge 1 or more relic fragments, place 1 commodity token on this card. At the start of a round of combat, remove any number of tokens from this card to reroll up to that many of your dice during this round of combat.",
        },
      ],
      startingTechnologyChoice: {
        count: 2,
        options: [
          "dark-energy-tap",
          "scanlink-drone-network",
          "ai-development-algorithm",
        ],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Memory of Dusk",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage At the end of a tactical action in this system, you may explore 1 planet you control in this system.",
          ],
        },
        mech: {
          name: "Troubadour",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "DEPLOY : At the start of your turn, purge 1 of your relic fragments to place 1 mech on a planet you control, if you do, you may end your turn. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Erasure Corps.",
          description:
            "After another player purges 1 or more non-action card components, gain 1 command token or ready this card. During the action phase, you may exhaust this card to explore 1 planet you control.",
        },
      },
      leaders: {
        agent: {
          name: "Vassa Hagi - Plunderer of Lost Arks",
          unlockCriteria: "At Game Start",
          ability:
            "When a player explores, you may exhaust this card to allow that player to discard 1 exploration card they drew and draw another.",
        },
        commander: {
          name: "Master Halbert - Quartermaster",
          unlockCriteria: "7 relic fragments have been purged",
          ability:
            "After you explore a planet: You may place 1 infantry from your reinforcements on that planet.",
        },
        hero: {
          name: "The Venerable - Keeper of Myths",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "RESONANCE CASCADE - BROKEN LEGACY ACTION: Draw and reveal up to 3 relics. For each relic that started this action in a player's play area, gain 1 command token ; you may swap that relic for 1 of the revealed relics or a relic in a player's play area. Then, shuffle the remaining relics into the relic deck and purge this card.",
        },
      },
    },
    "The Florzen Profiteers": {
      abilities: [
        {
          name: "MERCENARIES",
          description:
            "At the start of a space combat, you may remove up to 2 fighters you control in a system adjacent to the active system. Then, choose 1 player participating in that combat ; that player places the same number of fighters from their reinforcements in the active system.",
        },
        {
          name: "DATA LEAK",
          description:
            "When you would gain a relic, you may draw 1 additional card; choose 1 to gain and return the rest to the relic deck. Then, shuffle the relic deck.",
        },
        {
          name: "SHADOW MARKETS",
          description:
            "When you explore a planet, you may treat that planet as if it had the same trait as another planet you control.",
        },
      ],
      promissoryNote: {
        name: "Underground Market",
        description:
          "When you would gain a relic : You may draw 1 additional card; choose 1 to gain and return the rest to the relic deck. Then, shuffle the relic deck. Then, return this card to the Florzen player.",
      },
      technologies: [
        {
          name: "Blackmail Programs",
          type: TECH_TYPES.BIOTIC,
          description:
            "When a player would perform a strategic action, you may exhaust this card and spend 1 token from your strategy pool to end that player's turn; the strategic action is not resolved and the strategy card is not exhausted.",
        },
      ],
      startingTechnologies: ["neural-motivator", "scanlink-drone-network"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.FIGHTER]: 4,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Man O' War",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 5 },
          abilities: [
            "Sustain Damage Other players cannot play action cards during a space combat in this system.",
          ],
        },
        mech: {
          name: "Privateer",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "You may spend influence as resources to produce this unit. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Reverie Implants",
          description:
            "After a system that contains 2 or more planets you control is activated, you may exhaust this card. If you do, you and the active player each secretly spend 0, 1, or 2 trade goods. Then, reveal the spent trade goods; if you spent the same number of trade goods, explore 1 planet you control; otherwise, end that player’s turn.",
        },
        fighter: {
          tiers: [
            {
              name: "Corsair I",
              stats: { cost: "1 (x2)", combat: 9, move: 1 },
              abilities: [
                "Anti-Fighter Barrage 9 This unit may move without being transported. Fighters in excess of your ships’ capacity count against your fleet pool.",
              ],
            },
            {
              name: "Corsair II",
              stats: { cost: "1 (x2)", combat: 8, move: 3 },
              abilities: [
                "Anti-Fighter Barrage 8 This unit may move without being transported. Fighters in excess of your ships’ capacity count against your fleet pool.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Sal Gavda - Black Market Dealer",
          unlockCriteria: "At Game Start",
          ability:
            "At the start of a player's turn : You may exhaust this card to allow that player to remove an attachment from a non-home planet they control and attach it to a non-home planet they control other than Mecatol Rex adjacent to that planet's system.",
        },
        commander: {
          name: "Quaxdol Junitas - The Unseen Hand",
          unlockCriteria:
            "Have the outcome you voted for or predicted on an agenda resolved",
          ability:
            "After the second agenda is revealed during the agenda phase : You may ready 1 planet you control; explore that planet, if able.",
        },
        hero: {
          name: "Banua Gowen - Administrator of Minds",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "SLEEPER CELLS - SHADY ACQUISITIONS ACTION: Place 2 fighters from your reinforcements in each system that contains 1 or more planets you control and no other player's ships. Then, you may remove 1 attachment from any planet in a system that contains 1 or more of your ships and attach it to 1 planet in your home system. Then, purge this card.",
        },
      },
    },
    "The Myko-Mentori": {
      abilities: [
        {
          name: "PRESCIENT MEMORIES",
          description:
            "You have 4 “Omen” Dice. At the start of the strategy phase, roll all 4 Omen dice and place them near your faction sheet.",
        },
        {
          name: "DIVINATION",
          description:
            "Before you would roll a die, you may instead return 1 Omen die near your faction sheet to your reinforcements to resolve that roll as if it had the result of that die.",
        },
        {
          name: "NECROPHAGE",
          description:
            "Apply +1 to your commodity value for each space dock you control. After the first round of combat, gain 1 commodity or convert 1 of your commodities to a trade good.",
        },
      ],
      promissoryNote: {
        name: "Gift of Insight",
        description:
          "ACTION: Place this card face up in your play area. While this card is in your play area, once per turn, after you roll a die, you may reroll that die. If you activate a system that contains 1 or more of the Myko-Mentori player’s units, return this card to the Myko-Mentori player.",
      },
      technologies: [
        {
          name: "Psychoactive Armaments",
          type: TECH_TYPES.BIOTIC,
          description:
            "After your opponent makes a combat roll, you may exhaust this card. If you do, for each of their units that did not produce a hit, you may reroll that unit's combat roll; any hits that roll produces are produced against your opponent’s units instead.",
        },
      ],
      startingTechnologies: ["predictive-intelligence"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 6,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Psyclobea Qarnyx",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage Once per round of space combat, when a non- fighter ship in this system is destroyed, you may gain 1 commodity.",
          ],
        },
        mech: {
          name: "Amandia Pholdis",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "After this unit is destroyed, roll a die. If the result is 6 or greater, place the unit on this card. At the start of your turn, you may replace 1 infantry you control with a unit that is on this card. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Dreamwalkers",
          description:
            "Capture other player's infantry that are destroyed during combat on planets you control. After each round of ground combat on a planet you control, roll a die. On a result of 7 or greater, place up to 1 of your captured infantry onto that planet, as if it were your own.",
        },
        "space-dock": {
          tiers: [
            {
              name: "Mycelium Ring I",
              stats: {},
              abilities: [
                "Planetary Shield Production X+2 (X is the resource value of the planet) This unit’s PRODUCTION value is equal to 2 more than the resource value of this planet. DEPLOY : When you gain control of a planet, you may replace 4 infantry on that planet with 1 space dock.",
              ],
            },
            {
              name: "Mycelium Ring II",
              stats: {},
              abilities: [
                "Planetary Shield Production X+5 (X is the resource value of the planet) This unit’s PRODUCTION value is equal to 5 more than the resource value of this planet. DEPLOY : When you gain control of a planet, you may replace 3 infantry on that planet with 1 space dock.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Lactarius Indigo - Omen Caller",
          unlockCriteria: "At Game Start",
          ability:
            "Before a player rolls a die, you may instead exhaust this card and choose 1 Omen die near the Myko-Mentori player’s faction sheet; resolve that die roll as if it had the result of that Omen die.",
        },
        commander: {
          name: "Amanita Muscaria - Rampant Growth",
          unlockCriteria: "Have 4 commodities on your faction sheet",
          ability:
            "After another player produces 1 or more hits against your units during space combat, you may spend 1 commodity or 1 trade good to cancel 1 of those hits.",
        },
        hero: {
          name: "Coprinus Comatus - Necromancer",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "SOUL CAGE - RISE AGAIN When another player’s hero would be purged, instead attach it to this card. You may resolve this card as if it instead had the text of any single hero attached to this card. When this card is purged, purge each of its attachments as well.",
        },
      },
    },
    "The Augurs of Ilyxum": {
      abilities: [
        {
          name: "ORACLE AI",
          description:
            "After the speaker reveals an unrevealed public objective, choose 1 unrevealed public objective card and place that card on your faction sheet. You may look at the card on your faction sheet at any time.",
        },
        {
          name: "LIMITED VISION",
          description:
            "You may not place a stage II objective card on your faction sheet until all stage I objectives have been revealed.",
        },
        {
          name: "PROBABILITY ALGORITHMS",
          description:
            "When the speaker would reveal the next public objective, they must reveal the public objective card on your faction sheet instead. Place that card near the other public objectives.",
        },
      ],
      promissoryNote: {
        name: "Read the Fates",
        description:
          "ACTION: Place this face up in your play area. While this card is in your play area, you may look at the public objective card on the Ilyxum player’s faction sheet. If you activate a system that contains 1 or more of the Ilyxum player's units, return this card to the Ilyxum player.",
      },
      technologies: [
        {
          name: "Psychographics",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "During the status phase, you may score 1 additional public objective instead of a secret objective.",
        },
        {
          name: "Sentient Datapool",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "At the start of the status phase, you may spend 3 trade goods to research 1 technology.",
        },
      ],
      startingTechnologies: [
        "ai-development-algorithm",
        "scanlink-drone-network",
      ],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 2,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Nemsys",
          stats: { cost: 8, combat: 5, move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage When this unit makes a combat roll, it rolls 1 additional die for each secret objective you have scored.",
          ],
        },
        mech: {
          name: "Iledrith",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "DEPLOY : After researching a technology, you may place 1 mech on a legendary planet, or a planet that has a technology specialty, that you control. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Cryptic Insights",
          description:
            "When you explore a planet, you may discard that card to draw 1 action card instead.",
        },
      },
      leaders: {
        agent: {
          name: "Clodho - Speaker",
          unlockCriteria: "At Game Start",
          ability:
            "After a player explores a legendary planet or a planet that has a technology specialty, you may exhaust this card to allow that player to gain 2 trade goods.",
        },
        commander: {
          name: "Lachis - Reader",
          unlockCriteria:
            "Win a combat in a system that contains a legendary planet or a planet that has a technology specialty",
          ability:
            "This card satisfies a yellow technology prerequisite. When you cast at least 1 vote, cast 1 additional vote for every 2 technologies you own.",
        },
        hero: {
          name: "Atropha - Weaver",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "SYNCHRONICITY ALGORITHM - WOVEN FATE ACTION: Draw 3 objective cards from 1 of the public objective decks; choose up to 1 of those cards to replace an objective card on a player’s faction sheet, and return the others to the bottom of their corresponding decks. Then, purge this card.",
        },
      },
    },
    "The Edyn Mandate": {
      abilities: [
        {
          name: "GRACE",
          description:
            "Once per action phase, after you resolve the primary ability of a strategy card, you may resolve the secondary ability of 1 readied or unchosen strategy card with a lower printed initiative number than that strategy card.",
        },
        {
          name: "DECREE",
          description:
            "You may prevent ships from moving through anomalies that contain your ground forces.",
        },
        {
          name: "RADIANCE",
          description:
            "After an agenda is revealed, you may predict aloud the outcome of that agenda. If your prediction is correct, place 1 command token from another player's reinforcements in a Sigil.",
        },
      ],
      promissoryNote: {
        name: "Edyn Rider",
        description:
          "After an agenda is revealed : You cannot vote on this agenda. Predict aloud an outcome of this agenda. If your prediction is correct, place 1 command token from another player’s reinforcements in a system that contains your units. Then, return this card to the Edyn player.",
      },
      technologies: [
        {
          name: "Unity Algorithm",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "Once per agenda phase, after an agenda is revealed, you may predict aloud an outcome of that agenda. If your prediction is correct, you may score 1 public objective if you fulfill its requirements; each other player who voted for that outcome draws 1 secret objective.",
        },
        {
          name: "Encrypted Trade Hub",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "You may exhaust this card to allow a player to exchange 1 of their relics or agendas as part of a transaction. You always vote last during the agenda phase. When an outcome you voted for or predicted is resolved, each player who voted for that outcome gains 1 commodity.",
        },
      ],
      startingTechnologyChoice: {
        count: 3,
        options: [
          "antimass-deflectors",
          "dark-energy-tap",
          "neural-motivator",
          "psychoarchaeology",
          "sarween-tools",
          "scanlink-drone-network",
          "plasma-scoring",
          "ai-development-algorithm",
        ],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 2,
        [FACTION_UNIT_TYPES.FIGHTER]: 4,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Kaliburn",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage Apply +1 to the results of this unit's combat rolls for each law in play.",
          ],
        },
        mech: {
          name: "Rune Bearer",
          stats: { cost: 2, combat: 6 },
          abilities: [
            'This system is a "Sigil" anomaly. Place a Sigil token beneath this unit as a reminder. Game effects cannot prevent you from using this ability. Sustain Damage',
          ],
        },
        breakthrough: {
          name: "Arms Brokerage",
          description:
            "ACTION : Exhaust this card and show another player 1 of your unscored secret objectives; that player must show you 1 of their unscored secret objectives, at random, or allow you to place 1 ground force from your reinforcements into coexistence on a planet they control.",
        },
      },
      leaders: {
        agent: {
          name: "Allant - Elder Voice",
          unlockCriteria: "At Game Start",
          ability:
            "After a player passes : You may exhaust this card to choose 1 player; that player may perform up to 1 action. Then, look at the top card of the agenda deck; you may discard that agenda card.",
        },
        commander: {
          name: "Kadryn - Highest Grace",
          unlockCriteria: "Have 1 or more laws in play",
          ability:
            "When any game effect would allow you to score a public objective, you may instead draw 1 secret objective.",
        },
        hero: {
          name: "Midir - Living Will",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "GOLDEN ORDER - PEACE ETERNAL ACTION: For each Sigil on the game board, draw 1 agenda. Reveal and resolve each agenda in any order as if you had cast 1 vote for an outcome of your choice. Other players cannot resolve abilities during this action. Then, purge this card.",
        },
      },
    },
    "The L'tokk Khrask": {
      abilities: [
        {
          name: "LITHOIDS",
          description:
            "During the agenda phase, the number of votes you cast is instead equal to the combined resource value of the planets that you exhaust.",
        },
        {
          name: "GARDEN WORLDS",
          description:
            "Apply +1 to the resource values of your planets that do not contain 1 or more ground forces.",
        },
        {
          name: "METEOR SLINGS",
          description:
            "When your units use BOMBARDMENT against a planet another player controls, you may cancel any number of hits you produce to place that many infantry from your reinforcements onto that planet. Those units participate in ground combat, if able.",
        },
      ],
      promissoryNote: {
        name: "Stone Speakers",
        description:
          "During a tactical action, when you produce 1 or more hits during a BOMBARDMENT roll: For each hit you produced, you may instead place 1 infantry from your reinforcements on the planet being bombarded. Then, return this card to the L’tokk Khrask player.",
      },
      technologies: [
        {
          name: "Stone's Embrace",
          type: TECH_TYPES.BIOTIC,
          description:
            "When you would spend a token from your strategy pool, you may exhaust 1 planet you control to spend 1 token from your reinforcements instead.",
        },
      ],
      startingTechnologies: ["plasma-scoring", "scanlink-drone-network"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CRUISER]: 3,
        [FACTION_UNIT_TYPES.FIGHTER]: 1,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Splintering Gale",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage At the start of a space combat in this system, choose up to 2 non- fighter ships to gain SUSTAIN DAMAGE until the end of combat.",
          ],
        },
        mech: {
          name: "Megalith",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "Units other than your mechs do not make combat rolls during the first round of ground combat on this planet. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Mended Grove",
          description:
            "Gain the Grove card. When you resolve METEOR SLINGS, if you cancel all hits produced, you may place your units into coexistence ; you cannot commit those coexisting ground forces during this action.",
        },
        cruiser: {
          tiers: [
            {
              name: "Shattered Sky I",
              stats: { cost: 2, combat: 7, move: 2, capacity: 1 },
              abilities: ["Bombardment 8"],
            },
            {
              name: "Shattered Sky II",
              stats: { cost: 2, combat: 6, move: 3, capacity: 2 },
              abilities: ["Bombardment 6"],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Udosh B’rtul - Grove Tender",
          unlockCriteria: "At Game Start",
          ability:
            "When a player would spend influence : You may exhaust this card to allow that player to spend the resources of 1 non-home planet they control as influence, in addition to its influence.",
        },
        commander: {
          name: "Hkot Tokal - Crystal Druid",
          unlockCriteria: "Win a ground combat on a planet you do not control",
          ability:
            "At the start of invasion in a system that contains 1 or more planets: You may place 1 infantry unit from your reinforcements in that system’s space area if you have unused capacity in that system.",
        },
        hero: {
          name: "Vehl-Tikar - Arch Druid",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "CRYSTAL CHORUS - WORLDS AWAKEN ACTION: Purge this card to choose up to 4 planets; exhaust or ready each of those planets.",
        },
      },
    },
    "The Dih-Mohn Flotilla": {
      abilities: [
        {
          name: "CAPITAL FLEET",
          description:
            "Destroyers count as 1/2 of a ship against your fleet pool.",
        },
        {
          name: "MIGRANT EXPLORERS",
          description:
            "After you explore a frontier token in a system, you may explore a planet you control that is adjacent to that system.",
        },
        {
          name: "FLOTILLA",
          description:
            "You cannot have more infantry than non- fighter ships in the space area of a system.",
        },
      ],
      promissoryNote: {
        name: "Combat Drills",
        description:
          "When 1 of your ships would be destroyed: Instead of destroying that ship, place this card face up in your play area. Return this card to the Dih-Mohn player at the start of the status phase.",
      },
      technologies: [
        {
          name: "Impressment Programs",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "When you explore a planet, you may produce 1 ship in that planet’s system. ACTION: Exhaust this card and 1 planet you control to explore that planet.",
        },
      ],
      startingTechnologies: ["scanlink-drone-network", "dark-energy-tap"],
      startingUnits: {
        [FACTION_UNIT_TYPES.MECH]: 1,
        [FACTION_UNIT_TYPES.INFANTRY]: 2,
        [FACTION_UNIT_TYPES.DESTROYER]: 2,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 2,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Maximus",
          stats: { cost: 8, combat: "5 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage After this unit moves into the active system, you may produce up to 2 units that have a combined cost of 4 or less in that system.",
          ],
        },
        mech: {
          name: "Repairitor",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "At the start of a combat in this system you may repair 1 unit you control that is participating in that combat. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Exodus Engineering",
          description:
            "Once per space combat, after 1 of your opponent's non-fighter ships is destroyed, you may either exhaust this card to place 1 frontier token in the active system, or produce 1 or 2 non-fighter ships in that system to ready this card. You can produce ships in systems that contain both your ships and another player's ships.",
        },
        dreadnought: {
          tiers: [
            {
              name: "Aegis I",
              stats: { cost: 4, combat: 5, move: 1, capacity: 1 },
              abilities: [
                "Sustain Damage Bombardment 5 When another ship in this system would be destroyed during combat, you may have this ship become damaged instead.",
              ],
            },
            {
              name: "Aegis II",
              stats: { cost: 4, combat: 4, move: 2, capacity: 1 },
              abilities: [
                "Sustain Damage Bombardment 5 When another ship in this system would be destroyed by a game effect, you may have this ship become damaged instead.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Jgin Faru - Chancellor of Immigration",
          unlockCriteria: "At Game Start",
          ability:
            "When a player commits 1 or more units to a planet during invasion : You may exhaust this card to allow that player to place 1 infantry from their reinforcements on that planet.",
        },
        commander: {
          name: "Clona Bathru - Founder of Bathru Robotics",
          unlockCriteria: "Research a ship unit upgrade technology",
          ability:
            "This card satisfies a red technology prerequisite. At the start of a space combat in a system that contains 3 or more different types of your non- fighter ships, produce 1 hit against your opponent’s ships.",
        },
        hero: {
          name: "Verrisus Ypru - Former Admiral of the Unrelenting Battlegroup",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            'DEFENSE MATRIX OVERLOAD - VOLATILE EMP BURST After the "Roll Dice" step of space combat : You may purge this card. If you do, all ships in the active system become damaged ; during this round of space combat your ships cannot be destroyed.',
        },
      },
    },
    "The Glimmer of Mortheus": {
      abilities: [
        {
          name: "FACSIMILE",
          description:
            "At the start of a space combat while you are the defender, you may spend influence equal to the cost value of 1 of your opponent's ships in the active system to place 1 unit of that type from your reinforcements in that system.",
        },
        {
          name: "ILLUSORY PRESENCE",
          description:
            "During the agenda phase, after another player casts votes, you may exhaust up to 2 planets you control; that player casts an additional number of votes equal to 1 more than the combined influence values of those planets.",
        },
      ],
      promissoryNote: {
        name: "Secrets of the Weave",
        description:
          "At the start of a space combat while you are the defender: You may spend influence equal to the cost value of 1 of your opponent's ships in the active system to place 1 unit of that type from your reinforcements in that system. Then, return this card to the Mortheus player.",
      },
      technologies: [
        {
          name: "Fractal Plating",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "After a unit you control in a system is destroyed, you may exhaust this card to place 1 unit of that type from your reinforcements in the space area of a system adjacent to that system that contains 1 or more of your ships.",
        },
        {
          name: "Fabrication Grid",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "Each system that contains 1 or more of your ships and no planets gains PRODUCTION 2 as if it were a unit you control.",
        },
      ],
      startingTechnologies: ["dark-energy-tap", "sarween-tools"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Particle Sieve",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage After you activate this system, if it does not contain any planets, you may place 1 frontier token in this system.",
          ],
        },
        mech: {
          name: "Duuban",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "When a player commits 1 or more units to a planet you control adjacent to this system, you may swap this unit with 1 of your infantry on that planet. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Mirage Craf",
          description:
            "At the start and end of a space combat in which you are the defender, you may swap 1 of your ships in the active system with 1 of your ships in another system that contains 1 of your command tokens; the swapped ships cannot transport units.",
        },
      },
      leaders: {
        agent: {
          name: "Walik - Dull Green",
          unlockCriteria: "At Game Start",
          ability:
            "When a player produces 1 or more units in a system: You may exhaust this card to allow that player to place 1 of the produced units in the space area of an adjacent system that does not contain another player’s ships.",
        },
        commander: {
          name: "Komat - Vibrant Blue",
          unlockCriteria:
            "Have ships in 3 systems not adjacent to or including your home system",
          ability:
            "At the start of a space combat while you are not the active player: Choose 1 of your non- fighter ships in the active system to gain SUSTAIN DAMAGE until the end of combat.",
        },
        hero: {
          name: "Bayan - Deep Magenta",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "WEAVELINK REPLICATOR - TWO BY TWO ACTION: Purge this card to choose 1 ship you control in each system; for each of those units, you may place 1 unit of that type from your reinforcements in the space area of that unit’s system, if able.",
        },
      },
    },
    "Roh'Dhna Mechatronics": {
      abilities: [
        {
          name: "INDUSTRIOUS",
          description:
            "After you place a space dock in a system that contains no other players' ships, you may spend 6 resources and remove that space dock to place 1 war sun in that system's space area.",
        },
        {
          name: "RECYCLED MATERIALS",
          description:
            "After you activate a system, you may return 1 cruiser, carrier, or dreadnought you control in that system to your reinforcements to gain a number of trade goods equal to 1 less than that unit’s cost value.",
        },
        {
          name: "ORBITAL FOUNDRIES",
          description:
            "For the purpose of scoring objectives, you may treat each of your war sun units as though it is a structure on any planet you control.",
        },
      ],
      promissoryNote: {
        name: "Automatons",
        description:
          "At the end of your turn, you may attach this card to a non-home planet you control other than Mecatol Rex. This planet has PRODUCTION 3 as if it were a unit.",
      },
      technologies: [
        {
          name: "Contractual Obligations",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "At the start of the agenda phase, for each unit upgrade technology you control, you may choose 1 player. Each of those players must produce 1 ship in a system that contains 1 or more of their space docks or war suns.",
        },
      ],
      startingTechnologies: ["psychoarchaeology", "sarween-tools"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Ky'vir",
          stats: { cost: 8, combat: "5 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage DEPLOY : After you activate a system, you may spend 4 resources to replace 1 of your non- fighter ships in that system with your flagship.",
          ],
        },
        mech: {
          name: "Autofabricator",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "DEPLOY : After you use your RECYCLED MATERIALS faction ability in a system, you may place 1 mech in that system's space area or on a planet you control in that system. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "The Prodigy’s Triumph",
          description:
            "If you have the Terrafactory II technology, flip this card and place it on top of Terrafactory II.",
        },
        "war-sun": {
          tiers: [
            {
              name: "Terrafactory I",
              stats: { combat: "5 (x2)", capacity: 4 },
              abilities: [
                "Production 5 This unit produces only 1 fighter or infantry for their cost instead of 2. This unit cannot move or be produced.",
              ],
            },
            {
              name: "Terrafactory II",
              stats: { cost: 12, combat: "3 (x3)", move: 2, capacity: 6 },
              abilities: [
                "Production 5 Bombardment 3 (x3) Sustain Damage This unit produces only 1 fighter or infantry for their cost instead of 2. Other player's units in this system lose PLANETARY SHIELD.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Rond Bri’ay - Master of Operations",
          unlockCriteria: "At Game Start",
          ability:
            "After 1 or more of a player's units use PRODUCTION : You may exhaust this card to allow that player to gain 1 command token.",
        },
        commander: {
          name: "B-Unit 205643a - Predominant Constructor",
          unlockCriteria:
            "Have units with a combined PRODUCTION value of at least 7 in a single system",
          ability:
            "When you spend a command token to resolve the secondary ability of the “Construction” strategy card, you may resolve the primary ability instead.",
        },
        hero: {
          name: "Roh’Vhin Dhna mk4 - Ruthless Executive",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "PRIMESPACE ACTUALIZATION - SUBVERSIVE AUTOMATION After you move 1 or more of your ships into the active system: You may purge this card to produce ships using the PRODUCTION abilities of any units in the active system as if they were your own, regardless of whether that system contains another player’s ships.",
        },
      },
    },
    "The Kyro Sodality": {
      abilities: [
        {
          name: "CONTAGION",
          description:
            'After you resolve the primary or secondary ability of the "Politics" strategy card, commit 1 infantry from your reinforcements to a planet that is in or adjacent to a system that contains a planet you control; resolve invasion on that planet.',
        },
        {
          name: "PLAGUE RESERVOIR",
          description:
            "Once per action, during invasion on a planet that contains your units, you may resolve ground combat on that planet, even if it does not contain another player's ground forces.",
        },
        {
          name: "SUBVERSIVE",
          description:
            "When participating in a combat that would end in a draw, you are treated as the winner instead.",
        },
      ],
      promissoryNote: {
        name: "Kyro Rider",
        description:
          "After an agenda is revealed : You cannot vote on this agenda. Predict aloud an outcome of this agenda. If your prediction is correct, place 3 infantry from your reinforcements on a planet you control. Then, return this card to the Kyro player.",
      },
      technologies: [
        {
          name: "Indoctrination Teams",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "During the agenda phase, after an outcome you voted for is resolved, place 2 infantry from your reinforcements on a planet you control.",
        },
        {
          name: "Vector Programs",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "At the start of the strategy phase, you may place any number of your trade goods on any combination of strategy cards. Then, place 2 trade goods from the supply on 1 strategy card.",
        },
      ],
      startingTechnologyChoice: {
        count: 1,
        options: ["dacxive-animators", "bio-stims"],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Auriga",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage When you commit units to a planet in this system, commit 1 infantry from your reinforcements to that planet.",
          ],
        },
        mech: {
          name: "Pustule",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "When this unit would be destroyed, if it is damaged, you may discard 1 action card to repair it instead. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Strain Dispersal",
          description:
            "When researching a technology, you may discard an action card to ignore 1 of that technology's prerequisites. Once per action, when you win a combat, for each technology your opponent owns, if you do not own that technology, gain 1 commodity or convert 1 of your commodities to a trade good.",
        },
      },
      leaders: {
        agent: {
          name: "Tox - Plague Queen",
          unlockCriteria: "At Game Start",
          ability:
            "After a player loses or draws a ground combat: You may exhaust this card to allow that player to replenish their commodities ; place a number of infantry equal to 1 less than their commodity value on 1 planet you control.",
        },
        commander: {
          name: "Silas Deriga - Necrosage",
          unlockCriteria: "Have 6 infantry and 6 fighters on the game board",
          ability:
            "When you cast votes : Remove up to 4 of your infantry from the game board to cast 1 additional vote for each infantry removed.",
        },
        hero: {
          name: "Speygh - Blightmaster",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "BRIKK STRAIN - GALACTIC BLIGHT At the start of the status phase: You may attach this card to 1 of your strategy cards. Its initiative value is 9. Non-Kyro Players may only resolve 1 clause of this strategy card’s primary ability. The Kyro player gains any trade goods placed on this card.",
        },
      },
    },
    "The Bentor Conglomerate": {
      abilities: [
        {
          name: "SECRET MAPS",
          description:
            "At the end of your tactical actions, you may explore 1 planet in the active system that is or contains 1 of your units with PRODUCTION that you did not explore during that tactical action.",
        },
        {
          name: "FORTUNE SEEKERS",
          description:
            "Once per action, after you explore a planet or frontier token, you may gain 1 commodity.",
        },
        {
          name: "ANCIENT BLUEPRINTS",
          description:
            "The first time you gain a cultural, hazardous, industrial, or unknown relic fragment, place the corresponding “Fragment” token on your faction sheet.",
        },
      ],
      promissoryNote: {
        name: "Encryption Key",
        description:
          "ACTION: Attach this card to a non-home planet you control. This planet has 1 technology specialty of any color.",
      },
      technologies: [
        {
          name: "Broker Network",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "Each planet you control that has a technology specialty or an attachment gains the PRODUCTION 1 ability as if it were a unit.",
        },
        {
          name: "Merged Replicators",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "When 1 or more of your units use PRODUCTION, you may exhaust this card to swap 1 of those unit's PRODUCTION with another on the game board, or apply +2 to the total PRODUCTION value of those units.",
        },
      ],
      startingTechnologyChoice: {
        count: 2,
        options: [
          "dark-energy-tap",
          "psychoarchaeology",
          "scanlink-drone-network",
        ],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 2,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Wayfinder",
          stats: { cost: 8, combat: "9 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage Anti-Fighter Barrage 9 (x2) Space Cannon 9 Bombardment 9 Apply +1 to the results of this ship’s combat and ability rolls for each Fragment token on your faction sheet.",
          ],
        },
        mech: {
          name: "Auctioneer",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "DEPLOY : When you place a Fragment token on your faction sheet, you may place 1 mech on a planet you control. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Historian Conclave",
          description:
            "ACTION : Exhaust this card to allow all other players to explore 1 planet they control. Then, place up to 1 infantry from your reinforcements into coexistence on 1 of those planets. When you explore a planet, you may exhaust this card to instead explore the frontier deck in that system.",
        },
      },
      leaders: {
        agent: {
          name: "C.O.O. Mgur - Deft Tradesperson",
          unlockCriteria: "At Game Start",
          ability:
            "ACTION: Exhaust this card and choose 1 player. For each Fragment token on your faction sheet, that player gains 1 commodity. For each commodity they would gain in excess of their commodity value, they gain 1 trade good instead.",
        },
        commander: {
          name: "C.M.O. Ranc - Marketing Guru",
          unlockCriteria: "Have 3 Fragment tokens on your faction sheet",
          ability: "Your commodity value is increased by 1.",
        },
        hero: {
          name: "C.E.O. Ken Tucc - Visionary Explorer",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "PRIMORDIAL DATA CORE - GRAND REVEAL ACTION: Purge this card to explore each planet you control, in any order.",
        },
      },
    },
    "The Kortali Tribunal": {
      abilities: [
        {
          name: "ZEALOUS",
          description:
            'When you spend a command token to resolve the secondary ability of the " Warfare" strategy card, you may resolve the primary ability instead.',
        },
        {
          name: "RUTHLESS",
          description:
            "At the start of a ground combat on an exhausted planet you do not control, you may produce 1 hit and assign it to 1 of your opponent's ground forces on that planet.",
        },
      ],
      promissoryNote: {
        name: "Blessing of the Queen",
        description:
          "ACTION: Place this card face up in your play area and remove 1 of your command tokens from the game board. At the start of the status phase, return this card to the Kortali player.",
      },
      technologies: [
        {
          name: "Tempest Drive",
          type: TECH_TYPES.WARFARE,
          description:
            "After you win a combat in a system, you may exhaust this card to remove 1 command token from that system.",
        },
        {
          name: "Deliverance Engine",
          type: TECH_TYPES.WARFARE,
          description:
            "Once per space combat, after 1 of your non- fighter ships is destroyed, you may produce 1 hit and assign it to 1 of your opponent’s non- carrier ships.",
        },
      ],
      startingTechnologies: ["plasma-scoring", "psychoarchaeology"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Magistrate",
          stats: { cost: 8, combat: "5 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage Bombardment 3 After you win a space combat in this system, you may have this ship become damaged to gain 1 command token.",
          ],
        },
        mech: {
          name: "Justicar",
          stats: { cost: 2, combat: 5 },
          abilities: [
            "This unit cannot lose its PLANETARY SHIELD. Planetary Shield Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Psychospore",
          description:
            "If you have the Dreadnought II technology, flip this card and place it on top of Dreadnought II.",
        },
      },
      leaders: {
        agent: {
          name: "Queen Lucreia - Atonement and Punishment",
          unlockCriteria: "At Game Start",
          ability:
            "When a player wins a ground combat : You may exhaust this card to allow that player to take 1 relic fragment their opponent owns, at random, if able.",
        },
        commander: {
          name: "Queen Lorena - Compassion and Destruction",
          unlockCriteria: "Destroy the last of a player’s units in a system",
          ability:
            "During the first round of a combat, you may cancel 1 hit produced against your units.",
        },
        hero: {
          name: "Queen Nadalia - Life and Death",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "CALLING OF THE QUEENS - MOTHER GODDESSES When you win a combat : You may purge this card to choose and take up to 1 of your opponent's relics. Then, for each planet you control that is a legendary planet or has a technology specialty, gain 1 command token.",
        },
      },
    },
    "The Shipwrights of Axis": {
      abilities: [
        {
          name: "MILITARY INDUSTRIAL COMPLEX",
          description:
            'After you gain or replenish commodities, you may spend a number of commodities equal to the combined cost listed on any number of " Axis Order " cards in your reinforcements to place those cards in your play area. You cannot give your commodities to other players as part of a transaction.',
        },
        {
          name: "ARMS DEALERS",
          description:
            "When a player negotiates a transaction, they may exchange Axis Order cards in their play area as part of that transaction. You cannot resolve the effects of Axis Order cards.",
        },
      ],
      promissoryNote: {
        name: "Industry Secrets",
        description:
          "When 1 or more of your units use PRODUCTION : Place this card face up in your play area to apply +4 to the PRODUCTION value of those units and reduce the combined cost of the produced units by 1 for this use of PRODUCTION. At the start of the status phase, return this card to the Axis player.",
      },
      technologies: [
        {
          name: "Rift Engines",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "After you activate a system, you may exhaust this card to choose 1 ship you control and roll a die. On a result of 1-3, remove that ship from the game board; on a result of 4-10, apply +2 to that ship’s move value during this tactical action.",
        },
        {
          name: "Emergency Deployment",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "ACTION: Exhaust this card to place or move 1 of your space docks onto a planet you control that does not contain a space dock.",
        },
      ],
      startingTechnologies: ["sarween-tools", "ai-development-algorithm"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Bearer of Heavens",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage After this ship produces 1 or more hits during a round of space combat, you may repair 1 ship you control in this system.",
          ],
        },
        mech: {
          name: "Forgetender",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "You may treat a spacedock on this planet as if it has PRODUCTION 5. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Arms Brokerage",
          description:
            "At the start of a player's turn, you may exhaust this card to allow that player to treat 1 of your unit upgrade technologies as their own until the end of that turn. After you replenish commodities, gain a number of trade goods equal to the number of unit upgrade technologies you own.",
        },
      },
      leaders: {
        agent: {
          name: "Shipmonger Zsknck - Forgeworld Merchant",
          unlockCriteria: "At Game Start",
          ability:
            "ACTION: Exhaust this card to choose 1 player; that player may place 1 cruiser or 1 destroyer from their reinforcements in a system that contains their ships. Then, if you chose another player, gain 2 commodities.",
        },
        commander: {
          name: "Designer TckVsk - Diligent Retro-Engineer",
          unlockCriteria:
            "Have 4 Axis Order cards of different unit types in 1 or more players’ play areas.",
          ability:
            "After a player resolves an Axis Order card: You may spend 6 resources to gain the corresponding unit’s unit upgrade technology.",
        },
        hero: {
          name: "Demi-Queen Mdcksssk - Commissioner of Profits",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "GALACTIC FIELD TEST - AGGRESSIVE MARKETING ACTION: Purge this card and give 1 or more Axis Order cards in your play area to 1 or more other players; for each Axis Order card you give to another player, you may force that player to give you 1 promissory note from their hand.",
        },
      },
    },
    "The Olradin League": {
      abilities: [
        {
          name: "POLICIES",
          description:
            "When you gather your starting components, place the 3 “ Policy ” cards near your faction sheet, choose which side of each card to place face up. This faction has the abilities and effects listed on the face up side of each Policy card.",
        },
      ],
      promissoryNote: {
        name: "Incite Revolution",
        description:
          "ACTION: Place this card face up in your play area to choose and exhaust 1 planet you control. Then, ready 1 non-home planet you control other than Mecatol Rex. At the start of the status phase, return this card to the Olradin player.",
      },
      technologies: [
        {
          name: "False Flag Operations",
          type: TECH_TYPES.PROPULSION,
          description:
            "At the start of your turn, you may exhaust this card and 1 planet you control to ready 1 non-home planet other than Mecatol Rex.",
        },
        {
          name: "Geosympathic Impeller",
          type: TECH_TYPES.PROPULSION,
          description:
            "After you activate a system, you may exhaust a planet you control of the same type as a planet in that system to apply +1 to the move value of each of your ships during this tactical action.",
        },
      ],
      startingTechnologies: ["psychoarchaeology", "scanlink-drone-network"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Rallypoint",
          stats: { cost: 8, combat: "5 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage When you move this ship, apply +1 to the move value of each of your other ships during this tactical action.",
          ],
        },
        mech: {
          name: "Exemplar Bonum",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "If you have at least 2 “-” Policies, flip this card. If this planet contains no more than 1 of your mechs, apply +1 to its influence value. Sustain Damage",
            "Exemplar Malus (- Side)",
            "If you have at least 2 “+” Policies, flip this card. If this planet contains no more than 1 of your mechs, apply +1 to its resource value. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Insurrectionist Networking",
          description:
            "Once per action, after you resolve a policy ability, you may spend 1 trade good to move 1 of your infantry on the game board into coexistence on a planet in an adjacent system. ACTION : Purge this card to resolve invasion on all planets that contain your coexisting infantry.",
        },
      },
      leaders: {
        agent: {
          name: "Baggil Wildpaw - Political Haggler",
          unlockCriteria: "At Game Start",
          ability:
            "After a player exhausts a cultural, hazardous, or industrial planet they control, you may exhaust this card to allow that player to ready a planet they control of a different trait than that planet.",
        },
        commander: {
          name: "Knak Halfear - Grizzled Negotiator",
          unlockCriteria:
            "Control 1 cultural planet, 1 hazardous planet, and 1 industrial planet",
          ability:
            "When you pass : You may exhaust 1 non-home planet you control other than Mecatol Rex to gain a number of trade goods equal to that planet’s resource or influence value.",
        },
        hero: {
          name: "Pahn Silverfur - Council Speaker",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "SHADOW COUNCIL - CHANGE OF PLANS ACTION: Place 1 infantry from your reinforcements on each planet you control; you may choose and flip 1 Policy card. Then, purge this card.",
        },
      },
    },
    "The Savages of Cymiae": {
      abilities: [
        {
          name: "AUTONETIC MEMORY",
          description:
            "When you would draw 1 or more action cards, you may draw 1 less card to either choose 1 card from the action card discard pile and add it to your hand, or place 1 infantry from your reinforcements on a planet you control.",
        },
        {
          name: "CYBERNETIC MADNESS",
          description:
            "After you add an action card from the discard pile to your hand using your AUTONETIC MEMORY faction ability, you must discard 1 action card. After you fully resolve an action card’s ability text, purge that card instead of discarding it.",
        },
      ],
      promissoryNote: {
        name: "Algorithmic Replication",
        description:
          "ACTION: Choose 1 action card from the action card discard pile and add it to your hand. Then, purge this card.",
      },
      technologies: [
        {
          name: "Recursive Worm",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "At the start of your turn, you may exhaust this card to choose 1 non-home system other than Mecatol Rex that contains 1 or more of your units; place 1 other player’s command token from their reinforcements in that system.",
        },
      ],
      startingTechnologies: ["neural-motivator", "ai-development-algorithm"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Reprocessor Alpha",
          stats: { cost: 8, combat: "9 (x2)", move: 1, capacity: 6 },
          abilities: [
            "Sustain Damage After you win a combat in this system, you may take 1 of your opponent’s action cards, at random.",
          ],
        },
        mech: {
          name: "Revenant",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "At the start of each ground combat round, if this planet contains no more than 1 of your mechs, repair this unit. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Cybernetic Armoring",
          description:
            "After you win a combat, you may purge 1 of your promissory notes from your hand to move 1 other player's command token in the active system to an adjacent system, or gain 2 trade goods. ACTION: Exhaust this card to discard the top 3 cards of the action card deck.",
        },
        infantry: {
          tiers: [
            {
              name: "Unholy Abomination I",
              stats: { cost: 1, combat: 5 },
              abilities: [],
            },
            {
              name: "Unholy Abomination II",
              stats: { cost: 1, combat: 4 },
              abilities: [
                "After this unit is destroyed, roll 1 die. If the result is 6 or greater, place the unit on this card. At the start of your turn, place each unit that is on this card on a planet you control, if able.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Skhot Unit X-12 - Watcher",
          unlockCriteria: "At Game Start",
          ability:
            "When a player discards or purges an action card : You may exhaust this card to allow that player to draw 1 action card.",
        },
        commander: {
          name: "Koryl Ferax - The Third Voice",
          unlockCriteria: "Have 10 or more infantry on the board",
          ability:
            "After you gain control of a planet during a tactical action : You may discard 1 action card to place or move 1 mech onto that planet.",
        },
        hero: {
          name: "The Voice United - Psionic Maelstrom",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "THE SCREAM - SYMPHONY OF AGONY ACTION: Draw and reveal a number of action cards from the action card deck equal to 1 more than the number of players in the game, give 1 to each other player in the game and keep the rest; each other player must discard 1 action card. Then, purge this card.",
        },
      },
    },
    "The Celdauri Trade Confederation": {
      abilities: [
        {
          name: "PROJECTION OF POWER",
          description:
            "At the start of any space combat in a system that is adjacent to or contains 1 or more of your space docks, choose up to 1 ship in that system to gain ANTI-FIGHTER BARRAGE 6 during that combat.",
        },
        {
          name: "INDUSTRIALISTS",
          description:
            "During setup, place 1 additional space dock in your reinforcements.",
        },
      ],
      promissoryNote: {
        name: "Trade Alliance",
        description:
          "When you receive this card, if you are not the Celdauri player, you must place it face up in your play area. While this card is in your play area, you can use the Celdauri player’s commander ability, if it is unlocked. If you activate a system that contains 1 or more of the Celdauri player’s units, return this card to the Celdauri player.",
      },
      technologies: [
        {
          name: "Emergency Mobilization Protocols",
          type: TECH_TYPES.WARFARE,
          description:
            "At the end of your turn, you may exhaust this card and spend 1 token from your strategy pool to remove a command token from a system that contains 1 or more of your space docks.",
        },
      ],
      startingTechnologyChoice: {
        count: 2,
        options: ["antimass-deflectors", "sarween-tools", "plasma-scoring"],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 4,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Supremacy",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 6 },
          abilities: [
            "Sustain Damage Anti-Fighter Barrage 6 (x2) You may use the PRODUCTION ability of other player’s space docks in this system to produce ships.",
          ],
        },
        mech: {
          name: "Minuteman",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "DEPLOY : After another player activates a system, you may spend 1 trade good or 1 commodity to place 1 mech on a planet in that system that contains 1 of your space docks. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Trade Protectorate",
          description:
            "When you gain this card, flip this card and place it on your faction sheet. Then, place the Celagrom token in a system that contains your ships, if able. The Celagrom token is a second flagship with the attributes, abilities, and ability text on the Celagrom flagship card.",
        },
        "space-dock": {
          tiers: [
            {
              name: "Trade Port I",
              stats: {},
              abilities: [
                "Anti-Fighter Barrage 6 (x2) Production X+2 (X is the resource or influence value of the planet) This unit's PRODUCTION value is equal to 2 more than the resource or influence value of this planet. Up to 3 fighters in this system do not count against your ships' capacity.",
              ],
            },
            {
              name: "Trade Port II",
              stats: {},
              abilities: [
                "Anti-Fighter Barrage 6 (x2) Production X+4 (X is the resource or influence value of the planet) This unit's PRODUCTION value is equal to 4 more than the resource or influence value of this planet. Up to 3 fighters in this system do not count against your ships' capacity. This unit may use its ANTI-FIGHTER BARRAGE during each round of space combat.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "George Nobin - Esteemed Merchantman",
          unlockCriteria: "At Game Start",
          ability:
            "At the end of a player's tactical action : You may exhaust this card to allow that player to spend 2 trade goods or 2 commodities to place 1 spacedock from their reinforcements on a planet they control in the active system.",
        },
        commander: {
          name: "Henry Storcher - Starbase Commander",
          unlockCriteria:
            "Have 1 space dock on the game board that is not adjacent to your home system",
          ability:
            "After you activate a system that contains 1 or more of your space docks, gain 1 commodity. Your ships may treat systems that contain 1 or more of your space docks as adjacent to each other.",
        },
        hero: {
          name: "Titus Flavius - Councilman",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "TRADER MOBILIZATION ACT - MERCHANT REARMAMENT After a player activates a system other than Mecatol Rex : You may place 1 space dock on a planet you control in that system, convert each of your commodities to a trade good, and use the PRODUCTION ability of each of your units in the active system. Then, purge this card.",
        },
      },
    },
    "The Nivyn Star Kings": {
      abilities: [
        {
          name: "CELESTIAL GUIDES",
          description:
            "Your units do not roll for gravity rifts. You may ignore the movement effects of anomalies in systems that contain or are adjacent to 1 or more of your structures.",
        },
        {
          name: "SINGULARITY POINT",
          description:
            "The system that contains the “ Wound ” token is both a nebula and a gravity rift.",
        },
        {
          name: "VOIDSAILORS",
          description:
            "When you explore a frontier token, you may draw 1 additional card; choose 1 to resolve and return the rest to the frontier exploration deck. Then, shuffle that deck.",
        },
      ],
      promissoryNote: {
        name: "Nivyn Guidance",
        description:
          "After you activate a system: During this activation, you may ignore the effects of each anomaly. Return this card to the Nivyn player at the end of this activation.",
      },
      technologies: [
        {
          name: "Voidwake Missiles",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "After 1 or more of your units with SUSTAIN DAMAGE makes a combat roll, you may choose 1 of those units to become damaged to reroll its combat roll.",
        },
      ],
      startingTechnologies: ["plasma-scoring", "dark-energy-tap"],
      startingUnits: {
        [FACTION_UNIT_TYPES.MECH]: 1,
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Eradica",
          stats: { cost: 8, combat: "5 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage When a unit in this system would be destroyed, you may remove it from the game board instead.",
          ],
        },
        mech: {
          tiers: [
            {
              name: "Voidflare Warden I",
              stats: { cost: 2, combat: 6 },
              abilities: [
                "Sustain Damage After this system is activated, you may have this unit become damaged to place or move the Wound token into this system.",
              ],
            },
            {
              name: "Voidflare Warden II",
              stats: { cost: 2, combat: 4 },
              abilities: [
                "Sustain Damage After a system is activated, you may have this unit become damaged to place or move the Wound token into this system.",
              ],
            },
          ],
        },
        breakthrough: {
          name: "Anomaly Stabilization",
          description:
            "The system that contains the Wound token is also an entropic scar. You may ignore the effects of entropic scars. You may treat entropic scars as ingress tokens.",
        },
      },
      leaders: {
        agent: {
          name: "Suldhan Wraeg - Shrouded Advisor",
          unlockCriteria: "At Game Start",
          ability:
            "When a player would use 1 unit’s non- PRODUCTION unit ability in a system that contains or is adjacent to an anomaly, you may exhaust this card to prevent that unit from using that unit ability.",
        },
        commander: {
          name: "Thussad Krath - High Inquisitor",
          unlockCriteria: "Have units in 2 different non-home anomalies",
          ability:
            "When 1 or more of your damaged units make a combat roll, up to 2 of those units may roll an additional combat die.",
        },
        hero: {
          name: "Krill Drakkon - Star-Crowned King",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "SINGULARITY CRADLE - EYE OF THE ABYSS ACTION: Each unit on the game board with SUSTAIN DAMAGE, other than your mechs, becomes damaged, if able. Place this card near the game board; you may treat each unit you control as adjacent to the system that contains the Wound token until the end of this game round. At the end of this game round, purge this card.",
        },
      },
    },
    "The Kollecc Society": {
      abilities: [
        {
          name: "CLOAKED FLEETS",
          description:
            "After you produce 1 or more ships, you may place up to 2 of those ships on your faction sheet, those ships are captured.",
        },
        {
          name: "SHROUD OF LITH",
          description:
            "After movement, if the active system contains 1 or more of your non- fighter ships, you may place up to 2 of your captured ships and 2 of your captured ground forces from your faction sheet in that system’s space area.",
        },
        {
          name: "TREASURE HUNTERS",
          description:
            "At the start of your turn, you may look at the top card of the cultural, hazardous, or industrial exploration deck. Then, look at the top card of the relic deck.",
        },
      ],
      promissoryNote: {
        name: "AI Survey",
        description:
          "At the start of your turn : You may look at either the top card of the cultural, hazardous, and industrial exploration decks, or the top card of the relic deck. Then, return this card to the Kollecc player.",
      },
      technologies: [
        {
          name: "Seeker Drones",
          type: TECH_TYPES.PROPULSION,
          description:
            "ACTION: Exhaust this card to choose 1 of your neighbors that has 1 or more relic fragments. That player gains 2 trade goods and must give you 1 of those relic fragments of your choice.",
        },
        {
          name: "Shrouded Skirmishers",
          type: TECH_TYPES.PROPULSION,
          description:
            "At the start of a space combat, you may choose 1 of your ships in the active system that did not begin this action in that system; roll a die. On a result equal to or greater than that ship's combat value, produce 1 hit; your opponent must assign it to 1 of their ships.",
        },
      ],
      startingTechnologies: ["scanlink-drone-network"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Nightingale V",
          stats: { cost: 8, combat: "5 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage When this unit retreats, you may capture each of your units that retreat.",
          ],
        },
        mech: {
          name: "Nightshade Vanguard",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "At the end of a tactical action in this system, you may place up to 2 ground forces from this planet onto your faction sheet, those units are captured. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "The Collector's Museum",
          description:
            "When you explore a planet, you may exhaust this card to resolve a card from that exploration deck's discard pile instead; if you would discard that card, instead shuffle it into the corresponding exploration deck.",
        },
      },
      leaders: {
        agent: {
          name: "Captain Dust - Artifact Broker",
          unlockCriteria: "At Game Start",
          ability:
            "At the start of a player's turn : You may exhaust this card to allow that player to reveal the top 2 cards of an exploration deck that matches a planet they control; they gain any relic fragments that they revealed and discard the rest.",
        },
        commander: {
          name: "Kado S’mah-Qar - Coordinator",
          unlockCriteria: "Have 4 relic fragments",
          ability:
            "This card satisfies a blue technology prerequisite. When you retreat, if the active system does not contain 1 of your command tokens, you do not place a command token in the system your ships retreated to.",
        },
        hero: {
          name: "Dorrahn Griphyn - The Collector",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "SHADOWCASTER - STEALTH EXPEDITION ACTION: Draw a number of relic cards up to an amount equal to the number of players in the game, choose 1 to gain, and return the rest to the relic deck. Then, shuffle that deck and purge this card.",
        },
      },
    },
    "The Berserkers of Kjalengard": {
      abilities: [
        {
          name: "GLORY",
          description:
            "After you win a combat, you may place or move a Glory token into the active system, or spend 1 token from your strategy pool to research a unit upgrade technology of the same type as 1 of your units that participated in that combat.",
        },
        {
          name: "HEROISM",
          description:
            "Capture your fighters and infantry that are destroyed during combat. When you pass, for each Glory token on the game board, you may return 4 of your captured units to gain 1 command token.",
        },
        {
          name: "VALOR",
          description:
            "When units make a combat roll in a system that contains a Glory token, each result of 10, before applying modifiers, produces 1 additional hit.",
        },
      ],
      promissoryNote: {
        name: "Vassalage",
        description:
          "At the start of combat : Apply +1 to the results of each of your fighters ' combat rolls during this combat. The Kjalengard player captures each of your fighters destroyed during this combat. Then, return this card to the Kjalengard player.",
      },
      technologies: [
        {
          name: "Zhrgar Stimulants",
          type: TECH_TYPES.BIOTIC,
          description:
            "Once per action, after a player produces 1 or more hits during a round of combat in a system that contains a Glory token, gain 1 trade good. After a player rolls combat dice, you may exhaust this card to allow that player to reroll any number of those dice.",
        },
      ],
      startingTechnologyChoice: {
        count: 1,
        options: [],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 4,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Hulgade’s Hammer",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 6 },
          abilities: [
            "Sustain Damage After the first round of a combat in this system, place up to 2 of your captured units in this system or on that planet.",
          ],
        },
        mech: {
          name: "Skald",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "When you pass, place 1 infantry from your reinforcements on this planet if there is a Glory token in or adjacent to this system. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Bannerhalls",
          description:
            "For each Glory token on the game board, you control 1 Bannerhall card. Once per action, when a player wins a combat in a system that contains a Glory token, ready each Bannerhall card.",
        },
        carrier: {
          tiers: [
            {
              name: "Star Dragon I",
              stats: { cost: 3, combat: 8, move: 1, capacity: 4 },
              abilities: [
                "This unit may ignore the movement effects of non- supernova anomalies.",
              ],
            },
            {
              name: "Star Dragon II",
              stats: { cost: 3, combat: 7, move: 2, capacity: 6 },
              abilities: [
                "This unit may ignore the movement effects of anomalies.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Merkismathr Asvand - Marshal of Trade",
          unlockCriteria: "At Game Start",
          ability:
            "At the start of a combat : Exhaust this card to move a Glory token to the active system, if able. Then, the active player may gain a number of commodities equal to the number of neighbors they have.",
        },
        commander: {
          name: "Sdallari Tvungovot - Marshal Engineer",
          unlockCriteria: "Have 2 Glory tokens on the game board",
          ability:
            "When researching a unit upgrade technology, each of your unit upgrade technologies may satisfy 1 prerequisite it shares with the technology you are researching.",
        },
        hero: {
          name: "Ygegnad, The Thunder - Honorary Skald",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "A TALE OF LEGENDS - FOR ETERNAL GLORY ACTION: For each system that contains a Glory token, remove up to 1 command token in or adjacent to that system from the game board and gain 1 command token, if able. Then, purge this card.",
        },
      },
    },
    "The Mirveda Protectorate": {
      abilities: [
        {
          name: "PRIVILEGED CITIZENRY",
          description:
            "Each system can contain a number of your PDS equal to the number of command tokens in your fleet pool. For the purpose of scoring objectives, you may treat each of your PDS units as though it is a structure on any planet you control.",
        },
        {
          name: "COMBAT DRONES",
          description:
            "Your space docks cannot produce infantry. At the start of invasion, you may replace each of your fighters in the active system with 1 infantry unit. During invasion, your infantry in the space area of the active system do not count against your ships’ capacity.",
        },
      ],
      promissoryNote: {
        name: "Rapid Assembly",
        description:
          "At the start of your turn: You may move up to 2 PDS units you control to a planet you control. Then, return this card to the Mirveda player.",
      },
      technologies: [
        {
          name: "Orbital Defense Grid",
          type: TECH_TYPES.WARFARE,
          description:
            "At the start of invasion, choose up to 1 unit you control in the active system ; that unit gains PLANETARY SHIELD. When a player commits a unit to land on a planet you control, you may exhaust this card to destroy that unit.",
        },
      ],
      startingTechnologies: ["ai-development-algorithm"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 2,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 5,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Nexus",
          stats: { cost: 8, combat: "9 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage After each round of space combat in this system, place 1 fighter from your reinforcements in this system.",
          ],
        },
        mech: {
          name: "Javelin",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "For every 2 unit upgrade technologies you own, apply +1 to the result of this unit's combat rolls. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Stabilization Arrays",
          description:
            "If you have the Fighter II unit upgrade technology, flip this card and place it on top of Fighter II.",
        },
        pds: {
          tiers: [
            {
              name: "Gauss Cannon I",
              stats: { move: 1 },
              abilities: [
                "Space Cannon 6 Bombardment 6 This unit is placed in a space area instead of on a planet. This unit can move and retreat as if it were a ship. This unit can be blockaded, if it is blockaded, it is destroyed.",
              ],
            },
            {
              name: "Gauss Cannon II",
              stats: { move: 2, capacity: 1 },
              abilities: [
                "Space Cannon 4 Bombardment 4 This unit is placed in a space area instead of on a planet. This unit can move and retreat as if it were a ship. This unit can be blockaded, if it is blockaded, it is destroyed.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Logic Machina - Weapons Development",
          unlockCriteria: "At Game Start",
          ability:
            "After a player gains a unit upgrade technology : You may exhaust this card to allow that player to spend 1 command token from their strategy pool to research 1 technology of the same color as any 1 of that unit upgrade's prerequisites.",
        },
        commander: {
          name: "Assault Machina - Delta Shield",
          unlockCriteria: "Own 2 unit upgrade technologies",
          ability:
            "During Movement, for each infantry you transport, you may replace that unit with 1 fighter. You may use the SPACE CANNON of 1 of your units against units that are adjacent to that unit’s system.",
        },
        hero: {
          name: "Wrath Machina - AI Mainframe",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "DHOR’S HAMMER - PEACE AT LAST ACTION: Place up to 3 PDS units from your reinforcements on planets you control and choose 1 system; your PDS units may use their SPACE CANNON on ships in that system, and BOMBARDMENT against units on 1 planet in that system. Then, purge this card.",
        },
      },
    },
    "The Gledge Union": {
      abilities: [
        {
          name: "MANTLE CRACKING",
          description:
            "ACTION: Place 1 Core token on a non-home planet you control other than Mecatol Rex that does not contain a Core token to gain up to 4 trade goods.",
        },
        {
          name: "CELESTIAL RECLAMATION",
          description:
            "Planets that contain Core tokens have a base resource value of 2 and influence value of 0. Core tokens cannot be removed from the planet that contains them.",
        },
        {
          name: "DEEP MINING",
          description:
            "When you would explore a planet that contains 1 of your mechs or structures, you may instead gain 1 trade good.",
        },
      ],
      promissoryNote: {
        name: "GLEdge Base",
        description:
          "ACTION: Attach this card to a non-home planet you control. This planet’s resource value is increased by 2.",
      },
      technologies: [
        {
          name: "Lightning Drives",
          type: TECH_TYPES.PROPULSION,
          description:
            "During movement, you may increase the move value of each of your non- fighter ships not transporting any fighters or infantry by 1.",
        },
      ],
      startingTechnologyChoice: {
        count: 2,
        options: [
          "psychoarchaeology",
          "scanlink-drone-network",
          "ai-development-algorithm",
        ],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.MECH]: 1,
        [FACTION_UNIT_TYPES.INFANTRY]: 2,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Beg Bersha",
          stats: { cost: 8, combat: 7, move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage Bombardment 7 When this unit makes a combat or ability roll, it rolls 1 additional die for each mech in or adjacent to this system.",
          ],
        },
        mech: {
          name: "Exodriller",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "When you exhaust this planet to spend resources, you may also spend 1 of its influence as a resource. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Dhonraz Installations",
          description:
            "Planets you control that contain core tokens are also treated as stations except for the purposes of control; units can be committed to, produced on, and placed on these planets. Stations you control have SPACE CANNON 5.",
        },
        pds: {
          tiers: [
            {
              name: "Orion Platform I",
              stats: {},
              abilities: [
                "Planetary Shield Space Cannon 6 When this unit makes a SPACE CANNON roll against another player’s units, if it rolls at least 1 result of 9 or 10, explore this planet.",
              ],
            },
            {
              name: "Orion Platform II",
              stats: {},
              abilities: [
                "Planetary Shield Space Cannon 5 When this unit produces 1 or more hits against another player's units, explore this planet. You may use this unit’s SPACE CANNON against ships that are adjacent to this unit's system.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Durran - Ember of the Union",
          unlockCriteria: "At Game Start",
          ability:
            "When 1 or more of a player’s units use PRODUCTION : You may exhaust this card to apply +3 to the total PRODUCTION value of that player’s units.",
        },
        commander: {
          name: "Voldun - Forge Lord",
          unlockCriteria:
            "Control non- fighter ships with a total combined cost value of at least 10 in 1 system",
          ability:
            "When you use the PRODUCTION of 1 or more of your units, you may increase the total PRODUCTION value of those units by 1 for each space dock you control.",
        },
        hero: {
          name: "Gorthrim - Chief of Expeditions",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "MAGNUM OPUS - WORLD SHAPERS ACTION: Reveal cards from any non-frontier exploration decks until you reveal up to 3 attachments, if able; attach those cards to any planets you control of the corresponding planet type, and discard the rest. Then, purge this card.",
        },
      },
    },
    "The Ghoti Wayfarers": {
      abilities: [
        {
          name: "ABYSSAL EMBRACE",
          description:
            "When you create the game board, place the Ghoti Space tile where your home system would normally be placed. The Ghoti Space system is not a home system.",
        },
        {
          name: "MOBILE COMMAND",
          description:
            "The system that contains your flagship is your home system. Your flagship cannot be captured and you cannot score public objectives if your flagship is not on the game board.",
        },
        {
          name: "SPAWNING GROUNDS",
          description:
            "During setup, gain and ready the Ghoti planet card and its planet ability card ; you cannot lose those cards.",
        },
      ],
      promissoryNote: {
        name: "Ghoti Relay",
        description:
          "At the start of your turn : Place this card in your play area to produce up to 2 ships in a system that contains 1 or more of your ships. At the start of the status phase, return this card to the Ghoti Player.",
      },
      technologies: [
        {
          name: "Networked Command",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "Up to 3 ships in your home system do not count against your fleet pool. When you cast 1 or more votes, you may exhaust this card to cast an additional number of votes equal to the number of command tokens in your fleet pool.",
        },
        {
          name: "Parallel Production",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "When you produce 1 or more units, you may produce 1 additional unit in each of 2 systems that contain 1 or more of your ships and 1 of your command tokens.",
        },
      ],
      startingTechnologyChoice: {
        count: 1,
        options: ["gravity-drive", "sling-relay"],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.FLAGSHIP]: 1,
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
      },
      units: {
        flagship: {
          name: "All Mother",
          stats: { cost: 6, combat: "7 (x2)", move: 1, capacity: 5 },
          abilities: [
            "Sustain Damage Production X (number of fleet pool command tokens ) While in play, this unit is also treated as a space dock with a PRODUCTION value equal to the number of tokens in your fleet pool.",
          ],
        },
        mech: {
          name: "Tioleombp",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "This unit can be blockaded. When producing ships in your home system, place up to 1 of those units in this system’s space area if it is not blockaded. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Cult of the All-Mother",
          description:
            "When you pass, you may exhaust this card to move 1 ingress token into an empty system, or move 1 of your ships to an adjacent system that contains your ships. Your units may retreat to any empty system that does not contain another player's ships.",
        },
      },
      leaders: {
        agent: {
          name: "Becece - Caretaker of Worlds",
          unlockCriteria: "At Game Start",
          ability:
            "When a player produces 1 or more units: You may exhaust this card to allow that player to either produce 2 additional units or gain 1 trade good.",
        },
        commander: {
          name: "Ceie Doleegueaunm - Abyssal Queen",
          unlockCriteria: "Have units in 3 systems that do not contain planets",
          ability:
            "After you activate a system: You may treat systems that contain no planets as adjacent to each other during this tactical action.",
        },
        hero: {
          name: "Nmenmede - Ghoti All Mother",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "TRANSCENDENCE - THE GHOTI ARISE ACTION: For each system that contains 1 or more of your ships, you may replace 1 of your non- fighter ships in that system with a ship from your reinforcements that has a cost value of up to 2 greater than the cost value of that ship. Then, purge this card.",
        },
      },
    },
    "The Ghemina Raiders": {
      abilities: [
        {
          name: "THE LADY & THE LORD",
          description:
            "During setup, place 1 additional flagship in your reinforcements and the additional Ghemina Hero next to your faction sheet. This additional flagship has the abilities and attributes listed on the Lord flagship card. You have 2 Heroes.",
        },
        {
          name: "RULE OF TWO",
          description:
            "During a round of combat in a system that contains exactly 2 of your non- fighter ships, if those ships have the same unit type, apply +2 to the result of each of those unit’s combat rolls.",
        },
      ],
      promissoryNote: {
        name: "Raid Leaders",
        description:
          "After you activate a system: Choose 1 non- fighter ship you control; during this action, that unit gains BOMBARDMENT 5(x2) and a capacity value of 2. Return this card to the Ghemina player at the end of this action.",
      },
      technologies: [
        {
          name: "War Song Implants",
          type: TECH_TYPES.BIOTIC,
          description:
            "After you win a space combat, you may ready 1 planet you control.",
        },
      ],
      startingTechnologies: ["psychoarchaeology", "dark-energy-tap"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 2,
      },
      units: {
        flagship: {
          tiers: [
            {
              name: "The Lady",
              stats: { cost: 6, combat: "7 (x2)", move: 2, capacity: 3 },
              abilities: [
                "Sustain Damage Bombardment 5 (x4) When a structure you do not control in this system is destroyed, gain 1 trade good.",
              ],
            },
            {
              name: "The Lord",
              stats: { cost: 6, combat: "7 (x2)", move: 2, capacity: 7 },
              abilities: [
                "Sustain Damage After a player explores a planet in this system, place 1 infantry from their reinforcements on that planet.",
              ],
            },
          ],
        },
        mech: {
          name: "Jotun",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "After you win a ground combat on this planet, if this planet contains exactly 1 other mech, explore this planet. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Raiding Parties",
          description:
            "During each round of combat, you may choose 1 of your participating units; roll that unit’s combat roll twice and resolve the result of your choice. When you announce a retreat, you may exhaust this card to immediately resolve that retreat.",
        },
        carrier: {
          tiers: [
            {
              name: "Combat Transport I",
              stats: { cost: 3, combat: 9, move: 2, capacity: 4 },
              abilities: [],
            },
            {
              name: "Combat Transport II",
              stats: { cost: 3, combat: 9, move: 2, capacity: 6 },
              abilities: [
                "You may reroll 1 of your unit's combat dice during each round of ground combat on a planet in this system that contains 2 or fewer of your infantry.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Skarvald & Torvar - Raid Heralds",
          unlockCriteria: "At Game Start",
          ability:
            "When the active player produces 1 or more hits during a round of combat : You may exhaust this card to allow that player to produce 1 additional hit.",
        },
        commander: {
          name: "Jarl Vel & Jarl Jotrun",
          unlockCriteria: "Have 2 flagships on the game board",
          ability:
            "RAID LEADERS After you win a combat in a system that contains no planets or on a planet that contains a structure, you may gain 1 trade good. RAID LEADERS While you are the active player, players that have two or fewer command tokens on the game board cannot cancel hits your units or abilities produce.",
        },
        hero: {
          name: "Kantrus - The Lord",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "DESTINY DRIVE - ALLEGED BIRTHRIGHT ACTION: Purge this card to choose 1 non-home planet other than Mecatol Rex that does not contain another player’s units and is adjacent to a system that contains 1 of your flagships ; gain control of that planet. Then, ready that planet.",
        },
      },
    },
    "The Li-Zho Dynasty": {
      abilities: [
        {
          name: "CUNNING",
          description:
            "After you perform a tactical action in a system, you may attach 1 “Trap” card from your reinforcements to a planet in that system that contains 1 or more of your infantry units.",
        },
        {
          name: "SUBTERFUGE",
          description:
            "Trap attachments are attached face-down and remain hidden until revealed; you may look at Trap attachments at any time. You do not count trap attachments toward fulfilling objectives.",
        },
      ],
      promissoryNote: {
        name: "Trusted Counselor",
        description:
          "At the start of a space combat you are participating in: You may place up to 2 fighters from your reinforcements into the space area of the active system. Then, return this card to the Li-Zho player.",
      },
      technologies: [
        {
          name: "Wraith Engine",
          type: TECH_TYPES.PROPULSION,
          description:
            "After you activate a non-home system, you may exhaust this card to choose 1 ship you control; you may treat that ship as adjacent to the active system until the end of this tactical action.",
        },
      ],
      startingTechnologies: ["psychoarchaeology", "antimass-deflectors"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 2,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Silence of Stars",
          stats: { cost: 8, combat: "5 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage This unit can only be destroyed by an uncanceled hit being assigned to it.",
          ],
        },
        mech: {
          name: "Oro-Zhin Elite",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "At the start of your turn, you may remove 1 trap attachment from the game board and attach it to this planet, or swap any trap attachment with 1 on this planet. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Professional Intrigue",
          description:
            "After you perform a tactical action in a non-home system, you may move 1 of your infantry on the game board into coexistence on a planet in that system. When a player ends your units' coexistence on a planet, they must discard 1 action card, if able.",
        },
        fighter: {
          tiers: [
            {
              name: "Heavy Bomber I",
              stats: { cost: "1 (x2)", combat: 9 },
              abilities: ["Bombardment 9"],
            },
            {
              name: "Heavy Bomber II",
              stats: { cost: "1 (x2)", combat: 8, move: 2 },
              abilities: [
                "Bombardment 8 This unit may move without being transported. Fighters in excess of your ships' capacity count against your fleet pool.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Vasra Ivo - Intelligence Officer",
          unlockCriteria: "At Game Start",
          ability:
            "At the end of a player’s turn: You may exhaust this card to allow that player to place 2 fighters from their reinforcements in the space area of a system that contains 1 or more of their ships.",
        },
        commander: {
          name: "Dhume Tathu - Ruthless Strategist",
          unlockCriteria: "Have 4 trap attachments on the game board",
          ability:
            "During a round of combat in which no more than 1 of your non- fighter ships or 1 of your infantry is participating, you may choose 1 of your units in that combat, that unit rolls 1 additional combat die.",
        },
        hero: {
          name: "Khaz-Rin Li-Zho - Empress",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "STAR'S RAZOR - CLOSING MOVES ACTION: You may attach, or remove and attach, each Trap card to a planet on the game board; place a total of up to 12 fighters in any number of systems that contain 1 or more planets with Trap attachments and no other player’s ships. Then, purge this card.",
        },
      },
    },
    "The Zealots of Rhodun": {
      abilities: [
        {
          name: "CONSPIRATORS",
          description:
            "Once per agenda phase, after an agenda is revealed, if you are not the speaker, you may choose to vote after the speaker on that agenda.",
        },
        {
          name: "ANCIENT KNOWLEDGE",
          description:
            "When you use a technology specialty to ignore a prerequisite on a technology card you are researching, you may ignore 1 additional prerequisite of the same color. After you exhaust a planet to use its technology specialty, you may gain 1 commodity.",
        },
      ],
      promissoryNote: {
        name: "Favor of Rhodun",
        description:
          "When you ignore a prerequisite on a technology card you are researching : You may ignore 1 additional prerequisite of the same color. Then, return this card to the Rhodun player.",
      },
      technologies: [
        {
          name: "Sanctification Field",
          type: TECH_TYPES.PROPULSION,
          description:
            "When you activate a system, or a system that contains 1 or more of your units is activated, you may choose 1 technology or non- fighter, non- structure unit upgrade technology another player controls; until the end of this tactical action, that card is treated as though it had no ability text.",
        },
        {
          name: "Pilgrimage Beacons",
          type: TECH_TYPES.PROPULSION,
          description:
            "Once during your turn, when you exhaust 1 or more planets you control that have a technology specialty, you may produce 1 ship in 1 system that contains 1 of those planets.",
        },
      ],
      startingTechnologies: ["bio-stims"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Reckoning",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage For each unit upgrade technology your opponent owns, apply +1 to the results of this unit’s combat rolls.",
          ],
        },
        mech: {
          name: "Templar",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "Apply +1 to this unit's combat rolls for each faction technology your opponent owns. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Rhodun's Reliquary",
          description:
            "After you gain control of a legendary or fracture planet, you may research 1 technology or remove 1 of your command tokens in that system and return it to your reinforcements.",
        },
      },
      leaders: {
        agent: {
          name: "Priestess Tuh - The Edifier",
          unlockCriteria: "At Game Start",
          ability:
            "After a player researches a technology: You may exhaust this card to allow that player to produce 1 ship in their home system or a system that contains a planet they control that has a technology specialty.",
        },
        commander: {
          name: "Bishop Ulin - The Librarian",
          unlockCriteria: "Have a technology with 2 or more prerequisites",
          ability:
            "When researching a technology, you may use the technology specialty of 1 planet you control to ignore any 1 prerequisite on the technology card you are researching.",
        },
        hero: {
          name: "Saint Binal - The Prophet",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "BLESSING OF THE ANCIENTS - FORGOTTEN SORCERY ACTION: Place this card and up to 3 non- faction technologies near the game board, you gain those technologies. At the start of the next strategy phase, purge all but 1 of those technologies and this card.",
        },
      },
    },
    "The Tnelis Syndicate": {
      abilities: [
        {
          name: "PLAUSIBLE DENIABILITY ",
          description:
            "When you draw 1 or more secret objective cards, draw 1 additional secret objective card. Then, return 1 secret objective card to the secret objective deck; shuffle that deck.",
        },
        {
          name: "STEALTH INSERTION",
          description:
            'If you place units onto the same planet as another player\'s units, your units must participate in combat during the " Ground Combat " step.',
        },
        {
          name: "INFORMATION BROKERS",
          description: "You may have 1 additional unscored secret objective.",
        },
        {
          name: "PLAUSIBLE DENIABILITY",
          description:
            "At any time, if another player satisfies the requirements of one of your secret objectives, you may ignore its requirements; if you score that objective, draw 1 secret objective.",
        },
        {
          name: "STEALTH CORPS",
          description:
            "After 1 or more of your units enter coexistence on a planet, destroy up to 1 ground force on that planet.",
        },
        {
          name: "INFORMATION BROKERS",
          description: "You may have 1 additional unscored secret objective.",
        },
      ],
      promissoryNote: {
        name: "Plots Within Plots",
        description:
          "When you draw 1 or more secret objective cards: Draw 1 additional secret objective card. Then, return 1 secret objective card to the secret objective deck; shuffle that deck. Then, return this card to the Tnelis player.",
      },
      technologies: [
        {
          name: "Daedalon Flight System",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "After a round of space combat in a system that contains 1 or more of your mechs, you may have 1 of those units become damaged to produce 1 hit and assign it to a cruiser, dreadnought, or destroyer you do not control in that system.",
        },
      ],
      startingTechnologyChoice: {
        count: 2,
        options: ["antimass-deflectors", "neural-motivator", "plasma-scoring"],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 2,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Principia Aneris",
          stats: { cost: 8, combat: "9 (x4)", move: 2, capacity: 3 },
          abilities: [
            "Sustain Damage At the start of a round of combat, choose 1 ship in this system, during this combat round, that ship rolls 1 less combat die.",
          ],
        },
        mech: {
          name: "Daedalon",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "DEPLOY : After you move a destroyer into a non-home system other than Mecatol Rex, you may spend 3 resources to place 1 mech on a planet in that system. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Hidden Hardpoints",
          description:
            "At the end of a round of ground combat, you may discard 1 secret objective to have all your participating units enter coexistence ; that combat ends in a draw. When another player ends your units' coexistence on a planet, you may draw 1 secret objective.",
        },
        destroyer: {
          tiers: [
            {
              name: "Blockade Runner I",
              stats: { cost: 1, combat: 9, move: 2 },
              abilities: ["Anti-Fighter Barrage 9 (x3)"],
            },
            {
              name: "Blockade Runner II",
              stats: { cost: 1, combat: 8, move: 2 },
              abilities: [
                "Anti-Fighter Barrage 6 (x4) This ship can move through systems that contain other players' ships.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Davish S’Norri - Labor Relations Specialist",
          unlockCriteria: "At Game Start",
          ability:
            "At the start of invasion : You may exhaust this card to choose 1 ship in the active system. During this invasion, that ship may use its ANTI-FIGHTER BARRAGE as if it were BOMBARDMENT.",
        },
        commander: {
          name: "Fillipo Rois - Logistical Expeditor",
          unlockCriteria: "Have 6 of your destroyers on the game board",
          ability:
            "After you activate a system, you may produce and assign 1 hit to a non- fighter ship you control in a system to apply +1 to the move value of 1 of your ships in that system until the end of this tactical action.",
        },
        hero: {
          name: "Turra Sveyar - Shadow Councilor",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "CONTRACT NETWORK - FRIENDS IN LOW PLACES After another player scores a secret objective : You may attach, or remove and attach, this card to that secret objective. You treat the attached secret objective as if it were a public objective. After you score the attached objective, purge this card.",
        },
      },
    },
    "The Vaden Banking Clans": {
      abilities: [
        {
          name: "FINE PRINT",
          description:
            "After a player resolves the secondary ability of 1 of your strategy cards, place up to 1 of their control tokens on your faction sheet.",
        },
        {
          name: "COLLATERALIZED LOANS",
          description:
            "After 1 of your opponent’s ships is destroyed during a round of space combat, you may remove 1 of that player’s control tokens from your faction sheet to place 1 ship of that type from your reinforcements in the active system.",
        },
        {
          name: "BINDING DEBTS",
          description:
            "Other players may place their control tokens on your faction sheet at any time. At the start of the status phase, each of your neighbors may give you 1 trade good to remove up to 2 of their control tokens from your faction sheet.",
        },
      ],
      promissoryNote: {
        name: "Vaden Handshake",
        description:
          "After you activate a system: You may spend any number of trade goods ; for each trade good spent, apply +1 to the move value of 1 non- fighter ship you control during this activation. Return this card to the Vaden player at the end of this activation.",
      },
      technologies: [
        {
          name: "Midas Turbine",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "After you activate a system, you may exhaust this card and spend any number of trade goods ; for each trade good you spent, apply +1 to the move value of 1 non- fighter ship you control.",
        },
        {
          name: "Krovoz Strike Teams",
          type: TECH_TYPES.CYBERNETIC,
          description:
            "After another player’s unit uses SUSTAIN DAMAGE to cancel a hit produced by your units or abilities, you may exhaust this card to destroy that unit. After you produce 1 or more hits during a round of combat, you may spend 1 trade good to produce 1 additional hit.",
        },
      ],
      startingTechnologyChoice: {
        count: 2,
        options: ["antimass-deflectors", "neural-motivator", "sarween-tools"],
      },
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 2,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Aurum Vadra",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage Bombardment 5 (x2) After this unit produces 1 or more hits during a BOMBARDMENT roll, gain 1 trade good.",
          ],
        },
        mech: {
          name: "Collector",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "At the end of a round of ground combat, you may remove 1 of your opponent’s control tokens from your faction sheet to place 1 infantry unit from your reinforcements on this planet. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "High Security Vault",
          description:
            "Other players cannot take any of your trade goods, commodities, or relic fragments unless you allow it. When another player returns 1 of your promissory notes, place 1 of their control tokens on your faction sheet.",
        },
      },
      leaders: {
        agent: {
          name: "Yudri Sukhov - Developer",
          unlockCriteria: "At Game Start",
          ability:
            "At the start of a player's turn: You may exhaust this card to allow that player to choose 1 planet they control; that player gains a number of commodities equal to that planet's influence value.",
        },
        commander: {
          name: "Komdar Borodin - Banker",
          unlockCriteria:
            "Have 1 or more different players’ control tokens on your faction sheet for every 2 players in this game",
          ability:
            "At the start of the status phase : Gain 1 trade good for each secret objective you have scored and 1 commodity for each public objective you have scored.",
        },
        hero: {
          name: "Putriv Sirvonsk - Clanmaster Prime",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "ACULA NETWORK - DEBTS COME DUE ACTION: For each control token that belongs to another player on your faction sheet, you may return that token. If you do, that player must give you 1 of their trade goods, 2 of their commodities, or 1 promissory note from their hand, if able. Then, purge this card.",
        },
      },
    },
    "The Vaylerian Scourge": {
      abilities: [
        {
          name: "CARGO RAIDERS",
          description:
            "During the first round of a space combat, you may prevent your opponent from declaring a retreat unless they spend 1 trade good.",
        },
        {
          name: "SCOUR",
          description:
            "Once per tactical action, after you gain control of a planet, you may discard 1 action card to ready that planet.",
        },
        {
          name: "RAZE",
          description:
            "After 1 or more of another player's structures are destroyed on a planet that contains your units, you may replenish your commodities.",
        },
      ],
      promissoryNote: {
        name: "Clan's Favor",
        description:
          "At the start of a round of space combat : The Vaylerian player discards 1 action card. Then, move all of your ships from the active system to an adjacent system that does not contain another player's ships; the space combat ends in a draw. Then, place a command token from your reinforcements in that system and return this card to the Vaylerian player.",
      },
      technologies: [
        {
          name: "Scavenger Exos",
          type: TECH_TYPES.WARFARE,
          description:
            "Once per action, after you win a ground combat, you may draw 1 action card.",
        },
      ],
      startingTechnologies: ["neural-motivator", "dark-energy-tap"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 3,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.CRUISER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Lost Cause",
          stats: { cost: 8, combat: "7 (x2)", move: 2, capacity: 3 },
          abilities: [
            "Sustain Damage At the start of a space combat in this system, you may choose 1 adjacent system. Your opponent cannot retreat to that system.",
          ],
        },
        mech: {
          name: "Eclipse",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "During your tactical actions, hits produced by SPACE CANNON cannot be assigned to 1 of your ships in this system. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Gravitic Disruption",
          description:
            "After you move 1 or more ships into the active system, you may discard an action card to move 1 of those ships into an adjacent system that does not contain another player’s ships.",
        },
        cruiser: {
          tiers: [
            {
              name: "Raider I",
              stats: { cost: 2, combat: 7, move: 2, capacity: 1 },
              abilities: [
                "During a round of space combat, if your opponent cannot declare a retreat, hits produced by this ship must be assigned to non- fighter ships, if able. This unit may only transport ground forces.",
              ],
            },
            {
              name: "Raider II",
              stats: { cost: 2, combat: 6, move: 3, capacity: 1 },
              abilities: [
                "During a round of space combat, if your opponent cannot declare a retreat, hits produced by this ship cannot be canceled and must be assigned to non- fighter ships, if able.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Yvin Korduul - Political Gambler",
          unlockCriteria: "At Game Start",
          ability:
            "After a player gains control of a planet, you may exhaust this card to allow that player to draw 1 action card.",
        },
        commander: {
          name: "Pyndil Gonsuul - Strike Team Coordinator",
          unlockCriteria: "Control 3 planets that each have the same trait",
          ability:
            "After you activate a system: Choose 1 ship you control with a capacity value, apply +2 to that value during this tactical action.",
        },
        hero: {
          name: "Dyln Harthuul - Vice Admiral of Fleet Group 15",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "SPEAR OF VAYLAR - HIDDEN VANGUARD After you activate a system: Remove 1 of your command tokens from the board and gain 1 command token. Until the end of this tactical action, apply +1 to the move value of each of your ships and the result of each of your ships’ combat rolls. At the end of this turn, purge this card.",
        },
      },
    },
    "The Veldyr Sovereignty": {
      abilities: [
        {
          name: "CORPORATE ENTITY",
          description:
            "During setup, take the additional Veldyr faction promissory notes ; you have 4 faction promissory notes. “Branch Office” attachments do not count toward scoring objectives.",
        },
        {
          name: "HOLDING COMPANY",
          description:
            "At the start of the status phase, for each planet that has a Branch Office attachment, you may gain 1 commodity or convert 1 of your commodities to a trade good.",
        },
        {
          name: "TARGETED ACQUISITION",
          description:
            "At the start of the status phase, you may give 1 of your faction promissory notes in your hand to 1 of your neighbors.",
        },
      ],
      promissoryNote: [
        {
          name: "Branch Office - Tax Haven",
          description:
            "When you receive this card, you must attach it to a non-home planet you control other than Mecatol Rex that does not have a Branch Office attachment. Its influence value is increased by 1.",
        },
        {
          name: "Branch Office - Broadcast Hub",
          description:
            "When you receive this card, you must attach it to a non-home planet you control other than Mecatol Rex that does not have a Branch Office attachment. Its influence value is increased by 1.",
        },
        {
          name: "Branch Office - Reserve Bank",
          description:
            "When you receive this card, you must attach it to a non-home planet you control other than Mecatol Rex that does not have a Branch Office attachment. Its resource value is increased by 1.",
        },
        {
          name: "Branch Office - Orbital Shipyard",
          description:
            "When you receive this card, you must attach it to a non-home planet you control other than Mecatol Rex that does not have a Branch Office attachment. Its resource value is increased by 1.",
        },
      ],
      technologies: [
        {
          name: "SEIDR Project",
          type: TECH_TYPES.WARFARE,
          description:
            "At the end of each round of space combat, you may use the SPACE CANNON of 1 of your units in the active system against your opponent's ships, without rolling additional dice.",
        },
      ],
      startingTechnologies: ["ai-development-algorithm", "dark-energy-tap"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 4,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 3,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "Richtyrian",
          stats: { cost: 8, combat: "7 (x2)", move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage When this ship makes a combat roll, it rolls 1 additional die for each round of combat that has been resolved this combat.",
          ],
        },
        mech: {
          name: "Aurora Stormcaller",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "After a player activates this system, you may remove this unit from the game board to place 1 PDS from your reinforcements on this planet. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Aurora Research Base",
          description:
            "Your home system is also a nebula. Hits produced by the ability rolls of your units in nebulae cannot be canceled. When you pass, explore the frontier deck in your home system.",
        },
        dreadnought: {
          tiers: [
            {
              name: "Lancer Dreadnought I",
              stats: { cost: 4, combat: 5, move: 1, capacity: 1 },
              abilities: ["Sustain Damage Bombardment 5 Space Cannon 8"],
            },
            {
              name: "Lancer Dreadnought II",
              stats: { cost: 4, combat: 5, move: 2, capacity: 1 },
              abilities: [
                'Sustain Damage Bombardment 5 Space Cannon 5 This unit cannot be destroyed by "Direct Hit" action cards.',
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Solis Morden - Research and Development",
          unlockCriteria: "At Game Start",
          ability:
            "When a player spends resources to research : You may exhaust this card to allow that player to spend the influence of 1 planet they control as resources.",
        },
        commander: {
          name: "Vera Khage - Chief Legal Officer",
          unlockCriteria:
            "2 other players control 1 or more planets that have Branch Office attachments",
          ability:
            "When you research a technology that is owned by a player who controls a planet with a Branch Office attachment, you may ignore 1 prerequisite on that technology.",
        },
        hero: {
          name: "Auberon Elyrin - Chairman",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "TWILIGHT PROTOCOL - A NEW DAWN ACTION: For each planet that has a Branch Office attachment, you may gain 1 unit upgrade technology of the same unit type as 1 owned by the player that controls that planet. Then, purge this card.",
        },
      },
    },
    "The Zelian Purifier": {
      abilities: [
        {
          name: "OBSESSIVE DESIGNS",
          description:
            "During the action phase, after you research a unit upgrade technology, you may use the PRODUCTION ability of 1 of your space docks in your home system to produce units of that type, reducing the combined cost of the produced units by 2.",
        },
        {
          name: "BIOPHOBIC",
          description:
            "During the agenda phase, the number of votes you cast is instead equal to the number of planets you exhaust to cast votes.",
        },
        {
          name: "PARANOIA",
          description:
            "Game effects other than your command tokens cannot prevent you from activating, or moving ships into, your home system.",
        },
      ],
      promissoryNote: {
        name: "Hyperkinetic Ordinance",
        description:
          "When 1 or more of your units would make a BOMBARDMENT roll: If you produce 1 or more hits during this BOMBARDMENT roll, produce 1 additional hit for that roll. Then, return this card to the Zelian player.",
      },
      technologies: [
        {
          name: "Shard Volley",
          type: TECH_TYPES.WARFARE,
          description:
            "When 1 or more of your units produce 1 or more hits during a BOMBARDMENT roll against a planet, produce 1 additional hit for that roll.",
        },
      ],
      startingTechnologies: ["ai-development-algorithm", "antimass-deflectors"],
      startingUnits: {
        [FACTION_UNIT_TYPES.INFANTRY]: 5,
        [FACTION_UNIT_TYPES.CARRIER]: 1,
        [FACTION_UNIT_TYPES.DESTROYER]: 1,
        [FACTION_UNIT_TYPES.DREADNOUGHT]: 1,
        [FACTION_UNIT_TYPES.FIGHTER]: 1,
        [FACTION_UNIT_TYPES.PDS]: 1,
        [FACTION_UNIT_TYPES.SPACE_DOCK]: 1,
      },
      units: {
        flagship: {
          name: "World-Cracker",
          stats: { cost: 8, combat: 5, move: 1, capacity: 3 },
          abilities: [
            "Sustain Damage Bombardment 5 Anti-Fighter Barrage 5 When this unit makes a combat or unit ability roll, it rolls 1 additional die for each asteroid field adjacent to this unit.",
          ],
        },
        mech: {
          name: "Collider",
          stats: { cost: 2, combat: 6 },
          abilities: [
            "At the start of invasion, if this unit is in the space area of the active system, you may remove this unit from the game board to destroy 1 unit on a planet in that system. Sustain Damage",
          ],
        },
        breakthrough: {
          name: "Awakened Planetoids",
          description:
            "Your planets in the active system participate in space combat if that system contains 1 or more of your ships, and ground combat on themselves if they contain 1 or more of your ground forces. Your planets cannot be assigned hits and have a combat value equal to 10 minus their resource value, minimum 1.",
        },
        infantry: {
          tiers: [
            {
              name: "Impactor I",
              stats: { cost: "1 (x2)", combat: 8 },
              abilities: [
                "Bombardment 9 During invasion, this unit must commit to a planet it bombards.",
              ],
            },
            {
              name: "Impactor II",
              stats: { cost: "1 (x2)", combat: 7 },
              abilities: [
                "Bombardment 8 After this unit is destroyed, roll 1 die. If the result is 6 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system.",
              ],
            },
          ],
        },
      },
      leaders: {
        agent: {
          name: "Zelian A - The Mutilator",
          unlockCriteria: "At Game Start",
          ability:
            "At the start of invasion : You may exhaust this card to allow the active player to replace 1 of their infantry in the space area of the active system with 1 mech from their reinforcements.",
        },
        commander: {
          name: "Zelian B - The Hunter",
          unlockCriteria:
            "Have 1 or more ships in 2 systems that contain an asteroid field",
          ability:
            "Each of your Dreadnoughts and War Suns without ANTI-FIGHTER BARRAGE gains ANTI-FIGHTER BARRAGE 5.",
        },
        hero: {
          name: "Zelian R - The Destroyer",
          unlockCriteria: "Have 3 Scored Objectives",
          ability:
            "CATACLYSM - CELESTIAL IMPACT After you move a unit with BOMBARDMENT into a non-home system other than Mecatol Rex : You may gain trade goods equal to the total combined resource values of planets in that system. If you do, destroy all units on planets in that system and replace that system tile with the Zelian asteroid tile. Then, purge this card and each planet card that corresponds to the replaced system tile.",
        },
      },
    },
  },
};

export default factionData;
