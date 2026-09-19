import { TECH_TYPES } from "./factionData";
import { EXPANSIONS } from "./tileData";

// Basic (non-faction, non-unit upgrade) technologies that every player can
// research. Card text reflects the current wording: where a card was replaced
// by a Codex omega version, the latest version is used.
//
// `prerequisites` lists one entry per prerequisite symbol on the card, so its
// length is the technology's "level" (0-3). `omega` is the Codex revision
// (1 = Ω, 2 = ΩΩ) the text comes from, when the card has been replaced.
const technologyData = {
  all: {
    // Biotic
    "neural-motivator": {
      name: "Neural Motivator",
      type: TECH_TYPES.BIOTIC,
      prerequisites: [],
      description: [
        "During the status phase, draw 2 action cards instead of 1.",
      ],
    },
    "dacxive-animators": {
      name: "Dacxive Animators",
      type: TECH_TYPES.BIOTIC,
      prerequisites: [TECH_TYPES.BIOTIC],
      description: [
        "After you win a ground combat, you may place 1 infantry from your reinforcements on that planet.",
      ],
    },
    "hyper-metabolism": {
      name: "Hyper Metabolism",
      type: TECH_TYPES.BIOTIC,
      prerequisites: [TECH_TYPES.BIOTIC, TECH_TYPES.BIOTIC],
      description: [
        "During the status phase, gain 3 command tokens instead of 2.",
      ],
    },
    "x-89-bacterial-weapon": {
      name: "X-89 Bacterial Weapon",
      type: TECH_TYPES.BIOTIC,
      prerequisites: [TECH_TYPES.BIOTIC, TECH_TYPES.BIOTIC, TECH_TYPES.BIOTIC],
      omega: 2,
      description: [
        "Double the hits produced by your units' BOMBARDMENT and ground combat rolls.",
        "Exhaust each planet you use BOMBARDMENT against.",
      ],
    },
    psychoarchaeology: {
      name: "Psychoarchaeology",
      type: TECH_TYPES.BIOTIC,
      expansion: EXPANSIONS.POK,
      prerequisites: [],
      description: [
        "You can use technology specialties on planets you control without exhausting them, even if those planets are exhausted.",
        "During the action phase, you can exhaust planets you control that have technology specialties to gain 1 trade good.",
      ],
    },
    "bio-stims": {
      name: "Bio-Stims",
      type: TECH_TYPES.BIOTIC,
      expansion: EXPANSIONS.POK,
      prerequisites: [TECH_TYPES.BIOTIC],
      exhaustible: true,
      description: [
        "You may exhaust this card at the end of your turn to ready 1 of your planets that has a technology specialty or 1 of your other technologies.",
      ],
    },

    // Propulsion
    "antimass-deflectors": {
      name: "Antimass Deflectors",
      type: TECH_TYPES.PROPULSION,
      prerequisites: [],
      description: [
        "Your ships can move into and through asteroid fields.",
        "When other players' units use SPACE CANNON against your units, apply -1 to the result of each die roll.",
      ],
    },
    "gravity-drive": {
      name: "Gravity Drive",
      type: TECH_TYPES.PROPULSION,
      prerequisites: [TECH_TYPES.PROPULSION],
      description: [
        "After you activate a system, apply +1 to the move value of 1 of your ships during this tactical action.",
      ],
    },
    "fleet-logistics": {
      name: "Fleet Logistics",
      type: TECH_TYPES.PROPULSION,
      prerequisites: [TECH_TYPES.PROPULSION, TECH_TYPES.PROPULSION],
      description: [
        "During each of your turns of the action phase, you may perform 2 actions instead of 1.",
      ],
    },
    "light-wave-deflector": {
      name: "Light/Wave Deflector",
      type: TECH_TYPES.PROPULSION,
      prerequisites: [
        TECH_TYPES.PROPULSION,
        TECH_TYPES.PROPULSION,
        TECH_TYPES.PROPULSION,
      ],
      description: [
        "Your ships can move through systems that contain other players' ships.",
      ],
    },
    "dark-energy-tap": {
      name: "Dark Energy Tap",
      type: TECH_TYPES.PROPULSION,
      expansion: EXPANSIONS.POK,
      prerequisites: [],
      description: [
        "After you perform a tactical action in a system that contains a frontier token, if you have 1 or more ships in that system, explore that token.",
        "Your ships can retreat into adjacent systems that do not contain other players' units, even if you do not have units or control planets in that system.",
      ],
    },
    "sling-relay": {
      name: "Sling Relay",
      type: TECH_TYPES.PROPULSION,
      expansion: EXPANSIONS.POK,
      prerequisites: [TECH_TYPES.PROPULSION],
      exhaustible: true,
      description: [
        "ACTION: Exhaust this card to produce 1 ship in any system that contains 1 of your space docks.",
      ],
    },

    // Cybernetic
    "sarween-tools": {
      name: "Sarween Tools",
      type: TECH_TYPES.CYBERNETIC,
      prerequisites: [],
      description: [
        "When 1 or more of your units use PRODUCTION, reduce the combined cost of the produced units by 1.",
      ],
    },
    "graviton-laser-system": {
      name: "Graviton Laser System",
      type: TECH_TYPES.CYBERNETIC,
      prerequisites: [TECH_TYPES.CYBERNETIC],
      exhaustible: true,
      description: [
        "You may exhaust this card before 1 or more of your units uses SPACE CANNON; hits produced by those units must be assigned to non-fighter ships if able.",
      ],
    },
    "transit-diodes": {
      name: "Transit Diodes",
      type: TECH_TYPES.CYBERNETIC,
      prerequisites: [TECH_TYPES.CYBERNETIC, TECH_TYPES.CYBERNETIC],
      exhaustible: true,
      description: [
        "You may exhaust this card at the start of your turn during the action phase; remove up to 4 of your ground forces from the game board and place them on 1 or more planets you control.",
      ],
    },
    "integrated-economy": {
      name: "Integrated Economy",
      type: TECH_TYPES.CYBERNETIC,
      prerequisites: [
        TECH_TYPES.CYBERNETIC,
        TECH_TYPES.CYBERNETIC,
        TECH_TYPES.CYBERNETIC,
      ],
      description: [
        "After you gain control of a planet, you may produce any number of units on that planet that have a combined cost equal to or less than that planet's resource value.",
      ],
    },
    "scanlink-drone-network": {
      name: "Scanlink Drone Network",
      type: TECH_TYPES.CYBERNETIC,
      expansion: EXPANSIONS.POK,
      prerequisites: [],
      description: [
        "When you activate a system, you may explore 1 planet in that system which contains 1 or more of your units.",
      ],
    },
    "predictive-intelligence": {
      name: "Predictive Intelligence",
      type: TECH_TYPES.CYBERNETIC,
      expansion: EXPANSIONS.POK,
      prerequisites: [TECH_TYPES.CYBERNETIC],
      exhaustible: true,
      description: [
        "At the end of your turn, you may exhaust this card to redistribute your command tokens.",
        "When you cast votes during the agenda phase, you may cast 3 additional votes; if you do, and the outcome you voted for is not resolved, exhaust this card.",
      ],
    },

    // Warfare
    "plasma-scoring": {
      name: "Plasma Scoring",
      type: TECH_TYPES.WARFARE,
      prerequisites: [],
      description: [
        "When 1 or more of your units use BOMBARDMENT or SPACE CANNON, 1 of those units may roll 1 additional die.",
      ],
    },
    "magen-defense-grid": {
      name: "Magen Defense Grid",
      type: TECH_TYPES.WARFARE,
      prerequisites: [TECH_TYPES.WARFARE],
      omega: 2,
      description: [
        "When any player activates a system that contains 1 or more of your structures, place 1 infantry from your reinforcements with each of those structures.",
        "At the start of ground combat on a planet that contains 1 or more of your structures, produce 1 hit and assign it to 1 of your opponent's ground forces.",
      ],
    },
    "duranium-armor": {
      name: "Duranium Armor",
      type: TECH_TYPES.WARFARE,
      prerequisites: [TECH_TYPES.WARFARE, TECH_TYPES.WARFARE],
      description: [
        "During each combat round, after you assign hits to your units, repair 1 of your damaged units that did not use SUSTAIN DAMAGE during this combat round.",
      ],
    },
    "assault-cannon": {
      name: "Assault Cannon",
      type: TECH_TYPES.WARFARE,
      prerequisites: [
        TECH_TYPES.WARFARE,
        TECH_TYPES.WARFARE,
        TECH_TYPES.WARFARE,
      ],
      description: [
        "At the start of a space combat in a system that contains 3 or more of your non-fighter ships, your opponent must destroy 1 of their non-fighter ships.",
      ],
    },
    "ai-development-algorithm": {
      name: "AI Development Algorithm",
      type: TECH_TYPES.WARFARE,
      expansion: EXPANSIONS.POK,
      prerequisites: [],
      exhaustible: true,
      description: [
        "When you research a unit upgrade technology, you may exhaust this card to ignore any 1 prerequisite.",
        "When 1 or more of your units use PRODUCTION, you may exhaust this card to reduce the combined cost of the produced units by the number of unit upgrade technologies that you own.",
      ],
    },
    "self-assembly-routines": {
      name: "Self Assembly Routines",
      type: TECH_TYPES.WARFARE,
      expansion: EXPANSIONS.POK,
      prerequisites: [TECH_TYPES.WARFARE],
      exhaustible: true,
      description: [
        "After 1 or more of your units use PRODUCTION, you may exhaust this card to place 1 mech from your reinforcements on a planet you control in that system.",
        "After 1 of your mechs is destroyed, gain 1 trade good.",
      ],
    },
  },
};

export default technologyData;
