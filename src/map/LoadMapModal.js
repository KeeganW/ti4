import React from "react";
import Modal from "react-bootstrap/Modal";
// import $ from 'jquery';
// import {exportComponentAsPNG} from "react-component-export-image";

class LoadMapModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentInputTiles: "",
        }

        this.updateInputTiles = this.updateInputTiles.bind(this);
        this.loadTiles = this.loadTiles.bind(this);
    }

    /**
     * Take the entered TTS string and parse it into the format that we use for tiles.
     */
    parseTTSTileString() {
        // Get the current tiles
        let inputTiles = this.props.removeTrailing(this.state.currentInputTiles);

        // Split the tiles up into an array
        inputTiles = inputTiles.toString();
        inputTiles = inputTiles.split(" ")

        // Add m-rex to the front, which TTS doesn't include
        inputTiles.unshift("18")

        inputTiles = inputTiles.map((value, index) => {
            let newValue = value
            const aIndex = newValue.indexOf("A")
            const bIndex = newValue.indexOf("B")
            if (aIndex >= 0 || bIndex >= 0) {
                const sideLocation = aIndex >= 0 ? aIndex : bIndex
                const rotation = newValue.substring(sideLocation + 1)
                newValue = newValue.substring(0, sideLocation + 1) + "-" + rotation
            }
            return newValue
        })

        // Use these new tiles to update the map
        this.setState({
            currentInputTiles: ""
        }, () => {
            this.props.updateTiles(inputTiles, undefined, true);
            this.props.hideModal()
        } );
    }

    /**
     * Update the state for the text input
     * @param event The user type event that changed this text box
     */
    updateInputTiles(event) {
        if (event.target.value || event.target.value === "") {
            this.setState({
                currentInputTiles: event.target.value,
            });
        }
    }

    /**
     * Loads tiles entered into the map
     * @param event The submit event that triggered this function
     */
    loadTiles(event) {
        // Don't actually submit the form when nothing is typed
        if (event !== undefined || this.state.currentInputTiles === undefined || this.state.currentInputTiles === "") {
            event.preventDefault();
        }

        // TODO: validate input
        // Turn TTS string to tiles
        this.parseTTSTileString()
    }

    render() {
        return (
            <Modal show={this.props.visible} onHide={this.props.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Load Map</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="generateForm" onSubmit={this.loadTiles}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" id="inputMapString" name="userInputTiles"
                                   placeholder="Enter a tile string (eg. 79 60 50 31...)" aria-label="Map String"
                                   aria-describedby="basic-addon2"
                                   value={this.state.currentInputTiles} onChange={this.updateInputTiles}
                                    />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="submit" >Load Map</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}
export default LoadMapModal;