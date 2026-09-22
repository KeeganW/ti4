import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { QuestionCircle, XLg } from "react-bootstrap-icons";
import HelpModal from "../options/HelpModal";
import tileData, { EXPANSIONS, SPECIALTIES } from "../data/tileData";
import { Tooltip as ReactTooltip } from "react-tooltip";

/**
 * Parse a system number into its numeric and string parts, so that tiles sort in a sensible order
 * (hyperlane rotations after their tile number, unknown tiles at the end)
 */
function parseSystemNumber(systemNumber) {
  if (typeof systemNumber == "number") {
    return [systemNumber, ""];
  } else {
    const match = systemNumber.match(/((?:er)?\d+)(.*)/);
    if (match === null) {
      return [99999, match];
    } else {
      const [, numberPart, stringPart] = match;
      if (systemNumber.includes("hyp")) {
        return [99999, match];
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

/**
 * The placeholder tiles have no entry in the tile catalog, so they get their labels from here. "0" is the
 * home system placeholder the generator leaves where a player's home world goes, and -1 is an empty slot.
 */
const PLACEHOLDER_LABELS = {
  "-1": "Empty",
  0: "Home",
};

class ExtraTiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchHelp: false,
      collapsedSections: {},
    };
    this.underlayStyle = {
      width: "210px",
      height: "185px",
      position: "absolute",
      top: "0",
      left: "0",
    };
    this.tileStyle = {
      width: "200px",
      height: "175px",
      display: "none",
      margin: "5px",
      position: "relative",
    };
    this.overlayStyle = {
      height: "175px",
      marginLeft: "92px",
      top: "85px",
      display: "none",
    };

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.clearSearchTerm = this.clearSearchTerm.bind(this);
    this.toggleSearchHelp = this.toggleSearchHelp.bind(this);
    this.toggleSection = this.toggleSection.bind(this);
  }

  /**
   * The tiles are shown/hidden imperatively (see App.showExtraTiles), so whenever we change which tiles
   * are rendered we need to ask for that visibility pass to run again.
   */
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchTerm !== this.state.searchTerm ||
      prevState.collapsedSections !== this.state.collapsedSections
    ) {
      if (this.props.showExtraTiles) {
        this.props.showExtraTiles();
      }
    }
  }

  updateSearchTerm(event) {
    this.setState({ searchTerm: event.target.value });
  }

  clearSearchTerm() {
    this.setState({ searchTerm: "" });
  }

  toggleSearchHelp() {
    this.setState((state) => ({ searchHelp: !state.searchHelp }));
  }

  toggleSection(sectionKey) {
    this.setState((state) => ({
      collapsedSections: {
        ...state.collapsedSections,
        [sectionKey]: !state.collapsedSections[sectionKey],
      },
    }));
  }

  /**
   * Whether a tile matches the current search term. Tiles can be found by their tile number, the name of
   * any of their planets, a planet trait or tech specialty, their faction, or an anomaly/wormhole type.
   */
  matchesSearch(systemNumber) {
    const term = this.state.searchTerm.trim().toLowerCase();
    if (term === "") {
      return true;
    }

    const id = String(systemNumber);
    if (id === "-1") {
      return "empty".includes(term) || "placeholder".includes(term);
    }
    if (id === "0") {
      return (
        "home".includes(term) ||
        "homeworld".includes(term) ||
        "placeholder".includes(term)
      );
    }
    if (id.toLowerCase().includes(term)) {
      return true;
    }

    const tile = tileData.all[id.split("-")[0]];
    if (tile === undefined) {
      return false;
    }

    // Some tiles store a single wormhole as a bare string, and some planets have more than one trait,
    // so flatten everything out into a plain list of searchable words
    const words = [tile.faction]
      .concat(tile.wormhole ?? [])
      .concat(tile.anomaly ?? [])
      .concat(
        (tile.planets ?? []).flatMap((planet) =>
          [planet.name]
            .concat(planet.trait ?? [])
            .concat(planet.specialty ?? []),
        ),
      );

    return words.some(
      (word) => typeof word === "string" && word.toLowerCase().includes(term),
    );
  }

  /**
   * Render a single draggable tile, along with its legendary ability tooltip if it has one
   */
  renderTile(systemNumber) {
    const tileObjects = [];

    // Handle hyperlanes differently. Pull out their tile number, separate from their rotation angle
    if (isNaN(Number(systemNumber)) && systemNumber !== undefined) {
      systemNumber = systemNumber.split("-")[0];
    }

    const wrap = (s) => s.replace(/(?![^\n]{1,24}$)([^\n]{1,24})\s/g, "$1\n");

    if (
      tileData.all[systemNumber] !== undefined &&
      tileData.all[systemNumber].planets.length > 0 &&
      tileData.all[systemNumber].planets[0].specialty.includes(
        SPECIALTIES.LEGENDARY,
      )
    ) {
      tileObjects.push(
        <ReactTooltip
          key={"extra-tooltip-" + systemNumber}
          style={{ zIndex: 1, overflow: "visible" }}
          anchorSelect={`#${"extra-" + systemNumber}`}
          place="right"
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {wrap(tileData.all[systemNumber].planets[0].ability ?? "")
              .split("\n")
              .map((line, index) => (
                <span key={index}>{line}</span>
              ))}
          </div>
        </ReactTooltip>,
      );
    }

    tileObjects.push(
      <div key={"extra-tile-wrapper-" + systemNumber} className="tile-wrapper">
        <span
          id={"extra-number-" + systemNumber}
          className={"overlay" + (this.props.overlayVisible ? "" : " d-none")}
          style={this.overlayStyle}
        >
          {PLACEHOLDER_LABELS[systemNumber] ?? systemNumber}
        </span>
        <img
          id={"extra-" + systemNumber}
          width="200px"
          height="175px"
          className="tile"
          src={
            window.location.origin +
            window.location.pathname +
            "/tiles/ST_" +
            systemNumber +
            ".webp"
          }
          draggable="true"
          onDragStart={this.props.drag}
          onDrop={this.props.drop}
          onDragOver={this.props.allowDrop}
          onDragEnter={this.props.dragEnter}
          onDragLeave={this.props.dragLeave}
          alt=""
          style={this.tileStyle}
        />
        <svg
          id={"extra-underlay-" + systemNumber}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 359.35 311.21"
          className="underlay"
          fill="currentColor"
          style={this.underlayStyle}
        >
          <polygon points="269.51 0 89.84 0 0 155.6 89.84 311.2 269.51 311.2 359.35 155.6 269.51 0" />
        </svg>
      </div>,
    );

    return tileObjects;
  }

  /**
   * Split the available tiles into the sections shown in the panel: one per expansion, one for home
   * worlds, and (while building custom maps) the hyperlanes and the placeholder tiles.
   */
  buildSections() {
    const included = this.props.includedExpansions;

    const inList = (list) => {
      const ids = new Set(list.map(String));
      return (id) => ids.has(String(id));
    };

    const isPok = inList(tileData.pok);
    const isTe = inList(tileData.te);
    const isUncharted = inList(tileData.uncharted);
    const isSun = inList(tileData.sun);
    const isDs = inList(tileData.ds);
    const isAsyncLane = inList(tileData.asyncLanes);

    const expansionCheck = (id) =>
      (!isPok(id) || included[EXPANSIONS.POK]) &&
      (!isTe(id) || included[EXPANSIONS.TE]) &&
      (!isUncharted(id) || included[EXPANSIONS.UnS]) &&
      (!isSun(id) || included[EXPANSIONS.AS]) &&
      (!isDs(id) || included[EXPANSIONS.DS]) &&
      (!isAsyncLane(id) || included[EXPANSIONS.Async]);

    const systemTiles = tileData.blue
      .concat(tileData.red)
      .filter(expansionCheck);
    const homeWorlds = tileData.green.filter(expansionCheck);

    const sections = [];

    if (this.props.customMapBuilding) {
      sections.push({
        key: "placeholders",
        label: "Placeholders",
        tiles: [-1, 0],
      });
    }

    sections.push(
      {
        key: "base",
        label: "Base Game",
        tiles: systemTiles.filter(
          (id) => !isPok(id) && !isTe(id) && !isUncharted(id) && !isSun(id),
        ),
      },
      {
        key: EXPANSIONS.POK,
        label: EXPANSIONS.POK,
        tiles: systemTiles.filter(isPok),
      },
      {
        key: EXPANSIONS.TE,
        label: EXPANSIONS.TE,
        tiles: systemTiles.filter(isTe),
      },
      {
        key: EXPANSIONS.UnS,
        label: EXPANSIONS.UnS,
        tiles: systemTiles.filter(isUncharted),
      },
      {
        key: EXPANSIONS.AS,
        label: EXPANSIONS.AS,
        tiles: systemTiles.filter(isSun),
      },
      {
        key: "homeWorlds",
        label: "Home Worlds",
        tiles: homeWorlds,
      },
    );

    if (this.props.customMapBuilding) {
      sections.push(
        {
          key: "hyperlanes",
          label: "Hyperlanes",
          tiles: tileData.hyperlanes.filter(
            (id) => !isAsyncLane(id) && expansionCheck(id),
          ),
        },
        {
          key: EXPANSIONS.Async,
          label: EXPANSIONS.Async,
          tiles: tileData.hyperlanes.filter(
            (id) => isAsyncLane(id) && expansionCheck(id),
          ),
        },
      );
    }

    return sections
      .map((section) => ({
        ...section,
        tiles: section.tiles
          .filter((id) => this.matchesSearch(id))
          .sort(compareSystemNumbers),
      }))
      .filter((section) => section.tiles.length > 0);
  }

  render() {
    const sections = this.buildSections();

    return (
      <div
        id="extraTilesContainer"
        className={this.props.visible ? "" : "d-none"}
      >
        <div className="title">
          <h4 id="extraTitle" className="text-center">
            Extra Tiles
          </h4>
        </div>

        <Form.Group className="mt-3 text-center" controlId="showAllExtraTiles">
          <Form.Check
            inline
            name="showAllExtraTiles"
            type="checkbox"
            checked={this.props.showAllExtraTiles}
            onChange={this.props.toggleShowAllExtraTiles}
            label="Show All Tiles"
          />
        </Form.Group>

        <Form.Group className="mt-3 text-center" controlId="customMapBuilding">
          <Form.Check
            inline
            name="customMapBuilding"
            type="checkbox"
            checked={this.props.customMapBuilding}
            onChange={this.props.toggleCustomMapBuilding}
            label="Custom Map Building"
          />
        </Form.Group>
        <div
          className={
            "mt-3 ml-3 mr-3 text-center " +
            (this.props.customMapBuilding ? "" : "d-none")
          }
        >
          <button
            className="btn btn-primary"
            id="unsetAllTilesButton"
            onClick={this.props.unsetAllTiles}
          >
            Unset All Tiles
          </button>
        </div>

        <Form.Group
          id="extraTilesSearch"
          className="mt-3"
          controlId="tileSearch"
        >
          <Form.Label className="d-flex">
            Search Tiles
            <QuestionCircle
              className="icon"
              title="Search help"
              onClick={this.toggleSearchHelp}
            />
          </Form.Label>
          <InputGroup>
            <Form.Control
              type="search"
              name="tileSearch"
              value={this.state.searchTerm}
              onChange={this.updateSearchTerm}
              placeholder="Search..."
              aria-label="Search tiles"
            />
            <button
              className="btn btn-outline-secondary"
              id="clearTileSearchButton"
              type="button"
              onClick={this.clearSearchTerm}
              disabled={this.state.searchTerm === ""}
              aria-label="Clear search"
            >
              <XLg />
            </button>
          </InputGroup>
        </Form.Group>

        <HelpModal
          key={"help-tile-search"}
          visible={this.state.searchHelp}
          hideModal={this.toggleSearchHelp}
          title={"Searching for Tiles"}
          content={`<p>
                      Search the tiles below by any of the following:
                      </p>
                      <ul>
                        <li><b>Tile number:</b> <i>26</i>, <i>84A</i>, <i>er01</i>, <i>3201</i></li>
                        <li><b>Planet name:</b> <i>mecatol</i>, <i>jord</i>, <i>abyz</i></li>
                        <li><b>Planet trait:</b> <i>cultural</i>, <i>hazardous</i>, <i>industrial</i></li>
                        <li><b>Tech specialty:</b> <i>biotic</i>, <i>cybernetic</i>, <i>propulsion</i>,
                        <i>warfare</i>, <i>legendary</i></li>
                        <li><b>Anomaly:</b> <i>nebula</i>, <i>supernova</i>, <i>asteroid-field</i>,
                        <i>gravity-rift</i></li>
                        <li><b>Wormhole:</b> <i>alpha</i>, <i>beta</i>, <i>gamma</i>, <i>delta</i></li>
                        <li><b>Faction:</b> <i>sol</i>, <i>hacan</i>, <i>creuss</i></li>
                        <li><b>Placeholder:</b> <i>empty</i>, <i>home</i> (custom map building only)</li>
                      </ul>
                      <p class="mb-0">
                        Matches are partial and case insensitive, so <i>neb</i> finds every nebula. Only tiles from
                        the expansions you have enabled are searched.
                      </p>`}
        />

        <div id="extraTiles" className="">
          {sections.length === 0 ? (
            <p className="text-center extra-no-results">
              No tiles match your search.
            </p>
          ) : (
            sections.map((section) => {
              const collapsed = !!this.state.collapsedSections[section.key];
              return (
                <div
                  key={"extra-section-" + section.key}
                  id={"extra-section-" + section.key}
                  className="extra-section"
                >
                  <button
                    type="button"
                    className="extra-section-header"
                    onClick={() => this.toggleSection(section.key)}
                    aria-expanded={!collapsed}
                  >
                    <span className="extra-section-caret">
                      {collapsed ? "▸" : "▾"}
                    </span>
                    {section.label}
                  </button>
                  <div
                    className={
                      "extra-section-tiles" + (collapsed ? " d-none" : "")
                    }
                  >
                    {section.tiles.map((systemNumber) =>
                      this.renderTile(systemNumber),
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}
export default ExtraTiles;
