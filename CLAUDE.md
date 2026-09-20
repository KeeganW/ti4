# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A client-only React web app (Create React App) that generates and edits Twilight Imperium 4 game boards. Hosted on GitHub Pages at `/ti4/`. No backend — all state lives in React component state and the URL query string, which is how boards get shared via link.

## Commands

- `npm install` — install dependencies
- `npm start` — run dev server at `localhost:3000/ti4`
- `npm test` — run tests via `react-scripts test` (CRA/Jest watch mode). `CI=true npm test` runs them once and exits. Tests live next to the code they cover (`*.test.js`); coverage is thin, currently just the adjacency helpers and the generator's adjacency post-processing.
- `npm run build` — production build into `build/`
- `npm run deploy` — build and publish `build/` to the `gh-pages` branch (publishes the live site)

Never run `npm start` (or otherwise launch the dev server) yourself. If you need to verify a change, ask the user to run it, or rely on `npm run build`/`npm test`.

## Architecture

**`src/App.js`** is the single stateful root component (class component). It owns almost all app state — the current `tiles` array, player names, races, expansion toggles, zoom, and UI panel visibility — and passes state + callbacks down to children. There is no state management library; everything is prop-drilled from `App`.

**Tile representation**: the board is a flat array (`state.tiles`) indexed by position in the hex grid (ring order: center, ring 1, ring 2, ring 3, extended ring — see the index groupings in `rotateHexGrid()` for the exact layout). Each entry is either:

- a tile-number id (from `src/data/tileData.js`), `-1` for empty, or `0` for a home system placeholder, or
- a string like `"84A-2"` for hyperlane tiles, where the suffix after `-` is a 0–5 rotation index (60° increments).

`getTileNumber()` in `App.js` is the canonical parser for these string/number tile ids (regular tiles vs. hyperlane tiles vs. Discordant Stars `er`-prefixed tiles).

**URL as source of truth for sharing**: `App` reads `?tiles=` and `?settings=` query params on mount/popstate (`onPopState`) and writes them back on every tile change (`updateTiles`) via `window.history.pushState`. `settings` is an encoded string produced by `MapOptions.encodeSettings()` / decoded by `MapOptions.decodeSettings()` — this is what makes "shareable links" work. When changing option fields, both encode and decode need to stay in sync or old shared links will break.

**Map generation** lives in `src/options/MapOptions.js` (large, ~1800 lines). It holds all generation inputs (player count, board style, pick style, placement style, seed, expansion toggles, race pool) and produces a new tile array passed up to `App.updateTiles`. Board layouts (home worlds, primary/secondary/tertiary tile slots per player count and style) are data-driven from `src/data/boardData.json`.

**Rendering/positioning** is imperative, not JSX-driven: `App.drawMap()` uses jQuery (`$`) to directly set CSS (position, size, rotation) on tile DOM nodes by id (`#tile-N`, `#number-N`, `#wormhole-N`, `#underlay-N`), based on pixel offsets computed in `src/helpers/Helpers.js` (`calculateOffsets`). This is intentionally not idiomatic React — expect to work with jQuery selectors and manual CSS when touching map layout/zoom/rotation code.

**Drag-and-drop tile swapping** (`drag`/`drop`/`handleDrop`/touch equivalents in `App.js`) reassigns entries in the `tiles` array by parsing DOM element ids (`tile-N`, `extra-N`) rather than using any DnD library.

**Data files** (`src/data/`):

- `tileData.js` — the tile catalog: per-tile planets, wormholes, anomalies, tech specialties, traits, and expansion membership (`base`, `pok`, `uncharted`, `sun`, `asyncLanes`, `hyperlanes`). Also exports shared enums (`PLANET_TRAITS`, `WORMHOLES`, `ANOMALIES`, `EXPANSIONS`, etc.) used throughout the app.
- `boardData.json` — per-player-count, per-style board layouts (home world positions, tile-slot tiers) plus `pokSize`/`size` grid constants.
- `raceData.json` — race lists and home-system mappings per expansion (base, PoK, Discordant Stars).
- `adjacencyData.json` — tile adjacency info used for options like "ensure racial anomalies" / adjacency-aware placement.

**Expansions** are modeled as a fixed set of toggles (`EXPANSIONS` enum: PoK, Discordant Stars, Uncharted Space, Ascendant Sun, Async Hyperlanes fan content). Tile/race visibility and generation eligibility is filtered through `includedExpansions` checks (see the repeated `expansionCheck` closure pattern in both `App.js` and `MapOptions.js`) — when adding a new expansion or tile source, that filter needs to be updated in both places.

**Panels** (`src/panels/`, `src/options/`, `src/overview/`, `src/map/`) are mostly presentational children of `App`/`MapOptions` that receive state and callbacks as props rather than owning their own logic.
