import MapOptions from "./MapOptions";
import tileData, { EXPANSIONS } from "../data/tileData";
import { getAdjacentPositions } from "../helpers/Adjacency";
import {
  getSliceImbalance,
  getSliceMap,
  getSliceStats,
} from "../helpers/Slices";
import boardData from "../data/boardData.json";

const includedExpansions = {
  [EXPANSIONS.POK]: true,
  [EXPANSIONS.TE]: false,
  [EXPANSIONS.DS]: false,
  [EXPANSIONS.UnS]: false,
  [EXPANSIONS.AS]: false,
  [EXPANSIONS.Async]: false,
};

/**
 * checkAdjacencies only reads props and seeded state, and never touches the DOM, so it can be
 * driven straight off an unmounted instance.
 */
const mapOptions = (state = {}) => {
  const instance = new MapOptions({
    includedTiles: [],
    lockedTiles: [],
    excludedTiles: [],
  });
  instance.state = { ...instance.state, currentSeed: "1234", ...state };
  return instance;
};

/** An empty five ring board with Mecatol Rex in the middle, the shape generation works on. */
const emptyBoard = () => {
  const tiles = new Array(91).fill(-1);
  tiles[0] = 18;
  return tiles;
};

const isAnomaly = (tile) =>
  tileData.all[tile] !== undefined &&
  tileData.all[tile].anomaly.length > 0 &&
  tileData.all[tile].type !== "green";

/** Every pair of positions holding anomalies that end up adjacent to each other. */
const adjacentAnomalyPairs = (tiles) => {
  const pairs = [];
  for (let position = 0; position < tiles.length; position++) {
    if (!isAnomaly(tiles[position])) continue;
    for (const neighbor of getAdjacentPositions(tiles, position)) {
      if (neighbor > position && isAnomaly(tiles[neighbor])) {
        pairs.push([position, neighbor]);
      }
    }
  }
  return pairs;
};

// Two supernovas: plain anomalies with no planets and no wormholes, so nothing else in
// checkAdjacencies has an opinion about where they sit.
const [firstSupernova, secondSupernova] = tileData.supernovas;

describe("checkAdjacencies", () => {
  it("separates anomalies that are physically adjacent", () => {
    const tiles = emptyBoard();
    tiles[1] = firstSupernova;
    tiles[2] = secondSupernova;
    expect(adjacentAnomalyPairs(tiles)).toHaveLength(1);

    mapOptions().checkAdjacencies(tiles, includedExpansions);

    expect(adjacentAnomalyPairs(tiles)).toHaveLength(0);
  });

  it("separates anomalies that are only adjacent through a hyperlane", () => {
    // 83A's lane joins edge 1 to edge 4, so dropped on the center it makes positions 2 and 5
    // adjacent to each other even though they are two hexes apart on the table.
    const tiles = emptyBoard();
    tiles[0] = "83A";
    tiles[2] = firstSupernova;
    tiles[5] = secondSupernova;
    expect(adjacentAnomalyPairs(tiles)).toEqual([[2, 5]]);

    mapOptions().checkAdjacencies(tiles, includedExpansions);

    expect(adjacentAnomalyPairs(tiles)).toHaveLength(0);
  });

  it("separates anomalies joined by a chain of hyperlanes", () => {
    const tiles = emptyBoard();
    tiles[0] = "83A";
    tiles[2] = "83A";
    tiles[5] = firstSupernova;
    tiles[9] = secondSupernova;
    expect(adjacentAnomalyPairs(tiles)).toEqual([[5, 9]]);

    mapOptions().checkAdjacencies(tiles, includedExpansions);

    expect(adjacentAnomalyPairs(tiles)).toHaveLength(0);
  });

  it("leaves anomalies alone when a hyperlane runs past them without joining them", () => {
    // Positions 1 and 4 touch the hyperlane at the center, but its lane runs between edges 1 and
    // 4 (positions 2 and 5), so these two aren't adjacent and neither should move.
    const tiles = emptyBoard();
    tiles[0] = "83A";
    tiles[1] = firstSupernova;
    tiles[4] = secondSupernova;
    const before = [...tiles];

    mapOptions().checkAdjacencies(tiles, includedExpansions);

    expect(tiles).toEqual(before);
  });

  it("leaves anomalies that are nowhere near each other alone", () => {
    const tiles = emptyBoard();
    tiles[1] = firstSupernova;
    tiles[11] = secondSupernova;
    const before = [...tiles];

    mapOptions().checkAdjacencies(tiles, includedExpansions);

    expect(tiles).toEqual(before);
  });
});

