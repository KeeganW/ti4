import React from "react";
import './MainMap.css';
import boardData from "../data/boardData.json";
import { Arrow90degLeft, Arrow90degRight, ArrowRepeat, Check, Lock, X } from "react-bootstrap-icons";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import $ from "jquery";
import tileData from "../data/tileData";

class MainMap extends React.Component {
    constructor(props) {
        super(props);

        this.toggleControls = this.toggleControls.bind(this);
        this.getRotationDegrees = this.getRotationDegrees.bind(this);
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     ReactTooltip.rebuild();
    // }

    toggleControls(event) {
        const splitArray = event.target.id.split("-")
        const targetName = splitArray[0];
        const tileNumber = Number(splitArray[splitArray.length - 1]);
        const systemNumber = this.props.getTileNumber(this.props.tiles[tileNumber]);

        if (targetName === "tile") {
            let newTileClicked = -1;

            // Ensure that the tile is a different tile, and it is not an empty tile
            if (this.props.tileClicked !== tileNumber && systemNumber !== -1 && systemNumber !== 0) {
                newTileClicked = tileNumber;
            }
            this.props.updateTileClicked(newTileClicked);
        } else if (targetName === "rotate") {
            const rotationDirection = splitArray[1];
            let tile = $("#tile-" + tileNumber);
            let degrees = this.getRotationDegrees(tile);

            if (rotationDirection === "left") {
                degrees -= 60;
            } else if (rotationDirection === "right") {
                degrees += 60;
            }
            if (degrees < 0) degrees += 360
            let rotationAngle = (degrees / 60) % 6

            let newTiles = [...this.props.tiles];
            newTiles[tileNumber] = this.props.getTileNumber(newTiles[tileNumber]) + "-" + rotationAngle;
            this.props.updateTiles(newTiles)

            tile.css({ 'transform': 'rotate(' + degrees + 'deg)' });
        } else if (targetName === "swap") {
            if (this.props.unusedTiles.length > 0) {
                // Get new tile to update
                const randomUnusedTile = this.props.unusedTiles[Math.floor(Math.random() * this.props.unusedTiles.length)];

                // Update tiles
                let newTiles = [...this.props.tiles];
                newTiles[tileNumber] = randomUnusedTile;
                this.props.updateTiles(newTiles)
            }

        } else if (targetName === "lock") {
            // Get tile location in locked tiles list
            let lockedIndex = this.props.lockedTiles.indexOf(systemNumber);
            let newLockedTiles = this.props.lockedTiles;

            // Either remove it or add it, depending on if it is there already or not
            if (lockedIndex >= 0) {
                newLockedTiles.splice(lockedIndex, 1);
            } else {
                newLockedTiles.push(systemNumber);
            }

            this.props.updateLockedTiles(newLockedTiles)
        } else if (targetName === "exclude") {
            // Get tile location in locked tiles list
            let excludedIndex = this.props.excludedTiles.indexOf(systemNumber);
            let newExcludedTiles = this.props.excludedTiles;
            let newIncludedTiles = this.props.includedTiles;

            // Either remove it or add it, depending on if it is there already or not
            if (excludedIndex >= 0) {
                newExcludedTiles.splice(excludedIndex, 1);
            } else {
                newExcludedTiles.push(systemNumber);
                // Check if is included. If so, remove it
                let includedIndex = this.props.includedTiles.indexOf(systemNumber);
                if (includedIndex >= 0) {
                    newIncludedTiles.splice(includedIndex, 1);
                }
            }

            // Update the list
            this.props.updateInExcludedTiles(newIncludedTiles, newExcludedTiles)
        } else if (targetName === "include") {
            // Get tile location in locked tiles list
            let includedIndex = this.props.includedTiles.indexOf(systemNumber);
            let newIncludedTiles = this.props.includedTiles;
            let newExcludedTiles = this.props.excludedTiles;

            // Either remove it or add it, depending on if it is there already or not
            if (includedIndex >= 0) {
                newIncludedTiles.splice(includedIndex, 1);
            } else {
                newIncludedTiles.push(systemNumber);
                // Check if is excluded. If so, remove it
                let excludedIndex = this.props.excludedTiles.indexOf(systemNumber);
                if (excludedIndex >= 0) {
                    newExcludedTiles.splice(excludedIndex, 1);
                }
            }

            // Update the list
            this.props.updateInExcludedTiles(newIncludedTiles, newExcludedTiles)
        }
    }

    getRotationDegrees(obj) {
        let matrix = obj.css("-webkit-transform") ||
            obj.css("-moz-transform") ||
            obj.css("-ms-transform") ||
            obj.css("-o-transform") ||
            obj.css("transform");
        let angle = 0;
        if (matrix !== 'none') {
            let values = matrix.split('(')[1].split(')')[0].split(',');
            let a = values[0];
            let b = values[1];
            angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        }

        if (angle < 0) angle += 360;
        return angle;
    }

    render() {
        const mapTiles = []
        const style = { position: "absolute" }
        const hidden = { display: "none" }

        // Static Width (Plain Regex)
        // https://stackoverflow.com/questions/14484787/wrap-text-in-javascript
        const wrap = (s) => s.replace(/(?![^\n]{1,32}$)([^\n]{1,32})\s/g, '$1\n');

        // Loop over 0 to pok board size, and add in the tile objects to be displayed
        for (let tileNumber = 0; tileNumber < boardData.pokSize; tileNumber++) {
            let systemNumber = this.props.getTileNumber(this.props.tiles[tileNumber])

            // Add the tile to the array of tiles to be displayed, if they are valid tiles
            if (systemNumber !== undefined) {
                if (tileData.all[systemNumber] !== undefined && 
                    tileData.all[systemNumber].planets.length > 0 &&
                    tileData.all[systemNumber].planets[0].legendary
                ) {
                    mapTiles.push(
                        <ReactTooltip style={{zIndex: 1}} anchorSelect={`#${"tile-wrapper-" + tileNumber}`} place="top">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {wrap(tileData.all[systemNumber].planets[0].ability ?? "").split("\n").map(line => <span>{line}</span>)}
                            </div>
                        </ReactTooltip>
                    )
                }
                mapTiles.push(
                    <div key={"tile-wrapper-" + tileNumber}
                        id={"tile-wrapper-" + tileNumber}
                        className="tile-wrapper"
                        style={style}
                        onClick={this.toggleControls}
                    // data-place="left"
                    >
                        <button id={"rotate-left-" + tileNumber} className={"btn btn-primary tile-control rotate-left" + (this.props.tileClicked === tileNumber ? "" : " d-none")} data-tip="Rotate tile left" data-place="top" >
                            <Arrow90degLeft id={"rotate-left-svg-" + tileNumber} className={"icon"} />
                        </button>
                        <button id={"lock-" + tileNumber} className={"btn btn-primary tile-control lock" + (this.props.tileClicked === tileNumber ? "" : " d-none") + (this.props.lockedTiles.indexOf(systemNumber) >= 0 ? " active" : "")} data-tip="Keep tile here on generation" >
                            <Lock id={"lock-svg-" + tileNumber} className={"icon"} />
                        </button>
                        <button id={"rotate-right-" + tileNumber} className={"btn btn-primary tile-control rotate-right" + (this.props.tileClicked === tileNumber ? "" : " d-none")} data-tip={"Rotate tile right"} >
                            <Arrow90degRight id={"rotate-right-svg-" + tileNumber} className={"icon"} />
                        </button>
                        <span id={"number-" + tileNumber} className={"overlay"} style={hidden}>{tileNumber}</span>
                        <span id={"wormhole-" + tileNumber} className={"overlay"} style={hidden}></span>
                        <img id={"tile-" + tileNumber}
                            className="tile"
                            src={window.location.origin + window.location.pathname + "/tiles/ST_" + systemNumber + ".webp"}
                            draggable="true" onDragStart={this.props.drag} onDrop={this.props.drop} onDragOver={this.props.allowDrop} onDragEnter={this.props.dragEnter} onDragLeave={this.props.dragLeave} onTouchMove={this.props.touchMove} onTouchEnd={this.props.touchEnd}
                            alt={"Twilight Imperium 4 Tile Number " + tileNumber + " and System Number " + systemNumber + "."}
                        />
                        <svg id={"underlay-" + tileNumber} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.35 311.21" className="underlay" fill="currentColor">
                            <polygon points="269.51 0 89.84 0 0 155.6 89.84 311.2 269.51 311.2 359.35 155.6 269.51 0" />
                        </svg>
                        <button id={"exclude-" + tileNumber} className={"btn btn-primary tile-control exclude" + (this.props.tileClicked === tileNumber ? "" : " d-none") + (this.props.excludedTiles.indexOf(systemNumber) >= 0 ? " active" : "")} data-tip={"Exclude from generation"} data-place="bottom" >
                            <X id={"exclude-svg-" + tileNumber} className={"icon"} />
                        </button>
                        <button id={"swap-" + tileNumber} className={"btn btn-primary tile-control swap" + (this.props.tileClicked === tileNumber ? "" : " d-none")} data-tip={"Swap with an extra tile"} data-place="bottom" >
                            <ArrowRepeat id={"swap-svg-" + tileNumber} className={"icon"} />
                        </button>
                        <button id={"include-" + tileNumber} className={"btn btn-primary tile-control include" + (this.props.tileClicked === tileNumber ? "" : " d-none") + (this.props.includedTiles.indexOf(systemNumber) >= 0 ? " active" : "")} data-tip={"Always include in generation"} data-place="bottom" >
                            <Check id={"include-svg-" + tileNumber} className={"icon"} />
                        </button>
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