import React from "react";
import tileData from "../data/tileData.json";

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
            display: "none",
            margin: "5px",
            position: "relative",
        }
    }
    
    render() {
        let tileNumbers = []
        tileNumbers = tileNumbers.concat(tileData.safe).concat(tileData.anomaly)
        if (this.props.useProphecyOfKings) {
            tileNumbers = tileNumbers.concat(tileData.pokSafe).concat(tileData.pokAnomaly)
        }

        const tileObjects = []
        for (const [index, value] of tileNumbers.entries()) {
            let tileNumber = value
            if (isNaN(Number(tileNumber)) && tileNumber !== undefined) {
                tileNumber = value.split("-")[0]
            }
            tileObjects.push(
                <div className="tile-wrapper">
                    {/*<span id={"num-" + tileNumber} className={"overlay" + (this.props.overlayVisible ? "" : " d-none")}>{tileNumber}</span>*/}
                    <img id={"extra-" + tileNumber}
                         width="200px"
                         height="175px"
                         className="tile"
                         src={window.location.origin + window.location.pathname + "/tiles/ST_" + tileNumber + ".png"}
                         draggable="true" onDragStart={this.props.drag} onDrop={this.props.drop}
                         onDragOver={this.props.allowDrop} onDragEnter={this.props.dragEnter}
                         onDragLeave={this.props.dragLeave}
                         alt=""
                         style={this.tileStyle}
                    />
                    <svg id={"extra-underlay-" + tileNumber} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.35 311.21" className="underlay" fill="currentColor"
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
                <div id="extraTiles" className="">
                    {tileObjects}
                </div>
            </div>
        );
    }
}
export default ExtraTiles;