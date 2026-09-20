import tileData from "../data/tileData";
import { neighborPositions } from "./Helpers";

/**
 * Matches the two forms a hyperlane tile can take in the tiles array: an official hyperlane
 * ("83A" through "91B") or one of the fan hyperlanes ("hypbball"), each optionally followed by a
 * rotation index of 0-5 (60 degrees per step).
 */
const HYPERLANE_TILE = /^((?:8[3-9]|9[01])[AB]|hyp[a-z0-9]+?)(?:-([0-5]))?$/;

/**
 * Split a tiles-array entry into the tile it names and how far it has been rotated. Anything that
 * isn't a hyperlane tile comes back unrotated, since rotation only means something for hyperlanes.
 * @param {number|string} tile an entry from the tiles array
 * @returns {{id: number|string, rotation: number, isHyperlane: boolean}}
 */
export const parseTile = (tile) => {
  const match = HYPERLANE_TILE.exec(String(tile));
  if (match && tileData.hyperlanes.indexOf(match[1]) >= 0) {
    return {
      id: match[1],
      rotation: Number(match[2]) || 0,
      isHyperlane: true,
    };
  }
  return { id: tile, rotation: 0, isHyperlane: false };
};

/**
 * Whether a tiles-array entry is a hyperlane tile rather than a real system.
 * @param {number|string} tile an entry from the tiles array
 * @returns {boolean}
 */
export const isHyperlaneTile = (tile) => parseTile(tile).isHyperlane;

/**
 * A hyperlane tile has no adjacency of its own — per the TI4 rules, any real systems connected
 * through a chain of hyperlane tiles are directly adjacent to each other (a single hop), no matter
 * how many hyperlane tiles are strung between them. Given we just entered hyperlanePosition from
 * fromPosition, this chases the printed lines (through any further chained hyperlane tiles) and
 * returns the real, non-hyperlane systems reachable that way.
 * @param {(number|string)[]} tiles the tiles array
 * @param {number} hyperlanePosition position of the hyperlane tile being entered
 * @param {number} fromPosition position we entered it from
 * @param {Set<number>} visited hyperlane positions already walked, to stop lanes looping forever
 * @returns {number[]} positions of the real systems on the far side
 */
export const getHyperlaneEndpoints = (
  tiles,
  hyperlanePosition,
  fromPosition,
  visited,
) => {
  if (visited.has(hyperlanePosition)) {
    return [];
  }
  visited.add(hyperlanePosition);

  const physicalNeighbors = neighborPositions(hyperlanePosition);
  const directionIn = physicalNeighbors.indexOf(fromPosition);
  if (directionIn < 0) {
    return [];
  }

  const { id, rotation } = parseTile(tiles[hyperlanePosition]);
  const hyperlaneLinks = (tileData.all[id] || {}).hyperlanes || [];

  const endpoints = [];
  for (const [start, end] of hyperlaneLinks) {
    const startDir = (start + rotation) % 6;
    const endDir = (end + rotation) % 6;
    const outDir =
      startDir === directionIn
        ? endDir
        : endDir === directionIn
          ? startDir
          : -1;
    if (outDir < 0) {
      continue;
    }

    const outNeighbor = physicalNeighbors[outDir];
    if (outNeighbor === undefined || outNeighbor >= tiles.length) {
      continue;
    }

    if (isHyperlaneTile(tiles[outNeighbor])) {
      endpoints.push(
        ...getHyperlaneEndpoints(
          tiles,
          outNeighbor,
          hyperlanePosition,
          visited,
        ),
      );
    } else {
      endpoints.push(outNeighbor);
    }
  }
  return endpoints;
};

/**
 * Board positions that are one hop away from position, honoring hyperlane rules: a physical
 * neighbor that is a hyperlane tile is skipped over entirely, connecting straight through to
 * whatever real systems the hyperlane (or chain of hyperlanes) links to. On a board with no
 * hyperlanes this is just the six physical neighbors.
 * @param {(number|string)[]} tiles the tiles array
 * @param {number} position index into the tiles array
 * @returns {number[]} adjacent positions, without duplicates
 */
export const getAdjacentPositions = (tiles, position) => {
  const neighbors = [];
  for (const neighbor of neighborPositions(position)) {
    if (neighbor === undefined || neighbor >= tiles.length) {
      continue;
    }
    if (isHyperlaneTile(tiles[neighbor])) {
      neighbors.push(
        ...getHyperlaneEndpoints(tiles, neighbor, position, new Set()),
      );
    } else {
      neighbors.push(neighbor);
    }
  }
  // A lane can run back around to where it started, or reach the same system twice by different
  // routes; neither makes a system adjacent to itself or doubly adjacent.
  return neighbors.filter(
    (neighbor, index) =>
      neighbor !== position && neighbors.indexOf(neighbor) === index,
  );
};
