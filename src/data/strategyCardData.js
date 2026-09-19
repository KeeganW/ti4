// Card text reflects the current (Thunder's Edge) wording where a card was
// updated for that expansion; otherwise the original/Codex wording, which TE
// left unchanged.
const strategyCardData = {
  all: {
    1: {
      name: "Leadership",
      primary: [
        "Gain 3 command tokens.",
        "Then, spend any amount of influence to gain 1 command token for every 3 influence spent.",
      ],
      secondary: [
        "Spend any amount of influence to gain 1 command token for every 3 influence spent.",
      ],
    },
    2: {
      name: "Diplomacy",
      primary: [
        "Choose 1 system other than the Mecatol Rex system that contains a planet you control; each other player places a command token from their reinforcements in the chosen system.",
        "Then, ready up to 2 exhausted planets you control.",
      ],
      secondary: [
        "Spend 1 token from your strategy pool to ready up to 2 exhausted planets you control.",
      ],
    },
    3: {
      name: "Politics",
      primary: [
        "Choose a player other than the speaker. That player gains the speaker token.",
        "Draw 2 action cards.",
        "Look at the top 2 cards of the agenda deck. Place each card on the top or bottom of the deck in any order.",
      ],
      secondary: [
        "Spend 1 token from your strategy pool to draw 2 action cards.",
      ],
    },
    4: {
      name: "Construction",
      primary: [
        "Either place 1 structure on a planet you control, or use the PRODUCTION ability of 1 of your space docks.",
      ],
      secondary: [
        "Spend 1 token from your strategy pool to place 1 structure on a planet you control.",
      ],
    },
    5: {
      name: "Trade",
      primary: [
        "Gain 3 trade goods.",
        "Replenish commodities.",
        "Choose any number of other players. Those players use the secondary ability of this strategy card without spending a command token.",
      ],
      secondary: [
        "Spend 1 token from your strategy pool to replenish commodities.",
      ],
    },
    6: {
      name: "Warfare",
      primary: [
        "Perform a tactical action in any system without placing a command token, even if the system already has your command token in it; that system still counts as being activated.",
        "You may redistribute your command tokens before and after this action.",
      ],
      secondary: [
        "Spend 1 token from your strategy pool to use the PRODUCTION abilities of units in your home system.",
      ],
    },
    7: {
      name: "Technology",
      primary: [
        "Research 1 technology.",
        "Spend 6 resources to research 1 technology.",
      ],
      secondary: [
        "Spend 1 token from your strategy pool and 4 resources to research 1 technology.",
      ],
    },
    8: {
      name: "Imperial",
      primary: [
        "Immediately score 1 public objective if you fulfill its requirements.",
        "Gain 1 victory point if you control Mecatol Rex; otherwise, draw 1 secret objective.",
      ],
      secondary: [
        "Spend 1 token from your strategy pool to draw 1 secret objective.",
      ],
    },
  },
};

export default strategyCardData;
