import React from "react";
import boardData from "./boardData.json";

class MoreInfo extends React.Component {
    render() {
        const tileNumbers = Array.from({length: boardData.pokSize}, (_, i) => i);
        const tileObjects = []
        for (const [index, value] of tileNumbers.entries()) {
            tileObjects.push(
                <div className="tile-wrapper">
                    <span id={"num-" + index} className={"overlay"}>{index}</span>
                    <img id={"tile-" + index}
                         className="tile"
                         src={window.location.origin + window.location.pathname + "/tiles/ST_" + this.props.tiles[index] + ".png"}
                         draggable="true" onDragStart={this.props.drag} onDrop={this.props.drop}
                         onDragOver={this.props.allowDrop} onDragEnter={this.props.dragEnter}
                         onDragLeave={this.props.dragLeave}
                         alt={"Twilight Imperium 4 Tile Number " + index}
                    />
                    <svg id={"underlay-" + index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.35 311.21" className="underlay" fill="currentColor">
                        <polygon points="269.51 0 89.84 0 0 155.6 89.84 311.2 269.51 311.2 359.35 155.6 269.51 0" />
                    </svg>
                </div>
            )
        }
        
        return (
            <div id="tiMap" className={"map center-map " + (this.props.visible ? "" : "d-none")}>
                {tileObjects}
            </div>
        );
    }
}
export default MoreInfo;