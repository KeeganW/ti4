import React from 'react';
import $ from 'jquery';
import './App.css';
import BootstrapScripts from "./helpers/BootstrapScripts";
import MoreInfo from "./panels/MoreInfo";
import ExtraTiles from "./panels/ExtraTiles";
import MainOverview from "./overview/MainOverview";
import MainMap from "./map/MainMap";
import MapControls from "./map/MapControls";
import OptionsControls from "./options/OptionsControls";
import MapOptions from "./options/MapOptions";
import tileData from "./data/tileData.json";
import raceData from "./data/raceData.json";
import boardData from "./data/boardData.json";
import {calculateOffsets} from "./helpers/Helpers";

/**
 * The core application page. Holds the states for common objects like tile data and player names. Responsible for
 * drawing the actual map.
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isOptionsMenuShowing: true,
            useProphecyOfKings: false,
            overviewVisible: true,
            extraTilesVisible: false,
            moreInfoVisible: false,
            backgroundAnimated: true,
            tiles: [...boardData.blankMap],
            overlayVisible: false,
            zoom: 1.0,
            mobileBreakpoint: 700,
            isMobileView: false,
            currentPlayerNames: ["", "", "", "", "", "", "", ""],
            currentRaces: [...raceData.races]
        };
    
        this.drawMap = this.drawMap.bind(this);

        this.onPopState = this.onPopState.bind(this);
        this.checkResize = this.checkResize.bind(this);

        this.updateTiles = this.updateTiles.bind(this);
        this.validateTiles = this.validateTiles.bind(this);
        this.toggleBackground = this.toggleBackground.bind(this);
        this.removeTrailing = this.removeTrailing.bind(this);

        this.toggleOptionsMenu = this.toggleOptionsMenu.bind(this);
        this.toggleProphecyOfKings = this.toggleProphecyOfKings.bind(this);
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.toggleMoreInfo = this.toggleMoreInfo.bind(this);
        this.toggleExtraTiles = this.toggleExtraTiles.bind(this);
        this.copyTilesToClipboard = this.copyTilesToClipboard.bind(this);
        this.showExtraTiles = this.showExtraTiles.bind(this);
        this.zoomPlusClick = this.zoomPlusClick.bind(this);
        this.zoomMinusClick = this.zoomMinusClick.bind(this);
        
        this.drag = this.drag.bind(this);
        this.drop = this.drop.bind(this);
        this.dragEnter = this.dragEnter.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.allowDrop = this.allowDrop.bind(this);

    }
    
    /* URL CONTROLS */

    /**
     * After all elements on the html page have been created, run this.
     */
    componentDidMount() {
        // Setup the main jquery selectors
        // TODO move these or find a way to not use them
        this.$mapContainer =  $("#mainContent");
        this.$tiMap = $("#map");

        // Grab the variables from the url on back/forward events
        window.onpopstate = this.onPopState
        this.onPopState();

        // Change the map dimensions whenever the page size is different
        window.onresize = this.checkResize
        this.checkResize();
    }

    /**
     * We are done with the page, removing everything.
     */
    componentWillUnmount() {
        window.onpopstate = () => {};
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
                })
                document.documentElement.style.setProperty('--options-width', "0px");
            } // else { // We went from mobile to mobile, don't need to do anything
        } else {
            // We are in desktop state
            this.setState({
                isMobileView: false,
                isOptionsMenuShowing: true,
            })
            document.documentElement.style.setProperty('--options-width', "400px");
        }

        // Redraw with the new mobile conditions
        this.drawMap()
    }

    /**
     * Whenever we go back, grab the tiles from the url bar, and set them as the current tiles.
     * @param {*} event The event that triggered this function.
     */
    onPopState(event) {
        // Get the tiles from the url
        let url = new URL(document.location);
        let tiles = url.searchParams.get("tiles");
        
        // Make sure the tiles parameter is set to something
        const newTiles = tiles !== null ? this.validateTiles(tiles) : [];

        // Update the tiles in the state, and redraw the map
        if (newTiles !== []) {
            this.setState({
                tiles: newTiles,
            }, this.drawMap );
        }
    };
    
    /* TILE CHANGING FUNCTIONS */

    /**
     * Updates the tiles state with a new set of tiles, and also pushes it to the url for sharable links
     * @param {number[]} newTiles
     */
    updateTiles(newTiles) {
        // Remove the unused tile numbers at the end of the array
        newTiles = this.removeTrailing(newTiles);

        // Add it to the url as a parameter
        window.history.pushState({}, null, window.location.pathname + '?tiles=' + newTiles.toString());

        // Hide the options menu when we are on mobile (for when the tiles update and the options menu is open)
        let newOptionsMenuState = this.state.isOptionsMenuShowing
        if (this.state.isMobileView) {
            newOptionsMenuState = false;
        }

        this.setState({
            tiles: newTiles,
            isOptionsMenuShowing: newOptionsMenuState,
        }, () => {
            // Update the extra tiles menu, and draw a new map with the new tiles
            this.showExtraTiles();
            this.drawMap();
        });
    }

    /**
     * Removes any trailing -1s from a tile string.
     * @param {number[]} tiles the tile string to clean
     * @returns {number[]} the clean tile string
     */
    removeTrailing(tiles) {
        while(tiles[tiles.length - 1] === -1){
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
            tiles = tiles.substring(0, tiles.length-1);
        }
        
        // Now split on commas
        tiles = tiles.split(',');
        let newTiles = [];
        for (let tileIndex in tiles) {
            let parsed = Number(tiles[tileIndex]);
            // If tile is a string (like a hyperlane), add it. Otherwise add it as a number
            newTiles.push(isNaN(parsed) ? tiles[tileIndex] : parsed);
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
            document.documentElement.style.setProperty('--options-width', optionsSize);
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
        this.setState({
            overlayVisible: !this.state.overlayVisible,
        }, this.drawMap );
    }

    /**
     * Toggle whether we need to use the prophecy of kings expansion or not
     */
    toggleProphecyOfKings() {
        this.setState({
            useProphecyOfKings: !this.state.useProphecyOfKings,
        }, this.showExtraTiles);
    }

    /**
     * Toggle whether the more info side panel is visible. If the extra tiles panel had just been triggered, we just
     * need to hide the more info panel.
     * @param {*} event The event that triggered this function.
     * @param {boolean} justTriggeredTiles Whether or not the extra tiles panel had just been opened.
     */
    toggleMoreInfo(event, justTriggeredTiles) {
        // Guarantee that justTriggeredTiles is set
        justTriggeredTiles = justTriggeredTiles === undefined ? false : justTriggeredTiles;

        let optionsSize = this.state.moreInfoVisible ? "0px" : "400px";
        document.documentElement.style.setProperty('--more-info-width', optionsSize);

        this.setState({
            moreInfoVisible: !this.state.moreInfoVisible,
        }, () => {
            // Hide the extra tiles if the user just pressed the show more info button
            if (this.state.extraTilesVisible && !justTriggeredTiles) {
                this.toggleExtraTiles(event, true);
            }
        });
    }

    /**
     * Toggle whether the extra tiles side panel is visible.
     * @param {*} event The event that triggered this function.
     * @param {boolean} justTriggeredInfo Whether or not the more info panel had just been opened.
     */
    toggleExtraTiles(event, justTriggeredInfo) {
        justTriggeredInfo = justTriggeredInfo === undefined ? false : justTriggeredInfo;

        // Update what tiles are going to be displayed
        this.showExtraTiles();

        let optionsSize = this.state.extraTilesVisible ? "0px" : "250px";
        document.documentElement.style.setProperty('--extra-tiles-width', optionsSize);

        this.setState({
            extraTilesVisible: !this.state.extraTilesVisible,
        }, () => {
            if (this.state.moreInfoVisible && !justTriggeredInfo) {
                this.toggleMoreInfo(event, true);
            }
        });
    }

    /**
     * Update what tiles are visible in the extra tiles panel based on the current tiles being used on the map
     */
    showExtraTiles() {
        let systemNumbers = []
        systemNumbers = systemNumbers.concat(tileData.blue).concat(tileData.red);
        if (this.state.useProphecyOfKings) {
            systemNumbers = systemNumbers.concat(tileData.pokBlue).concat(tileData.pokRed);
        }

        for (let systemNumber of systemNumbers) {
            // If it is not on the map, show the system tile. Otherwise, hide it.
            let systemSelector = $("#extra-" + systemNumber);
            !this.state.tiles.includes(systemNumber) ? systemSelector.show() : systemSelector.hide();
        }
    }

    /**
     * Using writeText, copy the tiles currently being displayed to the user's clipboard.
     */
    copyTilesToClipboard() {
        // Get the current tiles
        let tileString = [...this.state.tiles];
        tileString = this.removeTrailing(tileString);

        // Remove mecatol rex
        tileString.shift();

        tileString = tileString.toString();
        tileString = tileString.replaceAll("-1", "0");  // Remove the -1s because it is unused
        tileString = tileString.replaceAll(",", " ");  // Remove commas from old array
        tileString = tileString.replaceAll("-", "");  // Remove rotation dash in hyperlanes

        // Print to console in case the copy function doesnt actually work
        console.log("Here is your tile string for use with this TTS Mod (https://steamcommunity.com/sharedfiles/filedetails/?id=1466689117):");
        console.log(tileString);

        // Copy to the user's clipboard
        navigator.clipboard.writeText(tileString);
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

    /**
     * Zoom the map in by a set amount, up until it is the same size as the original images. Then redraw the map.
     */
    zoomPlusClick() {
        if (this.state.zoom < 3) {
            this.setState({
                zoom: this.state.zoom + 0.75,
            }, this.drawMap );
        }
    }

    /**
     * Zoom the map out by a set amount, up until it is too small to see. Then redraw the map.
     */
    zoomMinusClick() {
        if (this.state.zoom > 0.5) {
            this.setState({
                zoom: this.state.zoom - 0.75,
            }, this.drawMap );
        }
    }

    /* MAP GENERATION */

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

        // Set the map height based on which tiles are being used
        let mapNumberTilesHeight = 1;
        let mapNumberTilesWidth = 1;
        if (this.state.tiles[37] >= 0 || this.state.tiles[38] >= 0 || this.state.tiles[60] >= 0
            || this.state.tiles[48] >= 0 || this.state.tiles[49] >= 0 || this.state.tiles[50] >= 0) {
            mapNumberTilesHeight = 9;
            mapNumberTilesWidth = 7;
        } else if (this.state.tiles[19] >= 0 || this.state.tiles[20] >= 0 || this.state.tiles[36] >= 0
            || this.state.tiles[27] >= 0 || this.state.tiles[28] >= 0 || this.state.tiles[29] >= 0) {
            mapNumberTilesHeight = 7;
            mapNumberTilesWidth = 5.5;
        } else if (this.state.tiles[7] >= 0 || this.state.tiles[8] >= 0 || this.state.tiles[18] >= 0
            || this.state.tiles[12] >= 0 || this.state.tiles[13] >= 0 || this.state.tiles[14] >= 0) {
            mapNumberTilesHeight = 5;
            mapNumberTilesWidth = 4;
        } else if (this.state.tiles[1] >= 0 || this.state.tiles[2] >= 0 || this.state.tiles[6] >= 0
            || this.state.tiles[3] >= 0 || this.state.tiles[4] >= 0 || this.state.tiles[5] >= 0) {
            mapNumberTilesHeight = 3;
            mapNumberTilesWidth = 2.5;
        }

        // Configuration options for magic numbers
        let mapPadding = 0; // The amount of pad spacing to apply to the map edges
        let mapTileWidth = 364; // The width of every tile in the static folder
        let mapTileHeight = 317;

        // Get extra information about the map
        let mapWidth = this.$mapContainer.width() - (2 * mapPadding); // Put padding on top/bottom of map
        let mapHeight = this.$mapContainer.height() - (2 * mapPadding); // Put padding on either side of map
        let tileWidth = Math.floor(mapWidth / mapNumberTilesWidth)
        let tileHeight = Math.floor(mapHeight / mapNumberTilesHeight)

        // Determine which will be our constraining factor, width or height?
        let constraintWidth = Math.min(this.state.zoom * Math.min(tileWidth, Math.floor((mapTileWidth / mapTileHeight) * tileHeight)), mapTileWidth) // Prohibit over-zooming
        let constraintHeight = Math.floor((mapTileHeight / mapTileWidth) * constraintWidth)

        // Configure the map container to be this size
        this.$tiMap.css("width", constraintWidth * mapNumberTilesWidth)
            .css("height", constraintHeight * mapNumberTilesHeight);

        // Calculate the offset values for margin left and margin top per tile
        let offsets = calculateOffsets(constraintWidth, constraintHeight)

        // Loop over tiles to assign various values to them
        let currentPlayerNumber = 0;
        for (let tileNumber = 0; tileNumber < offsets.length; tileNumber++) {
            let tile = $("#tile-" + tileNumber);
            let numOverlay = $("#number-" + tileNumber);
            let underlay = $("#underlay-" + tileNumber);
            if (this.state.tiles[tileNumber] >= 0 || typeof this.state.tiles[tileNumber] === "string") {
                tile.attr("width", constraintWidth)
                    .attr("height", constraintHeight)
                    .css("margin-left", offsets[tileNumber][0])
                    .css("margin-top", offsets[tileNumber][1])
                    .css("left", (mapNumberTilesWidth / 2) * constraintWidth)
                    .css("top", (mapNumberTilesHeight / 2) * constraintHeight)
                    .css({'transform' : 'rotate(0)'})  // Reset any rotations from other hyperlanes

                tile.show();

                if (typeof this.state.tiles[tileNumber] === "string") {
                    // Hyperlane, so remove the last section and check if it needs to be rotated
                    if (this.state.tiles[tileNumber].split("-")[1] !== "0") {
                        let degrees = 60 * Number(this.state.tiles[tileNumber].split("-")[1]);
                        tile.css({'transform' : 'rotate(-'+ degrees +'deg)'});
                    }
                }
            } else {
                tile.hide();
            }

            numOverlay.css("width", constraintWidth)
                .css("height", constraintHeight)
                .css("line-height", constraintHeight + "px")
                .css("margin-left", offsets[tileNumber][0])
                .css("margin-top", offsets[tileNumber][1])
                .css("left", (mapNumberTilesWidth / 2) * constraintWidth)
                .css("top", (mapNumberTilesHeight / 2) * constraintHeight)
                .css("display", "none")
                // .html(tileNumber)

            if (typeof this.state.tiles[tileNumber] === "string") {
                numOverlay.html(this.state.tiles[tileNumber].split("-")[0])
            } else {
                numOverlay.html(this.state.tiles[tileNumber])
            }

            underlay.css("width", constraintWidth + 6)
                .css("height", constraintHeight + 6)
                .css("margin-left", offsets[tileNumber][0]-3)
                .css("margin-top", offsets[tileNumber][1]-3)
                .css("left", (mapNumberTilesWidth / 2) * constraintWidth)
                .css("top", (mapNumberTilesHeight / 2) * constraintHeight)

            if (!this.state.overlayVisible) {
                numOverlay.hide()
            } else {
                if (this.state.tiles[tileNumber] === 0) {
                    // Show the player name
                    let name = this.state.currentPlayerNames[currentPlayerNumber];
                    numOverlay.html(name === "" ? "P" + (currentPlayerNumber + 1) : name);
                    currentPlayerNumber += 1;
                }

                if (this.state.tiles[tileNumber] !== -1) {
                    numOverlay.show();
                }
            }
        }

        // Clear any css classes on the map
        this.$tiMap.removeClass("center-map");
        this.$tiMap.removeClass("center-map-vertical");
        this.$tiMap.removeClass("center-map-horizontal");

        // Check to see if we are zoomed, or map is always screen size.
        if (this.state.zoom > 1.0) {
            // Check to see if we should still be horizontally or vertically centered
            if ((constraintWidth * mapNumberTilesWidth) < mapWidth) {
                this.$tiMap.addClass("center-map-horizontal");
            } else if ((constraintHeight * mapNumberTilesHeight) < mapHeight) {
                this.$tiMap.addClass("center-map-vertical");
            } else {
                // Use default map values
            }

            // TODO find what the mouse is hovering nearest to, or over. Get that element, and zoom in. Something like
            //  this? https://stackoverflow.com/questions/6519043/get-mouse-position-on-scroll

            // Center Mecatol Rex on the screen
            $("#tile-0").get(0).scrollIntoView({behavior: "smooth", block:"center", inline: "center"});
        } else {
            // No need to move the map around, just center it on the screen
            this.$tiMap.addClass("center-map");
        }
    }

    /* DRAG AND DROP FUNCTIONS, modified from https://www.w3schools.com/html/html5_draganddrop.asp */

    allowDrop(ev) {
        ev.preventDefault();
    }
    dragEnter(ev){
        let targetSelector = $("#" + ev.target.id);
        let targetUnderlay = $("#underlay-" + ev.target.id.split("-")[1]);
        targetSelector.addClass("tile-target")
        targetUnderlay.addClass("underlay-target")
    }
    dragLeave(ev){
        let targetSelector = $("#" + ev.target.id);
        let targetUnderlay = $("#underlay-" + ev.target.id.split("-")[1]);
        targetSelector.removeClass("tile-target")
        targetUnderlay.removeClass("underlay-target")
    }
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    drop(ev) {
        ev.preventDefault();
        // Get the associated ids
        let fromId = ev.dataTransfer.getData("text");
        let targetId = ev.target.id;
        
        let targetSelector = $("#" + targetId);
        let fromSelector = $("#" + fromId);
        let targetUnderlay = $("#underlay-" + ev.target.id.split("-")[1]);
        
        // Temporarily store the target's source, and swap
        let targetSource = targetSelector.attr('src');
        targetSelector.attr('src', fromSelector.attr('src'));
        fromSelector.attr('src', targetSource);
        
        let targetType = targetId.split("-")[0];
        let fromType = fromId.split("-")[0];
        let targetSecond = targetId.split("-")[1];
        let fromSecond = fromId.split("-")[1];
    
        let tilesCopy = [...this.state.tiles];
        if (fromType === "tile" && targetType === "tile") {
            // Both are on the main map, so simply swap their positions in the tile array
            let temp = tilesCopy[targetSecond];
            tilesCopy[targetSecond] = tilesCopy[fromSecond];
            tilesCopy[fromSecond] = temp;
        } else if (fromType === "extra" && targetType === "tile") {
            // Moving from the extra tiles onto the main map
            let temp = tilesCopy[targetSecond];
            tilesCopy[targetSecond] = parseInt(fromSecond);
            // Update the id of the tile
            fromSelector.attr('id', 'extra-' + temp)
        } else if (fromType === "tile" && targetType === "extra") {
            // Moving from the main map to the tiles
            let temp = tilesCopy[fromSecond];
            tilesCopy[fromSecond] = parseInt(targetSecond);
            // Update the id of the tile
            targetSelector.attr('id', 'extra-' + temp)
        } else {
            // Swapping extra tiles... Just update the ids
            targetSelector.attr('id', 'extra-' + fromSecond)
            fromSelector.attr('id', 'extra-' + targetSecond)
        }
        
        // Clear the target classes
        targetSelector.removeClass("tile-target");
        targetUnderlay.removeClass("underlay-target");
        
        // Update the tile string
        this.updateTiles(tilesCopy);
    }
    

    render() {
        return (
            <div>
                <div id="mainContent" className="justify-content-center align-items-center">
                    <MainOverview visible={this.state.overviewVisible}
                    />
                    
                    <MainMap visible={this.state.mapVisible} overlayVisible={this.state.overlayVisible}
                             tiles={this.state.tiles} useProphecyOfKings={this.state.useProphecyOfKings}

                             drag={this.drag} drop={this.drop} dragEnter={this.dragEnter} dragLeave={this.dragLeave} allowDrop={this.allowDrop}
                    />
                </div>

                <OptionsControls visible={this.state.isOptionsMenuShowing} isMobileView={this.state.isMobileView}
                                 toggleOptions={this.toggleOptionsMenu}
                />

                <MapControls visible={this.state.mapControlsVisible} extraTilesVisible={this.state.extraTilesVisible}
                             moreInfoVisible={this.state.moreInfoVisible} overlayVisible={this.state.overlayVisible}

                             toggleOverlay={this.toggleOverlay} copyTilesToClipboard={this.copyTilesToClipboard}
                             toggleMoreInfo={this.toggleMoreInfo} toggleExtraTiles={this.toggleExtraTiles}
                             zoomPlus={this.zoomPlusClick} zoomMinus={this.zoomMinusClick}
                             toggleBackground={this.toggleBackground}
                />
                
                <ExtraTiles visible={this.state.extraTilesVisible} overlayVisible={this.state.overlayVisible}
                            useProphecyOfKings={this.state.useProphecyOfKings}
                            updateTiles={this.updateTiles}

                            drag={this.drag} drop={this.drop} dragEnter={this.dragEnter} dragLeave={this.dragLeave} allowDrop={this.allowDrop}
                />
                
                <MoreInfo visible={this.state.moreInfoVisible} currentPlayerNames={this.state.currentPlayerNames}
                          useProphecyOfKings={this.state.useProphecyOfKings} tiles={this.state.tiles}
                />
                
                <MapOptions visible={this.state.isOptionsMenuShowing} useProphecyOfKings={this.state.useProphecyOfKings}
                            currentPlayerNames={this.state.currentPlayerNames} currentRaces={this.state.currentRaces}

                            toggleProphecyOfKings={this.toggleProphecyOfKings} updateTiles={this.updateTiles}
                            showExtraTiles={this.showExtraTiles}
                />
            
                <BootstrapScripts />
            </div>
        );
    }
}
export default App;