describe("balanceSlices", () => {
  /**
   * Generate a board the way the app does, but without going through setState, so the result can
   * be measured. balanceSlices is the last thing getNewTileSet does, so toggling it is the only
   * difference between the two boards a seed produces.
   */
  const generate = (players, style, balanceSlices, seed) =>
    mapOptions({
      currentNumberOfPlayers: players,
      currentBoardStyle: style,
      balanceSlices: balanceSlices,
      currentSeed: String(seed),
      pickFactions: false,
      ensureFactionAnomalies: false,
    }).getNewTileSet([], includedExpansions);

  const imbalance = (players, style, tiles) =>
    getSliceImbalance(
      getSliceStats(
        tiles,
        getSliceMap(
          tiles,
          boardData.styles[String(players)][style].home_worlds,
        ),
      ),
    );

  const resourceSpread = (players, style, tiles) => {
    const resources = getSliceStats(
      tiles,
      getSliceMap(tiles, boardData.styles[String(players)][style].home_worlds),
    ).map((slice) => slice.resources);
    return Math.max(...resources) - Math.min(...resources);
  };

  it("evens out the slices on the five player warp board", () => {
    // The board this was written for: five slices dealt by tile ranking routinely came out with
    // one player on roughly double another's resources
    for (let seed = 1; seed <= 10; seed++) {
      const unbalanced = generate(5, "warp", false, seed);
      const balanced = generate(5, "warp", true, seed);

      expect(imbalance(5, "warp", balanced)).toBeLessThanOrEqual(
        imbalance(5, "warp", unbalanced),
      );
      expect(resourceSpread(5, "warp", balanced)).toBeLessThanOrEqual(4);
    }
  });

  it("uses the same set of systems, just in different places", () => {
    const unbalanced = generate(5, "warp", false, 7);
    const balanced = generate(5, "warp", true, 7);

    const census = (tiles) => [...tiles].sort().join(",");
    expect(census(balanced)).toEqual(census(unbalanced));
  });

  it("leaves home systems and hyperlanes where the board style put them", () => {
    const style = boardData.styles["5"]["warp"];
    const tiles = generate(5, "warp", true, 7);

    for (const position of style.home_worlds) {
      expect(tiles[position]).toEqual(0);
    }
    for (const [position, tile, rotation] of style.hyperlane_tiles) {
      expect(tiles[position]).toEqual(tile + "-" + rotation);
    }
    expect(tiles[0]).toEqual(18);
  });

  it("does not push anomalies next to each other while evening things out", () => {
    for (let seed = 1; seed <= 10; seed++) {
      const tiles = generate(5, "warp", true, seed);
      expect(adjacentAnomalyPairs(tiles)).toHaveLength(0);
    }
  });
});

describe("forceAnomalies", () => {
  const generate = (forceAnomalies, seed) =>
    mapOptions({
      currentNumberOfPlayers: 6,
      currentBoardStyle: "normal",
      forceAnomalies: forceAnomalies,
      currentSeed: String(seed),
      pickFactions: false,
      ensureFactionAnomalies: false,
    }).getNewTileSet([], includedExpansions);

  /** The anomaly types present on a board, by their tileData list. */
  const typesPresent = (tiles) =>
    ["asteroidFields", "supernovas", "nebulae", "gravityRifts"].filter((type) =>
      tiles.some((tile) => tileData[type].includes(tile)),
    );

  it("puts every anomaly type on the board", () => {
    for (let seed = 1; seed <= 10; seed++) {
      expect(typesPresent(generate(true, seed))).toHaveLength(4);
    }
  });

  it("still keeps anomalies off each other", () => {
    for (let seed = 1; seed <= 10; seed++) {
      expect(adjacentAnomalyPairs(generate(true, seed))).toHaveLength(0);
    }
  });

  it("is off by default, where types can go missing", () => {
    const boards = [];
    for (let seed = 1; seed <= 10; seed++) {
      boards.push(typesPresent(generate(false, seed)).length);
    }
    expect(Math.min(...boards)).toBeLessThan(4);
  });
});
