import React from "react";
import {Dash, InfoCircle, Plus} from "react-bootstrap-icons";
import ReactTooltip from 'react-tooltip';

class MoreInfo extends React.Component {
    
    render() {
        return (
            <div id={"map-controls"}>
                <div id="zoomButtons" className={"btn-group-justified btn-group-sm btn-group-vertical" + (this.props.visible ? "" : " d-none")}>
                    <button className="btn btn-primary" id="zoomPlus" onClick={this.props.zoomPlus}>
                        <Plus className="icon" />
                    </button>
                    <button className="btn btn-primary" id="zoomMinus" onClick={this.props.zoomMinus}>
                        <Dash className="icon" />
                    </button>
                </div>
    
                <div id="hexOverlay" className={"btn-group-justified btn-group-sm" + (this.props.visible ? "" : " d-none")} onClick={this.props.toggleOverlay}>
                    <button className="btn btn-primary" id="showHexOverlay" data-tip="Toggle Tile Number Overlay">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.78 169.62" className="icon" fill="currentColor">
                            <polygon className="overlay-cls-1" points="148.03 4 51.81 4 4.61 86.92 52.02 169.84 148.03 169.84 195.03 86.92 148.03 4"/>
                            <text className="overlay-cls-2" transform="translate(27.09 132.03)">18</text>
                        </svg>
                    </button>
                    <ReactTooltip place={"left"} effect={"solid"}/>
                </div>
    
                <div id="extraTilesButton" className={"btn-group-justified btn-group-sm" + (this.props.visible ? "" : " d-none")} onClick={this.props.toggleExtraTiles}>
                    <button className="btn btn-primary" id="showExtraTiles" data-tip="Show Unused Tiles" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.35 311.21" className="icon" fill="currentColor">
                            <polygon points="269.51 0 89.84 0 0 155.6 89.84 311.2 269.51 311.2 359.35 155.6 269.51 0" />
                        </svg>
                    </button>
                </div>

                <div id="moreInfoButton" className={"btn-group-justified btn-group-sm" + (this.props.visible ? "" : " d-none")} onClick={this.props.toggleMoreInfo}>
                    <button className="btn btn-primary" id="showMoreInfo" data-tip="Extra Map Information">
                        <InfoCircle className="icon" />
                    </button>
                </div>
            </div>
        );
    }
}
export default MoreInfo;