import React from "react";
import {QuestionCircle} from "react-bootstrap-icons";
import boardData from "../data/boardData.json";
import tileData from "../data/tileData.json";
import raceData from "../data/raceData.json";
import adjacencyData from "../data/adjacencyData.json";
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
                6: Object.keys(boardData.styles["6"]).map((key) => key === "large" ? null : key).filter(x => x),
            },
            boardStylesPok: {
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
        const startingPlayers = 6;

        this.state = {
            optionsPossible: startingValues,
            currentNumberOfPlayers: startingPlayers,
            currentNumberOfPlayersOptions: startingValues["numberOfPlayers"],
            currentBoardStyleOptions: startingValues["boardStyles"][startingPlayers],
            currentBoardStyle: startingValues["boardStyles"][startingPlayers][0],
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

            resourceWeight: 70,
            influenceWeight: 30,
            planetCountWeight: 15,
            specialtyWeight: 50,
            anomalyWeight: 10,
            wormholeWeight: 25,

            shuffleThreshold: 5,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRacesChange = this.handleRacesChange.bind(this);
        this.updatePok = this.updatePok.bind(this);
        this.updatePlayerCount = this.updatePlayerCount.bind(this);
        this.updateBoardStyle = this.updateBoardStyle.bind(this);
        this.updateSeed = this.updateSeed.bind(this);

        this.ensureAnomalies = this.ensureAnomalies.bind(this);
        this.ensureWormholesForType = this.ensureWormholesForType.bind(this);

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

    handleNameChange(event) {
        let nameIndex = parseInt(event.target.name.substring(10))
        let newPlayerNames = this.props.currentPlayerNames
        newPlayerNames[nameIndex] = event.target.value

        this.setState({
            currentPlayerNames: newPlayerNames
        })
    }

    handleRacesChange(event) {
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
        let boardOptions = this.state.optionsPossible.boardStyles;
        if (event.target.checked) {
            boardOptions = this.state.optionsPossible.boardStylesPok;
            this.setState({
                currentNumberOfPlayersOptions: this.state.optionsPossible.numberOfPlayers.concat(this.state.optionsPossible.pokNumberOfPlayers),
                currentRaces: [...this.state.optionsPossible.races].concat([...this.state.optionsPossible.pokRaces]),
                currentBoardStyle: boardOptions[this.state.currentNumberOfPlayers][0],
                currentBoardStyleOptions: boardOptions[this.state.currentNumberOfPlayers],
            }, this.props.toggleProphecyOfKings(event));
        } else {
            this.setState({
                currentNumberOfPlayers: this.state.currentNumberOfPlayers > 6 ? 6 : this.state.currentNumberOfPlayers,
                currentNumberOfPlayersOptions: this.state.optionsPossible.numberOfPlayers,
                currentBoardStyle: this.state.currentNumberOfPlayers > 6 ? boardOptions["6"][0] : this.state.currentBoardStyle,
                currentBoardStyleOptions: this.state.currentNumberOfPlayers > 6 ? boardOptions["6"] : boardOptions[this.state.currentNumberOfPlayers],
                currentRaces: [...this.state.optionsPossible.races],
            }, this.props.toggleProphecyOfKings(event));
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
        let boardOptions = this.state.optionsPossible.boardStyles;
        if (this.props.useProphecyOfKings) {
            boardOptions = this.state.optionsPossible.boardStylesPok;
        }
        this.setState({
            currentBoardStyleOptions: boardOptions[this.state.currentNumberOfPlayers],
            currentBoardStyle: boardOptions[this.state.currentNumberOfPlayers][0],
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

    capitalize(str) {
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
        let possibleTiles = this.getPossiblePlanets()

        // Check that we will have enough anomalies in our placed planets, if not, then reverse replace until there are enough anomalies
        possibleTiles = this.ensureAnomalies(possibleTiles, planetIndexesToPlace.length)

        // Ensure that if we have an alpha wormhole, then we have at least two of them
        const allAlphaWormholes = this.props.useProphecyOfKings ? [...tileData.alphaWormholes.concat(tileData.pokAlphaWormholes)] : [...tileData.alphaWormholes];
        const allBetaWormholes = this.props.useProphecyOfKings ? [...tileData.betaWormholes.concat(tileData.pokBetaWormholes)] : [...tileData.betaWormholes];

        possibleTiles = this.ensureWormholesForType(possibleTiles, [26], allAlphaWormholes, allBetaWormholes);

        // Ensure that if we have an alpha wormhole, then we have at least two of them
        possibleTiles = this.ensureWormholesForType(possibleTiles, [25, 64], allBetaWormholes, allAlphaWormholes);

        let newTiles = [...boardData.blankMap]

        // Place planets one at a time, using the indexes to place combined with the ordered planet list
        for (let planetIndex in planetIndexesToPlace) {
            newTiles[planetIndexesToPlace[planetIndex]] = possibleTiles.shift();
        }

        // Place hyperlanes in their specific layout and orientation
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

        // Planets have been placed, time to do post processing checks to make sure things are good to go.
        // Get all anomalies that are adjacent to one another
        let allTrueAnomalies = this.props.useProphecyOfKings ? [...tileData.trueAnomaly.concat(tileData.pokTrueAnomaly)] : [...tileData.trueAnomaly];
        for (let anomaly of allTrueAnomalies) {
            let anomalyTileNumber = newTiles.indexOf(anomaly);
            if (anomalyTileNumber >= 0) {
                // anomaly exists in the map, so check it
                let adjacentTiles = adjacencyData[anomalyTileNumber];
                let adjacentAnomalies = [];

                // Get a list of all adjacent anomalies to this one
                for (let adjacentTileNumber of adjacentTiles) {
                    let adjacentTile = newTiles[adjacentTileNumber];
                    if (allTrueAnomalies.indexOf(adjacentTile) >= 0) {
                        // This tile is an anomaly
                        adjacentAnomalies.push(adjacentTile)
                    }
                }

                // If tile is in conflict more than 1 anomaly, see if there is a "blank" anomaly off the board to swap with. if not, then continue
                let swapped = false;
                let blankReds = this.props.useProphecyOfKings ? [...tileData.blankAnomaly.concat(tileData.pokBlankAnomaly)] : [...tileData.blankAnomaly];
                if (adjacentAnomalies.length > 1) {
                    let possibleBlanks = [];
                    for (let blankRed of blankReds) {
                        if (newTiles.indexOf(blankRed) < 0) {
                            possibleBlanks.push(blankRed)
                        }
                    }
                    possibleBlanks = this.shuffle(possibleBlanks, this.state.currentSeed);
                    if (possibleBlanks.length > 0) {
                        swapped = true;
                        newTiles[anomalyTileNumber] = possibleBlanks[0];
                    }
                }

                if (!swapped && adjacentAnomalies.length > 0) {
                    // Look at all red back tiles on the board that are not anomalies, and see if they have adjacent anomalies
                    // Test this code with 2 player, everything else base, seed of 9986
                    for (let blankRed of blankReds) {
                        let blankRedTileNumber = newTiles.indexOf(blankRed)
                        if (blankRedTileNumber >= 0) {
                            let adjacentTiles = adjacencyData[blankRedTileNumber];
                            let swappable = true;
                            for (let adjacentTile of adjacentTiles) {
                                if (allTrueAnomalies.indexOf(newTiles[adjacentTile]) >= 0 && adjacentTile !== anomalyTileNumber) {
                                    // This blank has an adjacent anomaly, so throw it out
                                    swappable = false;
                                    break;
                                }
                            }
                            if (swappable) {
                                // This blank red has no other adjacent anomalies, so swap
                                newTiles[anomalyTileNumber] = blankRed;
                                newTiles[blankRedTileNumber] = anomaly;
                                swapped = true;
                                break;
                            }
                        }
                    }
                    if (!swapped) {
                        /*
                        There is a potential use for this strategy, but for now it seems pretty safe to just let it fail
                        to swap on a blank. It is rare that it is impossible, and even when it is, its a pretty simple
                        rule. Plus the rules let you place reds next to each other if moving them is impossible.
                        btw, not sure this code below works properly. I believe there is a bug in it.
                         */

                        /*
                        // Going in reverse, find the first tile with no anomalies adjacent, and swap
                        newTiles.reverse()
                        for (let tile of newTiles) {
                            if (tile !== 0 && tile !== -1 && allTrueAnomalies.indexOf(tile) < 0 && blankReds.indexOf(tile) < 0) {
                                console.log("Tile: " + tile)
                                // This is a real tile, check for adjacency to other anomalies
                                let blankRedTileNumber = newTiles.indexOf(tile)
                                let adjacentTiles = adjacencyData[blankRedTileNumber];
                                let swappable = true;
                                for (let adjacentTile of adjacentTiles) {
                                    if (allTrueAnomalies.indexOf(newTiles[adjacentTile]) >= 0) {
                                        // This blank has an adjacent anomaly, so throw it out
                                        swappable = false;
                                        break;
                                    }
                                }
                                if (swappable) {
                                    // No adjacency breaks found, go ahead and swap it
                                    console.log(anomalyTileNumber)
                                    console.log(blankRedTileNumber)
                                    newTiles[anomalyTileNumber] = tile;
                                    newTiles[blankRedTileNumber] = anomaly;
                                    swapped = true;
                                    break;
                                }
                            }
                        }
                        // If no swap possible, no problem. Continue on
                        newTiles.reverse()
                        */
                    }
                }
            }
        }

        // Alpha, at least one wormhole is a "empty tile" so swap it with a blank tile
        for (let alphaWormhole of allAlphaWormholes) {
            let alphaWormholeTileNumber = newTiles.indexOf(alphaWormhole);
            if (alphaWormholeTileNumber >= 0 && tileData.all[alphaWormhole].planets.length === 0) {
                // Wormhole exists on the board, and is blank. Check if it is adjacent to another wormhole
                let adjacentTileNumbers = adjacencyData[alphaWormholeTileNumber];
                let adjacentWormhole = false;
                for (let adjacentTileNumber of adjacentTileNumbers) {
                    if (allAlphaWormholes.indexOf(newTiles[adjacentTileNumber]) >= 0) {
                        adjacentWormhole = true;
                        break;
                    }
                }
                if (adjacentWormhole) {
                    // This blank has an adjacent wormhole, so we need to move it. Loop over all blanks to swap with
                    let blankReds = this.props.useProphecyOfKings ? [...tileData.blankAnomaly.concat(tileData.pokBlankAnomaly)] : [...tileData.blankAnomaly];
                    // Remove wormholes from blank reds, because swapping alphas doesn't make sense.
                    blankReds = blankReds.filter( function( el ) {
                        return allAlphaWormholes.indexOf( el ) < 0;
                    } );
                    blankReds = this.shuffle(blankReds, this.state.currentSeed);
                    for (let blankRed of blankReds) {
                        let blankRedTileNumber = newTiles.indexOf(blankRed)
                        if (blankRedTileNumber >= 0) {
                            let adjacentTilesNumbers = adjacencyData[blankRedTileNumber];
                            let swappable = true;
                            for (let adjacentTileNumber of adjacentTilesNumbers) {
                                if ((allAlphaWormholes.indexOf(newTiles[adjacentTileNumber]) >= 0 && adjacentTileNumber !== alphaWormholeTileNumber) || (allTrueAnomalies.indexOf(alphaWormhole) >= 0 && allTrueAnomalies.indexOf(newTiles[adjacentTileNumber]) >= 0)) {
                                    // This blank has an adjacent anomaly, so throw it out
                                    swappable = false;
                                    break;
                                }
                            }
                            if (swappable) {
                                // This blank red has no other adjacent anomalies, so swap
                                newTiles[alphaWormholeTileNumber] = blankRed;
                                newTiles[blankRedTileNumber] = alphaWormhole;
                                break;
                            }
                        }
                    }
                }
            }
        }
        // Beta at least one planet wormhole, so swap it with another planet of equal resource value
        for (let betaWormhole of allBetaWormholes) {
            let betaWormholeTileNumber = newTiles.indexOf(betaWormhole);
            if (betaWormholeTileNumber >= 0 && tileData.all[betaWormhole].planets.length === 0) {
                // Wormhole exists on the board, and is blank. Check if it is adjacent to another wormhole
                let adjacentTileNumbers = adjacencyData[betaWormholeTileNumber];
                let adjacentWormhole = false;
                for (let adjacentTileNumber of adjacentTileNumbers) {
                    if (allBetaWormholes.indexOf(newTiles[adjacentTileNumber]) >= 0) {
                        adjacentWormhole = true;
                        break;
                    }
                }
                if (adjacentWormhole) {
                    // This blank has an adjacent wormhole, so we need to move it. Loop over all blanks to swap with
                    let blankReds = this.props.useProphecyOfKings ? [...tileData.safe.concat(tileData.pokSafe)] : [...tileData.safe];
                    // Remove wormholes from blank reds, because swapping alphas doesn't make sense.
                    blankReds = blankReds.filter( function( el ) {
                        return allBetaWormholes.indexOf( el ) < 0;
                    } );
                    blankReds = this.shuffle(blankReds, this.state.currentSeed);
                    for (let blankRed of blankReds) {
                        let blankRedTileNumber = newTiles.indexOf(blankRed)
                        if (blankRedTileNumber >= 0) {
                            let adjacentTilesNumbers = adjacencyData[blankRedTileNumber];
                            let swappable = true;
                            for (let adjacentTileNumber of adjacentTilesNumbers) {
                                // Check for adjacency to another wormhole (excluding itself) and other anomalies
                                if ((allBetaWormholes.indexOf(newTiles[adjacentTileNumber]) >= 0 && adjacentTileNumber !== betaWormholeTileNumber)) {
                                    //
                                    swappable = false;
                                    break;
                                }
                            }
                            if (swappable) {
                                // This blank red has no other adjacent anomalies, so swap
                                newTiles[betaWormholeTileNumber] = blankRed;
                                newTiles[blankRedTileNumber] = betaWormhole;
                                break;
                            }
                        }
                    }
                }
            }
        }

        // Update the seed we are using (so it is displayed) and then update the tiles
        this.setState({
            currentSeed: currentSeed,
            generated: true
        }, this.props.updateTiles(newTiles));
    }

    ensureWormholesForType(possibleTiles, planetWormholes, allWormholes, oppositeWormholes) {
        let allAnomalyList = this.props.useProphecyOfKings ? [...tileData.anomaly.concat(tileData.pokAnomaly)] : [...tileData.anomaly];
        let unusedWormholes = [];
        let usedWormholes = [];

        // Get an array of all unused wormholes
        for (let wormholeIndex in allWormholes) {
            possibleTiles.indexOf(allWormholes[wormholeIndex]) < 0 ?
                unusedWormholes.push(allWormholes[wormholeIndex]) : usedWormholes.push(allWormholes[wormholeIndex]);
        }

        // If there is only one wormhole, then we need to add a new one in
        if (usedWormholes.length === 1) {
            console.log("Error! Only one wormhole!")
            /*
            Lets do some tricky logic here. If we are using a planet wormhole tile, then we want to replace
            another anomaly with one of the other one (pok: two) anomaly wormholes. If we are not using the planet tile,
            then we can try to find a planet to replace with any remaining wormhole tiles.
             */
            unusedWormholes = this.shuffle(unusedWormholes, this.state.currentSeed);
            let excludedTiles = [...allWormholes.concat(oppositeWormholes)];

            // Check that the single used wormhole is not a planet. If not, try to replace some other planet with a planet wormhole
            if (planetWormholes.indexOf(usedWormholes[0]) < 0) {
                unusedWormholes = planetWormholes;
                excludedTiles = excludedTiles.concat(allAnomalyList);
            } // else { // Using a planet, so try to replace the lowest weight tiles with any wormhole tile }
            possibleTiles = this.reverseReplace(possibleTiles, 1, unusedWormholes, excludedTiles, false);
        }

        return possibleTiles;
    }

    ensureAnomalies(possibleTiles, numPlanetsToPlace) {
        // Only care about the tiles we will actually place
        possibleTiles = possibleTiles.slice(0, numPlanetsToPlace);

        // Check that there is a minimum number of anomalies on the board
        let blueTileRatio = 2;
        let redTileRatio = 1;
        // For 3, 4, and 6 player games, there is a different ratio
        switch (this.state.currentNumberOfPlayers) {
            case(3):
                blueTileRatio = 3
                redTileRatio = 1
                break;
            case(4):
                blueTileRatio = 5
                redTileRatio = 3
                break;
            case(6):
                blueTileRatio = 3
                redTileRatio = 2
                break;
        }
        let numAnomaliesLeftToBePlaced = (numPlanetsToPlace / (blueTileRatio + redTileRatio)) * redTileRatio;

        // If there is no anomalies to add, then we are done
        if (numAnomaliesLeftToBePlaced < 0) {
            return possibleTiles
        }

        // Still have to add a certain number of anomalies in. Get a list of possible anomalies we can add to the tile list
        let allAnomalyList = this.props.useProphecyOfKings ? [...tileData.anomaly.concat(tileData.pokAnomaly)] : [...tileData.anomaly];

        // Remove all current anomalies in use from this list
        let possibleAnomalies = []
        for (let anomalyIndex in allAnomalyList) {
            if (possibleTiles.indexOf(allAnomalyList[anomalyIndex]) < 0) {
                // Not using this anomaly yet, so we can add it
                possibleAnomalies.push(allAnomalyList[anomalyIndex])
            } else {
                // Anomaly is already being used
                numAnomaliesLeftToBePlaced -= 1;
            }
        }

        // Randomize, so anomalies we are using are not always the same
        possibleAnomalies = this.shuffle(possibleAnomalies, this.state.currentSeed);

        return this.reverseReplace(possibleTiles, numAnomaliesLeftToBePlaced, possibleAnomalies, allAnomalyList, false)

    }

    /**
     * Replace tiles starting from the lowest weight (bottom of the list being defined by reversPlacementOrder)
     * @param possibleTiles {Int8Array} The ordered list of tiles, cut to the needed size
     * @param numTilesToReplace {Number} The number of tiles we need to try to replace from replacement into possible
     * @param replacementTiles {Int8Array} An array of all the tiles we can pick from to put into possibleTiles
     * @param excludedTiles {Int8Array} An array of tiles we do not want to replace in possible
     * @param reverseBeforeAndAfter {Boolean} Whether we want to reverse the list before and after replacement
     * @returns {Int8Array} An ordered list of tiles, with some tiles being replaced
     */
    reverseReplace (possibleTiles, numTilesToReplace, replacementTiles, excludedTiles, reverseBeforeAndAfter) {
        // If we aren't placing in reverse order, we want to start changing the worst tiles (which are usually last)
        if (reverseBeforeAndAfter) {
            possibleTiles = possibleTiles.reverse()
        }
        let currentTileIndex = possibleTiles.length - 1;

        // While there are anomalies to place and a place to put them...
        while (numTilesToReplace > 0 && replacementTiles.length > 0 && currentTileIndex > 0) {
            // Check the index to see that it is not an anomaly or a 0 or -1 or 18 or hyperlane
            let tileOfInterest = possibleTiles[currentTileIndex]
            if (excludedTiles.indexOf(tileOfInterest) < 0 && tileOfInterest !== -1  && tileOfInterest !== 18 && tileOfInterest !== 0 && typeof tileOfInterest !== "string") {
                // It is a replaceable tile, so fill it from the new anomalies list
                possibleTiles[currentTileIndex] = replacementTiles.shift()
                numTilesToReplace -= 1;
            }
            currentTileIndex -= 1;
        }

        // Undo the reverse from before
        if (reverseBeforeAndAfter) {
            possibleTiles = possibleTiles.reverse()
        }

        return possibleTiles
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
                if (this.props.useProphecyOfKings) {
                    weights = {
                        "resource": 80,
                        "influence": 30,
                        "planet_count": 15,
                        "specialty": 50,
                        "anomaly": 40,
                        "wormhole": 25
                    }
                } else {
                    weights = {
                        "resource": 80,
                        "influence": 30,
                        "planet_count": 15,
                        "specialty": 50,
                        "anomaly": 10,
                        "wormhole": 25
                    }
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

        // Do a little post process shuffling for roughly similar planets
        let currentIndex = 0;
        let currentHighValue = planetWeights[0][1];
        let currentSetToShuffle = [];
        let postPossiblePlanets = [];
        while (currentIndex < planetWeights.length) {
            let planetWeight = planetWeights[currentIndex];
            // Something in this array, lets see if we add to it
            if (planetWeight[1] >= (currentHighValue - this.state.shuffleThreshold)) {
                // Add this item to the array to shuffle
                currentSetToShuffle.push(planetWeight);
            } else {
                // We are now outside our shuffle range. So shuffle what we have, and add it to the post
                currentSetToShuffle = this.shuffle(currentSetToShuffle, this.state.currentSeed)
                postPossiblePlanets = postPossiblePlanets.concat(currentSetToShuffle)
                currentSetToShuffle = [planetWeight]
                currentHighValue = planetWeight[1]
            }

            currentIndex += 1;
        }
        currentSetToShuffle = this.shuffle(currentSetToShuffle, this.state.currentSeed)
        postPossiblePlanets = postPossiblePlanets.concat(currentSetToShuffle)


        // Convert from tuple down to just the tile number
        let orderedPlanets = [];
        for (let weightedPlanet in postPossiblePlanets) {
            orderedPlanets.push(postPossiblePlanets[weightedPlanet][0]);
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
            total_weight += weights['anomaly'] + 40;
            // Providing bonuses to these sections mean the other ones are never used
            // if (tile['anomaly'] === null
            //     || tile['anomaly'] === 'asteroid-field'
            //     || tile['anomaly'] === 'gravity-rift') {
            //     // Give an extra boost to these anomalies, as they are easier to cross than others
            //     total_weight += 20;  // Change total back to 30 if using this
            // }
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

                            {/*<div className="custom-control custom-checkbox d-flex">*/}
                            {/*    <input type="checkbox" className="custom-control-input" id="pickMultipleRaces" name="pickMultipleRaces" checked={this.state.pickMultipleRaces} onChange={this.handleInputChange} />*/}
                            {/*    <label className="custom-control-label" htmlFor="pickMultipleRaces">Let Players Pick From Multiple</label>*/}
                            {/*    <QuestionCircle className="icon" onClick={this.togglePickMultipleRacesHelp} />*/}
                            {/*</div>*/}
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
                         Changing this would cause you to expect different hex layouts, such as different patterns of tiles, usage of hyperlanes, or unorthodox placement of home worlds.
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