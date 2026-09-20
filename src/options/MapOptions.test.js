import MapOptions from "./MapOptions";
import tileData, { EXPANSIONS } from "../data/tileData";
import { getAdjacentPositions } from "../helpers/Adjacency";

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
const mapOptions = () => {
  const instance = new MapOptions({ includedTiles: [], lockedTiles: [] });
  instance.state = { ...instance.state, currentSeed: "1234" };
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
