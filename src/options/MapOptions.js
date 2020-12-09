import React from "react";
import {QuestionCircle} from "react-bootstrap-icons";
import boardData from "../data/boardData.json";
import tileData from "../data/tileData.json";
import raceData from "../data/raceData.json";
import HelpModal from "./HelpModal";
import SetPlayerNameModal from "./SetPlayerNameModal";
import SetRacesModal from "./SetRacesModal";


class MapOptions extends React.Component {
    constructor(props) {
        super(props);
        const startingValues = {
            numberOfPlayers: [2, 3, 4, 5, 6],
            pokNumberOfPlayers: [7, 8],
            boardStyles: {
                2: Object.keys(boardData.styles["2"]).map((key) => key),
                3: Object.keys(boardData.styles["3"]).map((key) => key),
                4: Object.keys(boardData.styles["4"]).map((key) => key),
                5: Object.keys(boardData.styles["5"]).map((key) => key),
                6: Object.keys(boardData.styles["6"]).map((key) => key),
                7: Object.keys(boardData.styles["7"]).map((key) => key),
                8: Object.keys(boardData.styles["8"]).map((key) => key),
            },
            pickStyles: ["balanced", "random", "resource", "influence", "custom"],
            races: [...raceData["races"]],
            pokRaces: [...raceData["pokRaces"]],
            homeworlds: raceData["homeworlds"],
            pokHomeworlds: raceData["pokHomeworlds"]
        }

        this.state = {
            optionsPossible: startingValues,
            currentNumberOfPlayers: 6,
            currentNumberOfPlayersOptions: startingValues["numberOfPlayers"],
            currentBoardStyleOptions: startingValues["boardStyles"]["6"],
            currentBoardStyle: startingValues["boardStyles"]["6"][0],
            currentPickStyle: startingValues["pickStyles"][0],
            currentSeed: "",
            userSetSeed: false,
            pickRaces: false,
            pickMultipleRaces: false,
            shuffleBoards: true,
            reversePlacementOrder: false,
            generated: false,

            pickRacesHelp: false,
            boardStyleHelp: false,
            pickStyleHelp: false,
            setPlayerNamesHelp: false,
            setRacesHelp: false,
            pickMultipleRacesHelp: false,
            shufflePriorityHelp: false,
            reversePlacementOrderHelp: false,

            resourceWeight: 60,
            influenceWeight: 30,
            planetCountWeight: 15,
            specialtyWeight: 50,
            anomalyWeight: 10,
            wormholeWeight: 25,
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRacesChange = this.handleRacesChange.bind(this);
        this.updatePok = this.updatePok.bind(this);
        this.updatePlayerCount = this.updatePlayerCount.bind(this);
        this.updateBoardStyle = this.updateBoardStyle.bind(this);
        this.updateSeed = this.updateSeed.bind(this);

        this.updateBoardStyleOptions = this.updateBoardStyleOptions.bind(this); // TODO is the bind needed?

        this.generateBoard = this.generateBoard.bind(this);

        this.togglePickRacesHelp = this.togglePickRacesHelp.bind(this);
        this.toggleBoardStyleHelp = this.toggleBoardStyleHelp.bind(this);
        this.togglePickStyleHelp = this.togglePickStyleHelp.bind(this);
        this.toggleSetPlayerNamesHelp = this.toggleSetPlayerNamesHelp.bind(this);
        this.toggleSetRacesHelp = this.toggleSetRacesHelp.bind(this);
        this.togglePickMultipleRacesHelp = this.togglePickMultipleRacesHelp.bind(this);
        this.toggleShufflePriorityHelp = this.toggleShufflePriorityHelp.bind(this);
        this.toggleReversePlacementOrderHelp = this.toggleReversePlacementOrderHelp.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }
    handleNameChange(event){
        let nameIndex = parseInt(event.target.name.substring(10))
        let newPlayerNames = this.props.currentPlayerNames
        newPlayerNames[nameIndex] = event.target.value

        this.setState({
            currentPlayerNames: newPlayerNames
        })
    }
    handleRacesChange(event){
        let race = event.target.name;
        let newCurrentRaces = this.props.currentRaces;
        let indexToToggle = newCurrentRaces.indexOf(race)
        if (indexToToggle >= 0) {
            newCurrentRaces.splice(indexToToggle, 1)
        } else {
            newCurrentRaces.push(race)
        }

        this.setState({
            currentRaces: newCurrentRaces
        })
    }
    updatePok(event) {
        if (event.target.checked) {
            this.setState({
                currentNumberOfPlayersOptions: this.state.optionsPossible.numberOfPlayers.concat(this.state.optionsPossible.pokNumberOfPlayers),
                currentRaces: [...this.state.optionsPossible.races].concat([...this.state.optionsPossible.pokRaces])
            }, this.props.toggleProphecyOfKings);
        } else {
            this.setState({
                currentNumberOfPlayers: this.state.currentNumberOfPlayers > 6 ? 6 : this.state.currentNumberOfPlayers,
                currentNumberOfPlayersOptions: this.state.optionsPossible.numberOfPlayers,
                currentBoardStyle: this.state.currentNumberOfPlayers > 6 ? this.state.optionsPossible.boardStyles["6"][0] : this.state.currentBoardStyle,
                currentBoardStyleOptions: this.state.currentNumberOfPlayers > 6 ? this.state.optionsPossible.boardStyles["6"] : this.state.currentBoardStyleOptions,
                currentRaces: [...this.state.optionsPossible.races]
            }, this.props.toggleProphecyOfKings);
        }
    }
    updatePlayerCount(event) {
        this.setState({
            currentNumberOfPlayers: parseInt(event.target.value),
        }, () => {
            this.updateBoardStyleOptions(event)
        });
    }
    updateBoardStyle(event) {
        this.setState({
            currentBoardStyle: event.target.value,
        }, () => {
            if (this.state.generated) {
                this.generateBoard(event)
            }
        });
    }
    updateBoardStyleOptions(event) {
        this.setState({
            currentBoardStyleOptions: this.state.optionsPossible.boardStyles[this.state.currentNumberOfPlayers],
            currentBoardStyle: this.state.optionsPossible.boardStyles[this.state.currentNumberOfPlayers][0],
        }, () => {
            if (this.state.generated) {
                this.generateBoard(event)
            }
        });
    }
    updateSeed(event) {
        let newSeed = parseInt(event.target.value)
        if (!isNaN(newSeed) || event.target.value === "") {
            this.setState({
                currentSeed: event.target.value,
                userSetSeed: event.target.value !== ""  // Ignore user entry if the value is blank
            });
        }
    }

    capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    shuffle(array, seed) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(this.random(seed) * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
            ++seed
        }

        return array;
    }

