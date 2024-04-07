import React from "react";
import tileData from "../data/tileData";

class ExtraTiles extends React.Component {
    constructor(props) {
        super(props);
        this.underlayStyle = {
            width: "210px",
            height: "185px",
            position: "absolute",
            top: "0",
            left: "0",
        }
        this.tileStyle = {
            width: "200px",
            height: "175px",
            display: "none",
            margin: "5px",
            position: "relative",
        }
        this.overlayStyle = {
            height: "175px",
            marginLeft: "92px",
            top: "85px",
            display: "none",
        }
    }
    
    render() {
        let systemNumbers = [];
        // systemNumbers = systemNumbers.concat(tileData.blue).concat(tileData.red);
        // if (this.props.useProphecyOfKings || this.props.showAllExtraTiles || this.props.customMapBuilding) {
        //     systemNumbers = systemNumbers.concat(tileData.pokBlue).concat(tileData.pokRed);
        // }

        const expansionCheck = ({ useProphecyOfKings = false, useUnchartedSpace = false } = {}) => (
            (id) => (!tileData.pok.includes(id) || useProphecyOfKings) && (!tileData.uncharted.includes(id) || useUnchartedSpace)
        )

        systemNumbers = systemNumbers.concat(tileData.blue).concat(tileData.red).filter(expansionCheck(
            { useProphecyOfKings: this.props.useProphecyOfKings, useUnchartedSpace: true }
        ));

        // console.log(systemNumbers)

        if (this.props.customMapBuilding) {
            systemNumbers = [-1].concat(systemNumbers.concat(tileData.hyperlanes));
        }

        function parseSystemNumber(systemNumber) {
            if (typeof systemNumber == "number") {
                return [systemNumber, ""];
            } else {
                const [, numberPart, stringPart] = systemNumber.match(/(\d+)(.*)/);
                return [numberPart, stringPart];
            }
        }

        function compareSystemNumbers(a, b) {
            const [numberA, stringA] = parseSystemNumber(a);
            const [numberB, stringB] = parseSystemNumber(b);
            if (numberA === numberB) {
                if (stringA < stringB) {
                    return -1;
                }
                if (stringA === stringB) {
                    return 0;
                }
                return 1;
            }
            return numberA - numberB;
        }

        systemNumbers.sort(compareSystemNumbers);

        const tileObjects = []
        for (let systemNumber of systemNumbers) {

            // Handle hyperlanes differently. Pull out their tile number, separate from their rotation angle
            if (isNaN(Number(systemNumber)) && systemNumber !== undefined) {
                systemNumber = systemNumber.split("-")[0]
            }

            tileObjects.push(
                <div key={"extra-tile-wrapper-" + systemNumber} className="tile-wrapper">
                    <span id={"extra-number-" + systemNumber} className={"overlay" + (this.props.overlayVisible ? "" : " d-none")} style={this.overlayStyle}>{systemNumber === -1 ? "Empty" : systemNumber}</span>
                    <img id={"extra-" + systemNumber}
                         width="200px"
                         height="175px"
                         className="tile"
                         src={window.location.origin + window.location.pathname + "/tiles/ST_" + systemNumber + ".png"}
                         draggable="true" onDragStart={this.props.drag} onDrop={this.props.drop}
                         onDragOver={this.props.allowDrop} onDragEnter={this.props.dragEnter}
                         onDragLeave={this.props.dragLeave}
                         alt=""
                         style={this.tileStyle}
                    />
                    <svg id={"extra-underlay-" + systemNumber} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.35 311.21" className="underlay" fill="currentColor"
                         style={this.underlayStyle}>
                        <polygon points="269.51 0 89.84 0 0 155.6 89.84 311.2 269.51 311.2 359.35 155.6 269.51 0" />
                    </svg>
                </div>
            )
        }
    
        return (
            <div id="extraTilesContainer" className={this.props.visible ? "" : "d-none"}>
                <div className="title">
                    <h4 id="extraTitle" className="text-center">Extra Tiles</h4>
                </div>

                <div className="custom-control custom-checkbox mt-3 ml-3 mr-3 text-center">
                    <input type="checkbox" className="custom-control-input" id="showAllExtraTiles" name="showAllExtraTiles" checked={this.props.showAllExtraTiles} onChange={this.props.toggleShowAllExtraTiles} />
                    <label className="custom-control-label" htmlFor="showAllExtraTiles">Show All Tiles</label>
                </div>

                <div className="custom-control custom-checkbox mt-3 ml-3 mr-3 text-center">
                    <input type="checkbox" className="custom-control-input" id="customMapBuilding" name="customMapBuilding" checked={this.props.customMapBuilding} onChange={this.props.toggleCustomMapBuilding} />
                    <label className="custom-control-label" htmlFor="customMapBuilding">Custom Map Building</label>
                </div>
                <div className={"mt-3 ml-3 mr-3 text-center " + (this.props.customMapBuilding ? "" : "d-none")}>
                    <button className="btn btn-primary" id="unsetAllTilesButton" onClick={this.props.unsetAllTiles} >
                        Unset All Tiles
                    </button>
                </div>

                <div id="extraTiles" className="">
                    {tileObjects}
                </div>
            </div>
        );
    }
}
export default ExtraTiles;