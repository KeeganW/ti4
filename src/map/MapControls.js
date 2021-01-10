import React from "react";
import {CardImage, ClipboardPlus, Dash, InfoCircle, Plus, Share} from "react-bootstrap-icons";
import SetPlayerNameModal from "../options/SetPlayerNameModal";
import ShareMapModal from "./ShareMapModal";

class MapControls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shareMapHelp: false
        }

        this.toggleShareMapHelp = this.toggleShareMapHelp.bind(this);
    }

    toggleShareMapHelp(event) {
        this.setState({
            shareMapHelp: !this.state.shareMapHelp
        })
    }

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
                    <button className={"btn btn-primary" + (this.props.overlayVisible ? " active": "")} id="showHexOverlay" data-tip="Tile Number Overlay" data-place="left" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.78 169.62" className="icon" fill="currentColor">
                            <polygon className="overlay-cls-1" points="148.03 4 51.81 4 4.61 86.92 52.02 169.84 148.03 169.84 195.03 86.92 148.03 4"/>
                            <text className="overlay-cls-2" transform="translate(27.09 132.03)">18</text>
                        </svg>
                    </button>
                </div>
    
                <div id="extraTilesButton" className={"btn-group-justified btn-group-sm" + (this.props.visible ? "" : " d-none")} onClick={this.props.toggleExtraTiles}>
                    <button className={"btn btn-primary" + (this.props.extraTilesVisible ? " active": "")} id="showExtraTiles" data-tip="Unused Tiles" data-place="left" >
                        <svg id="showExtraTilesSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.35 311.21" className="icon" fill="currentColor">
                            <polygon id="showExtraTilesPoly" points="269.51 0 89.84 0 0 155.6 89.84 311.2 269.51 311.2 359.35 155.6 269.51 0" />
                        </svg>
                    </button>
                </div>

                <div id="moreInfoButton" className={"btn-group-justified btn-group-sm" + (this.props.visible ? "" : " d-none")} onClick={this.props.toggleMoreInfo}>
                    <button className={"btn btn-primary" + (this.props.moreInfoVisible ? " active": "")} id="showMoreInfo" data-tip="Assets Adjacent to Home" data-place="left" >
                        <InfoCircle id="showMoreInfoSvg" className="icon" />
                    </button>
                </div>

                <div id="shareMapButton" className={"btn-group-justified btn-group-sm" + (this.props.visible ? "" : " d-none")} onClick={this.toggleShareMapHelp}>
                    <button className={"btn btn-primary"} id="shareMapInfo" data-tip="Share This Map" data-place="left" >
                        <Share id="shareMapSvg" className="icon" />
                    </button>
                </div>

                <ShareMapModal visible={this.state.shareMapHelp} hideModal={this.toggleShareMapHelp}
                               tiles={this.props.tiles} map={this.props.map}
                />



                <div id="toggleBackgroundButton" className={"btn-group-justified btn-group-sm"} onClick={this.props.toggleBackground}>
                    <button className={"btn btn-primary"} id="toggleBackground" data-tip="Toggle Background Animation">
                        <CardImage id="toggleBackgroundSvg" className="icon" />
                    </button>
                </div>
            </div>
        );
    }
}
export default MapControls;