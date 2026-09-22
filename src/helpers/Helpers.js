/**
 * The largest ring index the tile array/layout math supports. Ring 0 is Mecatol Rex.
 */
export const MAX_RING = 10;

/**
 * Total tile count (including Mecatol Rex) of a board that goes all the way out to MAX_RING.
 */
export const MAX_TILE_COUNT = 3 * MAX_RING * (MAX_RING + 1) + 1;

/**
 * The six axial hex directions, in the order tiles are walked around each ring. This order
 * (and the choice of start direction in ringCoordinates below) is what makes index 1 land
 * directly "north" of Mecatol Rex, matching the board's historical tile numbering.
 */
const HEX_DIRECTIONS = [
  [-1, 1],
  [-1, 0],
  [0, -1],
  [1, -1],
  [1, 0],
  [0, 1],
];

/**
 * Axial (q, r) coordinates of every tile in ring `ring`, in the same walk order the app has
 * always used (one side of the hexagon at a time, `ring` tiles per side).
 * @param {number} ring ring number, where 1 is the innermost ring around Mecatol Rex
 * @returns {[number, number][]} the `6 * ring` axial coordinates making up that ring
 */
const ringCoordinates = (ring) => {
  let coordinates = [];
  let q = ring;
  let r = 0;
  for (let side = 0; side < 6; side++) {
    for (let step = 0; step < ring; step++) {
      coordinates.push([q, r]);
      q += HEX_DIRECTIONS[side][0];
      r += HEX_DIRECTIONS[side][1];
    }
  }
  return coordinates;
};

/**
 * Axial coordinates of every board position out to MAX_RING, in tile-array order, plus the
 * reverse lookup. Built once on first use — the full board is only a few hundred tiles.
 */
let axialByPosition = null;
let positionByAxial = null;

const buildCoordinateLookups = () => {
  if (axialByPosition) return;
  axialByPosition = [[0, 0]];
  positionByAxial = new Map([["0,0", 0]]);
  for (let ring = 1; ring <= MAX_RING; ring++) {
    for (const [q, r] of ringCoordinates(ring)) {
      positionByAxial.set(`${q},${r}`, axialByPosition.length);
      axialByPosition.push([q, r]);
    }
  }
};

/**
 * The six hex directions in the order tile edges are numbered: index 0 is the top edge, counting
 * clockwise from there. This is the numbering the hyperlane link data in tileData uses (and what
 * a tile's rotation index is added to), so it has to stay in this order.
 */
const EDGE_DIRECTIONS = [
  [1, 0],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [0, -1],
  [1, -1],
];

/**
 * The board positions sharing each of a position's six edges, indexed by edge direction (0 is the
 * top edge, counting clockwise). Entries are undefined where the neighbor would fall outside
 * MAX_RING. Note this is deliberately computed from the hex geometry rather than read out of
 * adjacencyData.json: that file lists the right neighbors, but only lists them in edge order for
 * the inner four rings, so it can't be indexed by direction on the bigger boards.
 * @param {number} position index into the tiles array
 * @returns {(number|undefined)[]} six neighbor positions, by edge direction
 */
export const neighborPositions = (position) => {
  buildCoordinateLookups();
  const axial = axialByPosition[position];
  if (!axial) {
    return [];
  }
  const [q, r] = axial;
  return EDGE_DIRECTIONS.map(([dq, dr]) =>
    positionByAxial.get(`${q + dq},${r + dr}`),
  );
};

/**
 * Given a tile array length, returns the outermost ring it reaches. Ring cumulative tile counts
 * (including Mecatol Rex) follow `3 * ring * (ring + 1) + 1`, so this walks rings outward until
 * the array length fits.
 * @param {number} tilesLength length of the tile array
 * @returns {number} the outermost ring present in an array of that length
 */
export const ringForTileCount = (tilesLength) => {
  let ring = 3; // smallest supported board
  while (tilesLength > 3 * ring * (ring + 1) + 1 && ring < MAX_RING) {
    ring++;
  }
  return ring;
};

/**
 * Given a board position (index into the tiles array), returns which ring it falls in. Ring 0 is
 * Mecatol Rex, ring 1 is the six tiles around it, etc. Cumulative tile counts (including Mecatol
 * Rex) follow `3 * ring * (ring + 1) + 1`, so this walks rings outward until position fits.
 * @param {number} position index into the tiles array
 * @returns {number} the ring that position belongs to
 */
export const ringForPosition = (position) => {
  let ring = 0;
  while (position > 3 * ring * (ring + 1) + 1 - 1 && ring < MAX_RING) {
    ring++;
  }
  return ring;
};

/**
 * Calculate offsets of the tiles in relation to Mecatol Rex (the center tile). This information
 * is stored in an array of two value arrays. The two value arrays represent the margin left
 * and margin top to offset the tile (based on size of tiles). Index 0 is Mecatol Rex, followed
 * by ring 1, ring 2, etc. out to `maxRing`.
 * @param width The width (in pixels) of a single tile
 * @param height The height (in pixels) of a single tile
 * @param maxRing The furthest ring to generate offsets for (defaults to the full supported size)
 * @returns {(number[]|(number)[])[]} an array of two value arrays.
 */
export const calculateOffsets = (width, height, maxRing = MAX_RING) => {
  // Kept unrounded until the final pixel offset so rounding error doesn't compound over
  // multiple rings - rounding every intermediate constant (as earlier versions of this board
  // did) drifts by a pixel or two by the time you're 10 rings out from Mecatol Rex.
  let topHeight = -height;
  let halfWidth = -width * 0.5;
  let halfHeight = -height * 0.5;
  let treQuarWidth = -width * 0.75;

  // Axial (q, r) -> pixel offset from Mecatol Rex, using the same two basis directions every
  // ring in the board is built from.
  const toOffset = (q, r) => [
    Math.round(halfWidth - r * treQuarWidth),
    Math.round(halfHeight + q * topHeight + r * halfHeight),
  ];

  let offsets = [toOffset(0, 0)];

  for (let ring = 1; ring <= maxRing; ring++) {
    for (const [q, r] of ringCoordinates(ring)) {
      offsets.push(toOffset(q, r));
    }
  }

  return offsets;
};

/**
 * The angle (in degrees, 0 at the top of the board and increasing clockwise) of a board position
 * as seen from Mecatol Rex. Used to put home systems in seating order — the boards list their
 * home worlds clockwise starting from the top, and player numbers need to follow that rather than
 * the order the positions happen to fall in the tile array (on the 7 player warp board, for
 * example, two of the homes sit in ring 3 and so come before the top home system by index).
 * Mecatol Rex itself has no angle and is reported as 0.
 * @param {number} position index into the tiles array
 * @returns {number} the clockwise angle from the top, in the range [0, 360)
 */
export const clockwiseAngleFromTop = (position) => {
  buildCoordinateLookups();
  const axial = axialByPosition[position];
  if (!axial) {
    return 0;
  }

  // Same basis calculateOffsets draws with, so the angle matches what's on screen. Tile height is
  // taken as 1 and tile width as 1 too: only the ratio between the two axes matters here, and the
  // rendered tiles are close enough to regular that seating order comes out the same either way.
  const [q, r] = axial;
  const x = 0.75 * r;
  const y = -q - 0.5 * r;

  const degrees = (Math.atan2(x, -y) * 180) / Math.PI;
  return (degrees + 360) % 360;
};
