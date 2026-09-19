import { FACTION_UNIT_TYPES } from "./factionData";

const unitData = {
  [FACTION_UNIT_TYPES.INFANTRY]: {
    base: {
      name: "Infantry",
      stats: { cost: "1 (x2)", combat: 8 },
      abilities: [],
    },
    upgraded: {
      name: "Infantry II",
      stats: { cost: "1 (x2)", combat: 7 },
      abilities: [
        "After this unit is destroyed, roll 1 die. If the result is 6 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your home system.",
      ],
    },
  },
  [FACTION_UNIT_TYPES.FIGHTER]: {
    base: {
      name: "Fighter",
      stats: { cost: "1 (x2)", combat: 9, move: "-" },
      abilities: [],
    },
    upgraded: {
      name: "Fighter II",
      stats: { cost: "1 (x2)", combat: 8, move: 2 },
      abilities: [
        "This unit may move without being transported. Fighters in excess of your ships' capacity count against your fleet pool",
      ],
      description:
        "Upgraded Fighters have improved combat and gain the ability to move without being carried. However, if they are not being carried, each Fighter counts as 1 towards a player's fleet limit.",
    },
  },
  [FACTION_UNIT_TYPES.DESTROYER]: {
    base: {
      name: "Destroyer",
      stats: { cost: 1, combat: 9, move: 2 },
      abilities: ["Anti-Fighter Barrage 9 (x2)"],
    },
    upgraded: {
      name: "Destroyer II",
      stats: { cost: 1, combat: 8, move: 2 },
      abilities: ["Anti-Fighter Barrage 6 (x3)"],
      description:
        "Upgraded Destroyers have improved combat and greatly improved Anti-Fighter Barrage.",
    },
  },
  [FACTION_UNIT_TYPES.CRUISER]: {
    base: {
      name: "Cruiser",
      stats: { cost: 2, combat: 7, move: 2, capacity: "-" },
      abilities: [],
    },
    upgraded: {
      name: "Cruiser II",
      stats: { cost: 2, combat: 6, move: 3, capacity: 1 },
      abilities: [],
      description:
        "Upgraded Cruisers have improved combat, are faster, and gain capacity.",
    },
  },
  [FACTION_UNIT_TYPES.CARRIER]: {
    base: {
      name: "Carrier",
      stats: { cost: 3, combat: 9, move: 1, capacity: 4 },
      abilities: [],
    },
    upgraded: {
      name: "Carrier II",
      stats: { cost: 3, combat: 9, move: 2, capacity: 6 },
      abilities: [],
      description: "Upgraded Carriers are faster and have 2 more capacity.",
    },
  },
  [FACTION_UNIT_TYPES.DREADNOUGHT]: {
    base: {
      name: "Dreadnought",
      stats: { cost: 4, combat: 5, move: 1, capacity: 1 },
      abilities: ["Sustain Damage Bombardment 5"],
    },
    upgraded: {
      name: "Dreadnought II",
      stats: { cost: 4, combat: 5, move: 2, capacity: 1 },
      abilities: [
        '"Direct Hit" cards are no longer effective against this type of ship. Sustain Damage Bombardment 5',
      ],
      description:
        "Upgraded Dreadnoughts are faster and are no longer affected by the 'Direct Hit' action card.",
    },
  },
  [FACTION_UNIT_TYPES.WAR_SUN]: {
    base: {
      name: "War Sun",
      stats: { cost: "-", combat: "-", move: "-", capacity: "-" },
      abilities: [],
    },
    upgraded: {
      name: "War Sun",
      stats: { cost: 12, combat: "3 (x3)", move: 2, capacity: 6 },
      abilities: [
        "Other players' units in this system lose their Planetary Shield ability Sustain Damage Bombardment 3 (x3)",
      ],
      description:
        "War Suns are the strongest and most expensive unit in the game. Their ability to disable Planetary Shield combined with 3 rolls of very effective Bombardment allows them to effectively take control of planets.",
    },
  },
  [FACTION_UNIT_TYPES.PDS]: {
    base: {
      name: "PDS",
      stats: {},
      abilities: ["Planetary Shield Space Cannon 6"],
    },
    upgraded: {
      name: "PDS II",
      stats: {},
      abilities: [
        "You may use this unit's SPACE CANNON against ships that are adjacent to this unit's system. Planetary Shield Space Cannon 5",
      ],
      description:
        'Upgraded PDS gain a slightly improved hit rate but more importantly, the ability to fire their SPACE CANNONS into adjacent systems when applicable. This ability is colloquially called " Deep Space Cannon ".',
    },
  },
  [FACTION_UNIT_TYPES.SPACE_DOCK]: {
    base: {
      name: "Space Dock",
      stats: {},
      abilities: [
        "Up to 3 fighters in this system do not count against your ships' capacity. Production (Planet +2)",
      ],
    },
    upgraded: {
      name: "Space Dock II",
      stats: {},
      abilities: [
        "Up to 3 fighters in this system do not count against your ships' capacity. Production (Planet +4)",
      ],
      description:
        "Upgraded Space Docks have 2 more production than regular space docks.",
    },
  },
};

export default unitData;
