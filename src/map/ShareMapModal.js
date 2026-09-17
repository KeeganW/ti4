import React from "react";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import { exportComponentAsPNG } from "react-component-export-image";
import tileData from "../data/tileData";

class ShareMapModal extends React.Component {
  constructor(props) {
    super(props);

    this.getTTSTileString = this.getTTSTileString.bind(this);
    this.copyTileStringToClipboard = this.copyTileStringToClipboard.bind(this);
    this.copyLinkToClipboard = this.copyLinkToClipboard.bind(this);
    this.removeTrailing = this.removeTrailing.bind(this);
    this.sleep = this.sleep.bind(this);
    this.downloadImage = this.downloadImage.bind(this);
    this.getBaseTileId = this.getBaseTileId.bind(this);
    this.getUniqueTileIds = this.getUniqueTileIds.bind(this);
    this.getNumericSortedTiles = this.getNumericSortedTiles.bind(this);
    this.getAlphabeticalSortedTiles =
      this.getAlphabeticalSortedTiles.bind(this);
  }

  /**
   * Strips rotation info off a tile id, returning the id used to key tileData.all
   * (e.g. "84A-2" -> "84A", "35-1" -> "35").
   * @param {string|number} tile the raw tile entry from the tiles array
   * @returns {string|number} the base tile id, or -1 if it can't be parsed
   */
  getBaseTileId(tile) {
    let hyperlaneRegex = /^((8[3-9]|90|91)[AB])-?([0-5])?$/;
    let altHyperlaneRegex = /^(hyp.+?)-?([0-5])?$/;
    let result = hyperlaneRegex.exec(tile);
    if (result) return result[1];
    let altResult = altHyperlaneRegex.exec(tile);
    if (altResult) return altResult[1];
    let regex = /^((?:er)?\d{1,4})-?([0-5])?$/;
    result = regex.exec(tile);
    if (result) return result[1];
    return -1;
  }

  /**
   * Gets the set of unique physical tiles used on the board, excluding empty/home placeholders.
   * @returns {string[]} unique base tile ids
   */
  getUniqueTileIds() {
    let ids = new Set();
    for (let tile of this.props.tiles) {
      if (tile === -1 || tile === 0 || tile === "0" || tile === "-1") continue;
      let id = this.getBaseTileId(tile);
      if (id !== -1 && id !== undefined) ids.add(String(id));
    }
    return [...ids];
  }

  /**
   * Sorts tile ids the way they're numbered on the back of the physical tiles.
   * @returns {string[]} tile ids in numeric order
   */
  getNumericSortedTiles() {
    return this.getUniqueTileIds().sort((a, b) => {
      let numA = parseInt(a.replace(/^er/, ""), 10);
      let numB = parseInt(b.replace(/^er/, ""), 10);
      if (numA !== numB) return numA - numB;
      return a.localeCompare(b);
    });
  }

  /**
   * Sorts tiles by the name of the first planet printed on them, the way some players
   * sort their physical tiles out of the box. Tiles with no planet (empty, hyperlane,
   * anomaly-only tiles) are listed afterwards in numeric order.
   * @returns {{id: string, label: string}[]} tiles in alphabetical order with display labels
   */
  getAlphabeticalSortedTiles() {
    let ids = this.getUniqueTileIds();
    let withPlanet = [];
    let withoutPlanet = [];
    for (let id of ids) {
      let info = tileData.all[id];
      let planetName =
        info && info.planets && info.planets.length > 0
          ? info.planets[0].name
          : null;
      if (planetName) {
        withPlanet.push({ id, label: `${planetName} (${id})` });
      } else {
        withoutPlanet.push({ id, label: `${id}` });
      }
    }
    withPlanet.sort((a, b) => a.label.localeCompare(b.label));
    withoutPlanet.sort((a, b) => {
      let numA = parseInt(a.id.replace(/^er/, ""), 10);
      let numB = parseInt(b.id.replace(/^er/, ""), 10);
      if (numA !== numB) return numA - numB;
      return a.id.localeCompare(b.id);
    });
    return withPlanet.concat(withoutPlanet);
  }

  /**
   * Using writeText, copy the tiles currently being displayed to the user's clipboard.
   * @returns {string} A string representing the tiles in the TTS format
   */
  getTTSTileString() {
    // Get the current tiles
    let tileString = [...this.props.tiles];
    tileString = this.removeTrailing(tileString);

    // Remove mecatol rex if it's in the center
    if (tileString[0] === "18") tileString.shift();

    tileString = tileString.toString();
    tileString = tileString.replaceAll(",-1", ",0"); // Remove the -1s because it is unused
    tileString = tileString.replaceAll(",", " "); // Remove commas from old array
    tileString = tileString.replaceAll(/(\d+)-\d/gm, "$1"); // Remove rotation for non hyperlanes
    tileString = tileString.replaceAll("-", ""); // Remove rotation dash in hyperlanes

    return tileString;
  }

  /**
   * Copies the TTS tile string to the clipboard
   */
  copyTileStringToClipboard() {
    let tileString = this.getTTSTileString();
    console.log(
      "Here is the tile string for use with this mod: https://steamcommunity.com/sharedfiles/filedetails/?id=1288687076",
    );
    console.log(tileString);
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
    while (tiles[tiles.length - 1] === -1) {
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
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Downloads an image of the map to the user's computer.
   * @returns {Promise<void>} null
   */
  async downloadImage() {
    // Set the button as active to let the user know the action is still happening
    $("#downloadMapButton").addClass("active");

    // Scroll so that the image is centered properly
    window.scrollTo(0, 0);

    // Export as a png with a blank background. Scale so its not a giant file
    await exportComponentAsPNG(this.props.map, {
      fileName: "ti4-map",
      html2CanvasOptions: {
        backgroundColor: null,
        scrollX: 0,
        scrollY: -window.pageYOffset,
        scale: 2,
      },
    });

    // Wait a little bit, then un activate the button.
    await this.sleep(750);
    $("#downloadMapButton").removeClass("active");
  }

  render() {
    let tileString = this.getTTSTileString();
    let numericSortedTiles = this.getNumericSortedTiles();
    let alphabeticalSortedTiles = this.getAlphabeticalSortedTiles();
    return (
      <Modal show={this.props.visible} onHide={this.props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Share Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={window.location.href}
              readOnly
              aria-label="Page Link"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.copyLinkToClipboard}
              >
                Copy Link
              </button>
            </div>
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={tileString}
              readOnly
              aria-label="Tile String"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.copyTileStringToClipboard}
              >
                Copy TTS String
              </button>
            </div>
          </div>

          <div className="input-group mb-3 justify-content-center">
            <button
              id="downloadMapButton"
              className="btn btn-primary"
              type="button"
              onClick={this.downloadImage}
            >
              Download Map Image
            </button>
          </div>

          <hr />

          <h6>Pulling Tiles From the Box</h6>
          <div className="mb-3">
            <div className="fw-bold">Numeric Order</div>
            <div>{numericSortedTiles.join(", ")}</div>
          </div>
          <div className="mb-3">
            <div className="fw-bold">Alphabetical Order (by first planet)</div>
            <div>
              {alphabeticalSortedTiles.map((tile) => tile.label).join(", ")}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
export default ShareMapModal;
