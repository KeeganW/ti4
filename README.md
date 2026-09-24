# TI4 Generator

A web tool to generate Twilight Imperium 4 game boards through many custom settings.

## Web Quick Start

Visit the [web page located on github pages](https://keeganw.github.io/ti4/). This is running from the `gh-pages` branch.

## Development Setup

1. Install Node and NPM for your OS using [their website](https://nodejs.org/en/) or brew on Mac (`brew install node`)
1. In the root directory of the cloned project, run `npm install`
1. Once it is done, you can start the development server with `npm start`. If a web page is not automatically opened, go to [localhost:3000/ti4](http://localhost:3000/ti4)

## Using the Tool

The tool has many features, go poke around! Here is a list of notable features:

- Automatic map generation based on user input. Options include:
  - Using Prophecy of Kings and Thunder's Edge content
  - Using fan-made content: Uncharted Space tiles, Discordant Stars factions, Eronous' tiles, and Async hyperlane tiles
  - Setting the player count (2-8 players)
  - Setting what the board will look like from various custom maps, including warp boards for 3, 4, and 5 players that seal off empty corners with hyperlanes
  - Setting how tiles are placed by working with their weights
  - Seeding the generation with a custom number between 1-10,000
  - Automatically picking factions for players
  - Set player names for showing on the map
  - Set factions that can be picked from
  - Randomization of how tiles are placed
  - Moving better planets towards the middle
  - Forcing a pair of Alpha and a pair of Beta wormholes onto the board
  - Forcing at least one of every anomaly type (asteroid field, supernova, nebula, gravity rift)
  - Ensuring faction-specific anomalies are present (e.g. a supernova for Muaat)
  - Balancing planet traits so Cultural, Industrial, and Hazardous objectives stay achievable
  - Balancing slices so each player can reach similar resources, influence, planets, and anomalies
  - Keeping anomalies and matching wormholes from being adjacent, including across hyperlanes
- Drag and drop tiles to customize your board
- Search tiles by number, planet name, trait, tech specialty, anomaly, wormhole, or faction
- Custom map building with empty and home system placeholder tiles
- Zoom in and out to get a better idea of what certain tiles are
- Map overlays:
  - Tile numbers, for when you are ready to build your board
  - Wormholes
  - Closest player, color coded to show which systems each player is nearest to
- Player names shown on the map, with player 1 seated at the top
- Replace any tiles on the board with any unused tiles
- Show detailed information about the adjacent planets to each home system, including a Milty Draft style optimal resource/influence value
- Sharable links to send to your friends
- Copy the tile string to view in Table Top Simulator (TTS)
- A list of the tiles to pull from the box, sorted numerically or alphabetically by planet

## Pushing Changes to Github Pages

```bash
npm run deploy
```

Using react's `gh-pages` you can simply run the above command to deploy to the github page.
