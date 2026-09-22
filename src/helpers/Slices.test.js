import {
  getSliceImbalance,
  getSliceMap,
  getSliceStats,
  getSystemValue,
} from "./Slices";
import boardData from "../data/boardData.json";

/** The five player warp board, laid out the way generation lays it out. */
const warpBoard = () => {
  const style = boardData.styles["5"]["warp"];
  const tiles = new Array(boardData.blankMap.length).fill(-1);
  tiles[0] = 18;
  for (const [position, tile, rotation] of style["hyperlane_tiles"]) {
    tiles[position] = tile + "-" + rotation;
  }
  for (const position of style["home_worlds"]) {
    tiles[position] = 0;
  }
  // Any real system will do; the slice map only cares about where systems are, not which ones
  for (const tier of ["primary_tiles", "secondary_tiles", "tertiary_tiles"]) {
    for (const position of style[tier]) {
      tiles[position] = 19;
    }
  }
  return { tiles, homeWorlds: style["home_worlds"] };
};

describe("getSliceMap", () => {
  it("gives every player on a symmetric board a slice of the same size", () => {
    const { tiles, homeWorlds } = warpBoard();

    const shares = getSliceMap(tiles, homeWorlds);

    const sizes = shares.map((slice) =>
      Object.values(slice).reduce((sum, share) => sum + share, 0),
    );
    // 25 systems, and every one of them is within two jumps of somebody
    expect(sizes).toEqual([5, 5, 5, 5, 5]);
  });

  it("splits a system evenly between the players equally close to it", () => {
    const { tiles, homeWorlds } = warpBoard();

    const shares = getSliceMap(tiles, homeWorlds);

    // Position 8 sits two jumps from both the home at 19 and the home at 22, and nobody else
    const owners = shares
      .map((slice, player) => [homeWorlds[player], slice[8]])
      .filter(([, share]) => share !== undefined);
    expect(owners).toEqual([
      [19, 0.5],
      [22, 0.5],
    ]);
  });

  it("reaches a system that only hyperlanes connect", () => {
    const { tiles, homeWorlds } = warpBoard();

    const shares = getSliceMap(tiles, homeWorlds);

    // 13 is walled in by the warp board's hyperlanes, so it is only in a slice at all because
    // getAdjacentPositions follows the lanes
    const owners = shares
      .map((slice, player) => [homeWorlds[player], slice[13]])
      .filter(([, share]) => share !== undefined);
    expect(owners).toEqual([
      [25, 0.5],
      [31, 0.5],
    ]);
  });

  it("does not let a slice reach through another player's home system", () => {
    const { tiles, homeWorlds } = warpBoard();

    const shares = getSliceMap(tiles, homeWorlds);

    for (const slice of shares) {
      for (const home of homeWorlds) {
        expect(slice[home]).toBeUndefined();
      }
      expect(slice[0]).toBeUndefined();
    }
  });
});

describe("getSystemValue", () => {
  it("counts a planet towards whichever of resources and influence is larger", () => {
    // 30 is Mellon (0/2) and Zohbat (3/1), so it is worth 3 resources or 2 influence
    expect(getSystemValue(30)).toEqual({
      resources: 3,
      influence: 2,
      planets: 2,
      anomalies: 0,
    });
  });

  it("splits a planet with equal resources and influence between the two", () => {
    // 27 is New Albion (1/1, so half to each) and Starpoint (3/1)
    expect(getSystemValue(27)).toEqual({
      resources: 3.5,
      influence: 0.5,
      planets: 2,
      anomalies: 0,
    });
  });

  it("counts an empty anomaly as an anomaly and nothing else", () => {
    // 41 is a plain gravity rift
    expect(getSystemValue(41)).toEqual({
      resources: 0,
      influence: 0,
      planets: 0,
      anomalies: 1,
    });
  });

  it("is zero for a position with no system in it", () => {
    expect(getSystemValue(-1)).toEqual({
      resources: 0,
      influence: 0,
      planets: 0,
      anomalies: 0,
    });
  });
});

describe("getSliceImbalance", () => {
  const slice = (resources, influence) => ({
    resources,
    influence,
    planets: 0,
    anomalies: 0,
  });

  it("is zero when every slice is the same", () => {
    expect(getSliceImbalance([slice(5, 4), slice(5, 4), slice(5, 4)])).toEqual(
      0,
    );
  });

  it("grows as the slices spread apart", () => {
    const even = getSliceImbalance([slice(4, 4), slice(5, 4), slice(6, 4)]);
    const uneven = getSliceImbalance([slice(1, 4), slice(5, 4), slice(9, 4)]);
    expect(uneven).toBeGreaterThan(even);
  });

  it("prefers spreading a shortfall over dumping it all on one player", () => {
    const shared = getSliceImbalance([slice(4, 4), slice(4, 4), slice(7, 4)]);
    const dumped = getSliceImbalance([slice(1, 4), slice(7, 4), slice(7, 4)]);
    expect(shared).toBeLessThan(dumped);
  });
});

describe("getSliceStats", () => {
  it("counts a shared system as half to each player who shares it", () => {
    const tiles = [];
    tiles[7] = 30; // worth 3 resources, 2 influence, across 2 planets

    const stats = getSliceStats(tiles, [{ 7: 1 }, { 7: 0.5 }]);

    expect(stats[0]).toEqual({
      resources: 3,
      influence: 2,
      planets: 2,
      anomalies: 0,
    });
    expect(stats[1]).toEqual({
      resources: 1.5,
      influence: 1,
      planets: 1,
      anomalies: 0,
    });
  });
});
