import tileData from "../data/tileData";
import { getAdjacentPositions, isHyperlaneTile } from "./Adjacency";

/**
 * How far from a home system a tile can sit and still count towards that player's slice. Two hops
 * covers the tiles a player can realistically claim early — their three (or so) neighbours plus the
 * ring behind them — which is what people mean when they say a slice is rich or poor.
 */
export const SLICE_DISTANCE = 2;

/**
 * How much each part of a slice counts when measuring how uneven the board is. Resources and
 * influence are what players actually complain about; planet count and anomaly count matter, but
 * are tie-breakers rather than the main event.
 */
const IMBALANCE_WEIGHTS = {
  resources: 1,
  influence: 1,
  planets: 0.25,
  anomalies: 1,
};

/**
 * Whether a board position holds a real system that can belong to a slice. Home systems are the
 * slice's owner rather than part of it, Mecatol Rex belongs to nobody, and hyperlanes aren't
 * systems at all (they only join other systems together).
 * @param {(number|string)[]} tiles the tiles array
 * @param {Set<number>} homePositions positions holding home systems
 * @param {number} position index into the tiles array
 * @returns {boolean}
 */
const holdsClaimableSystem = (tiles, homePositions, position) => {
  if (position === 0 || homePositions.has(position)) return false;
  const tile = tiles[position];
  if (tile === undefined || tile === -1 || tile === 0) return false;
  return !isHyperlaneTile(tile);
};

/**
 * Work out which positions make up each player's slice, and how much of each one they get. A tile
 * belongs to whichever home system reaches it in the fewest hops; tiles that two or more players
 * reach equally quickly are shared out evenly between them, because in play that is roughly how
 * they get fought over. Hyperlanes are followed as the rules see them (see getAdjacentPositions),
 * so the isolated system behind the warp board's hyperlanes lands in the slices that can reach it.
 * @param {(number|string)[]} tiles the tiles array, with home systems and hyperlanes already placed
 * @param {number[]} homeWorlds the board's home system positions
 * @param {number} [maxDistance=SLICE_DISTANCE] how many hops out a slice extends
 * @returns {Object<number, number>[]} per home world, a map of position to the share of it they get
 */
export const getSliceMap = (
  tiles,
  homeWorlds,
  maxDistance = SLICE_DISTANCE,
) => {
  const homePositions = new Set(homeWorlds);

  // Walk out from each home system separately, never passing through another home system, Mecatol
  // Rex, or an empty position — a tile only counts as yours if you can actually get to it.
  const distances = homeWorlds.map((home) => {
    const distance = new Map();
    let frontier = [home];
    for (let step = 1; step <= maxDistance; step++) {
      const nextFrontier = [];
      for (const position of frontier) {
        for (const neighbor of getAdjacentPositions(tiles, position)) {
          if (!holdsClaimableSystem(tiles, homePositions, neighbor)) continue;
          if (distance.has(neighbor)) continue;
          distance.set(neighbor, step);
          nextFrontier.push(neighbor);
        }
      }
      frontier = nextFrontier;
    }
    return distance;
  });

  const claimed = new Set();
  for (const distance of distances) {
    for (const position of distance.keys()) {
      claimed.add(position);
    }
  }

  const shares = homeWorlds.map(() => ({}));
  for (const position of claimed) {
    let nearest = Infinity;
    for (const distance of distances) {
      const hops = distance.get(position);
      if (hops !== undefined && hops < nearest) nearest = hops;
    }

    const owners = [];
    distances.forEach((distance, player) => {
      if (distance.get(position) === nearest) owners.push(player);
    });

    for (const owner of owners) {
      shares[owner][position] = 1 / owners.length;
    }
  }

  return shares;
};

/**
 * What a single system is worth to the player holding it. Resources and influence are counted the
 * way players count a slice when they compare them: a planet only contributes to whichever of the
 * two is larger, since that is the one it will realistically be spent on, and a planet with equal
 * values is split between them.
 * @param {number|string} tile a tiles array entry
 * @returns {{resources: number, influence: number, planets: number, anomalies: number}}
 */
export const getSystemValue = (tile) => {
  const value = { resources: 0, influence: 0, planets: 0, anomalies: 0 };
  const system = tileData.all[tile];
  if (system === undefined) return value;

  for (const planet of system.planets) {
    value.planets += 1;
    if (planet.resources > planet.influence) {
      value.resources += planet.resources;
    } else if (planet.influence > planet.resources) {
      value.influence += planet.influence;
    } else {
      value.resources += planet.resources / 2;
      value.influence += planet.influence / 2;
    }
  }

  if (system.type === "red") value.anomalies += 1;

  return value;
};

/**
 * Add up what each slice is worth.
 * @param {(number|string)[]} tiles the tiles array
 * @param {Object<number, number>[]} sliceMap from getSliceMap
 * @returns {{resources: number, influence: number, planets: number, anomalies: number}[]}
 */
export const getSliceStats = (tiles, sliceMap) =>
  sliceMap.map((shares) => {
    const total = { resources: 0, influence: 0, planets: 0, anomalies: 0 };
    for (const position in shares) {
      const share = shares[position];
      const value = getSystemValue(tiles[position]);
      total.resources += value.resources * share;
      total.influence += value.influence * share;
      total.planets += value.planets * share;
      total.anomalies += value.anomalies * share;
    }
    return total;
  });

/**
 * How uneven a set of slices is, as a single number to minimise — the weighted sum of squared
 * deviations from the average slice. Squaring is what makes this worth minimising rather than just
 * measuring the biggest gap: it keeps pressure on every slice at once instead of letting the
 * generator fix the poorest slice by robbing the second poorest.
 * @param {{resources: number, influence: number, planets: number, anomalies: number}[]} stats
 * @returns {number} zero when every slice is identical, larger the more uneven they are
 */
export const getSliceImbalance = (stats) => {
  if (stats.length < 2) return 0;

  let imbalance = 0;
  for (const measure in IMBALANCE_WEIGHTS) {
    const values = stats.map((slice) => slice[measure]);
    const average =
      values.reduce((sum, value) => sum + value, 0) / values.length;
    const spread = values.reduce(
      (sum, value) => sum + (value - average) * (value - average),
      0,
    );
    imbalance += spread * IMBALANCE_WEIGHTS[measure];
  }

  return imbalance;
};
