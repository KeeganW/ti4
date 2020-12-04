import React from "react";
import $ from "jquery";

class MoreInfo extends React.Component {
    constructor(props) {
        super(props);
        this.underlayStyle = {
            width: "111px",
            height: "97px",
            position: "absolute",
            top: "0",
            left: "0",
        }
        this.tileStyle = {
            display: "none",
            margin: "3px",
            position: "relative",
        }
    }
    
    render() {
        const tileNumbers = Array.from({length: 32}, (v, i) => (i + 19));
        const tileObjects = []
        for (const [index, value] of tileNumbers.entries()) {
            tileObjects.push(
                <div className="tile-wrapper">
                    <span id={"num-" + value} className={"overlay" + (this.props.overlayVisible ? "" : " d-none")}>{value}</span>
                    <img id={"extra-" + value}
                         width="105px"
                         height="91px"
                         className="tile"
                         src={window.location.origin + "/tiles/ST_" + value + ".png"}
                         draggable="true" onDragStart={this.props.drag} onDrop={this.props.drop}
                         onDragOver={this.props.allowDrop} onDragEnter={this.props.dragEnter}
                         onDragLeave={this.props.dragLeave}
                         alt=""
                         style={this.tileStyle}
                    />
                    <svg id={"extra-underlay-" + value} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.35 311.21" className="underlay" fill="currentColor"
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
                    {/*{% for index in range(19,51) %}*/}
                    {/*<div className="tile-wrapper" style="position: relative">*/}
                    {/*    /!*<span id="extra-num-{{ index }}" class="overlay" style="width: 105px; height: 91px; line-height: 91px; display: none;">index</span>*!/*/}
                    {/*    <img id="extra-tile-{{ index }}"*/}
                    {/*         width="105px"*/}
                    {/*         height="91px"*/}
                    {/*         className="tile"*/}
                    {/*         src="/static/img/tiles/ST_{{ index }}.png"*/}
                    {/*         draggable="true" onDragStart="drag(event)" onDrop="drop(event)"*/}
                    {/*         onDragOver="allowDrop(event)" onDragEnter="dragEnter(event)"*/}
                    {/*         onDragLeave="dragLeave(event)"*/}
                    {/*         alt=""*/}
                    {/*         // style="display: none;margin:3px;position:relative;"*/}
                    {/*    />*/}
                    {/*    <svg id="extra-underlay-{{ index }}" className="underlay"*/}
                    {/*         style="width: 111px; height: 97px;position:absolute;top:0;left:0;">*/}
                    {/*        <use xlink:href="#hex"/>*/}
                    {/*    </svg>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}
export default MoreInfo;