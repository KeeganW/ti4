import React from 'react';
import $ from 'jquery';
import './App.css';
import BootstrapScripts from "./BootstrapScripts";
import MoreInfo from "./panels/MoreInfo";
import ExtraTiles from "./panels/ExtraTiles";
import MainOverview from "./overview/MainOverview";
import MainMap from "./map/MainMap";
import MapControls from "./map/MapControls";
import OptionsControls from "./options/OptionsControls";
import MapOptions from "./options/MapOptions";
import tileData from "./data/tileData.json";
import raceData from "./data/raceData.json";

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isOptionsMenuShowing: true,
            useProphecyOfKings: false,
            overviewVisible: true,
            extraTilesVisible: false,
            moreInfoVisible: false,
            tiles: Array.apply(-1, Array(37)).fill(-1),
            overlayVisible: false,
            zoom: 1.0,
            mobileBreakpoint: 700,
            isMobileView: false,
            currentPlayerNames: ["", "", "", "", "", "", "", ""],
            currentRaces: [...raceData["races"]]
        };
    
        this.drawMap = this.drawMap.bind(this);

        this.onPopState = this.onPopState.bind(this);
        this.checkResize = this.checkResize.bind(this);

        this.updateTiles = this.updateTiles.bind(this);
        this.validateTiles = this.validateTiles.bind(this);
    
        this.toggleOptionsMenu = this.toggleOptionsMenu.bind(this);
        this.toggleProphecyOfKings = this.toggleProphecyOfKings.bind(this);
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.toggleMoreInfo = this.toggleMoreInfo.bind(this);
        this.toggleExtraTiles = this.toggleExtraTiles.bind(this);
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
    
    componentDidMount() {
        // Do something at the start
        this.$mapContainer =  $("#mainContent");
        this.$tiMap = $("#tiMap");

        window.onpopstate = this.onPopState
        this.onPopState()

        this.checkResize()

        window.addEventListener('resize', this.checkResize)
    }
    checkResize() {
        if (window.innerWidth < this.state.mobileBreakpoint) {
            if (!this.state.isMobileView) {
                // Just transitioned into mobile state, so hide the options menu
                this.setState({
                    isMobileView: true,
                    isOptionsMenuShowing: false
                })
                document.documentElement.style.setProperty('--options-width', "0px");
            } // else { // We went from mobile to mobile, don't need to do anything
        } else {
            this.setState({
                isMobileView: false,
                isOptionsMenuShowing: true
            })
            document.documentElement.style.setProperty('--options-width', "400px");
        }
        this.drawMap()
    }
    componentWillUnmount() {
        // As you leave the page
        window.onpopstate = () => {}
    }
    // Whenever we go back, grab the tiles from the url bar, and set them as the current tiles
    onPopState(event) {
        let url = new URL(document.location);
        let tiles = url.searchParams.get("tiles");
        
        // Make sure the tiles parameter is set
        const newTiles = tiles !== null ? this.validateTiles(tiles) : [];
    
        if (newTiles !== []) {
            this.setState({
                tiles: newTiles
            }, this.drawMap );
        }
    };
    
    /* TILE CHANGING FUNCTIONS */
    
    updateTiles(newTiles) {
        window.history.pushState({}, null, window.location.pathname + '?tiles=' + newTiles.toString());

        let newOptionsMenuState = this.state.isOptionsMenuShowing
        if (this.state.isMobileView) {
            newOptionsMenuState = false
        }

        this.setState({
            tiles: newTiles,
            isOptionsMenuShowing: newOptionsMenuState
        }, () => {
            this.showExtraTiles();
            this.drawMap();
        });
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
        tiles = tiles.split(',').map( Number );
        
        return tiles;
    }
    
    /* BUTTON ACTIONS */
    
    toggleOptionsMenu() {
        // Set the css variable for options width
        if (window.innerWidth >= this.state.mobileBreakpoint) {
            let optionsSize = this.state.isOptionsMenuShowing ? "0px" : "400px";
            document.documentElement.style.setProperty('--options-width', optionsSize);
        }
        
        // Update the map so that it correctly uses the new width
        this.drawMap();
        
        // Update the state to the new view
        this.setState(state => ({
            isOptionsMenuShowing: !state.isOptionsMenuShowing
        }));
    }
    toggleOverlay(event) {
        this.setState({
            overlayVisible: !this.state.overlayVisible,
        }, this.drawMap );
    }
    toggleProphecyOfKings(event) {
        this.setState({
            useProphecyOfKings: !this.state.useProphecyOfKings,
        }, this.showExtraTiles);
    }
    toggleMoreInfo(event) {
        let optionsSize = this.state.moreInfoVisible ? "0px" : "400px";
        document.documentElement.style.setProperty('--more-info-width', optionsSize);
        this.setState(state => ({
            moreInfoVisible: !this.state.moreInfoVisible,
        }));
    }
    toggleExtraTiles(event) {
        this.showExtraTiles();
        
        let optionsSize = this.state.extraTilesVisible ? "0px" : "150px";
        document.documentElement.style.setProperty('--extra-tiles-width', optionsSize);
        this.setState({
            extraTilesVisible: !this.state.extraTilesVisible,
        });
    }
    showExtraTiles() {
        let tileNumbers = []
        tileNumbers = tileNumbers.concat(tileData.safe).concat(tileData.anomaly)
        if (this.state.useProphecyOfKings) {
            tileNumbers = tileNumbers.concat(tileData.pokSafe).concat(tileData.pokAnomaly)
        }

        for (let tileNumberIndex in tileNumbers) {
            if (!this.state.tiles.includes(tileNumbers[tileNumberIndex])) {
                $("#extra-" + tileNumbers[tileNumberIndex]).show();
            } else {
                $("#extra-" + tileNumbers[tileNumberIndex]).hide();
            }
        }
    }
    zoomPlusClick() {
        if (this.state.zoom < 3) {
            this.setState({
                zoom: this.state.zoom + 0.75
            }, this.drawMap );
        }
    }
    zoomMinusClick() {
        if (this.state.zoom > 0.5) {
            this.setState({
                zoom: this.state.zoom - 0.75
            }, this.drawMap );
        }
    }

    /* MAP GENERATION */

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

        // Configuration options for magic numbers
        let mapPadding = 0; // The amount of pad spacing to apply to the map edges
        let mapNumberTilesHeight = 9; // Every TI board is 7 tiles tall
        let mapNumberTilesWidth = 7; // Every TI board is 5.5 tiles wide
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

        /**
         * Calculate offsets of the tiles in relation to Mecatol Rex (the center tile). This information
         * is stored in an array of two value arrays. The two value arrays reperesent the margin left
         * and margin right to offset the tile (based on size of of tiles).
         * @param width The width (in pixels) of a single tile
         * @param height The height (in pixels) of a single tile
         * @returns {(number[]|(number)[])[]} an array of two value arrays.
         */
        function calculateOffsets(width, height) {
            let leftWidth = -width
            let topHeight = -height
            let halfWidth = Math.ceil(leftWidth * 0.5)
            let halfHeight = Math.ceil(topHeight * 0.5)
            let treQuarWidth = Math.ceil(leftWidth * 0.75)

            return [
                [halfWidth, halfHeight],  // Mecatol Rex
                // Inner ring
                [halfWidth, halfHeight + topHeight],
                [halfWidth - treQuarWidth, halfHeight + halfHeight],
                [halfWidth - treQuarWidth, 0],
                [halfWidth, halfHeight - topHeight],
                [halfWidth + treQuarWidth, 0],
                [halfWidth + treQuarWidth, halfHeight + halfHeight],
                // Middle ring
                [halfWidth, halfHeight + topHeight + topHeight],
                [halfWidth - treQuarWidth, halfHeight + topHeight + halfHeight],
                [halfWidth - leftWidth - halfWidth, halfHeight + topHeight],
                [halfWidth - leftWidth - halfWidth, halfHeight],
                [halfWidth - leftWidth - halfWidth, halfHeight - topHeight],
                [halfWidth - treQuarWidth, halfHeight - topHeight - halfHeight],
                [halfWidth, halfHeight - topHeight - topHeight],
                [halfWidth + treQuarWidth, halfHeight - topHeight - halfHeight],
                [halfWidth + leftWidth + halfWidth, halfHeight - topHeight],
                [halfWidth + leftWidth + halfWidth, halfHeight],
                [halfWidth + leftWidth + halfWidth, halfHeight + topHeight],
                [halfWidth + treQuarWidth, halfHeight + topHeight + halfHeight],
                // Outer Ring
                [halfWidth, halfHeight + topHeight + topHeight + topHeight],
                [halfWidth - treQuarWidth, halfHeight + topHeight + topHeight + halfHeight],
                [halfWidth - leftWidth - halfWidth, halfHeight + topHeight + topHeight],
                [halfWidth - treQuarWidth - leftWidth - halfWidth, halfHeight + topHeight + halfHeight],
                [halfWidth - treQuarWidth - leftWidth - halfWidth, halfHeight + halfHeight],
                [halfWidth - treQuarWidth - leftWidth - halfWidth, halfHeight - halfHeight],
                [halfWidth - treQuarWidth - leftWidth - halfWidth, halfHeight - topHeight - halfHeight],
                [halfWidth - leftWidth - halfWidth, halfHeight - topHeight - topHeight],
                [halfWidth - treQuarWidth, halfHeight - topHeight - topHeight - halfHeight],
                [halfWidth, halfHeight - topHeight - topHeight - topHeight],
                [halfWidth + treQuarWidth, halfHeight - topHeight - topHeight - halfHeight],
                [halfWidth + leftWidth + halfWidth, halfHeight - topHeight - topHeight],
                [halfWidth + treQuarWidth + leftWidth + halfWidth, halfHeight - topHeight - halfHeight],
                [halfWidth + treQuarWidth + leftWidth + halfWidth, halfHeight - halfHeight],
                [halfWidth + treQuarWidth + leftWidth + halfWidth, halfHeight + halfHeight],
                [halfWidth + treQuarWidth + leftWidth + halfWidth, halfHeight + topHeight + halfHeight],
                [halfWidth + leftWidth + halfWidth, halfHeight + topHeight + topHeight],
                [halfWidth + treQuarWidth, halfHeight + topHeight + topHeight + halfHeight],
                // Extended Ring
                [halfWidth, halfHeight + topHeight + topHeight + topHeight + topHeight],
                [halfWidth - treQuarWidth, halfHeight + topHeight + topHeight + topHeight + halfHeight],
                [halfWidth - leftWidth - halfWidth, halfHeight + topHeight + topHeight + topHeight],
                [halfWidth - treQuarWidth - leftWidth - halfWidth, halfHeight + topHeight + topHeight + halfHeight],
                [halfWidth - leftWidth - leftWidth - leftWidth, halfHeight + topHeight + topHeight],
                [halfWidth - leftWidth - leftWidth - leftWidth, halfHeight + topHeight],
                [halfWidth - leftWidth - leftWidth - leftWidth, halfHeight],
                [halfWidth - leftWidth - leftWidth - leftWidth, halfHeight - topHeight],
                [halfWidth - leftWidth - leftWidth - leftWidth, halfHeight - topHeight - topHeight],
                [halfWidth - treQuarWidth - leftWidth - halfWidth, halfHeight - topHeight - topHeight - halfHeight],
                [halfWidth - leftWidth - halfWidth, halfHeight - topHeight - topHeight - topHeight],
                [halfWidth - treQuarWidth, halfHeight - topHeight - topHeight - topHeight - halfHeight],
                [halfWidth, halfHeight - topHeight - topHeight - topHeight - topHeight],
                [halfWidth + treQuarWidth, halfHeight - topHeight - topHeight - topHeight - halfHeight],
                [halfWidth + leftWidth + halfWidth, halfHeight - topHeight - topHeight - topHeight],
                [halfWidth + treQuarWidth + leftWidth + halfWidth, halfHeight - topHeight - topHeight - halfHeight],
                [halfWidth + leftWidth + leftWidth + leftWidth, halfHeight - topHeight - topHeight],
                [halfWidth + leftWidth + leftWidth + leftWidth, halfHeight - topHeight],
                [halfWidth + leftWidth + leftWidth + leftWidth, halfHeight],
                [halfWidth + leftWidth + leftWidth + leftWidth, halfHeight + topHeight],
                [halfWidth + leftWidth + leftWidth + leftWidth, halfHeight + topHeight + topHeight],
                [halfWidth + treQuarWidth + leftWidth + halfWidth, halfHeight + topHeight + topHeight + halfHeight],
                [halfWidth + leftWidth + halfWidth, halfHeight + topHeight + topHeight + topHeight],
                [halfWidth + treQuarWidth, halfHeight + topHeight + topHeight + topHeight + halfHeight],
            ]
        }

        // Calculate the offset values for margin left and margin top per tile
        let offsets = calculateOffsets(constraintWidth, constraintHeight)

        // Loop over tiles to assign various values to them
        let currentPlayerNumber = 0;
        for (let tileNumber = 0; tileNumber < offsets.length; tileNumber++) {
            let tile = $("#tile-" + tileNumber);
            let numOverlay = $("#num-" + tileNumber);
            let underlay = $("#underlay-" + tileNumber);
            if (this.state.tiles[tileNumber] >= 0) {
                tile.attr("width", constraintWidth)
                    .attr("height", constraintHeight)
                    .css("margin-left", offsets[tileNumber][0])
                    .css("margin-top", offsets[tileNumber][1])
                    .css("left", (mapNumberTilesWidth / 2) * constraintWidth)
                    .css("top", (mapNumberTilesHeight / 2) * constraintHeight)
                tile.show()
            } else {
                tile.hide()
            }

            numOverlay.css("width", constraintWidth)
                .css("height", constraintHeight)
                .css("line-height", constraintHeight + "px")
                .css("margin-left", offsets[tileNumber][0])
                .css("margin-top", offsets[tileNumber][1])
                .css("left", (mapNumberTilesWidth / 2) * constraintWidth)
                .css("top", (mapNumberTilesHeight / 2) * constraintHeight)
                .css("display", "none")
                .html(this.state.tiles[tileNumber])

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

                if (this.state.tiles[tileNumber] >= 0) {
                    numOverlay.show();
                }
            }
        }

        // Clear any css classes on the map
        this.$tiMap.removeClass("center-map")
        this.$tiMap.removeClass("center-map-vertical")
        this.$tiMap.removeClass("center-map-horizontal")

        // Check to see if we are zoomed, or map is always screen size.
        if (this.state.zoom > 1.0) {
            // Check to see if we should still be horizontally or vertically centered
            if ((constraintWidth * mapNumberTilesWidth) < mapWidth) {
                this.$tiMap.addClass("center-map-horizontal")
            } else if ((constraintHeight * mapNumberTilesHeight) < mapHeight) {
                this.$tiMap.addClass("center-map-vertical")
            } else {
                // Use default map values
            }

            // Center Mecatol Rex on the screen
            $("#tile-0").get(0).scrollIntoView({behavior: "smooth", block:"center", inline: "center"});
        } else {
            // No need to move the map around, just center it on the screen
            this.$tiMap.addClass("center-map")
        }
    }
    
    
    // Drag and drop related functions, modified from https://www.w3schools.com/html/html5_draganddrop.asp
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
                    
                <OptionsControls visible={this.state.isOptionsMenuShowing} isMobileView={this.state.isMobileView} toggleOptions={this.toggleOptionsMenu} />
                
                <div id="mainContent" className="justify-content-center align-items-center">
                    <MainOverview visible={this.state.overviewVisible} />
                    
                    <MainMap visible={this.state.mapVisible} overlayVisible={this.state.overlayVisible}
                             tiles={this.state.tiles} useProphecyOfKings={this.state.useProphecyOfKings}
                             drag={this.drag} drop={this.drop} dragEnter={this.dragEnter} dragLeave={this.dragLeave} allowDrop={this.allowDrop}/>
                    
                    {/* TODO can these controls be moved into MainMap? */}
                    <MapControls visible={this.state.mapControlsVisible} toggleOverlay={this.toggleOverlay}
                                 toggleMoreInfo={this.toggleMoreInfo} toggleExtraTiles={this.toggleExtraTiles}
                                 zoomPlus={this.zoomPlusClick} zoomMinus={this.zoomMinusClick} />
                </div>
                
                <ExtraTiles visible={this.state.extraTilesVisible} overlayVisible={this.state.overlayVisible}
                            useProphecyOfKings={this.state.useProphecyOfKings}
                            updateTiles={this.updateTiles}
                            drag={this.drag} drop={this.drop} dragEnter={this.dragEnter} dragLeave={this.dragLeave} allowDrop={this.allowDrop}/>
                
                <MoreInfo visible={this.state.moreInfoVisible} tiles={this.state.tiles} useProphecyOfKings={this.state.useProphecyOfKings}/>
                
                <MapOptions visible={this.state.isOptionsMenuShowing}  useProphecyOfKings={this.state.useProphecyOfKings}
                            currentPlayerNames={this.state.currentPlayerNames} currentRaces={this.state.currentRaces}
                            toggleProphecyOfKings={this.toggleProphecyOfKings} updateTiles={this.updateTiles}
                            showExtraTiles={this.showExtraTiles} />
            
                <BootstrapScripts />
            </div>
        );
    }
}
export default App;
