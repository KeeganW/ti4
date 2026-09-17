import React from "react";
import $ from "jquery";
import "./App.css";
import BootstrapScripts from "./helpers/BootstrapScripts";
import MoreInfo from "./panels/MoreInfo";
import ExtraTiles from "./panels/ExtraTiles";
import MainOverview from "./overview/MainOverview";
import MainMap from "./map/MainMap";
import MapControls from "./map/MapControls";
import OptionsControls from "./options/OptionsControls";
import MapOptions from "./options/MapOptions";
import tileData, { WORMHOLE_SYMBOLS, EXPANSIONS } from "./data/tileData";
import raceData from "./data/raceData.json";
import adjacencyData from "./data/adjacencyData.json";
import {
  calculateOffsets,
  MAX_RING,
  MAX_TILE_COUNT,
  ringForPosition,
  ringForTileCount,
} from "./helpers/Helpers";
import { Tooltip as ReactTooltip } from "react-tooltip";

// Distinct colors used to identify each player in the closest-player overlay.
const PLAYER_COLORS = [
  "#e63946",
  "#4dd671",
  "#4d94ff",
  "#ffd23f",
  "#b84dff",
  "#ff944d",
  "#4dd9ec",
  "#ff6fc4",
];

/**
 * The core application page. Holds the states for common objects like tile data and player names. Responsible for
 * drawing the actual map.
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOptionsMenuShowing: true,
      overviewVisible: true,
      extraTilesVisible: false,
      moreInfoVisible: false,
      backgroundAnimated: true,
      showAllExtraTiles: false,
      customMapBuilding: false,
      tiles: [],
      unusedTiles: [],
      overlayVisible: false,
      wormholeOverlayVisible: false,
      closestPlayerOverlayVisible: false,
      zoom: 1.0,
      lastCall: 0,
      mobileBreakpoint: 700,
      isMobileView: false,
      encodedOptions: "",

      includedExpansions: Object.fromEntries([
        [EXPANSIONS.POK, false],
        [EXPANSIONS.UnS, false],
        [EXPANSIONS.DS, false],
        [EXPANSIONS.AS, false],
        [EXPANSIONS.Async, false],
        [EXPANSIONS.TE, false],
      ]),
      currentPlayerNames: ["", "", "", "", "", "", "", ""],
      currentRaces: [...raceData.races],

      lockedTiles: [],
      excludedTiles: [],
      includedTiles: [],
      tileClicked: -1,
      currentMobileHover: "",
    };

    this.mapOptions = React.createRef();
    this.map = React.createRef();

    this.drawMap = this.drawMap.bind(this);

    this.onPopState = this.onPopState.bind(this);
    this.checkResize = this.checkResize.bind(this);

    this.updateTiles = this.updateTiles.bind(this);
    this.updateLockedTiles = this.updateLockedTiles.bind(this);
    this.updateInExcludedTiles = this.updateInExcludedTiles.bind(this);
    this.updateTileClicked = this.updateTileClicked.bind(this);
    this.updateRaces = this.updateRaces.bind(this);
    this.updatePlayerNames = this.updatePlayerNames.bind(this);
    this.updatePlayerNameOverlays = this.updatePlayerNameOverlays.bind(this);
    this.validateTiles = this.validateTiles.bind(this);
    this.toggleBackground = this.toggleBackground.bind(this);
    this.removeTrailing = this.removeTrailing.bind(this);
    this.getTileNumber = this.getTileNumber.bind(this);

    this.toggleOptionsMenu = this.toggleOptionsMenu.bind(this);
    this.toggleProphecyOfKings = this.toggleProphecyOfKings.bind(this);
    this.toggleUnchartedSpace = this.toggleUnchartedSpace.bind(this);
    this.toggleDiscordantStars = this.toggleDiscordantStars.bind(this);
    this.toggleAscendentSun = this.toggleAscendentSun.bind(this);
    this.toggleFanHyperlanes = this.toggleFanHyperlanes.bind(this);
    this.toggleThundersEdge = this.toggleThundersEdge.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.toggleWormholeOverlay = this.toggleWormholeOverlay.bind(this);
    this.toggleClosestPlayerOverlay =
      this.toggleClosestPlayerOverlay.bind(this);
    this.updateTileNumberOverlays = this.updateTileNumberOverlays.bind(this);
    this.toggleMoreInfo = this.toggleMoreInfo.bind(this);
    this.toggleExtraTiles = this.toggleExtraTiles.bind(this);
    this.toggleShowAllExtraTiles = this.toggleShowAllExtraTiles.bind(this);
    this.toggleCustomMapBuilding = this.toggleCustomMapBuilding.bind(this);
    this.showExtraTiles = this.showExtraTiles.bind(this);
    this.unsetAllTiles = this.unsetAllTiles.bind(this);
    this.zoomScroll = this.zoomScroll.bind(this);
    this.zoomPlusClick = this.zoomPlusClick.bind(this);
    this.zoomMinusClick = this.zoomMinusClick.bind(this);
    this.rotateClockwise = this.rotateClockwise.bind(this);
    this.rotateCounterClockwise = this.rotateCounterClockwise.bind(this);

    this.drag = this.drag.bind(this);
    this.drop = this.drop.bind(this);
    this.dragEnter = this.dragEnter.bind(this);
    this.dragLeave = this.dragLeave.bind(this);
    this.allowDrop = this.allowDrop.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  /* URL CONTROLS */

  /**
   * After all elements on the html page have been created, run this.
   */
  componentDidMount() {
    // Setup the main jquery selectors
    // TODO move these or find a way to not use them
    this.$mapContainer = $("#mainContent");
    this.$tiMap = $("#map");

    // Grab the variables from the url on back/forward events
    window.onpopstate = this.onPopState;
    this.onPopState();

    // Change the map dimensions whenever the page size is different
    window.onresize = this.checkResize;
    this.checkResize();

    // add when mounted
    document.addEventListener("mousedown", this.updateTileClicked);
    document.addEventListener("wheel", this.zoomScroll, true);
  }

  /**
   * We are done with the page, removing everything.
   */
  componentWillUnmount() {
    window.onpopstate = () => {};
    document.removeEventListener("mousedown", this.updateTileClicked);
    document.removeEventListener("wheel", this.zoomScroll);
  }

  /**
   * When the window size is changed, update various components to be better looking on mobile vs desktop.
   */
  checkResize() {
    if (window.innerWidth < this.state.mobileBreakpoint) {
      if (!this.state.isMobileView) {
        // Just transitioned into mobile state, so hide the options menu
        this.setState({
          isMobileView: true,
          isOptionsMenuShowing: false,
        });
        document.documentElement.style.setProperty("--options-width", "0px");
      } // else { // We went from mobile to mobile, don't need to do anything
    } else {
      // We are in desktop state
      this.setState({
        isMobileView: false,
        isOptionsMenuShowing: true,
      });
      document.documentElement.style.setProperty("--options-width", "400px");
    }

    // Redraw with the new mobile conditions
    this.drawMap();
  }

  /**
   * Whenever we go back, grab the tiles from the url bar, and set them as the current tiles.
   * @param {*} event The event that triggered this function.
   */
  onPopState(event) {
    // Get the tiles from the url
    let url = new URL(document.location);
    let settings = url.searchParams.get("settings");
    let tiles = url.searchParams.get("tiles");

    // Make sure the tiles parameter is set to something
    const newTiles = tiles !== null ? this.validateTiles(tiles) : [];
    if (settings !== null && settings !== undefined && settings !== "") {
      // Settings param is set, so make the tile
      this.setState(
        {
          encodedOptions: settings,
        },
        () => {
          this.mapOptions.current.decodeSettings(settings, newTiles);
        },
      );
    } else if (newTiles.length > 0) {
      this.setState(
        {
          tiles: newTiles,
        },
        this.drawMap,
      );
    } else {
      // No tiles or settings to worry about, just bring us back to the main page
      this.setState(
        {
          tiles: [],
        },
        this.drawMap,
      );
    }
  }

  /* TILE CHANGING FUNCTIONS */

  /**
   * Updates the tiles state with a new set of tiles, and also pushes it to the url for sharable links
   * @param {number[]} newTiles
   * @param newEncodedOptions the settings, encoded as a string
   * @param isNewGeneration A setting to be set when a new generation occurs, to trigger adding it to the history
   * @param skipTrailing Don't remove trailing tiles
   */
  updateTiles(newTiles, newEncodedOptions, isNewGeneration, skipTrailing) {
    // Remove the unused tile numbers at the end of the array
    if (!skipTrailing) {
      newTiles = this.removeTrailing(newTiles);
    }

    // Add it to the url as a parameter
    let params = "&tiles=" + newTiles.toString();
    let encodedOptions = this.state.encodedOptions;
    if (newEncodedOptions !== undefined) {
      if (
        this.state.lockedTiles.length > 0 ||
        this.state.includedTiles.length > 0
      ) {
        params = "?settings=" + encodedOptions + params;
      } else {
        params = "?settings=" + newEncodedOptions;
      }
      encodedOptions = newEncodedOptions;
    } else {
      params = "?settings=" + encodedOptions + params;
    }

    if (isNewGeneration || newEncodedOptions === undefined) {
      // This is a new generation, or we are moving tiles, so need to push the new state
      window.history.pushState({}, null, window.location.pathname + params);
    }

    // Hide the options menu when we are on mobile (for when the tiles update and the options menu is open)
    let newOptionsMenuState = this.state.isOptionsMenuShowing;
    if (this.state.isMobileView) {
      newOptionsMenuState = false;
    }

    // Update the unused tiles list
    let systemNumbers = [];

    const expansionCheck = (includedExpansions) => (id) =>
      (!tileData.pok.includes(id) || includedExpansions[EXPANSIONS.POK]) &&
      (!tileData.uncharted.includes(id) ||
        includedExpansions[EXPANSIONS.UnS]) &&
      (!tileData.sun.includes(id) || includedExpansions[EXPANSIONS.AS]) &&
      (!tileData.asyncLanes.includes(id) ||
        includedExpansions[EXPANSIONS.Async]) &&
      (!tileData.te.includes(id) || includedExpansions[EXPANSIONS.TE]);

    systemNumbers = systemNumbers
      .concat(tileData.blue)
      .concat(tileData.red)
      .filter(expansionCheck(this.state.includedExpansions));

    let unusedTiles = [];
    for (let systemNumber of systemNumbers) {
      // If it is not on the map, show the system tile. Otherwise, hide it.
      if (!newTiles.includes(systemNumber)) {
        unusedTiles.push(systemNumber);
      }
    }
    let tileClicked = this.state.tileClicked;
    if (isNewGeneration) {
      tileClicked = -1;
    }

    this.setState(
      {
        tiles: newTiles,
        unusedTiles: unusedTiles,
        tileClicked: tileClicked,
        encodedOptions: encodedOptions,
        isOptionsMenuShowing: newOptionsMenuState,
      },
      () => {
        // Update the extra tiles menu, and draw a new map with the new tiles
        this.showExtraTiles();
        this.drawMap();
      },
    );
  }

  updateLockedTiles(newLockedTiles) {
    this.setState({
      lockedTiles: newLockedTiles,
    });
  }

  updateTileClicked(newTileClicked) {
    if (
      typeof newTileClicked !== "number" &&
      (newTileClicked.target.id === "mainContent" ||
        newTileClicked.target.id === "map")
    ) {
      this.setState({
        tileClicked: -1,
      });
    } else if (typeof newTileClicked === "number") {
      this.setState({
        tileClicked: newTileClicked,
      });
    }
  }

  updateInExcludedTiles(newIncludedTiles, newExcludedTiles) {
    this.setState({
      includedTiles: newIncludedTiles,
      excludedTiles: newExcludedTiles,
    });
  }

  /**
   * Removes any trailing -1s from a tile string.
   * @param {number[]} tiles the tile string to clean
   * @returns {number[]} the clean tile string
   */
  removeTrailing(tiles) {
    // Keep tile array length a minimum of 37 in order to support small maps
    // Specifically rotation capabilities require the correct array length
    while (tiles[tiles.length - 1] === -1 && tiles.length > 37) {
      tiles.pop();
    }
    return tiles;
  }

  /**
   * Attempts to validate a given tile string, by cleaning it up and turning it into an object.
   * @returns {number[]} An array of numbers representing tiles.
   */
  validateTiles(tiles) {
    // Remove any spaces
    tiles = tiles.replaceAll(" ", "");

    // Check if it has opening and closing brackets. If so, remove them
    if (tiles.charAt(0) === "[") {
      tiles = tiles.substring(1, tiles.length);
    }
    if (tiles.charAt(tiles.length - 1) === "]") {
      tiles = tiles.substring(0, tiles.length - 1);
    }

    // Now split on commas
    tiles = tiles.split(",");
    let newTiles = [];
    for (let tile of tiles) {
      newTiles.push(this.getTileNumber(tile, false, true));
    }
    return newTiles;
  }

  /* BUTTON ACTIONS */

  /**
   * Toggle the visibility of the options menu for both desktop and mobile clients.
   */
  toggleOptionsMenu() {
    // Set the css variable for options width (for desktop only)
    if (window.innerWidth >= this.state.mobileBreakpoint) {
      let optionsSize = this.state.isOptionsMenuShowing ? "0px" : "400px";
      document.documentElement.style.setProperty(
        "--options-width",
        optionsSize,
      );
    }

    // Update the map so that it correctly uses the new width
    this.drawMap();

    // Update the state to the new view
    this.setState({
      isOptionsMenuShowing: !this.state.isOptionsMenuShowing,
    });
  }

  /**
   * Toggle the system number overlay.
   */
  toggleOverlay() {
    this.updateTileNumberOverlays(!this.state.overlayVisible);

    this.setState({
      overlayVisible: !this.state.overlayVisible,
    });
  }

  /**
   * Toggle the wormhole overlay.
   */
  toggleWormholeOverlay() {
    this.updateWormholeOverlays(!this.state.wormholeOverlayVisible);

    this.setState({
      wormholeOverlayVisible: !this.state.wormholeOverlayVisible,
    });
  }

  /**
   * Toggle the closest-player-per-tile overlay.
   */
  toggleClosestPlayerOverlay() {
    let closestPlayerOverlayVisible = !this.state.closestPlayerOverlayVisible;
    this.updateClosestPlayerOverlays(
      closestPlayerOverlayVisible && !this.state.customMapBuilding,
    );

    this.setState({
      closestPlayerOverlayVisible: closestPlayerOverlayVisible,
    });
  }

  updateTileNumberOverlays(showTiles) {
    // Toggle the tile overlays
    for (let tileNumber = 0; tileNumber < MAX_TILE_COUNT; tileNumber++) {
      let numOverlay = $("#number-" + tileNumber);
      if (showTiles) {
        // Want to show all the tiles
        if (
          this.getTileNumber(this.state.tiles[tileNumber]) !== -1 ||
          this.state.customMapBuilding
        ) {
          numOverlay.show();
        } else {
          // Hide the -1s when not custom map building
          numOverlay.hide();
        }
      } else {
        // Currently showing all tiles, so with toggle we will be hiding them
        if (this.state.tiles[tileNumber] !== 0 || !this.state.moreInfoVisible) {
          numOverlay.hide();
        }
      }
    }
  }

  updateWormholeOverlays(showTiles) {
    // Toggle the tile overlays
    for (let tileNumber = 0; tileNumber < MAX_TILE_COUNT; tileNumber++) {
      let wormholeOverlay = $("#wormhole-" + tileNumber);
      if (showTiles) {
        // Want to show all the tiles
        if (
          tileData.all[this.state.tiles[tileNumber]] &&
          tileData.all[this.state.tiles[tileNumber]].wormhole.length > 0 &&
          (this.getTileNumber(this.state.tiles[tileNumber]) !== -1 ||
            this.state.customMapBuilding)
        ) {
          wormholeOverlay.html(
            tileData.all[this.state.tiles[tileNumber]].wormhole
              .map((wormhole) => WORMHOLE_SYMBOLS[wormhole])
              .join(" "),
          );
          wormholeOverlay.show();
        }
      } else {
        // Currently showing all tiles, so with toggle we will be hiding them
        wormholeOverlay.hide();
      }
    }
  }

  updateClosestPlayerOverlays(showTiles) {
    // Toggle the closest-player overlays
    for (let tileNumber = 0; tileNumber < MAX_TILE_COUNT; tileNumber++) {
      let overlay = $("#closest-player-" + tileNumber);
      if (
        showTiles &&
        (this.getTileNumber(this.state.tiles[tileNumber]) !== -1 ||
          this.state.customMapBuilding)
      ) {
        overlay.show();
      } else {
        overlay.hide();
      }
    }
  }

  /**
   * Finds the board positions of every player's home system, in ascending board-position order (which matches the
   * player ordering used by currentPlayerNames/currentRaces).
   */
  getHomePositions() {
    let homePositions = [];
    for (let tileNumber = 0; tileNumber < MAX_TILE_COUNT; tileNumber++) {
      // Tiles loaded from a shared URL come back as strings (see getTileNumber), while freshly
      // generated tiles are numbers, so normalize before comparing against the home-system data.
      let tile = Number(this.state.tiles[tileNumber]);
      if (
        tile === 0 ||
        (!isNaN(tile) && tile in raceData.homeSystemToRaceMap)
      ) {
        homePositions.push(tileNumber);
      }
    }

    // Some expansions occasionally place extra homeworld tiles on the board as part of the main
    // draft pool rather than as actual player homes. With more than 8 "home-looking" tiles on the
    // board, assume the real players sit on the outermost ring in use and drop the rest, since
    // that's where home systems are conventionally placed.
    if (homePositions.length > 8) {
      let outermostRing = ringForTileCount(this.state.tiles.length);
      homePositions = homePositions.filter(
        (position) => ringForPosition(position) === outermostRing,
      );
    }

    return homePositions;
  }

  /**
   * A hyperlane tile has no adjacency of its own — per the TI4 rules, any real systems connected through a chain of
   * hyperlane tiles are directly adjacent to each other (a single hop), no matter how many hyperlane tiles are
   * strung between them. Given we just entered hyperlanePosition from fromPosition, this chases the printed lines
   * (through any further chained hyperlane tiles) and returns the real, non-hyperlane systems reachable that way.
   */
  getHyperlaneEndpoints(hyperlanePosition, fromPosition, visited) {
    if (visited.has(hyperlanePosition)) {
      return [];
    }
    visited.add(hyperlanePosition);

    let physicalNeighbors = adjacencyData[hyperlanePosition] || [];
    let directionIn = physicalNeighbors.indexOf(fromPosition);
    if (directionIn < 0) {
      return [];
    }

    let tileValue = this.state.tiles[hyperlanePosition];
    let system = this.getTileNumber(tileValue);
    let currentRotation = Number(String(tileValue).split("-")[1]) || 0;
    let hyperlaneLinks = (tileData.all[system] || {}).hyperlanes || [];

    let endpoints = [];
    for (let [start, end] of hyperlaneLinks) {
      let startDir = (start + currentRotation) % 6;
      let endDir = (end + currentRotation) % 6;
      let outDir =
        startDir === directionIn
          ? endDir
          : endDir === directionIn
            ? startDir
            : -1;
      if (outDir < 0) {
        continue;
      }

      let outNeighbor = physicalNeighbors[outDir];
      if (outNeighbor === undefined) {
        continue;
      }

      let outSystem = this.getTileNumber(this.state.tiles[outNeighbor]);
      if (tileData.hyperlanes.indexOf(outSystem) >= 0) {
        endpoints.push(
          ...this.getHyperlaneEndpoints(
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
  }

  /**
   * Board positions that are one hop away from startPosition, honoring hyperlane rules: a physical neighbor that is
   * a hyperlane tile is skipped over entirely, connecting straight through to whatever real systems the hyperlane
   * (or chain of hyperlanes) links to.
   */
  getDistanceNeighbors(startPosition) {
    let physicalNeighbors = adjacencyData[startPosition] || [];
    let neighbors = [];
    for (let neighbor of physicalNeighbors) {
      let neighborSystem = this.getTileNumber(this.state.tiles[neighbor]);
      if (tileData.hyperlanes.indexOf(neighborSystem) >= 0) {
        neighbors.push(
          ...this.getHyperlaneEndpoints(neighbor, startPosition, new Set()),
        );
      } else {
        neighbors.push(neighbor);
      }
    }
    return neighbors;
  }

  /**
   * Breadth-first search over the board-position adjacency graph, returning the hex distance from startPosition to
   * every other board position.
   */
  getDistancesFrom(startPosition) {
    let distances = new Array(MAX_TILE_COUNT).fill(Infinity);
    distances[startPosition] = 0;
    let queue = [startPosition];
    while (queue.length > 0) {
      let current = queue.shift();
      for (let neighbor of this.getDistanceNeighbors(current)) {
        if (distances[neighbor] === Infinity) {
          distances[neighbor] = distances[current] + 1;
          queue.push(neighbor);
        }
      }
    }
    return distances;
  }

  /**
   * Returns the display label for a player, preferring the name they've set, falling back to "P<n>".
   */
  getPlayerLabel(playerIndex) {
    let name = this.state.currentPlayerNames[playerIndex];
    return name === undefined || name === "" ? "P" + (playerIndex + 1) : name;
  }

  /**
   * Computes, per board position, an HTML label naming the closest player's home system (by hex distance). Ties are
   * shown as multiple colored labels separated by "/". Home systems show the owning player's label instead of "0".
   */
  computeClosestPlayerLabels() {
    let homePositions = this.getHomePositions();
    let labels = new Array(MAX_TILE_COUNT).fill("");

    if (homePositions.length === 0) {
      return labels;
    }

    let distancesByPlayer = homePositions.map((homePosition) =>
      this.getDistancesFrom(homePosition),
    );

    for (let tileNumber = 0; tileNumber < MAX_TILE_COUNT; tileNumber++) {
      let minDistance = Infinity;
      for (
        let playerIndex = 0;
        playerIndex < homePositions.length;
        playerIndex++
      ) {
        minDistance = Math.min(
          minDistance,
          distancesByPlayer[playerIndex][tileNumber],
        );
      }

      if (minDistance === Infinity) {
        continue;
      }

      let closestPlayers = [];
      for (
        let playerIndex = 0;
        playerIndex < homePositions.length;
        playerIndex++
      ) {
        if (distancesByPlayer[playerIndex][tileNumber] === minDistance) {
          closestPlayers.push(playerIndex);
        }
      }

      labels[tileNumber] = closestPlayers
        .map((playerIndex) => {
          let color = PLAYER_COLORS[playerIndex % PLAYER_COLORS.length];
          let text =
            homePositions[playerIndex] === tileNumber
              ? this.getPlayerLabel(playerIndex)
              : String(minDistance);
          return '<span style="color:' + color + '">' + text + "</span>";
        })
        .join("/");
    }

    return labels;
  }

  toggleShowAllExtraTiles() {
    this.setState(
      {
        showAllExtraTiles: !this.state.showAllExtraTiles,
      },
      this.showExtraTiles,
    );
  }

  /**
   * Set all tiles to -1, then redraw, effectively resetting the map.
   */
  unsetAllTiles() {
    // Update the tile string
    this.setState(
      {
        tileClicked: -1,
      },
      () => {
        this.updateTiles(
          new Array(this.state.tiles.length).fill(-1),
          undefined,
          false,
          true,
        );
      },
    );
  }

  toggleCustomMapBuilding() {
    this.setState(
      {
        customMapBuilding: !this.state.customMapBuilding,
      },
      () => {
        this.updateTileNumberOverlays(
          this.state.customMapBuilding || this.state.overlayVisible,
        );
        this.updateClosestPlayerOverlays(
          !this.state.customMapBuilding &&
            this.state.closestPlayerOverlayVisible,
        );
        this.showExtraTiles();
        this.drawMap();
      },
    );
  }

  /**
   * Toggle whether we need to use the prophecy of kings expansion or not
   */
  toggleProphecyOfKings() {
    const newIncludedExpansions = this.state.includedExpansions;
    newIncludedExpansions[EXPANSIONS.POK] =
      !newIncludedExpansions[EXPANSIONS.POK];
    this.setState(
      {
        includedExpansions: newIncludedExpansions,
      },
      this.showExtraTiles,
    );
  }

  /**
   * Toggle whether we need to use the uncharted space fan expansion or not
   */
  toggleUnchartedSpace() {
    const newIncludedExpansions = this.state.includedExpansions;
    newIncludedExpansions[EXPANSIONS.UnS] =
      !newIncludedExpansions[EXPANSIONS.UnS];
    this.setState(
      {
        includedExpansions: newIncludedExpansions,
      },
      this.showExtraTiles,
    );
  }

  /**
   * Toggle whether we need to use the ascendent sun fan expansion or not
   */
  toggleAscendentSun() {
    const newIncludedExpansions = this.state.includedExpansions;
    newIncludedExpansions[EXPANSIONS.AS] =
      !newIncludedExpansions[EXPANSIONS.AS];
    this.setState(
      {
        includedExpansions: newIncludedExpansions,
      },
      this.showExtraTiles,
    );
  }

  /**
   * Toggle whether we need to use fanmade hyperlanes or not
   */
  toggleFanHyperlanes() {
    const newIncludedExpansions = this.state.includedExpansions;
    newIncludedExpansions[EXPANSIONS.Async] =
      !newIncludedExpansions[EXPANSIONS.Async];
    this.setState(
      {
        includedExpansions: newIncludedExpansions,
      },
      this.showExtraTiles,
    );
  }

  /**
   * Toggle whether we need to use the Thunder's Edge fan expansion or not
   */
  toggleThundersEdge() {
    const newIncludedExpansions = this.state.includedExpansions;
    newIncludedExpansions[EXPANSIONS.TE] =
      !newIncludedExpansions[EXPANSIONS.TE];
    this.setState(
      {
        includedExpansions: newIncludedExpansions,
      },
      this.showExtraTiles,
    );
  }

  /**
   * Toggle whether we need to use the discordant stars races or not
   */
  toggleDiscordantStars() {
    const newIncludedExpansions = this.state.includedExpansions;
    newIncludedExpansions[EXPANSIONS.DS] =
      !newIncludedExpansions[EXPANSIONS.DS];
    this.setState(
      {
        includedExpansions: newIncludedExpansions,
      },
      this.showExtraTiles,
    );
  }

  /**
   * Toggle whether the more info side panel is visible. If the extra tiles panel had just been triggered, we just
   * need to hide the more info panel.
   * @param {*} event The event that triggered this function.
   * @param {boolean} justTriggeredTiles Whether or not the extra tiles panel had just been opened.
   */
  toggleMoreInfo(event, justTriggeredTiles) {
    // Guarantee that justTriggeredTiles is set
    justTriggeredTiles =
      justTriggeredTiles === undefined ? false : justTriggeredTiles;

    let optionsSize = this.state.moreInfoVisible ? "0px" : "400px";
    document.documentElement.style.setProperty(
      "--more-info-width",
      optionsSize,
    );

    // Show the player names
    for (let tileNumber = 0; tileNumber < MAX_TILE_COUNT; tileNumber++) {
      if (
        Number(this.state.tiles[tileNumber]) === 0 &&
        !this.state.overlayVisible
      ) {
        let numOverlay = $("#number-" + tileNumber);
        if (!this.state.moreInfoVisible) {
          // more info button pressed, so show overlay
          numOverlay.show();
        } else {
          numOverlay.hide();
        }
      }
    }

    this.setState(
      {
        moreInfoVisible: !this.state.moreInfoVisible,
      },
      () => {
        // Hide the extra tiles if the user just pressed the show more info button
        if (this.state.extraTilesVisible && !justTriggeredTiles) {
          this.toggleExtraTiles(event, true);
        }
      },
    );
  }

  /**
   * Toggle whether the extra tiles side panel is visible.
   * @param {*} event The event that triggered this function.
   * @param {boolean} justTriggeredInfo Whether or not the more info panel had just been opened.
   */
  toggleExtraTiles(event, justTriggeredInfo) {
    justTriggeredInfo =
      justTriggeredInfo === undefined ? false : justTriggeredInfo;

    // Update what tiles are going to be displayed
    this.showExtraTiles();

    let optionsSize = this.state.extraTilesVisible ? "0px" : "250px";
    document.documentElement.style.setProperty(
      "--extra-tiles-width",
      optionsSize,
    );

    this.setState(
      {
        extraTilesVisible: !this.state.extraTilesVisible,
      },
      () => {
        if (this.state.moreInfoVisible && !justTriggeredInfo) {
          this.toggleMoreInfo(event, true);
        }
      },
    );
  }

  /**
   * Update what tiles are visible in the extra tiles panel based on the current tiles being used on the map
   */
  showExtraTiles() {
    let systemNumbers = [];

    const expansionCheck = (includedExpansions) => (id) =>
      (!tileData.pok.includes(id) || includedExpansions[EXPANSIONS.POK]) &&
      (!tileData.uncharted.includes(id) ||
        includedExpansions[EXPANSIONS.UnS]) &&
      (!tileData.sun.includes(id) || includedExpansions[EXPANSIONS.AS]) &&
      (!tileData.asyncLanes.includes(id) ||
        includedExpansions[EXPANSIONS.Async]) &&
      (!tileData.te.includes(id) || includedExpansions[EXPANSIONS.TE]);

    systemNumbers = systemNumbers
      .concat(tileData.blue)
      .concat(tileData.red)
      .concat(tileData.green)
      .filter(expansionCheck(this.state.includedExpansions));

    if (this.state.customMapBuilding) {
      systemNumbers = [-1].concat(systemNumbers.concat(tileData.hyperlanes));
    }

    for (let systemNumber of systemNumbers) {
      // If it is not on the map, show the system tile. Otherwise, hide it.
      let systemSelector = $("#extra-" + systemNumber);
      let overlaySelector = $("#extra-number-" + systemNumber);

      if (this.state.showAllExtraTiles || this.state.customMapBuilding) {
        systemSelector.show();
        overlaySelector.show();
      } else {
        if (!this.state.tiles.includes(systemNumber)) {
          systemSelector.show();
          overlaySelector.show();
        } else {
          systemSelector.hide();
          overlaySelector.hide();
        }
      }
    }
  }

  /**
   * Toggle the background animation, from moving stars to static, and visa versa
   */
  toggleBackground() {
    if (!this.state.backgroundAnimated) {
      $("#stars").css("animation", "animateStar 50s linear infinite");
      $("#stars2").css("animation", "animateStar 100s linear infinite");
      $("#stars3").css("animation", "animateStar 150s linear infinite");
    } else {
      $("#stars").css("animation", "staticStar 50s linear infinite");
      $("#stars2").css("animation", "staticStar 100s linear infinite");
      $("#stars3").css("animation", "staticStar 150s linear infinite");
    }
    this.setState({
      backgroundAnimated: !this.state.backgroundAnimated,
    });
  }

  zoomScroll(event) {
    if (
      this.state.lastCall < Date.now() - 200 &&
      event.ctrlKey &&
      (event.target.id === "mainContent" ||
        event.target.id === "map" ||
        event.target.id.split("-")[0] === "tile")
    ) {
      if (event.deltaY < 0) {
        if (this.state.zoom < 3) {
          this.setState(
            {
              zoom: this.state.zoom + 0.2,
              lastCall: Date.now(),
            },
            this.drawMap,
          );
        }
      } else if (event.deltaY > 0) {
        if (this.state.zoom > 0.5) {
          this.setState(
            {
              zoom: this.state.zoom - 0.2,
              lastCall: Date.now(),
            },
            this.drawMap,
          );
        }
      }
    }
  }

  /**
   * Zoom the map in by a set amount, up until it is the same size as the original images. Then redraw the map.
   */
  zoomPlusClick() {
    if (this.state.zoom < 3) {
      this.setState(
        {
          zoom: this.state.zoom + 0.75,
        },
        this.drawMap,
      );
    }
  }

  /**
   * Zoom the map out by a set amount, up until it is too small to see. Then redraw the map.
   */
  zoomMinusClick() {
    if (this.state.zoom > 0.5) {
      this.setState(
        {
          zoom: this.state.zoom - 0.75,
        },
        this.drawMap,
      );
    }
  }

  /**
   * Performs a single rotation of the tiles that make up the hex grid.
   *
   * Each ring is a closed loop of `6 * ring` tiles; a 60-degree turn of the whole board is
   * equivalent to cyclically shifting every ring's tiles forward by `ring` positions (one
   * hex side). Rings 1-3 always exist (the smallest supported board); rings 4+ are only
   * rotated once that much of the tile array is actually present.
   */
  rotateHexGrid(tilesOverride = []) {
    const source = (index) => tilesOverride[index] ?? this.state.tiles[index];

    let rotatedTileArray = [source(0)];

    let ringStart = 1;
    for (let ring = 1; ring <= MAX_RING; ring++) {
      const ringSize = 6 * ring;

      // Rings 1-3 make up the smallest board and are always rotated; larger rings are only
      // rotated once the tile array actually extends into them.
      if (ring > 3 && this.state.tiles.length <= ringStart) {
        break;
      }

      for (let step = 0; step < ringSize; step++) {
        const shiftedIndex = ringStart + ((step + ringSize - ring) % ringSize);
        rotatedTileArray.push(source(shiftedIndex));
      }

      ringStart += ringSize;
    }

    // Issue #131: remove duplication from the list.
    // Duplicates can occur during small map sizes, which leads to invalid maps.
    for (let i = 0; i < rotatedTileArray.length; i++) {
      for (let j = i + 1; j < rotatedTileArray.length; j++) {
        if (
          rotatedTileArray[i] &&
          rotatedTileArray[j] &&
          rotatedTileArray[i].toString().split("-")[0] ===
            rotatedTileArray[j].toString().split("-")[0]
        ) {
          rotatedTileArray[j] = -1;
        }
      }
    }

    return rotatedTileArray;
  }

  /**
   * Returns a tile array where all hyperlanes tiles have been rotated clockwise.
   */
  rotateHyperlaneTiles(tileArray, rotations = 1) {
    const updatedTileArray = [...tileArray];

    // Iterate through all tiles and rotate the hyperlanes by N rotations.
    for (let j = 0; j < updatedTileArray.length; j++) {
      // Only hyperlane tiles are strings / aren't numbers.
      if (typeof updatedTileArray[j] === "string") {
        // Check if the tile already has any rotation.
        const hasRotation = updatedTileArray[j].includes("-");

        let newRotation = 1;
        if (hasRotation) {
          const currentRotation = parseInt(updatedTileArray[j].split("-")[1]);
          newRotation = (currentRotation + rotations) % 6;
        }

        updatedTileArray[j] =
          `${updatedTileArray[j].split("-")[0]}-${newRotation}`;
      }
    }

    return updatedTileArray;
  }

  /**
   * Returns a rotated version of the current map.
   */
  generateRotatedMap(rotations = 1) {
    let rotatedTileArray = [];

    // Rotate the hex grid the required number of times.
    for (let i = 0; i < rotations; i++) {
      if (i === 0) {
        // Use the current map for the first rotation.
        rotatedTileArray = this.rotateHexGrid();
      } else {
        // Pass the previously rotated map for subsequent iterations.
        rotatedTileArray = this.rotateHexGrid(rotatedTileArray);
      }

      // Rotate the hyperlane tiles so that connections are preserved.
      rotatedTileArray = this.rotateHyperlaneTiles(rotatedTileArray);
    }

    return rotatedTileArray;
  }

  /**
   * Rotates the map in a clockwise direction.
   */
  rotateClockwise() {
    // Update the tile string
    this.setState(
      {
        tileClicked: -1,
      },
      () => {
        this.updateTiles(this.generateRotatedMap(), undefined, false, true);
      },
    );
  }

  /**
   * Rotates the map in a counter-clockwise direction.
   */
  rotateCounterClockwise() {
    // Update the tile string
    this.setState(
      {
        tileClicked: -1,
      },
      () => {
        this.updateTiles(this.generateRotatedMap(5), undefined, false, true);
      },
    );
  }

  updateRaces(races) {
    this.setState({
      currentRaces: races,
    });
  }

  updatePlayerNames(playerNames) {
    this.setState(
      {
        currentPlayerNames: playerNames,
      },
      this.updatePlayerNameOverlays,
    );
  }

  /**
   * Cheaply refreshes just the home-world player-name overlays' text/color/visibility, without doing a full
   * drawMap() pass. Positioning (margin-left/top) is left untouched, since it only changes on layout/zoom/tile
   * changes, which already go through drawMap(). This keeps typing in the player-name inputs fast.
   */
  updatePlayerNameOverlays() {
    let homePositions = this.getHomePositions();
    for (let tileNumber = 0; tileNumber < MAX_TILE_COUNT; tileNumber++) {
      let homePlayerIndex = homePositions.indexOf(tileNumber);
      let homePlayerName =
        homePlayerIndex !== -1
          ? this.state.currentPlayerNames[homePlayerIndex]
          : "";
      let playerNameOverlay = $("#player-name-" + tileNumber);
      if (homePlayerName) {
        playerNameOverlay
          .css("color", PLAYER_COLORS[homePlayerIndex % PLAYER_COLORS.length])
          .html(homePlayerName)
          .show();
      } else {
        playerNameOverlay.hide();
      }
    }
  }

  /* MAP GENERATION */

  getTileNumber(tile, numberOnly, withDash) {
    if (tile !== undefined) {
      let hyperlaneRegex = /^((8[3-9]|90|91)[AB])-?([0-5])?$/gm;
      let result = hyperlaneRegex.exec(tile);
      let altHyperlaneRegex = /^(hyp.+?)-?([0-5])?$/gm;
      let altHyperlaneResult = altHyperlaneRegex.exec(tile);
      if (result) {
        if (numberOnly) {
          return Number(result[2]);
        } else if (withDash) {
          return result[0];
        } else {
          return result[1];
        }
      } else if (altHyperlaneResult) {
        if (numberOnly) {
          return Number(altHyperlaneResult[2]);
        } else if (withDash) {
          return altHyperlaneResult[0];
        } else {
          return altHyperlaneResult[1];
        }
      } else {
        // let regex = /^(80|81|82|-1|[0-7]?[0-9])-?([0-5])?$/gm
        let regex = /^((?:er)?\d{1,4})-?([0-5])?$/gm;
        result = regex.exec(tile);
        if (result) {
          return result[1];
        } else {
          return -1;
        }
      }
    } else {
      return -1;
    }
  }

  /**
   * The main rendering function for the map. Using the tile string, cleanly lays out a map that is centered in the
   * map div.
   */
  drawMap() {
    // Check to see if there are any tiles to render currently
    if (this.state === undefined || this.state.tiles.length <= 0) {
      this.setState({
        overviewVisible: true,
        mapVisible: false,
        mapControlsVisible: false,
      });
      return;
    } else {
      this.setState({
        overviewVisible: false,
        mapVisible: true,
        mapControlsVisible: true,
      });
    }

    // Set the map height based on which tiles are being used. Boards up to ring 4 all fit the
    // same default bounding box; anything bigger needs a proportionally larger one (2*ring + 1).
    let ringCount = ringForTileCount(this.state.tiles.length);
    let mapNumberTilesHeight = ringCount <= 4 ? 9 : 2 * ringCount + 1;
    let mapNumberTilesWidth = mapNumberTilesHeight;
    const visibleTiles = [...Object.keys(tileData.all)];
    visibleTiles.push(0);
    // if (this.getTileNumber(this.state.tiles[37], true) in visibleTiles || this.getTileNumber(this.state.tiles[38], true) in visibleTiles || this.getTileNumber(this.state.tiles[60], true) in visibleTiles
    //     || this.getTileNumber(this.state.tiles[48], true) in visibleTiles || this.getTileNumber(this.state.tiles[49], true) in visibleTiles || this.getTileNumber(this.state.tiles[50], true) in visibleTiles) {
    //     mapNumberTilesHeight = 9;
    //     mapNumberTilesWidth = 7;
    // } else if (this.getTileNumber(this.state.tiles[19], true) in visibleTiles || this.getTileNumber(this.state.tiles[20], true) in visibleTiles || this.getTileNumber(this.state.tiles[36], true) in visibleTiles
    //     || this.getTileNumber(this.state.tiles[27], true) in visibleTiles || this.getTileNumber(this.state.tiles[28], true) in visibleTiles || this.getTileNumber(this.state.tiles[29], true) in visibleTiles) {
    //     mapNumberTilesHeight = 7;
    //     mapNumberTilesWidth = 5.5;
    // } else if (this.getTileNumber(this.state.tiles[7], true) in visibleTiles || this.getTileNumber(this.state.tiles[8], true) in visibleTiles || this.getTileNumber(this.state.tiles[18], true) in visibleTiles
    //     || this.getTileNumber(this.state.tiles[12], true) in visibleTiles || this.getTileNumber(this.state.tiles[13], true) in visibleTiles || this.getTileNumber(this.state.tiles[14], true) in visibleTiles) {
    //     mapNumberTilesHeight = 5;
    //     mapNumberTilesWidth = 4;
    // } else if (this.getTileNumber(this.state.tiles[1], true) in visibleTiles || this.getTileNumber(this.state.tiles[2], true) in visibleTiles || this.getTileNumber(this.state.tiles[6], true) in visibleTiles
    //     || this.getTileNumber(this.state.tiles[3], true) in visibleTiles || this.getTileNumber(this.state.tiles[4], true) in visibleTiles || this.getTileNumber(this.state.tiles[5], true) in visibleTiles) {
    //     mapNumberTilesHeight = 3;
    //     mapNumberTilesWidth = 2.5;
    // }

    // Configuration options for magic numbers
    let mapPadding = 0; // The amount of pad spacing to apply to the map edges
    let mapTileWidth = 364; // The width of every tile in the static folder
    let mapTileHeight = 317;

    // Get extra information about the map
    let mapWidth = this.$mapContainer.width() - 2 * mapPadding; // Put padding on top/bottom of map
    let mapHeight = this.$mapContainer.height() - 2 * mapPadding; // Put padding on either side of map
    let tileWidth = Math.floor(mapWidth / mapNumberTilesWidth);
    let tileHeight = Math.floor(mapHeight / mapNumberTilesHeight);

    // Determine which will be our constraining factor, width or height?
    let constraintWidth = Math.min(
      this.state.zoom *
        Math.min(
          tileWidth,
          Math.floor((mapTileWidth / mapTileHeight) * tileHeight),
        ),
      mapTileWidth,
    ); // Prohibit over-zooming
    let constraintHeight = Math.floor(
      (mapTileHeight / mapTileWidth) * constraintWidth,
    );

    // Configure the map container to be this size
    this.$tiMap
      .css("width", constraintWidth * mapNumberTilesWidth)
      .css("height", constraintHeight * mapNumberTilesHeight);

    // Calculate the offset values for margin left and margin top per tile
    let offsets = calculateOffsets(constraintWidth, constraintHeight);

    // Loop over tiles to assign various values to them
    let homePositions = this.getHomePositions();
    let closestPlayerLabels = this.computeClosestPlayerLabels();
    for (let tileNumber = 0; tileNumber < offsets.length; tileNumber++) {
      // Create the selectors
      let tile = $("#tile-" + tileNumber);
      let tileWrapper = $("#tile-wrapper-" + tileNumber);
      let numOverlay = $("#number-" + tileNumber);
      let wormholeOverlay = $("#wormhole-" + tileNumber);
      let closestPlayerOverlay = $("#closest-player-" + tileNumber);
      let playerNameOverlay = $("#player-name-" + tileNumber);
      let underlay = $("#underlay-" + tileNumber);

      // Decide if we should be displaying this tile
      if (
        this.state.tiles[tileNumber] >= 0 ||
        typeof this.state.tiles[tileNumber] === "string" ||
        this.state.customMapBuilding
      ) {
        tile
          .css("left", 0)
          .css("top", 0)
          .css({ transform: "rotate(0)" }) // Reset any rotations from other hyperlanes
          .show();

        tileWrapper
          .css("width", constraintWidth)
          .css("height", constraintHeight)
          .css("margin-left", offsets[tileNumber][0])
          .css("margin-top", offsets[tileNumber][1])
          .css("left", (mapNumberTilesWidth / 2) * constraintWidth)
          .css("top", (mapNumberTilesHeight / 2) * constraintHeight)
          .show();

        if (typeof this.state.tiles[tileNumber] === "string") {
          // Hyperlane, so remove the last section and check if it needs to be rotated
          if (this.state.tiles[tileNumber].split("-")[1] !== "0") {
            let degrees =
              60 * Number(this.state.tiles[tileNumber].split("-")[1]);
            tile.css({ transform: "rotate(" + degrees + "deg)" });
          }
        }
      } else {
        tile.hide();
      }

      // Create the number overlay and the hover underlay for the tile
      numOverlay
        .css("margin-left", "-10px")
        .css("top", constraintHeight / 2 - 10)
        .html(this.getTileNumber(this.state.tiles[tileNumber]));

      wormholeOverlay
        .css("margin-left", "-10px")
        .css("top", constraintHeight / 2 - 23)
        .css("font-size", "2rem")
        .html("");

      closestPlayerOverlay
        .css("margin-left", "-10px")
        .css("top", constraintHeight / 2 - 10)
        .html(closestPlayerLabels[tileNumber]);

      underlay
        .css("width", constraintWidth + 6)
        .css("height", constraintHeight + 6)
        .css("margin-left", "-3px")
        .css("margin-top", "-3px");

      // Show a player's custom name on their home world (not the "P1"/"P2" fallback), colored to
      // match the closest-player overlay, regardless of whether a race has been assigned yet.
      let homePlayerIndex = homePositions.indexOf(tileNumber);
      let homePlayerName =
        homePlayerIndex !== -1
          ? this.state.currentPlayerNames[homePlayerIndex]
          : "";
      if (homePlayerName) {
        playerNameOverlay
          .css("margin-left", "-10px")
          .css("top", constraintHeight / 2 - 10)
          .css("color", PLAYER_COLORS[homePlayerIndex % PLAYER_COLORS.length])
          .html(homePlayerName)
          .show();
      } else {
        playerNameOverlay.hide();
      }
    }

    // Clear any css classes on the map
    this.$tiMap.removeClass("center-map");
    this.$tiMap.removeClass("center-map-vertical");
    this.$tiMap.removeClass("center-map-horizontal");

    // Check to see if we are zoomed, or map is always screen size.
    if (this.state.zoom > 1.0) {
      // Check to see if we should still be horizontally or vertically centered
      if (constraintWidth * mapNumberTilesWidth < mapWidth) {
        this.$tiMap.addClass("center-map-horizontal");
      } else if (constraintHeight * mapNumberTilesHeight < mapHeight) {
        this.$tiMap.addClass("center-map-vertical");
      } else {
        // Use default map values
      }

      // TODO find what the mouse is hovering nearest to, or over. Get that element, and zoom in. Something like
      //  this? https://stackoverflow.com/questions/6519043/get-mouse-position-on-scroll

      // Center Mecatol Rex on the screen
      $("#tile-0").get(0).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    } else {
      // No need to move the map around, just center it on the screen
      this.$tiMap.addClass("center-map");
    }
  }

  /* DRAG AND DROP FUNCTIONS, modified from https://www.w3schools.com/html/html5_draganddrop.asp */

  allowDrop(ev) {
    ev.preventDefault();
  }
  dragEnter(ev) {
    let targetSelector = $("#" + ev.target.id);
    let targetUnderlay = $("#underlay-" + ev.target.id.split("-")[1]);
    targetSelector.addClass("tile-target");
    targetUnderlay.addClass("underlay-target");
  }
  dragLeave(ev) {
    let targetSelector = $("#" + ev.target.id);
    let targetUnderlay = $("#underlay-" + ev.target.id.split("-")[1]);
    targetSelector.removeClass("tile-target");
    targetUnderlay.removeClass("underlay-target");
  }
  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  drop(ev) {
    ev.preventDefault();
    // Get the associated ids
    let fromId = ev.dataTransfer.getData("text");
    let targetId = ev.target.id;

    this.handleDrop(targetId, fromId);
  }
  handleDrop(targetId, fromId) {
    console.log(targetId, fromId);
    // Create selectors
    let targetSelector = $("#" + targetId);
    let fromSelector = $("#" + fromId);
    let targetUnderlay = $("#underlay-" + targetId.split("-")[1]);

    // Get various variables for calculations
    let targetType = targetId.split("-")[0];
    let fromType = fromId.split("-")[0];
    let targetSecond = targetId.slice(targetId.indexOf("-") + 1);
    let fromSecond = fromId.slice(fromId.indexOf("-") + 1);
    console.log(targetSecond, fromSecond);

    let tilesCopy = [...this.state.tiles];
    console.log(this.getTileNumber(fromSecond));
    let swapSources = true;

    // Determine what swap is happening
    if (fromType === "tile" && targetType === "tile") {
      // Both are on the main map, so simply swap their positions in the tile array
      let temp = tilesCopy[targetSecond];
      tilesCopy[targetSecond] = tilesCopy[fromSecond];
      tilesCopy[fromSecond] = temp;
    } else if (fromType === "extra" && targetType === "tile") {
      // Moving from the extra tiles onto the main map
      let temp = tilesCopy[targetSecond];
      tilesCopy[targetSecond] = this.getTileNumber(fromSecond);
      // Update the id of the tile
      if (this.state.showAllExtraTiles || this.state.customMapBuilding) {
        swapSources = false;
      } else {
        fromSelector.attr("id", "extra-" + temp);
      }
    } else if (fromType === "tile" && targetType === "extra") {
      // Moving from the main map to the tiles
      let temp = tilesCopy[fromSecond];
      tilesCopy[fromSecond] = this.getTileNumber(targetSecond);
      // Update the id of the tile
      if (this.state.showAllExtraTiles || this.state.customMapBuilding) {
        swapSources = false;
      } else {
        targetSelector.attr("id", "extra-" + temp);
      }
    } else {
      if (this.state.showAllExtraTiles || this.state.customMapBuilding) {
        swapSources = false;
      } else {
        // Swapping extra tiles... Just update the ids
        targetSelector.attr("id", "extra-" + fromSecond);
        fromSelector.attr("id", "extra-" + targetSecond);
      }
    }

    // Only swap sources if we need to
    if (swapSources) {
      // Temporarily store the target's source, and swap
      let targetSource = targetSelector.attr("src");
      targetSelector.attr("src", fromSelector.attr("src"));
      fromSelector.attr("src", targetSource);
    }

    // Clear the target classes
    targetSelector.removeClass("tile-target");
    targetUnderlay.removeClass("underlay-target");

    // Check if we have empty tiles to fill in now. This can only happen with custom maps
    if (this.state.customMapBuilding) {
      tilesCopy = Array.from(tilesCopy, (item) =>
        typeof item === "undefined" ? -1 : item,
      );
    }

    // Update the tile string
    this.setState(
      {
        tileClicked: -1,
      },
      () => {
        this.updateTiles(tilesCopy);
      },
    );
  }
  handleTouchMove(event) {
    let changedTouch = event.changedTouches[0];
    let elem = document.elementFromPoint(
      changedTouch.clientX,
      changedTouch.clientY,
    );
    if (
      elem.id !== undefined &&
      elem.id !== "" &&
      elem.id !== this.state.currentMobileHover
    ) {
      // At a transition stage
      let targetSelector = $("#" + elem.id);
      let targetUnderlay = $("#underlay-" + elem.id.split("-")[1]);
      targetSelector.addClass("tile-target");
      targetUnderlay.addClass("underlay-target");

      if (this.state.currentMobileHover !== "") {
        let targetSelector = $("#" + this.state.currentMobileHover);
        let targetUnderlay = $(
          "#underlay-" + this.state.currentMobileHover.split("-")[1],
        );
        targetSelector.removeClass("tile-target");
        targetUnderlay.removeClass("underlay-target");
      }

      this.setState({
        currentMobileHover: elem.id,
        tileClicked: -1,
      });
    }
  }
  handleTouchEnd(event) {
    // event.preventDefault();
    event.stopPropagation();
    let changedTouch = event.changedTouches[0];
    let elem = document.elementFromPoint(
      changedTouch.clientX,
      changedTouch.clientY,
    );
    this.handleDrop(event.target.id, elem.id);

    if (this.state.currentMobileHover !== "") {
      let targetSelector = $("#" + this.state.currentMobileHover);
      let targetUnderlay = $(
        "#underlay-" + this.state.currentMobileHover.split("-")[1],
      );
      targetSelector.removeClass("tile-target");
      targetUnderlay.removeClass("underlay-target");
      this.setState({
        currentMobileHover: "",
        tileClicked: -1,
      });
    }
  }

  render() {
    return (
      <div>
        <div
          id="mainContent"
          className="justify-content-center align-items-center"
          onClick={this.updateTileClicked}
        >
          <MainOverview visible={this.state.overviewVisible} />

          <MainMap
            visible={this.state.mapVisible}
            overlayVisible={this.state.overlayVisible}
            tiles={this.state.tiles}

            ref={this.map}

            unusedTiles={this.state.unusedTiles}
            updateTiles={this.updateTiles}
            lockedTiles={this.state.lockedTiles}
            updateLockedTiles={this.updateLockedTiles}
            includedTiles={this.state.includedTiles}
            updateInExcludedTiles={this.updateInExcludedTiles}
            excludedTiles={this.state.excludedTiles}
            tileClicked={this.state.tileClicked}
            updateTileClicked={this.updateTileClicked}
            getTileNumber={this.getTileNumber}

            drag={this.drag}
            drop={this.drop}
            dragEnter={this.dragEnter}
            dragLeave={this.dragLeave}
            allowDrop={this.allowDrop}
            touchEnd={this.handleTouchEnd}
            touchMove={this.handleTouchMove}
          />
        </div>

        <OptionsControls
          visible={this.state.isOptionsMenuShowing}
          isMobileView={this.state.isMobileView}
          toggleOptions={this.toggleOptionsMenu}
        />

        <MapControls
          visible={this.state.mapControlsVisible}
          extraTilesVisible={this.state.extraTilesVisible}
          moreInfoVisible={this.state.moreInfoVisible}
          overlayVisible={this.state.overlayVisible}
          wormholeOverlayVisible={this.state.wormholeOverlayVisible}
          closestPlayerOverlayVisible={this.state.closestPlayerOverlayVisible}
          tiles={this.state.tiles}
          map={this.map}

          toggleOverlay={this.toggleOverlay}
          toggleWormholeOverlay={this.toggleWormholeOverlay}
          toggleClosestPlayerOverlay={this.toggleClosestPlayerOverlay}
          toggleMoreInfo={this.toggleMoreInfo}
          toggleExtraTiles={this.toggleExtraTiles}
          zoomPlus={this.zoomPlusClick}
          zoomMinus={this.zoomMinusClick}
          rotateClockwise={this.rotateClockwise}
          rotateCounterClockwise={this.rotateCounterClockwise}
          toggleBackground={this.toggleBackground}
          updateTiles={this.updateTiles}
          removeTrailing={this.removeTrailing}
        />

        <ExtraTiles
          visible={this.state.extraTilesVisible}
          overlayVisible={this.state.overlayVisible}
          includedExpansions={this.state.includedExpansions}
          showAllExtraTiles={this.state.showAllExtraTiles}
          customMapBuilding={this.state.customMapBuilding}

          updateTiles={this.updateTiles}
          toggleShowAllExtraTiles={this.toggleShowAllExtraTiles}
          toggleCustomMapBuilding={this.toggleCustomMapBuilding}
          unsetAllTiles={this.unsetAllTiles}

          drag={this.drag}
          drop={this.drop}
          dragEnter={this.dragEnter}
          dragLeave={this.dragLeave}
          allowDrop={this.allowDrop}
        />

        <MoreInfo
          visible={this.state.moreInfoVisible}
          currentPlayerNames={this.state.currentPlayerNames}
          tiles={this.state.tiles}
          getTileNumber={this.getTileNumber}
        />

        <MapOptions
          visible={this.state.isOptionsMenuShowing}
          includedExpansions={this.state.includedExpansions}
          currentPlayerNames={this.state.currentPlayerNames}
          currentRaces={this.state.currentRaces}
          tiles={this.state.tiles}
          includedTiles={this.state.includedTiles}
          excludedTiles={this.state.excludedTiles}
          lockedTiles={this.state.lockedTiles}

          ref={this.mapOptions}

          toggleProphecyOfKings={this.toggleProphecyOfKings}
          toggleUnchartedSpace={this.toggleUnchartedSpace}
          toggleDiscordantStars={this.toggleDiscordantStars}
          toggleAscendentSun={this.toggleAscendentSun}
          toggleFanHyperlanes={this.toggleFanHyperlanes}
          toggleThundersEdge={this.toggleThundersEdge}
          updateTiles={this.updateTiles}
          showExtraTiles={this.showExtraTiles}
          updateRaces={this.updateRaces}
          updatePlayerNames={this.updatePlayerNames}
        />

        <ReactTooltip id="tooltip" />
        <BootstrapScripts />
      </div>
    );
  }
}
export default App;