    random(seed) {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    generateBoard(e) {
        // Don't actually submit the form
        e.preventDefault();

        // Create a random seed to use unless the user has specified one
        let currentSeed = this.state.currentSeed
        if (!this.state.userSetSeed) {
            currentSeed = Math.floor(Math.random() * Math.floor(9999));
        }

        // Get a list of board spaces that need to have non-homeworld planets assigned to them
        let planetIndexesToPlace = this.getPlanetIndexesToPlace(currentSeed)

        // Get an ordered list of planets to use to fill board with
        let possiblePlanets = this.getPossiblePlanets()

        // Place planets one at a time, using the indexes to place combined with the ordered planet list
        let newTiles = [...boardData.blankMap] // Reset tiles to be empty
        for (let planetIndex in planetIndexesToPlace){
            newTiles[planetIndexesToPlace[planetIndex]] = possiblePlanets.shift()
        }

        // Place hyperlanes in their specific layout
        // TODO in the future, can this be random? Can they rotate?
        for (let index = 0; index < boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['hyperlane_tiles'].length; index++) {
            let hyperlaneData = boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['hyperlane_tiles'][index]
            newTiles[hyperlaneData[0]] = hyperlaneData[1] + "-" + hyperlaneData[2]
        }

        // Get current races for placing races, and shuffle them around
        let currentRaces = [...this.props.currentRaces]
        currentRaces = this.shuffle(currentRaces, currentSeed)

        // Place data for the homeworlds from board data
        for (let index = 0; index < boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['home_worlds'].length; index++) {
            let planetIndex = boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['home_worlds'][index]
            if (this.state.pickRaces && !this.state.pickMultipleRaces) {
                // Convert races into race hexes and assign a random race to a player
                newTiles[planetIndex] = raceData.raceToHomeworldMap[currentRaces[0]]
                currentRaces.shift();
            } else {
                // Set home worlds to 0, races to be decided later
                newTiles[planetIndex] = 0
            }
        }

        // Put Mecatol Rex in the middle
        newTiles[0] = 18

        // Update the seed we are using (so it is displayed) and then update the tiles
        this.setState({
            currentSeed: currentSeed,
            generated: true
        }, this.props.updateTiles(newTiles));
    }

    getPlanetIndexesToPlace(currentSeed) {
        // Copy all the tile arrays from board data
        let primary = [...boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['primary_tiles']]
        let secondary = [...boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['secondary_tiles']]
        let tertiary = [...boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['tertiary_tiles']]

        // If shuffling, we need to shuffle primary, secondary, and tertiary indexes.
        if (this.state.shuffleBoards) {
            primary = this.shuffle(primary, currentSeed)
            secondary = this.shuffle(secondary, currentSeed)
            tertiary = this.shuffle(tertiary, currentSeed)
        }

        // Return this list of planet tiles to populate
        if (this.state.reversePlacementOrder) {
            return tertiary.concat(secondary).concat(primary)
        } else {
            return primary.concat(secondary).concat(tertiary)
        }
    }

    getPossiblePlanets() {
        // Get the list of planets to evaluate
        let possiblePlanets = []
        possiblePlanets = possiblePlanets.concat(tileData.safe).concat(tileData.anomaly)
        if (this.props.useProphecyOfKings) {
            possiblePlanets = possiblePlanets.concat(tileData.pokSafe).concat(tileData.pokAnomaly)
        }

        // Get the preset weighting format based on the current pick style
        // TODO react-ify this when adding custom weighting
        let weights = {};
        switch (this.state.currentPickStyle) {
            case "random":
                possiblePlanets = this.shuffle(possiblePlanets, this.state.currentSeed)
                return possiblePlanets
            case "custom":
                weights = {
                    "resource": parseInt(this.state.resourceWeight),
                    "influence": parseInt(this.state.influenceWeight),
                    "planet_count": parseInt(this.state.planetCountWeight),
                    "specialty": parseInt(this.state.specialtyWeight),
                    "anomaly": parseInt(this.state.anomalyWeight),
                    "wormhole": parseInt(this.state.wormholeWeight)
                }
                break;
            case "resource":
                weights = {
                    "resource": 100,
                    "influence": 10,
                    "planet_count": 10,
                    "specialty": 10,
                    "anomaly": 10,
                    "wormhole": 10
                }
                break;
            case "influence":
                weights = {
                    "resource": 10,
                    "influence": 100,
                    "planet_count": 10,
                    "specialty": 10,
                    "anomaly": 10,
                    "wormhole": 10
                }
                break;
            case "balanced":
            default:
                weights = {
                    "resource": 60,
                    "influence": 30,
                    "planet_count": 15,
                    "specialty": 50,
                    "anomaly": 10,
                    "wormhole": 25
                }
                break;
        }

        // Re-order the planets based on their weights
        possiblePlanets = this.getWeightedPlanetList(possiblePlanets, weights)

        return possiblePlanets
    }

    // TODO rename from planet to tile
    getWeightedPlanetList(possiblePlanets, weights) {
        // Generate an array of tuples where the first element is the plant's tile number and the second is its weight
        let planetWeights = [];
        for (let planetTileNumber in possiblePlanets) {
            planetWeights.push([possiblePlanets[planetTileNumber], this.getWeight(possiblePlanets[planetTileNumber], weights)])
        }

        // Sort the returned list by weight, with higher weighted planets being first
        planetWeights.sort(function(a, b) {
            return b[1] - a[1];
        })

        // Convert from tuple down to just the tile number
        let orderedPlanets = [];
        for (let weightedPlanet in planetWeights) {
            orderedPlanets.push(planetWeights[weightedPlanet][0]);
        }

        return orderedPlanets
    }

    getWeight(planetTileNumber, weights) {
        let total_weight = 0
        let tile = tileData.all[planetTileNumber.toString()]

        // Go over all the planets in this tile and add up their values
        for (let planetIndex in tile['planets']) {
            let planet = tile['planets'][planetIndex]
            total_weight += (planet['resources'] / 4) * weights['resource']
            total_weight += (planet['influence'] / 4) * weights['influence']
            total_weight += (weights['planet_count'] / 2)
            total_weight += planet['specialty'] ? weights['specialty'] : 0
        }

        // Handle anomalies
        if (tile['type'] === 'anomaly') {
            total_weight += 30;
            if (tile['anomaly'] === null
                || tile['anomaly'] === 'asteroid-field'
                || tile['anomaly'] === 'gravity-rift') {
                // Give an extra boost to these anomalies, as they are easier to cross than others
                total_weight += 20;
            }

        }
        total_weight += tile['wormhole'] ? weights['wormhole'] : 0

        return total_weight
    }
    togglePickRacesHelp(event) {
        this.setState({
            pickRacesHelp: !this.state.pickRacesHelp
        })
    }
    toggleBoardStyleHelp(event) {
        this.setState({
            boardStyleHelp: !this.state.boardStyleHelp
        })
    }
    togglePickStyleHelp(event) {
        this.setState({
            pickStyleHelp: !this.state.pickStyleHelp
        })
    }
    toggleSetPlayerNamesHelp(event) {
        this.setState({
            setPlayerNamesHelp: !this.state.setPlayerNamesHelp
        })
    }
    toggleSetRacesHelp(event) {
        this.setState({
            setRacesHelp: !this.state.setRacesHelp
        })
    }
    togglePickMultipleRacesHelp(event) {
        this.setState({
            pickMultipleRacesHelp: !this.state.pickMultipleRacesHelp
        })
    }
    toggleShufflePriorityHelp(event) {
        this.setState({
            shufflePriorityHelp: !this.state.shufflePriorityHelp
        })
    }
    toggleReversePlacementOrderHelp(event) {
        this.setState({
            reversePlacementOrderHelp: !this.state.reversePlacementOrderHelp
        })
    }

    render() {
        const racesOptions = "" +
            "<form id=\"includedRacesForm\">\n" +
            "                                <div class=\"form-group\">\n" +
            "                                    <input class=\"form-control\" id=\"filterRaces\" type=\"text\" placeholder=\"Filter Races...\">\n" +
            "                                </div>\n" +
            "                                    <div class=\"custom-control custom-checkbox mb-3 races\" id=\"wrapper{{ race|replace(' ', '') }}\">\n" +
            "                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"include{{ race|replace(' ', '') }}\" name=\"race {{ race }}\" checked>\n" +
            "                                        <label class=\"custom-control-label d-flex\" for=\"include{{ race|replace(' ', '') }}\">{{ race }}</label>\n" +
            "                                    </div>\n" +
            "                            </form>"
        return (
            <div id="options" className={this.props.visible ? "" : "d-none"}>
                <div className="title">
                    <h4 className="text-center">Generation Options</h4>
                </div>
                <form id="generateForm" onSubmit={this.generateBoard}>

                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="pokExpansion" name="useProphecyOfKings" checked={this.props.useProphecyOfKings} onChange={this.updatePok} />
                        <label className="custom-control-label" htmlFor="pokExpansion">Use Prophecy of Kings Expansion</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="playerCount">Number of Players</label>
                        <select className="form-control" id="playerCount" name="currentNumberOfPlayers" value={this.state.currentNumberOfPlayers} onChange={this.updatePlayerCount}>
                            {this.state.currentNumberOfPlayersOptions.map((x) => <option key={x} value={x}>{x}</option>)}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="boardStyle" className="d-flex">Board Style
                            <QuestionCircle className="icon" onClick={this.toggleBoardStyleHelp} />
                        </label>
                        <select className="form-control" id="boardStyle" name="currentBoardStyle" value={this.state.currentBoardStyle} onChange={this.updateBoardStyle}>
                            {this.state.currentBoardStyleOptions.map((x) => <option key={x} value={x}>{this.capitalize(x)}</option>)}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pickStyle" className="d-flex">Picking Style
                            <QuestionCircle className="icon" onClick={this.togglePickStyleHelp} />
                        </label>
                        <select className="form-control" id="pickStyle" name="currentPickStyle" value={this.state.currentPickStyle} onChange={this.handleInputChange}>
                            {this.state.optionsPossible.pickStyles.map((x) => <option key={x} value={x}>{this.capitalize(x)}</option>)}
                        </select>
                    </div>
                    <div className={"ml-2 collapse " + (this.state.currentPickStyle === "custom" ? "show" : "")} id="customPickStyle">
                        <div className="card card-body">
                            <label htmlFor="customResource">Resource</label>
                            <input type="range" className="custom-range" name="resourceWeight" value={this.state.resourceWeight} onChange={this.handleInputChange} />

                            <label htmlFor="customInfluence">Influence</label>
                            <input type="range" className="custom-range" name="influenceWeight" value={this.state.influenceWeight} onChange={this.handleInputChange} />

                            <label htmlFor="customPlanetCount">Planet Count</label>
                            <input type="range" className="custom-range" name="planetCountWeight" value={this.state.planetCountWeight} onChange={this.handleInputChange} />

                            <label htmlFor="customSpecialty">Specialty</label>
                            <input type="range" className="custom-range" name="specialtyWeight" value={this.state.specialtyWeight} onChange={this.handleInputChange} />

                            <label htmlFor="customAnomaly">Anomaly</label>
                            <input type="range" className="custom-range" name="anomalyWeight" value={this.state.anomalyWeight} onChange={this.handleInputChange} />

                            <label htmlFor="customWormhole">Wormhole</label>
                            <input type="range" className="custom-range" name="wormholeWeight" value={this.state.wormholeWeight} onChange={this.handleInputChange} />
                        </div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="seed">Specific Seed</label>
                        <input className="form-control" id="seed" name="updateSeed" type="text" placeholder="Enter a number to seed generation..." value={this.state.currentSeed} onChange={this.updateSeed} />
                    </div>

                    <div className="custom-control custom-checkbox mb-3 d-flex">
                        <input type="checkbox" className="custom-control-input" id="pickRaces" name="pickRaces" checked={this.state.pickRaces} onChange={this.handleInputChange} />
                        <label className="custom-control-label" htmlFor="pickRaces">Pick Races for Players</label>
                        <QuestionCircle className="icon" onClick={this.togglePickRacesHelp} />
                    </div>
                    <div className={"ml-2 collapse " + (this.state.pickRaces ? "show" : "")} id="pickRacesCollapse">
                        <div className="card card-body">
                            <button type="button" className="btn btn-outline-primary mb-2" onClick={this.toggleSetPlayerNamesHelp}>Set Player Names</button>

                            <button type="button" className="btn btn-outline-primary mb-2" onClick={this.toggleSetRacesHelp}>Set Included Races</button>

                            <div className="custom-control custom-checkbox d-flex">
                                <input type="checkbox" className="custom-control-input" id="pickMultipleRaces" name="pickMultipleRaces" checked={this.state.pickMultipleRaces} onChange={this.handleInputChange} />
                                <label className="custom-control-label" htmlFor="pickMultipleRaces">Let Players Pick From Multiple</label>
                                <QuestionCircle className="icon" onClick={this.togglePickMultipleRacesHelp} />
                            </div>
                        </div>
                    </div>

                    <div className="custom-control custom-checkbox mb-3 d-flex">
                        <input type="checkbox" className="custom-control-input" id="shuffleBoards" name="shuffleBoards" checked={this.state.shuffleBoards} onChange={this.handleInputChange} />
                        <label className="custom-control-label" htmlFor="shuffleBoards">Randomize Priorities Before Placement</label>
                        <QuestionCircle className="icon" onClick={this.toggleShufflePriorityHelp} />
                    </div>

                    <div className="custom-control custom-checkbox mb-3 d-flex">
                        <input type="checkbox" className="custom-control-input" id="reversePlacementOrder" name="reversePlacementOrder" checked={this.state.reversePlacementOrder} onChange={this.handleInputChange} />
                        <label className="custom-control-label" htmlFor="reversePlacementOrder">Reverse Placement Order</label>
                        <QuestionCircle className="icon" onClick={this.toggleReversePlacementOrderHelp} />
                    </div>

                    <HelpModal visible={this.state.pickStyleHelp} hideModal={this.togglePickStyleHelp} title={"About Pick Style"}
                         content='<p>
                         Pick Style is used to determine how tiles are weighted for when they are placed on the board. A higher weighted tile means that the hex is more important, and so (depending on the board style) it is put closer to home worlds to facilitate available assets.
                         <br>
                         <br><b>Balanced:</b> A custom weight which favors resources and planet count more than anomalies. This more accurately factors in tech specialties and influence as trade-offs to the "Resource" pick.
                         <br><b>Resource:</b> Tiles are ordered primarily by their resource values. Higher resource planets are more coveted, and so are more important.
                         <br><b>Influence:</b> Similar to "Resource", tiles are ordered primarily by their influence values.
                         <br><b>Random:</b> Tiles are completely randomly ordered. Expect chaotic and unbalanced maps.
                         <br><b>Custom:</b> Enter your own values in for balancing tradeoffs between various tile qualities.
                         </p>'

                    />
                    <SetPlayerNameModal visible={this.state.setPlayerNamesHelp} currentPlayerNames={this.props.currentPlayerNames}
                                        hideModal={this.toggleSetPlayerNamesHelp} handleNameChange={this.handleNameChange}
                    />
                    <SetRacesModal visible={this.state.setRacesHelp} races={this.state.optionsPossible.races}
                                   pokRaces={this.state.optionsPossible.pokRaces} useProphecyOfKings={this.props.useProphecyOfKings}
                                   currentRaces={this.props.currentRaces}
                                   hideModal={this.toggleSetRacesHelp} handleRacesChange={this.handleRacesChange}
                    />
                    <HelpModal visible={this.state.boardStyleHelp} hideModal={this.toggleBoardStyleHelp} title={"About Board Style"}
                         content='<p>
                         Board style changes how the tiles are actually laid out on a newly generated map.
                         <br>
                         <br>
                         Changing this would cause you to expect more valuable tiles to be placed in certain positions. For example, 6-player "Normal" places important tiles closer to home worlds, while 6-player "Warzone" places the most valuable planets close to Mecatol Rex, forcing you to fight for your assets. It also might exclude placing certain tiles entirely, to create non traditional map shapes (which happens more in lower player counts).
                         </p>'
                    />
                    <HelpModal visible={this.state.pickRacesHelp} hideModal={this.togglePickRacesHelp} title={"About Picking Races"}
                         content="<p>
                         Automatically assigns races to the players on the boards.
                         <br>
                         <br>
                         From the set of races, turning this on will assign every player a random race (designated by assigning them the homeworld tile of that race). You should pick which player sits at a certain position before turning this on.
                         </p>"
                    />
                    <HelpModal visible={this.state.pickMultipleRacesHelp} hideModal={this.togglePickMultipleRacesHelp} title={"About Picking Multiple Races"}
                         content="<p>
                         Divides all the races evenly up amongst the players in the game (with no overflow), so that they can choose from a selection instead of being specifically assigned one race.
                         <br>
                         <br>
                         Some groups prefer to have a draft, where every player is given a few races to pick between. This lets them pick the races that they want to play, but not have any conflicts with other players about playing a certain race.
                         </p>"
                    />
                    <HelpModal visible={this.state.shufflePriorityHelp} hideModal={this.toggleShufflePriorityHelp} title={"About Shuffling Priority"}
                         content='<p>
                         Randomizes the priority picks for each picking round.
                         <br>
                         <br>
                         Normally when placing tiles, this tool attempts to place the tiles so player 1 does not always get the best tiles. To do this, it gives player 1 first pick from the list of tiles weighted by picking style, player 2 second pick and so on for the first round of placing tiles. Once the last player has placed a tile, they then get to place another. The tiles are then placed in reverse order from there. So in a 6-player game, player 1 gets to place tile 1 and 12, while player 6 gets to place tile 6 and 7. This is a similar strategy to placing opening settlements in Settlers of Catan.
                         <br>
                         <br>
                         Turning this on stops this from happening, and instead completely randomizes the placement order.
                         </p>'
                    />
                    <HelpModal visible={this.state.reversePlacementOrderHelp} hideModal={this.toggleReversePlacementOrderHelp} title={"About Reverse Placement Order"}
                         content='<p>
                         Reverses which tiles are placed first in pick order.
                         <br>
                         <br>
                         Tiles are normally placed in priority (see randomize priority help). This reverses the order, so that the last picks are first, which has the effect of pushing the morre valuable tiles towards the center of the galaxy.
                         </p>'
                    />
            
                    <button type="submit" className="btn btn-primary">Generate</button>
                </form>
            </div>
        );
    }
}
export default MapOptions;