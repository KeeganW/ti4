import React from "react";
import { Button, Form, Collapse } from "react-bootstrap";
import tileData, {EXPANSIONS} from "../data/tileData";
import { Tooltip as ReactTooltip } from 'react-tooltip'

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

        const expansionCheck = (id) => (!tileData.pok.includes(id) || this.props.includedExpansions[EXPANSIONS.POK]) && (!tileData.uncharted.includes(id) || this.props.includedExpansions[EXPANSIONS.UnS]) && (!tileData.sun.includes(id) || this.props.includedExpansions[EXPANSIONS.AS]) && (!tileData.asyncLanes.includes(id) || this.props.includedExpansions[EXPANSIONS.Async])

        systemNumbers = systemNumbers.concat(tileData.blue).concat(tileData.red).filter(expansionCheck);

        // console.log(systemNumbers)

        if (this.props.customMapBuilding) {
            systemNumbers = [-1].concat(
                systemNumbers.concat(tileData.hyperlanes).filter(expansionCheck)
            );
        }

        function parseSystemNumber(systemNumber) {
            if (typeof systemNumber == "number") {
                return [systemNumber, ""];
            } else {
                const match = systemNumber.match(/((?:er)?\d+)(.*)/);
                if (match === null){
                    return [99999, match]
                } else {
                    const [, numberPart, stringPart] = match;
                    if (systemNumber.includes("hyp")){
                        return [99999, match]
                    }
                    return [numberPart, stringPart];
                }
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

        const wrap = (s) => s.replace(/(?![^\n]{1,24}$)([^\n]{1,24})\s/g, '$1\n');

        const tileObjects = []
        for (let systemNumber of systemNumbers) {

            // Handle hyperlanes differently. Pull out their tile number, separate from their rotation angle
            if (isNaN(Number(systemNumber)) && systemNumber !== undefined) {
                systemNumber = systemNumber.split("-")[0]
            }

            if (tileData.all[systemNumber] !== undefined && 
                tileData.all[systemNumber].planets.length > 0 &&
                tileData.all[systemNumber].planets[0].legendary
            ) {
                tileObjects.push(
                    <ReactTooltip style={{zIndex: 1, overflow: "visible"}} anchorSelect={`#${"extra-" + systemNumber}`} place="right">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {wrap(tileData.all[systemNumber].planets[0].ability ?? "").split("\n").map(line => <span>{line}</span>)}
                        </div>
                    </ReactTooltip>
                )
            }
            tileObjects.push(
                <div key={"extra-tile-wrapper-" + systemNumber} className="tile-wrapper">
                    <span id={"extra-number-" + systemNumber} className={"overlay" + (this.props.overlayVisible ? "" : " d-none")} style={this.overlayStyle}>{systemNumber === -1 ? "Empty" : systemNumber}</span>
                    <img id={"extra-" + systemNumber}
                        width="200px"
                        height="175px"
                        className="tile"
                        src={window.location.origin + window.location.pathname + "/tiles/ST_" + systemNumber + ".webp"}
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

                <Form.Group className="mt-3 text-center" controlId="showAllExtraTiles">
                    <Form.Check inline name="showAllExtraTiles" type="checkbox" checked={this.props.showAllExtraTiles} onChange={this.props.toggleShowAllExtraTiles} label="Show All Tiles" />
                </Form.Group>

                <Form.Group className="mt-3 text-center" controlId="customMapBuilding">
                    <Form.Check inline name="customMapBuilding" type="checkbox" checked={this.props.customMapBuilding} onChange={this.props.toggleCustomMapBuilding} label="Custom Map Building" />
                </Form.Group>
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