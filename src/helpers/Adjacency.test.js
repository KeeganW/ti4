import adjacencyData from "../data/adjacencyData.json";
import { getAdjacentPositions, isHyperlaneTile, parseTile } from "./Adjacency";

// A board with no hyperlanes on it at all, so adjacency is purely physical. 91 positions is the
// full five-ring board adjacencyData.json covers.
const plainBoard = () => new Array(91).fill("19");

describe("parseTile", () => {
  it("reads official hyperlanes with and without a rotation", () => {
    expect(parseTile("83A")).toEqual({
      id: "83A",
      rotation: 0,
      isHyperlane: true,
    });
    expect(parseTile("84A-2")).toEqual({
      id: "84A",
      rotation: 2,
      isHyperlane: true,
    });
  });

  it("reads fan hyperlanes, including ones whose name ends in a digit", () => {
    expect(parseTile("hypbball-5")).toEqual({
      id: "hypbball",
      rotation: 5,
      isHyperlane: true,
    });
    expect(parseTile("hypriftabout1")).toEqual({
      id: "hypriftabout1",
      rotation: 0,
      isHyperlane: true,
    });
    expect(parseTile("hypriftabout1-3")).toEqual({
      id: "hypriftabout1",
      rotation: 3,
      isHyperlane: true,
    });
  });

  it("leaves real systems and empty positions alone", () => {
    expect(isHyperlaneTile(68)).toBe(false);
    expect(isHyperlaneTile("68")).toBe(false);
    expect(isHyperlaneTile("er24")).toBe(false);
    expect(isHyperlaneTile(-1)).toBe(false);
    expect(isHyperlaneTile(0)).toBe(false);
    expect(parseTile(68).id).toBe(68);
  });
});

describe("getAdjacentPositions without hyperlanes", () => {
  it("matches adjacencyData for every position on the board", () => {
    const tiles = plainBoard();
    for (let position = 0; position < tiles.length; position++) {
      expect(
        getAdjacentPositions(tiles, position).sort((a, b) => a - b),
      ).toEqual([...adjacencyData[position]].sort((a, b) => a - b));
    }
  });

  it("does not report neighbors that fall off the end of a smaller board", () => {
    // A three ring board: positions 37 and up don't exist, so position 19's ring four neighbors
    // shouldn't be reported.
    const tiles = new Array(37).fill("19");
    expect(getAdjacentPositions(tiles, 19).sort((a, b) => a - b)).toEqual([
      7, 20, 36,
    ]);
  });
});

describe("getAdjacentPositions across hyperlanes", () => {
  // Tile 83A carries a single lane joining edge 1 to edge 4. Sitting at the center of the board,
  // with no rotation, that joins position 2 (the center's edge 1 neighbor) to position 5 (its
  // edge 4 neighbor).
  const laneAtCenter = (tile) => {
    const tiles = plainBoard();
    tiles[0] = tile;
    return tiles;
  };

  it("connects the two systems a lane joins", () => {
    const tiles = laneAtCenter("83A");
    expect(getAdjacentPositions(tiles, 2)).toContain(5);
    expect(getAdjacentPositions(tiles, 5)).toContain(2);
  });

  it("does not treat the hyperlane tile itself as adjacent", () => {
    const tiles = laneAtCenter("83A");
    expect(getAdjacentPositions(tiles, 2)).not.toContain(0);
  });

  it("leaves systems the lane does not join unconnected", () => {
    const tiles = laneAtCenter("83A");
    // Position 1 sits on edge 0 of the center, which this lane doesn't touch, so it gains nothing
    // and loses its (hyperlane) neighbor.
    expect(getAdjacentPositions(tiles, 1).sort((a, b) => a - b)).toEqual([
      2, 6, 7, 8, 18,
    ]);
    expect(getAdjacentPositions(tiles, 3)).not.toContain(6);
  });

  it("honors the tile's rotation", () => {
    // Rotating 83A one step turns its 1-4 lane into a 2-5 lane, joining positions 3 and 6.
    const tiles = laneAtCenter("83A-1");
    expect(getAdjacentPositions(tiles, 2)).not.toContain(5);
    expect(getAdjacentPositions(tiles, 3)).toContain(6);
    expect(getAdjacentPositions(tiles, 6)).toContain(3);
  });

  it("runs straight through a chain of hyperlane tiles", () => {
    // Positions 0 and 2 both hold a lane running along the same axis, so position 5 connects
    // through both of them to position 9.
    const tiles = plainBoard();
    tiles[0] = "83A"; // joins position 5 to position 2
    tiles[2] = "83A"; // joins position 0 to position 9
    expect(getAdjacentPositions(tiles, 5)).toContain(9);
    expect(getAdjacentPositions(tiles, 9)).toContain(5);
    expect(getAdjacentPositions(tiles, 5)).not.toContain(2);
  });

  it("works out on the bigger rings, where adjacencyData is not in edge order", () => {
    // Position 37 is on ring four, where adjacencyData lists the right neighbors but not in edge
    // order - indexing that list by direction used to send lanes to the wrong system.
    const tiles = plainBoard();
    tiles[37] = "83A"; // edges 1 and 4 of position 37: positions 62 and 60
    expect(getAdjacentPositions(tiles, 60)).toContain(62);
    expect(getAdjacentPositions(tiles, 62)).toContain(60);
    // Position 19 sits on an edge this lane doesn't touch.
    expect(getAdjacentPositions(tiles, 19)).not.toContain(62);
  });

  it("does not make a system adjacent to itself when a lane loops back", () => {
    const tiles = plainBoard();
    tiles[0] = "83A";
    tiles[2] = "83A"; // chains back through position 0
    for (let position = 0; position < tiles.length; position++) {
      expect(getAdjacentPositions(tiles, position)).not.toContain(position);
    }
  });
});
