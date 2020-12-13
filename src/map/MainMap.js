import React from "react";
import boardData from "../data/boardData.json";

class MainMap extends React.Component {
    render() {
        const mapTiles = []

        // Loop over 0 to pok board size, and add in the tile objects to be displayed
        for (let tileNumber = 0; tileNumber < boardData.pokSize; tileNumber++) {
            let systemNumber = this.props.tiles[tileNumber]

            // Handle hyperlanes differently. Pull out their tile number, separate from their rotation angle
            if (isNaN(Number(systemNumber)) && systemNumber !== undefined) {
                systemNumber = this.props.tiles[tileNumber].split("-")[0]
            }

            // Add the tile to the array of tiles to be displayed, if they are valid tiles
            if (systemNumber !== -1 && systemNumber !== undefined) {
                mapTiles.push(
                    <div key={"tile-wrapper-" + tileNumber} className="tile-wrapper">
                        <span id={"rotate-left-" + tileNumber} className={"d-none"}></span>
                        <span id={"lock-" + tileNumber} className={"d-none"}></span>
                        <span id={"rotate-right-" + tileNumber} className={"d-none"}></span>
                        <span id={"number-" + tileNumber} className={"overlay"}>{tileNumber}</span>
                        <img id={"tile-" + tileNumber}
                             className="tile"
                             src={window.location.origin + window.location.pathname + "/tiles/ST_" + systemNumber + ".png"}
                             draggable="true" onDragStart={this.props.drag} onDrop={this.props.drop} onDragOver={this.props.allowDrop} onDragEnter={this.props.dragEnter} onDragLeave={this.props.dragLeave}
                             alt={"Twilight Imperium 4 Tile Number " + tileNumber + " and System Number " + systemNumber + "."}
                        />
                        <svg id={"underlay-" + tileNumber} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.35 311.21" className="underlay" fill="currentColor">
                            <polygon points="269.51 0 89.84 0 0 155.6 89.84 311.2 269.51 311.2 359.35 155.6 269.51 0" />
                        </svg>
                        <span id={"exclude-" + tileNumber} className={"d-none"}></span>
                        <span id={"swap-" + tileNumber} className={"d-none"}></span>
                        <span id={"include-" + tileNumber} className={"d-none"}></span>
                    </div>
                )
            }
        }
        
        return (
            <div id="map" className={"map center-map " + (this.props.visible ? "" : "d-none")}>
                {mapTiles}
            </div>
        );
    }
}
export default MainMap;