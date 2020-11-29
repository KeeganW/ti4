/**
 * Draws a map to the screen given the current tile string.
 */
function drawMap() {
    // Check to see if there are any tiles to render currently
    if (currentTiles.length <= 0) {
        overview.show();
        tiMap.hide();
        return;
    } else {
        overview.hide();
        tiMap.show();
        zoomButtons.show();
        tileStringInput.text(JSON.stringify(currentTiles))
    }

    // Configuration options for magic numbers
    let mapPadding = 0; // The amount of pad spacing to apply to the map edges
    let mapNumberTilesHeight = 7; // Every TI board is 7 tiles tall
    let mapNumberTilesWidth = 5.5; // Every TI board is 5.5 tiles wide
    let mapTileWidth = 364; // The width of every tile in the static folder
    let mapTileHeight = 317;

    // Get extra information about the map
    let mapWidth = mapContainer.width() - (2 * mapPadding); // Put padding on top/bottom of map
    let mapHeight = mapContainer.height() - (2 * mapPadding); // Put padding on either side of map
    let tileWidth = Math.floor(mapWidth / mapNumberTilesWidth)
    let tileHeight = Math.floor(mapHeight / mapNumberTilesHeight)

    // Determine which will be our constraining factor, width or height?
    let constraintWidth = Math.min(zoom * Math.min(tileWidth, Math.floor((mapTileWidth / mapTileHeight) * tileHeight)), mapTileWidth) // Prohibit over-zooming
    let constraintHeight = Math.floor((mapTileHeight / mapTileWidth) * constraintWidth)

    // Configure the map container to be this size
    tiMap.css("width", constraintWidth * mapNumberTilesWidth)
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
            [halfWidth + treQuarWidth, halfHeight + topHeight + topHeight + halfHeight]
        ]
    }

    // Calculate the offset values for margin left and margin top per tile
    let offsets = calculateOffsets(constraintWidth, constraintHeight)

    // Loop over tiles to assign various values to them
    for (let tileNumber = 0; tileNumber < offsets.length; tileNumber++) {
        let tile = $("#tile-" + tileNumber);
        tile.attr("src", "/static/img/tiles/ST_" + currentTiles[tileNumber] + ".png")
            .attr("width", constraintWidth)
            .attr("height", constraintHeight)
            .css("margin-left", offsets[tileNumber][0])
            .css("margin-top", offsets[tileNumber][1])
            .css("left", (mapNumberTilesWidth / 2) * constraintWidth)
            .css("top", (mapNumberTilesHeight / 2) * constraintHeight)
            .css("display", "block")
    }

    // Clear any css classes on the map
    tiMap.removeClass("center-map")
    tiMap.removeClass("center-map-vertical")
    tiMap.removeClass("center-map-horizontal")

    // Check to see if we are zoomed, or map is always screen size.
    if (zoom > 1.0) {
        // Check to see if we should still be horizontally or vertically centered
        if ((constraintWidth * mapNumberTilesWidth) < mapWidth) {
            tiMap.addClass("center-map-horizontal")
        } else if ((constraintHeight * mapNumberTilesHeight) < mapHeight) {
            tiMap.addClass("center-map-vertical")
        } else {
            // Use default map values
        }

        // Center Mecatol Rex on the screen
        $("#tile-0").get(0).scrollIntoView({behavior: "smooth", block:"center", inline: "center"});
    } else {
        // No need to move the map around, just center it on the screen
        tiMap.addClass("center-map")
    }
}

/**
 * Attempts to validate a given tile string, by cleaning it up and turning it into an object.
 * @returns {number[]} An array of numbers representing tiles.
 */
function validateTiles(tiles) {
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

/**
 * Given a set of tiles, set them as the new map tiles and attempt to draw the map.
 * @param tiles An array of numbers, representing TI4 hex numbers.
 */
function renderTiles(tiles) {
    // Set the new map tiles and draw them
    currentTiles = tiles;
    drawMap();

    // Add the tile string to various places
    window.history.pushState({}, null, '/?tiles=[' + currentTiles.toString() + ']');
}

// On zoom in/out, change zoom value
zoomPlus.click(function () {
    if (zoom < 3) {
        zoom += 0.75;
        drawMap();
    }
})
zoomMinus.click(function () {
    if (zoom > 1) {
        zoom -= 0.75;
        drawMap();
    }
})

// Whenever we go back, grab the tiles from the url bar, and set them as the current tiles
window.onpopstate = function(event) {
    let url = new URL(document.location);
    let tiles = url.searchParams.get("tiles");

    // Make sure the tiles parameter is set
    if (tiles != null) {
        currentTiles = validateTiles(tiles);
        drawMap();
    } else {
        currentTiles = [];
        drawMap();
    }
};