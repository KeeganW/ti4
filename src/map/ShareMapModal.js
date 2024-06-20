import React from "react";
import Modal from "react-bootstrap/Modal";
import $ from 'jquery';
import {exportComponentAsPNG} from "react-component-export-image";

class ShareMapModal extends React.Component {

    constructor(props) {
        super(props);

        this.getTTSTileString = this.getTTSTileString.bind(this);
        this.copyTileStringToClipboard = this.copyTileStringToClipboard.bind(this);
        this.copyLinkToClipboard = this.copyLinkToClipboard.bind(this);
        this.removeTrailing = this.removeTrailing.bind(this);
        this.sleep = this.sleep.bind(this);
        this.downloadImage = this.downloadImage.bind(this);
    }

    /**
     * Using writeText, copy the tiles currently being displayed to the user's clipboard.
     * @returns {string} A string representing the tiles in the TTS format
     */
    getTTSTileString() {
        // Get the current tiles
        let tileString = [...this.props.tiles];
        tileString = this.removeTrailing(tileString);

        // Remove mecatol rex
        tileString.shift();

        tileString = tileString.toString();
        tileString = tileString.replaceAll(",-1", ",0");  // Remove the -1s because it is unused
        tileString = tileString.replaceAll(",", " ");  // Remove commas from old array
        tileString = tileString.replaceAll(/(\d+)-\d/gm, "$1");  // Remove rotation for non hyperlanes
        tileString = tileString.replaceAll("-", "");  // Remove rotation dash in hyperlanes

        return tileString
    }

    /**
     * Copies the TTS tile string to the clipboard
     */
    copyTileStringToClipboard() {
        let tileString = this.getTTSTileString();
        console.log("Here is the tile string for use with this mod: https://steamcommunity.com/sharedfiles/filedetails/?id=1288687076")
        console.log(tileString)
        navigator.clipboard.writeText(tileString);
    }

    /**
     * Copies the page link to the clipboard
     */
    copyLinkToClipboard() {
        navigator.clipboard.writeText(window.location.href);
    }

    /**
     * Removes any trailing -1s from a tile string.
     * @param {number[]} tiles the tile string to clean
     * @returns {number[]} the clean tile string
     */
    removeTrailing(tiles) {
        while(tiles[tiles.length - 1] === -1){
            tiles.pop();
        }
        return tiles;
    }

    /**
     * Has the thread wait for a certain amount of time before continuing.
     * @param ms The number of milliseconds before continuing
     * @returns {Promise<unknown>} A timeout
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Downloads an image of the map to the user's computer.
     * @returns {Promise<void>} null
     */
    async downloadImage() {
        // Set the button as active to let the user know the action is still happening
        $("#downloadMapButton").addClass("active")

        // Scroll so that the image is centered properly
        window.scrollTo(0, 0);

        // Export as a png with a blank background. Scale so its not a giant file
        await exportComponentAsPNG(this.props.map, {
            fileName: "ti4-map",
            html2CanvasOptions: {backgroundColor: null, scrollX: 0, scrollY: -window.pageYOffset, scale: 2}
        })

        // Wait a little bit, then un activate the button.
        await this.sleep(750);
        $("#downloadMapButton").removeClass("active")
    }

    render() {
        let tileString = this.getTTSTileString();
        return (
            <Modal show={this.props.visible} onHide={this.props.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Share Map</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={window.location.href} readOnly
                               aria-label="Page Link" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" onClick={this.copyLinkToClipboard}>Copy Link</button>
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={tileString} readOnly
                               aria-label="Tile String" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" onClick={this.copyTileStringToClipboard}>Copy TTS String</button>
                        </div>
                    </div>

                    <div className="input-group mb-3 justify-content-center">
                        <button id="downloadMapButton" className="btn btn-primary" type="button" onClick={this.downloadImage}>Download Map Image</button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}
export default ShareMapModal;