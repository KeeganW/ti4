import React from "react";
import { QuestionCircle } from "react-bootstrap-icons";
import { Accordion, Button, Form, Collapse } from "react-bootstrap";
import boardData from "../data/boardData.json";
import tileData, { WORMHOLES } from "../data/tileData";
import raceData from "../data/raceData.json";
import adjacencyData from "../data/adjacencyData.json";
import HelpModal from "./HelpModal";
import SetPlayerNameModal from "./SetPlayerNameModal";
import SetRacesModal from "./SetRacesModal";

const expansionCheck = ({ useProphecyOfKings = false, useUnchartedSpace = false, useAscendentSun = false } = {}) => (
    (id) => (!tileData.pok.includes(id) || useProphecyOfKings) && (!tileData.uncharted.includes(id) || useUnchartedSpace) && (!tileData.sun.includes(id) || useAscendentSun)
)

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
            placementStyles: ["slice", "initial", "home", "random"],
            races: [...raceData["races"]],
            pokRaces: [...raceData["pokRaces"]],
            dsRaces: [...raceData["dsRaces"]],
            homeworlds: raceData["homeSystems"],
            pokHomeworlds: raceData["pokHomeSystems"],
            dsHomeworlds: raceData["dsHomeworlds"]
        }
        const startingPlayers = 6;

        this.state = {
            optionsPossible: startingValues,
            currentNumberOfPlayers: startingPlayers,
            currentNumberOfPlayersOptions: startingValues["numberOfPlayers"],
            currentBoardStyleOptions: startingValues["boardStyles"][startingPlayers],
            currentBoardStyle: startingValues["boardStyles"][startingPlayers][0],
            currentPickStyle: startingValues["pickStyles"][0],
            currentPlacementStyle: startingValues["placementStyles"][0],
            currentSeed: "",
            userSetSeed: false,
            pickRaces: false,
            pickMultipleRaces: false,
            shuffleBoards: false,
            reversePlacementOrder: false,
            ensureRacialAnomalies: true,
            generated: false,

            pickRacesHelp: false,
            boardStyleHelp: false,
            pickStyleHelp: false,
            placementStyleHelp: false,
            setPlayerNamesHelp: false,
            setRacesHelp: false,
            pickMultipleRacesHelp: false,
            shufflePriorityHelp: false,
            reversePlacementOrderHelp: false,
            ensureRacialAnomaliesHelp: false,

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
        this.updateUncharted = this.updateUncharted.bind(this);
        this.updateDS = this.updateDS.bind(this);
        this.updateSun = this.updateSun.bind(this);
        this.updatePlayerCount = this.updatePlayerCount.bind(this);
        this.updateBoardStyle = this.updateBoardStyle.bind(this);
        this.updateSeed = this.updateSeed.bind(this);

        this.ensureAnomalies = this.ensureAnomalies.bind(this);
        this.ensureWormholesForType = this.ensureWormholesForType.bind(this);

        this.updateBoardStyleOptions = this.updateBoardStyleOptions.bind(this); // TODO is the bind needed?

        this.encodeSettings = this.encodeSettings.bind(this);
        this.decodeSettings = this.decodeSettings.bind(this);

        this.generateBoard = this.generateBoard.bind(this);
        this.getNewTileSet = this.getNewTileSet.bind(this);

        this.togglePickRacesHelp = this.togglePickRacesHelp.bind(this);
        this.toggleBoardStyleHelp = this.toggleBoardStyleHelp.bind(this);
        this.togglePickStyleHelp = this.togglePickStyleHelp.bind(this);
        this.togglePlacementStyleHelp = this.togglePlacementStyleHelp.bind(this);
        this.toggleSetPlayerNamesHelp = this.toggleSetPlayerNamesHelp.bind(this);
        this.toggleSetRacesHelp = this.toggleSetRacesHelp.bind(this);
        this.togglePickMultipleRacesHelp = this.togglePickMultipleRacesHelp.bind(this);
        this.toggleShufflePriorityHelp = this.toggleShufflePriorityHelp.bind(this);
        this.toggleReversePlacementOrderHelp = this.toggleReversePlacementOrderHelp.bind(this);
        this.toggleEnsureRacialAnomaliesHelp = this.toggleEnsureRacialAnomaliesHelp.bind(this);
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
        if (race === "none") {  // The deselect all option
            newCurrentRaces = []
        } else if (race === "all") {  // The deselect all option
            if (this.props.useProphecyOfKings) {
                newCurrentRaces = [...this.state.optionsPossible.races.concat(this.state.optionsPossible.pokRaces)]
            } else {
                newCurrentRaces = [...this.state.optionsPossible.races]
            }
        } else {
            let indexToToggle = newCurrentRaces.indexOf(race)
            if (indexToToggle >= 0) {
                newCurrentRaces.splice(indexToToggle, 1)
            } else {
                newCurrentRaces.push(race)
            }
        }

        this.props.updateRaces(newCurrentRaces);
    }

    updatePok(event) {
        let races = [...this.state.optionsPossible.races]
        if (this.props.useDiscordantStars) races = races.concat(this.state.optionsPossible.dsRaces)
        let boardOptions = this.state.optionsPossible.boardStyles;
        if (event.target.checked) {
            boardOptions = this.state.optionsPossible.boardStylesPok;
            this.setState({
                currentNumberOfPlayersOptions: this.state.optionsPossible.numberOfPlayers.concat(this.state.optionsPossible.pokNumberOfPlayers),
                currentBoardStyle: boardOptions[this.state.currentNumberOfPlayers][0],
                currentBoardStyleOptions: boardOptions[this.state.currentNumberOfPlayers],
            }, () => {
                this.props.updateRaces([...races.concat(this.state.optionsPossible.pokRaces)]);
                this.props.toggleProphecyOfKings(event);
            });
        } else {
            this.setState({
                currentNumberOfPlayers: this.state.currentNumberOfPlayers > 6 ? 6 : this.state.currentNumberOfPlayers,
                currentNumberOfPlayersOptions: this.state.optionsPossible.numberOfPlayers,
                currentBoardStyle: this.state.currentNumberOfPlayers > 6 ? boardOptions["6"][0] : this.state.currentBoardStyle,
                currentBoardStyleOptions: this.state.currentNumberOfPlayers > 6 ? boardOptions["6"] : boardOptions[this.state.currentNumberOfPlayers],
            }, () => {
                this.props.updateRaces(races);
                this.props.toggleProphecyOfKings(event);
            });
        }
    }

    updateUncharted(event) {
        this.props.toggleUnchartedSpace(event);
    }

    updateSun(event) {
        this.props.toggleAscendentSun(event);
    }

    updateDS(event) {
        let races = [...this.state.optionsPossible.races]
        if (this.props.useProphecyOfKings) races = races.concat(this.state.optionsPossible.pokRaces)
        if (event.target.checked) {
            this.props.updateRaces([...races.concat(this.state.optionsPossible.dsRaces)]);
        } else {
            this.props.updateRaces(races);
        }
        this.props.toggleDiscordantStars(event);
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

    shuffle(array) {
        let m = array.length, t, i;
        let seed = this.state.currentSeed.valueOf();

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
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    encodeSettings() {
        let encodedSettings = "";

        encodedSettings += this.props.useProphecyOfKings ? "T" : "F";
        encodedSettings += this.props.useUnchartedSpace ? "T" : "F";
        encodedSettings += this.props.useDiscordantStars ? "T" : "F";
        encodedSettings += this.props.useAscendentSun ? "T" : "F";
        encodedSettings += this.state.currentNumberOfPlayers.toString();
        encodedSettings += this.state.currentBoardStyleOptions.indexOf(this.state.currentBoardStyle).toString();
        encodedSettings += this.state.optionsPossible.placementStyles.indexOf(this.state.currentPlacementStyle).toString();
        encodedSettings += this.state.optionsPossible.pickStyles.indexOf(this.state.currentPickStyle).toString();
        if (this.state.currentPickStyle === "custom") {
            encodedSettings += this.state.resourceWeight.toString().padStart(3, "0");
            encodedSettings += this.state.influenceWeight.toString().padStart(3, "0");
            encodedSettings += this.state.planetCountWeight.toString().padStart(3, "0");
            encodedSettings += this.state.specialtyWeight.toString().padStart(3, "0");
            encodedSettings += this.state.anomalyWeight.toString().padStart(3, "0");
            encodedSettings += this.state.wormholeWeight.toString().padStart(3, "0");
        }
        encodedSettings += this.state.currentSeed.toString().padStart(4, "0");
        encodedSettings += this.state.shuffleBoards ? "T" : "F";
        encodedSettings += this.state.reversePlacementOrder ? "T" : "F";
        encodedSettings += this.state.pickRaces ? "T" : "F";
        if (this.state.pickRaces) {
            encodedSettings += this.state.ensureRacialAnomalies ? "T" : "F";
            let combinedRaces = this.state.optionsPossible.races
                .concat(this.state.optionsPossible.pokRaces)
                .concat(this.state.optionsPossible.dsRaces)
            let expectedRaces = 17;
            if (this.props.useProphecyOfKings) expectedRaces += 7
            if (this.props.useDiscordantStars) expectedRaces += 34
            if (this.props.currentRaces.length !== expectedRaces) {
                // Need to encode all races, because it is not the default
                for (let race of this.props.currentRaces) {
                    if (combinedRaces.indexOf(race) >= 0) {
                        encodedSettings += combinedRaces.indexOf(race).toString().padStart(2, "0");
                    }
                }
            }
            let changedPlayerName = false;
            let playerNames = "|"
            for (let playerName of this.props.currentPlayerNames) {
                if (playerName !== "") {
                    changedPlayerName = true;
                }
                playerNames += playerName + "|";
            }
            if (changedPlayerName) {
                encodedSettings += playerNames
                encodedSettings = encodedSettings.slice(0, -1)
            }
        }

        return encodedSettings;
    }

    decodeSettings(newSettings, newTiles) {
        let currentIndex = 0;

        console.log(newSettings)

        // Prophecy of Kings
        let useProphecyOfKings = newSettings[currentIndex] === "T";
        currentIndex += 1;

        // Uncharted Space
        // Compatability with old URL formatting
        let useUnchartedSpace = false
        let useDiscordantStars = false
        let useAscendentSun = false
        if (newSettings[currentIndex] === "T" || newSettings[currentIndex] === "F") {
            useUnchartedSpace = newSettings[currentIndex] === "T";
            currentIndex += 1;
            useDiscordantStars = newSettings[currentIndex] === "T";
            currentIndex += 1;
            useAscendentSun = newSettings[currentIndex] === "T";
            currentIndex += 1;
        }

        // Number of Players
        let currentNumberOfPlayers = Number(newSettings[currentIndex]);
        currentIndex += 1;
        let currentNumberOfPlayersOptions = useProphecyOfKings ? this.state.optionsPossible.numberOfPlayers.concat(this.state.optionsPossible.pokNumberOfPlayers) : this.state.optionsPossible.numberOfPlayers;

        // Board Style
        let currentBoardStyleOptions = useProphecyOfKings ? this.state.optionsPossible.boardStylesPok[currentNumberOfPlayers] : this.state.optionsPossible.boardStyles[currentNumberOfPlayers];
        let currentBoardStyle = currentBoardStyleOptions[Number(newSettings[currentIndex])]
        currentIndex += 1;

        // Placement Style
        let currentPlacementStyle = this.state.optionsPossible.placementStyles[Number(newSettings[currentIndex])];
        currentIndex += 1;

        // Pick Style
        let currentPickStyle = this.state.optionsPossible.pickStyles[Number(newSettings[currentIndex])];
        currentIndex += 1;

        let resourceWeight = this.state.resourceWeight;
        let influenceWeight = this.state.influenceWeight;
        let planetCountWeight = this.state.planetCountWeight;
        let specialtyWeight = this.state.specialtyWeight;
        let anomalyWeight = this.state.anomalyWeight;
        let wormholeWeight = this.state.wormholeWeight;
        if (currentPickStyle === "custom") {
            resourceWeight = Number(newSettings.substring(currentIndex, currentIndex + 3));
            currentIndex += 3;
            influenceWeight = Number(newSettings.substring(currentIndex, currentIndex + 3));
            currentIndex += 3;
            planetCountWeight = Number(newSettings.substring(currentIndex, currentIndex + 3));
            currentIndex += 3;
            specialtyWeight = Number(newSettings.substring(currentIndex, currentIndex + 3));
            currentIndex += 3;
            anomalyWeight = Number(newSettings.substring(currentIndex, currentIndex + 3));
            currentIndex += 3;
            wormholeWeight = Number(newSettings.substring(currentIndex, currentIndex + 3));
            currentIndex += 3;
        }

        // Current Seed
        let currentSeed = Number(newSettings.substring(currentIndex, currentIndex + 4));
        currentIndex += 4;

        // Shuffle Boards
        let shuffleBoards = newSettings[currentIndex] === "T";
        currentIndex += 1;

        // Reverse Placement Order
        let reversePlacementOrder = newSettings[currentIndex] === "T";
        currentIndex += 1;

        // Pick Races
        let pickRaces = newSettings[currentIndex] === "T";
        currentIndex += 1;

        let currentPlayerNames = this.props.currentPlayerNames;
        let currentRaces = this.props.currentRaces;
        let ensureRacialAnomalies = this.props.ensureRacialAnomalies;
        if (pickRaces) {
            // Ensure Racial Anomalies
            ensureRacialAnomalies = newSettings[currentIndex] === "T";
            currentIndex += 1;

            if (newSettings[currentIndex] !== "|") {
                if (newSettings[currentIndex] !== undefined) {
                    // Custom races, but not all of them
                    currentRaces = [];
                    let combinedRaces = this.state.optionsPossible.races
                        .concat(this.state.optionsPossible.pokRaces)
                        .concat(this.state.optionsPossible.dsRaces)
                    while (newSettings[currentIndex] !== "|" && currentIndex !== newSettings.length) {
                        currentRaces.push(combinedRaces[Number(newSettings.substring(currentIndex, currentIndex + 2))])
                        currentIndex += 2
                    }
                } else {
                    currentRaces = this.state.optionsPossible.races;
                    if (useProphecyOfKings) currentRaces = currentRaces.concat(this.state.optionsPossible.pokRaces)
                    if (useDiscordantStars) currentRaces = currentRaces.concat(this.state.optionsPossible.dsRaces)
                }
            } else {
                // No custom races, but player names are specified, so parse them
                currentPlayerNames = newSettings.substring(currentIndex).split("|").splice(1);
            }
        }

        this.setState({
            currentNumberOfPlayers: currentNumberOfPlayers,
            currentNumberOfPlayersOptions: currentNumberOfPlayersOptions,
            currentBoardStyle: currentBoardStyle,
            currentBoardStyleOptions: currentBoardStyleOptions,
            currentPlacementStyle: currentPlacementStyle,
            currentPickStyle: currentPickStyle,
            resourceWeight: resourceWeight,
            influenceWeight: influenceWeight,
            planetCountWeight: planetCountWeight,
            specialtyWeight: specialtyWeight,
            anomalyWeight: anomalyWeight,
            wormholeWeight: wormholeWeight,
            currentSeed: currentSeed,
            shuffleBoards: shuffleBoards,
            reversePlacementOrder: reversePlacementOrder,
            pickRaces: pickRaces,
            ensureRacialAnomalies: ensureRacialAnomalies,
        }, () => {
            this.props.updateRaces(currentRaces);
            this.props.updatePlayerNames(currentPlayerNames);

            if ((useProphecyOfKings && !this.props.useProphecyOfKings) || (!useProphecyOfKings && this.props.useProphecyOfKings)) {
                this.props.toggleProphecyOfKings();
            }
            if ((useUnchartedSpace && !this.props.useUnchartedSpace) || (!useUnchartedSpace && this.props.useUnchartedSpace)) {
                this.props.toggleUnchartedSpace();
            }
            if ((useAscendentSun && !this.props.useAscendentSun) || (!useAscendentSun && this.props.useAscendentSun)) {
                this.props.toggleAscendentSun();
            }
            if ((useDiscordantStars && !this.props.useDiscordantStars) || (!useDiscordantStars && this.props.useDiscordantStars)) {
                this.props.toggleDiscordantStars();
            }

            if (newTiles.length > 0) {
                // Tiles were changed after rendering, so we need to display them
                this.props.updateTiles(newTiles, newSettings);
            } else {
                this.props.updateTiles(this.getNewTileSet(currentRaces, { useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }), newSettings, false);
            }
        })


    }

    /**
     * Create a new board using a custom seed.
     * @param event The event which triggered this action, to be ignored.
     */
    generateBoard(event) {
        // Don't actually submit the form
        if (event !== undefined) {
            event.preventDefault();
        }

        // Create a random seed to use unless the user has specified one
        let currentSeed = this.state.currentSeed
        if (!this.state.userSetSeed) {
            currentSeed = Math.floor(Math.random() * Math.floor(9999));
        }

        this.setState({
            currentSeed: currentSeed,
            generated: true,
        }, () => {
            this.props.updateTiles(this.getNewTileSet(), this.encodeSettings(), true);
        });

    }

    /**
     * Create a set of new tiles for the board based on the user's input.
     */
    getNewTileSet(currentRaces, { useProphecyOfKings = undefined, useUnchartedSpace = undefined, useAscendentSun = undefined } = {}) {
        if (useProphecyOfKings === undefined) {
            useProphecyOfKings = this.props.useProphecyOfKings
        }

        // console.log(this.props.useUnchartedSpace)
        if (useUnchartedSpace === undefined) {
            useUnchartedSpace = this.props.useUnchartedSpace
        }

        // console.log(this.props.useUnchartedSpace)
        if (useAscendentSun === undefined) {
            useAscendentSun = this.props.useAscendentSun
        }

        // Get an ordered list of board spaces that need to have non-home systems assigned to them
        let systemIndexes = this.getNewTilesToPlace()

        // Get current races for placing races, and shuffle them around
        if (currentRaces === undefined) {
            currentRaces = [...this.props.currentRaces]
        } else {
            currentRaces = [...currentRaces]
        }
        this.shuffle(currentRaces)
        currentRaces = currentRaces.slice(0, this.state.currentNumberOfPlayers)

        // Get a set of systems to make the board with, ordered based on user supplied weights
        let newSystems = this.getNewSystemsToPlace(systemIndexes.length, currentRaces, { useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun })

        // Copy a blank map to add to
        let newTiles = [...boardData.blankMap]

        // Put Mecatol Rex in the middle
        newTiles[0] = 18

        // Place hyperlanes
        this.placeHyperlanes(newTiles)

        // Place home planets
        this.placeHomeSystems(newTiles, currentRaces)

        // Place planets one at a time, using the indexes to place combined with the ordered planet list
        for (let systemIndex of systemIndexes) {
            newTiles[systemIndex] = newSystems.shift();
        }

        // Place any systems that were locked from the previous generation
        this.placeLockedSystems(newTiles)

        // Check that anomalies and wormholes are not adjacent
        this.checkAdjacencies(newTiles, { useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun })

        // Update the generated flag then update the tiles
        return newTiles;
    }

    /**
     * Generate a list of index on the board that need to be filled with tiles. The various inputs include:
     * Board Data: Information about what this board looks like, the tiles split into 3 groupings of importance
     * Random Priority: Whether the first player goes first, or who gets the various picks is randomized
     * Placement Style: How the groupings of tiles should be added to the board
     * Reverse Placement Order: Whether the groupsings should be added in reverse order
     * @returns {number[]} A list of indexes on the board that need to be filled in with system tiles
     */
    getNewTilesToPlace() {
        // Copy all the tile arrays from board data
        let primary = [...boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]["primary_tiles"]];
        let secondary = [...boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]["secondary_tiles"]];
        let tertiary = [...boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]["tertiary_tiles"]];

        // If shuffling, we need to shuffle primary, secondary, and tertiary indexes.
        if (this.state.shuffleBoards) {
            this.shuffle(primary);
            this.shuffle(secondary);
            this.shuffle(tertiary);
        }

        // Based on the placement style, generate the list of indexes to place
        let systemIndexes = [];
        switch (this.state.currentPlacementStyle) {
            case ("random"):
                // Add them all together and shuffle them
                if (this.state.reversePlacementOrder) {
                    systemIndexes = tertiary.concat(secondary).concat(primary);
                } else {
                    systemIndexes = primary.concat(secondary).concat(tertiary);
                }
                this.shuffle(systemIndexes);
                break;
            case ("initial"):
                // Primary tiles are separate from the secondary shuffled tiles
                if (this.state.reversePlacementOrder) {
                    systemIndexes = this.shuffle(secondary.concat(tertiary)).concat(primary);
                } else {
                    systemIndexes = primary.concat(this.shuffle(secondary.concat(tertiary)));
                }
                break;
            case ("home"):
                // Primary tiles are tiles adjacent to home systems
                systemIndexes = primary.concat(secondary).concat(tertiary);

                // Get home systems
                let home = [...boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]["home_worlds"]];
                let newPrimary = [];
                for (let homeSystem of home) {
                    // Loop over adjacent systems
                    let adjacentSystems = adjacencyData[homeSystem];
                    for (let adjacentSystem of adjacentSystems) {
                        // Remove the adjacent system from the complete list (if it exists), and add it to the front
                        if (systemIndexes.indexOf(adjacentSystem) >= 0) {
                            newPrimary.push(adjacentSystem);
                            systemIndexes.splice(systemIndexes.indexOf(adjacentSystem), 1);
                        }
                    }
                }

                // Add the adjacent planets to the front of the list
                this.shuffle(newPrimary);
                if (this.state.reversePlacementOrder) {
                    systemIndexes = systemIndexes.concat(newPrimary);
                } else {
                    systemIndexes = newPrimary.concat(systemIndexes);
                }
                break;
            case ("slice"):
            default:
                // Combine them in their listed order
                if (this.state.reversePlacementOrder) {
                    systemIndexes = tertiary.concat(secondary).concat(primary);
                } else {
                    systemIndexes = primary.concat(secondary).concat(tertiary);
                }
                break;
        }

        return systemIndexes;
    }

    /**
     *
     * Get an array of system tile numbers to place on the board.
     * @param {number} numberOfSystems The number of systems to get.
     * @param {boolean} useProphecyOfKings TODO
     * @returns {[]}
     */
    getNewSystemsToPlace(numberOfSystems, currentRaces, { useProphecyOfKings = false, useUnchartedSpace = false, useAscendentSun = false } = {}) {
        // Pick our a random set of systems, following the needed number of anomalies
        // let allBlues = useProphecyOfKings ? [...tileData.blue.concat(tileData.pokBlue)] : [...tileData.blue];
        let allBlues = tileData.blue.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
        // let allReds = useProphecyOfKings ? [...tileData.red.concat(tileData.pokRed)] : [...tileData.red];
        let allReds = tileData.red.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));

        // Remove excluded tiles
        for (let system of this.props.excludedTiles) {
            if (allReds.indexOf(system) >= 0) {
                allReds.splice(allReds.indexOf(system), 1);
            } else if (allBlues.indexOf(system) >= 0) {
                allBlues.splice(allBlues.indexOf(system), 1);
            }
        }

        // Shuffle our tiles for randomness
        this.shuffle(allBlues)
        this.shuffle(allReds)

        // Calculate how many reds we need based on player count
        let blueTileRatio = 2;
        let redTileRatio = 1;

        //If the board style overrides blue and red ratios we use those values, otherwise we go to the switch statement
        const currentBoardStyle = boardData.styles[this.state.currentNumberOfPlayers][this.state.currentBoardStyle];
        if (currentBoardStyle['overrideRatios'] !== undefined) {
            blueTileRatio = currentBoardStyle['overrideRatios']['blueTileRatio'];
            redTileRatio = currentBoardStyle['overrideRatios']['redTileRatio'];
        } else {
            // For 3, 4, and 6 player games, there is a different ratio
            switch (this.state.currentNumberOfPlayers) {
                case (3):
                    blueTileRatio = 3
                    redTileRatio = 1
                    break;
                case (4):
                    blueTileRatio = 5
                    redTileRatio = 3
                    break;
                case (6):
                    blueTileRatio = 3
                    redTileRatio = 2
                    break;
                default:
                    break;
            }
        }

        let redsToPlace = Math.round(Number((numberOfSystems / (blueTileRatio + redTileRatio)) * redTileRatio));
        let bluesToPlace = Math.round(Number((numberOfSystems / (blueTileRatio + redTileRatio)) * blueTileRatio));

        // If planet heavy system, then reduce number of anomalies
        // if (false) {
        //     let newRedsToPlace = 2; // TODO make this user configurable
        //     if (newRedsToPlace > redsToPlace) {
        //         bluesToPlace = bluesToPlace - (newRedsToPlace - redsToPlace);
        //     } else if (newRedsToPlace < redsToPlace) {
        //         bluesToPlace = bluesToPlace + (redsToPlace - newRedsToPlace);
        //     }
        //     redsToPlace = newRedsToPlace
        // }

        // Start to get the new systems
        let newSystems = [];

        // Force add in the included tiles
        for (let system of this.props.includedTiles) {
            if (newSystems.indexOf(system) < 0) {
                newSystems.push(system);

                // Remove them from the pool to add
                if (allReds.indexOf(system) >= 0) {
                    allReds.splice(allReds.indexOf(system), 1);
                    redsToPlace -= 1;
                } else {
                    allBlues.splice(allBlues.indexOf(system), 1);
                    bluesToPlace -= 1;
                }
            }
        }

        // Force add in the locked tiles
        for (let system of this.props.lockedTiles) {
            if (newSystems.indexOf(system) < 0) {
                newSystems.push(system);

                // Remove them from the pool to add
                if (allReds.indexOf(system) >= 0) {
                    allReds.splice(allReds.indexOf(system), 1);
                    redsToPlace -= 1;
                } else {
                    allBlues.splice(allBlues.indexOf(system), 1);
                    bluesToPlace -= 1;
                }
            }
        }

        // These tiles are ensured for races and may not be replaced
        const ensuredAnomalies = [];

        if (this.state.ensureRacialAnomalies && this.state.pickRaces) {
            currentRaces.forEach(race => {
                let anomalies = []
                let match = false;
                // If The Clan of Saar are in the game, ensure we have an asteroid field
                if (race === 'The Clan of Saar') {
                    // anomalies = useProphecyOfKings ? [...tileData.asteroidFields.concat(tileData.pokAsteroidFields)] : [...tileData.asteroidFields];
                    anomalies = tileData.asteroidFields.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
                    match = true;
                    // If The Embers of Muaat are in the game, ensure we have a supernova
                } else if (race === 'The Embers of Muaat') {
                    // anomalies = useProphecyOfKings ? [...tileData.supernovas.concat(tileData.pokSupernovas)] : [...tileData.supernovas];
                    anomalies = tileData.supernovas.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
                    match = true;
                    // If The Empyrean are in the game, ensure we have a nebulae
                } else if (race === 'The Empyrean') {
                    // anomalies = useProphecyOfKings ? [...tileData.nebulae.concat(tileData.pokNebulae)] : [...tileData.nebulae];
                    anomalies = tileData.nebulae.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
                    match = true;
                    // If The Vuil'Raith Cabal or Nivyn Star Kings are in the game, ensure we have a gravity rift
                } else if (race === "The Vuil'Raith Cabal" || race === "The Nivyn Star Kings") {
                    // anomalies = useProphecyOfKings ? [...tileData.gravityRifts.concat(tileData.pokGravityRifts)] : [...tileData.gravityRifts];
                    anomalies = tileData.gravityRifts.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
                    match = true;
                }
                if (match && redsToPlace > 0) {
                    // Check if the tile is already included
                    const found = anomalies.some(tile => newSystems.includes(tile));
                    // If not we add it
                    if (!found) {
                        this.shuffle(anomalies);
                        newSystems.push(anomalies[0]);
                        ensuredAnomalies.push(anomalies[0]);
                        allReds.splice(allReds.indexOf(anomalies[0]), 1);
                        redsToPlace -= 1;
                    } else {
                        ensuredAnomalies.push(newSystems.find(system => anomalies.includes(system)));
                    }
                }
            });
        }

        // Place as many as possible from tile type if there is not enough to place
        if (redsToPlace > allReds.length) {
            newSystems = newSystems.concat(allBlues.slice(0, bluesToPlace + (redsToPlace - allReds.length)).concat(allReds))
        } else if (bluesToPlace > allBlues.length) {
            newSystems = newSystems.concat(allBlues.concat(allReds.slice(0, redsToPlace + (bluesToPlace - allBlues.length))))
        } else {
            newSystems = newSystems.concat(allBlues.slice(0, bluesToPlace).concat(allReds.slice(0, redsToPlace)))
        }

        // const allAlphaWormholes = tileData.alphaWormholes.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
        // const allBetaWormholes = tileData.betaWormholes.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));

        // Ensure that if a wormhole is included, two are (except gamma)
        for (const wormhole in WORMHOLES) {
            if (WORMHOLES[wormhole] === WORMHOLES.GAMMA) continue
            const allWormholesOfType = tileData[`${WORMHOLES[wormhole]}Wormholes`].filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
            newSystems = this.ensureWormholesForType(newSystems, allWormholesOfType, ensuredAnomalies, { useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun });
        }

        // newSystems = this.ensureWormholesForType(newSystems, allAlphaWormholes, ensuredAnomalies, { useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace });
        // newSystems = this.ensureWormholesForType(newSystems, allBetaWormholes, ensuredAnomalies, { useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace });

        // Based on the system style, order the systems according to their weights
        let weights = {};
        switch (this.state.currentPickStyle) {
            case "random":
                this.shuffle(newSystems)
                return newSystems
            case "custom":
                weights = {
                    "resource": parseInt(this.state.resourceWeight),
                    "influence": parseInt(this.state.influenceWeight),
                    "planet_count": parseInt(this.state.planetCountWeight),
                    "specialty": parseInt(this.state.specialtyWeight),
                    "anomaly": parseInt(this.state.anomalyWeight),
                    "wormhole": parseInt(this.state.wormholeWeight),
                    "racial": parseInt(this.state.wormholeWeight) - 5
                }
                break;
            case "resource":
                weights = {
                    "resource": 100,
                    "influence": 10,
                    "planet_count": 10,
                    "specialty": 10,
                    "anomaly": 10,
                    "wormhole": 10,
                    "racial": 5
                }
                break;
            case "influence":
                weights = {
                    "resource": 10,
                    "influence": 100,
                    "planet_count": 10,
                    "specialty": 10,
                    "anomaly": 10,
                    "wormhole": 10,
                    "racial": 5
                }
                break;
            case "balanced":
            default:
                if (useProphecyOfKings) {
                    weights = {
                        "resource": 80,
                        "influence": 30,
                        "planet_count": 15,
                        "specialty": 50,
                        "anomaly": 40,
                        "wormhole": 25,
                        "racial": 20
                    }
                } else {
                    weights = {
                        "resource": 80,
                        "influence": 30,
                        "planet_count": 15,
                        "specialty": 40,
                        "anomaly": 30,
                        "wormhole": 25,
                        "racial": 20
                    }
                }
                break;
        }

        // Re-order the planets based on their weights
        newSystems = this.getWeightedPlanetList(newSystems, weights, ensuredAnomalies)

        return newSystems

    }
    placeHyperlanes(newTiles) {
        // Place hyperlanes in their specific layout and orientation
        // TODO in the future, can this be random? Can they rotate?
        for (let index = 0; index < boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['hyperlane_tiles'].length; index++) {
            let hyperlaneData = boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['hyperlane_tiles'][index]
            newTiles[hyperlaneData[0]] = hyperlaneData[1] + "-" + hyperlaneData[2]
        }
    }
    placeHomeSystems(newTiles, currentRaces) {
        // Place data for the homeSystems from board data
        for (let index = 0; index < boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['home_worlds'].length; index++) {
            let planetIndex = boardData.styles[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['home_worlds'][index]
            if (this.state.pickRaces && !this.state.pickMultipleRaces) {
                // Convert races into race hexes and assign a random race to a player
                newTiles[planetIndex] = raceData.raceToHomeSystemMap[currentRaces[0]]
                currentRaces.shift();
            } else {
                // Set home worlds to 0, races to be decided later
                newTiles[planetIndex] = 0
            }
        }
    }
    placeLockedSystems(newTiles) {
        for (let system of this.props.lockedTiles) {
            // Get location in current tile set
            let currentLocation = this.props.tiles.indexOf(system);
            if (currentLocation >= 0) {
                // It exists, so get its location on the current board
                let newTilesLocation = newTiles.indexOf(system);

                // Swap the two tiles
                newTiles[newTilesLocation] = newTiles[currentLocation];
                newTiles[currentLocation] = system;
            }
        }
    }
    checkAdjacencies(newTiles, { useProphecyOfKings = false, useUnchartedSpace = false, useAscendentSun = false } = {}) {// Planets have been placed, time to do post processing checks to make sure things are good to go.
        // Get all anomalies that are adjacent to one another
        // let allTrueAnomalies = useProphecyOfKings ? [...tileData.anomaly.concat(tileData.pokAnomaly)] : [...tileData.anomaly];
        let allTrueAnomalies = tileData.anomaly.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));

        for (let anomaly of allTrueAnomalies) {
            // Ignore any anomalies in the locked or include list
            if (this.props.includedTiles.indexOf(anomaly) < 0 && this.props.lockedTiles.indexOf(anomaly) < 0) {

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
                    // let blankReds = useProphecyOfKings ? [...tileData.blankRed.concat(tileData.pokBlankRed)] : [...tileData.blankRed];
                    let blankReds = tileData.blankRed.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
                    if (adjacentAnomalies.length > 1) {
                        let possibleBlanks = [];
                        for (let blankRed of blankReds) {
                            if (newTiles.indexOf(blankRed) < 0) {
                                possibleBlanks.push(blankRed)
                            }
                        }
                        possibleBlanks = this.shuffle(possibleBlanks);
                        if (possibleBlanks.length > 0) {
                            swapped = true;
                            newTiles[anomalyTileNumber] = possibleBlanks[0];
                        }
                    }

                    if (!swapped && adjacentAnomalies.length > 0) {
                        // Look at all red back tiles on the board that are not anomalies, and see if they have adjacent anomalies
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
                            // let blankReds = useProphecyOfKings ? [...tileData.blankRed.concat(tileData.pokBlankRed)] : [...tileData.blankRed];
                            let blankReds = tileData.blankRed.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
                            let possibleBlanks = [];
                            for (let blankRed of blankReds) {
                                if (newTiles.indexOf(blankRed) < 0) {
                                    possibleBlanks.push(blankRed)
                                }
                            }
                            possibleBlanks = this.shuffle(possibleBlanks);
                            if (possibleBlanks.length > 0) {
                                swapped = true;
                                newTiles[anomalyTileNumber] = possibleBlanks[0];
                            }
                            if (!swapped) {
                                console.log("Error! Unable to swap anomaly to a free position.")
                            }
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
        }

        // // const allAlphaWormholes = useProphecyOfKings ? [...tileData.alphaWormholes.concat(tileData.pokAlphaWormholes)] : [...tileData.alphaWormholes];
        // const allAlphaWormholes = tileData.alphaWormholes.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
        // // const allBetaWormholes = useProphecyOfKings ? [...tileData.betaWormholes.concat(tileData.pokBetaWormholes)] : [...tileData.betaWormholes];
        // const allBetaWormholes = tileData.betaWormholes.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));

        for (const wormhole in WORMHOLES) {
            const allWormholesOfType = tileData[`${WORMHOLES[wormhole]}Wormholes`].filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
            for (let womrhole of allWormholesOfType) {
                let wormholeTileNumber = newTiles.indexOf(womrhole);
                if (wormholeTileNumber >= 0 && tileData.all[womrhole].planets.length === 0) {
                    // Wormhole exists on the board, and is blank. Check if it is adjacent to another wormhole
                    let adjacentTileNumbers = adjacencyData[wormholeTileNumber];
                    let adjacentWormhole = false;
                    for (let adjacentTileNumber of adjacentTileNumbers) {
                        if (allWormholesOfType.indexOf(newTiles[adjacentTileNumber]) >= 0) {
                            adjacentWormhole = true;
                            break;
                        }
                    }
                    if (adjacentWormhole) {
                        // This blank has an adjacent wormhole, so we need to move it. Loop over all blanks to swap with
                        let blankReds = tileData.blankRed.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
                        // Remove wormholes from blank reds, because swapping alphas doesn't make sense.
                        blankReds = blankReds.filter(function (el) {
                            return allWormholesOfType.indexOf(el) < 0;
                        });
                        blankReds = this.shuffle(blankReds);
                        for (let blankRed of blankReds) {
                            let blankRedTileNumber = newTiles.indexOf(blankRed)
                            if (blankRedTileNumber >= 0) {
                                let adjacentTilesNumbers = adjacencyData[blankRedTileNumber];
                                let swappable = true;
                                for (let adjacentTileNumber of adjacentTilesNumbers) {
                                    if ((allWormholesOfType.indexOf(newTiles[adjacentTileNumber]) >= 0 && adjacentTileNumber !== wormholeTileNumber) || (allTrueAnomalies.indexOf(womrhole) >= 0 && allTrueAnomalies.indexOf(newTiles[adjacentTileNumber]) >= 0)) {
                                        // This blank has an adjacent anomaly, so throw it out
                                        swappable = false;
                                        break;
                                    }
                                }
                                if (swappable) {
                                    // This blank red has no other adjacent anomalies, so swap
                                    newTiles[wormholeTileNumber] = blankRed;
                                    newTiles[blankRedTileNumber] = womrhole;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }

        // // Alpha, at least one wormhole is a "empty tile" so swap it with a blank tile
        // for (let alphaWormhole of allAlphaWormholes) {
        //     let alphaWormholeTileNumber = newTiles.indexOf(alphaWormhole);
        //     if (alphaWormholeTileNumber >= 0 && tileData.all[alphaWormhole].planets.length === 0) {
        //         // Wormhole exists on the board, and is blank. Check if it is adjacent to another wormhole
        //         let adjacentTileNumbers = adjacencyData[alphaWormholeTileNumber];
        //         let adjacentWormhole = false;
        //         for (let adjacentTileNumber of adjacentTileNumbers) {
        //             if (allAlphaWormholes.indexOf(newTiles[adjacentTileNumber]) >= 0) {
        //                 adjacentWormhole = true;
        //                 break;
        //             }
        //         }
        //         if (adjacentWormhole) {
        //             // This blank has an adjacent wormhole, so we need to move it. Loop over all blanks to swap with
        //             // let blankReds = useProphecyOfKings ? [...tileData.blankRed.concat(tileData.pokBlankRed)] : [...tileData.blankRed];
        //             let blankReds = tileData.blankRed.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
        //             // Remove wormholes from blank reds, because swapping alphas doesn't make sense.
        //             blankReds = blankReds.filter(function (el) {
        //                 return allAlphaWormholes.indexOf(el) < 0;
        //             });
        //             blankReds = this.shuffle(blankReds);
        //             for (let blankRed of blankReds) {
        //                 let blankRedTileNumber = newTiles.indexOf(blankRed)
        //                 if (blankRedTileNumber >= 0) {
        //                     let adjacentTilesNumbers = adjacencyData[blankRedTileNumber];
        //                     let swappable = true;
        //                     for (let adjacentTileNumber of adjacentTilesNumbers) {
        //                         if ((allAlphaWormholes.indexOf(newTiles[adjacentTileNumber]) >= 0 && adjacentTileNumber !== alphaWormholeTileNumber) || (allTrueAnomalies.indexOf(alphaWormhole) >= 0 && allTrueAnomalies.indexOf(newTiles[adjacentTileNumber]) >= 0)) {
        //                             // This blank has an adjacent anomaly, so throw it out
        //                             swappable = false;
        //                             break;
        //                         }
        //                     }
        //                     if (swappable) {
        //                         // This blank red has no other adjacent anomalies, so swap
        //                         newTiles[alphaWormholeTileNumber] = blankRed;
        //                         newTiles[blankRedTileNumber] = alphaWormhole;
        //                         break;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
        // // Beta at least one planet wormhole, so swap it with another planet of equal resource value
        // for (let betaWormhole of allBetaWormholes) {
        //     let betaWormholeTileNumber = newTiles.indexOf(betaWormhole);
        //     if (betaWormholeTileNumber >= 0 && tileData.all[betaWormhole].planets.length === 0) {
        //         // Wormhole exists on the board, and is blank. Check if it is adjacent to another wormhole
        //         let adjacentTileNumbers = adjacencyData[betaWormholeTileNumber];
        //         let adjacentWormhole = false;
        //         for (let adjacentTileNumber of adjacentTileNumbers) {
        //             if (allBetaWormholes.indexOf(newTiles[adjacentTileNumber]) >= 0) {
        //                 adjacentWormhole = true;
        //                 break;
        //             }
        //         }
        //         if (adjacentWormhole) {
        //             // This blank has an adjacent wormhole, so we need to move it. Loop over all blanks to swap with
        //             // let blankReds = useProphecyOfKings ? [...tileData.blankRed.concat(tileData.pokBlankRed)] : [...tileData.blankRed];
        //             let blankReds = tileData.blankRed.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
        //             // Remove wormholes from blank reds, because swapping alphas doesn't make sense.
        //             blankReds = blankReds.filter(function (el) {
        //                 return allBetaWormholes.indexOf(el) < 0;
        //             });
        //             blankReds = this.shuffle(blankReds);
        //             for (let blankRed of blankReds) {
        //                 let blankRedTileNumber = newTiles.indexOf(blankRed)
        //                 if (blankRedTileNumber >= 0) {
        //                     let adjacentTilesNumbers = adjacencyData[blankRedTileNumber];
        //                     let swappable = true;
        //                     for (let adjacentTileNumber of adjacentTilesNumbers) {
        //                         // Check for adjacency to another wormhole (excluding itself) and other anomalies
        //                         if ((allBetaWormholes.indexOf(newTiles[adjacentTileNumber]) >= 0 && adjacentTileNumber !== betaWormholeTileNumber)) {
        //                             //
        //                             swappable = false;
        //                             break;
        //                         }
        //                     }
        //                     if (swappable) {
        //                         // This blank red has no other adjacent anomalies, so swap
        //                         newTiles[betaWormholeTileNumber] = blankRed;
        //                         newTiles[blankRedTileNumber] = betaWormhole;
        //                         break;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
    }

    ensureWormholesForType(possibleTiles, desiredWormholes, ensuredAnomalies, { useProphecyOfKings = false, useUnchartedSpace = false, useAscendentSun = false } = {}) {
        // let allAnomalyList = useProphecyOfKings ? [...tileData.red.concat(tileData.pokRed)] : [...tileData.red];

        let planetWormholes = desiredWormholes.filter(system => !tileData.blankRed.includes(system))

        let allAnomalyList = tileData.red.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));
        let unusedWormholes = [];
        let usedWormholes = [];

        // Get an array of all used and unused wormholes
        for (let wormholeIndex in desiredWormholes) {
            possibleTiles.indexOf(desiredWormholes[wormholeIndex]) < 0 ?
                unusedWormholes.push(desiredWormholes[wormholeIndex]) : usedWormholes.push(desiredWormholes[wormholeIndex]);
        }

        console.log(desiredWormholes, unusedWormholes, usedWormholes)

        // If there is only one wormhole, then we need to add a new one in
        if (usedWormholes.length === 1) {
            /*
            Lets do some tricky logic here. If we are using a planet wormhole tile, then we want to replace
            another anomaly with one of the other one (pok: two) anomaly wormholes. If we are not using the planet tile,
            then we can try to find a planet to replace with any remaining wormhole tiles.
             */
            unusedWormholes = this.shuffle(unusedWormholes);
            let excludedTiles = [...tileData.wormholes].concat(ensuredAnomalies);

            // Check that the single used wormhole is not a planet.
            if (planetWormholes.indexOf(usedWormholes[0]) < 0) {
                // Try to replace some other planet with a planet wormhole
                unusedWormholes = planetWormholes;
                excludedTiles = excludedTiles.concat(allAnomalyList);
            } else {
                // Using a planet, so try to replace an anomaly with a wormhole
                let wormholesToUse = []
                for (let unusedWormhole of unusedWormholes) {
                    if (planetWormholes.indexOf(unusedWormhole) < 0) {
                        wormholesToUse.push(unusedWormhole)
                    }
                }
                unusedWormholes = wormholesToUse
            }
            possibleTiles = this.reverseReplace(possibleTiles, 1, unusedWormholes, excludedTiles, false);
        }

        return possibleTiles;
    }

    ensureAnomalies(possibleTiles, numPlanetsToPlace, { useProphecyOfKings = false, useUnchartedSpace = false, useAscendentSun = false } = {}) {
        // Only care about the tiles we will actually place
        possibleTiles = possibleTiles.slice(0, numPlanetsToPlace);

        // Check that there is a minimum number of anomalies on the board
        let blueTileRatio = 2;
        let redTileRatio = 1;
        // For 3, 4, and 6 player games, there is a different ratio
        switch (this.state.currentNumberOfPlayers) {
            case (3):
                blueTileRatio = 3
                redTileRatio = 1
                break;
            case (4):
                blueTileRatio = 5
                redTileRatio = 3
                break;
            case (6):
                blueTileRatio = 3
                redTileRatio = 2
                break;
            default:
                break;
        }
        let numAnomaliesLeftToBePlaced = (numPlanetsToPlace / (blueTileRatio + redTileRatio)) * redTileRatio;

        // If there is no anomalies to add, then we are done
        if (numAnomaliesLeftToBePlaced < 0) {
            return possibleTiles
        }

        // Still have to add a certain number of anomalies in. Get a list of possible anomalies we can add to the tile list
        // let allAnomalyList = useProphecyOfKings ? [...tileData.red.concat(tileData.pokRed)] : [...tileData.red];
        let allAnomalyList = tileData.red.filter(expansionCheck({ useProphecyOfKings: useProphecyOfKings, useUnchartedSpace: useUnchartedSpace, useAscendentSun: useAscendentSun }));

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
        possibleAnomalies = this.shuffle(possibleAnomalies);

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
    reverseReplace(possibleTiles, numTilesToReplace, replacementTiles, excludedTiles, reverseBeforeAndAfter) {
        // If we aren't placing in reverse order, we want to start changing the worst tiles (which are usually last)
        if (reverseBeforeAndAfter) {
            possibleTiles = possibleTiles.reverse()
        }
        let currentTileIndex = possibleTiles.length - 1;

        console.log(numTilesToReplace, replacementTiles, currentTileIndex)

        // While there are anomalies to place and a place to put them...
        while (numTilesToReplace > 0 && replacementTiles.length > 0 && currentTileIndex > 0) {
            // Check the index to see that it is not an anomaly or a 0 or -1 or 18 or hyperlane
            let tileOfInterest = possibleTiles[currentTileIndex]
            console.log(tileOfInterest)
            if (excludedTiles.indexOf(tileOfInterest) < 0 && tileOfInterest !== -1 && tileOfInterest !== 18 && tileOfInterest !== 0) {
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

    // TODO rename from planet to tile
    getWeightedPlanetList(possiblePlanets, weights, ensuredAnomalies) {
        // Generate an array of tuples where the first element is the plant's tile number and the second is its weight
        let planetWeights = [];
        for (let planetTileNumber in possiblePlanets) {
            planetWeights.push([possiblePlanets[planetTileNumber], this.getWeight(possiblePlanets[planetTileNumber], weights, ensuredAnomalies)])
        }

        // Sort the returned list by weight, with higher weighted planets being first
        planetWeights.sort(function (a, b) {
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
                currentSetToShuffle = this.shuffle(currentSetToShuffle)
                postPossiblePlanets = postPossiblePlanets.concat(currentSetToShuffle)
                currentSetToShuffle = [planetWeight]
                currentHighValue = planetWeight[1]
            }

            currentIndex += 1;
        }
        currentSetToShuffle = this.shuffle(currentSetToShuffle)
        postPossiblePlanets = postPossiblePlanets.concat(currentSetToShuffle)


        // Convert from tuple down to just the tile number
        let orderedPlanets = [];
        for (let weightedPlanet in postPossiblePlanets) {
            orderedPlanets.push(postPossiblePlanets[weightedPlanet][0]);
        }

        return orderedPlanets
    }

    getWeight(planetTileNumber, weights, ensuredAnomalies) {
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
        if (tile['type'] === 'red') {
            total_weight += weights['anomaly'] + 40;
            // Providing bonuses to these sections mean the other ones are never used
            // if (tile['anomaly'].length === 0
            //     || (tile['anomaly'].length === 0 && (tile['anomaly'].includes('asteroid-field')
            //         || tile['anomaly'].includes('gravity-rift')))) {
            //     // Give an extra boost to these anomalies, as they are easier to cross than others
            //     total_weight += 20;  // Change total back to 30 if using this
            // }
        }
        total_weight += tile['wormhole'].length > 0 ? weights['wormhole'] : 0
        total_weight += ensuredAnomalies.indexOf(planetTileNumber) > -1 ? weights['racial'] : 0

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
    togglePlacementStyleHelp(event) {
        this.setState({
            placementStyleHelp: !this.state.placementStyleHelp
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
    toggleEnsureRacialAnomaliesHelp(event) {
        this.setState({
            ensureRacialAnomaliesHelp: !this.state.ensureRacialAnomaliesHelp
        })
    }

    render() {
        return (
            <div id="options" className={this.props.visible ? "" : "d-none"}>
                <div className="title">
                    <h4 className="text-center">Generation Options</h4>
                </div>
                <Form id="generateForm" onSubmit={this.generateBoard}>

                    <Form.Group className="mb-3 d-flex" controlId="pokExpansion">
                        <Form.Check name="pokExpansion" type="checkbox" checked={this.props.useProphecyOfKings} onChange={this.updatePok} label="Use POK Tiles" />
                    </Form.Group>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="p-0" as="p">Fan-Made Content</Accordion.Header>
                            <Accordion.Body>
                                <>
                                    <Form.Group className="mb-3 d-flex" controlId="useUnchartedSpace">
                                        <Form.Check name="useUnchartedSpace" type="checkbox" checked={this.props.useUnchartedSpace} onChange={this.updateUncharted} label="Use Uncharted Space Fan Tiles" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 d-flex" controlId="useDiscordantStars">
                                        <Form.Check name="useDiscordantStars" type="checkbox" checked={this.props.useDiscordantStars} onChange={this.updateDS} label="Use DS Fan Races" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 d-flex" controlId="useAscendentSun">
                                        <Form.Check name="useAscendentSun" type="checkbox" checked={this.props.useAscendentSun} onChange={this.updatePok} label="Use Eronous' Fan Tiles" />
                                    </Form.Group>
                                </>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Form.Group className="my-3">
                        <Form.Label>Number of Players</Form.Label>
                        <Form.Select className="form-control" id="playerCount" name="currentNumberOfPlayers" value={this.state.currentNumberOfPlayers} onChange={this.updatePlayerCount}>
                            {this.state.currentNumberOfPlayersOptions.map((x) => <option key={x} value={x}>{x}</option>)}
                        </Form.Select>
                    </Form.Group>
                    {/* <div className="form-group my-3">
                        <label htmlFor="playerCount">Number of Players</label>
                        <select className="form-control" id="playerCount" name="currentNumberOfPlayers" value={this.state.currentNumberOfPlayers} onChange={this.updatePlayerCount}>
                            {this.state.currentNumberOfPlayersOptions.map((x) => <option key={x} value={x}>{x}</option>)}
                        </select>
                    </div> */}

                    <Form.Group className="my-3">
                        <Form.Label className="d-flex">
                            Board Style
                            <QuestionCircle className="icon" onClick={this.toggleBoardStyleHelp} />
                        </Form.Label>
                        <Form.Select className="form-control" id="boardStyle" name="currentBoardStyle" value={this.state.currentBoardStyle} onChange={this.updateBoardStyle}>
                            {this.state.currentBoardStyleOptions.map((x) => <option key={x} value={x}>{this.capitalize(x)}</option>)}
                        </Form.Select>
                    </Form.Group>
                    {/* <div className="form-group my-3">
                        <label htmlFor="boardStyle" className="d-flex">Board Style
                            <QuestionCircle className="icon" onClick={this.toggleBoardStyleHelp} />
                        </label>
                        <select className="form-control" id="boardStyle" name="currentBoardStyle" value={this.state.currentBoardStyle} onChange={this.updateBoardStyle}>
                            {this.state.currentBoardStyleOptions.map((x) => <option key={x} value={x}>{this.capitalize(x)}</option>)}
                        </select>
                    </div> */}

                    <Form.Group className="my-3">
                        <Form.Label className="d-flex">
                            Placement Style
                            <QuestionCircle className="icon" onClick={this.togglePlacementStyleHelp} />
                        </Form.Label>
                        <Form.Select className="form-control" id="placementStyle" name="currentPlacementStyle" value={this.state.currentPlacementStyle} onChange={this.handleInputChange}>
                            {this.state.optionsPossible.placementStyles.map((x) => <option key={x} value={x}>{this.capitalize(x)}</option>)}
                        </Form.Select>
                    </Form.Group>
                    {/* <div className="form-group my-3">
                        <label htmlFor="placementStyle" className="d-flex">Placement Style
                            <QuestionCircle className="icon" onClick={this.togglePlacementStyleHelp} />
                        </label>
                        <select className="form-control" id="placementStyle" name="currentPlacementStyle" value={this.state.currentPlacementStyle} onChange={this.handleInputChange}>
                            {this.state.optionsPossible.placementStyles.map((x) => <option key={x} value={x}>{this.capitalize(x)}</option>)}
                        </select>
                    </div> */}

                    <Form.Group className="my-3">
                        <Form.Label className="d-flex">
                            System Weighting
                            <QuestionCircle className="icon" onClick={this.togglePickStyleHelp} />
                        </Form.Label>
                        <Form.Select className="form-control" id="pickStyle" name="currentPickStyle" value={this.state.currentPickStyle} onChange={this.handleInputChange}>
                            {this.state.optionsPossible.pickStyles.map((x) => <option key={x} value={x}>{this.capitalize(x)}</option>)}
                        </Form.Select>
                    </Form.Group>
                    {/* <div className="form-group my-3">
                        <label htmlFor="pickStyle" className="d-flex">System Weighting
                            <QuestionCircle className="icon" onClick={this.togglePickStyleHelp} />
                        </label>
                        <select className="form-control" id="pickStyle" name="currentPickStyle" value={this.state.currentPickStyle} onChange={this.handleInputChange}>
                            {this.state.optionsPossible.pickStyles.map((x) => <option key={x} value={x}>{this.capitalize(x)}</option>)}
                        </select>
                    </div> */}

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


                    <Form.Group className="mb-3" controlId="seed">
                        <Form.Label>Specific Seed</Form.Label>
                        <Form.Control name="updateSeed" type="text" placeholder="Enter a number to seed generation..." value={this.state.currentSeed} onChange={this.updateSeed} />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex" controlId="pickRaces">
                        <Form.Check name="pickRaces" type="checkbox" checked={this.props.pickRaces} onChange={this.handleInputChange} label="Pick Races for Players" />
                        <QuestionCircle className="icon" onClick={this.togglePickRacesHelp} />
                    </Form.Group>
                    <Collapse in={this.state.pickRaces}>
                        <div>
                            <div className="card card-body">
                                <button type="button" className="btn btn-outline-primary mb-2" onClick={this.toggleSetRacesHelp}>Set Included Races</button>

                                <button type="button" className="btn btn-outline-primary mb-2" onClick={this.toggleSetPlayerNamesHelp}>Set Player Names</button>

                                <Form.Group className="d-flex" controlId="ensureRacialAnomalies">
                                    <Form.Check name="ensureRacialAnomalies" type="checkbox" checked={this.props.ensureRacialAnomalies} onChange={this.handleInputChange} label="Ensure Racial Anomalies" />
                                    <QuestionCircle className="icon" onClick={this.toggleEnsureRacialAnomaliesHelp} />
                                </Form.Group>
                            </div>
                        </div>
                    </Collapse>
                    {/* <div className={"ml-2 mb-2 collapse " + (this.state.pickRaces ? "show" : "")} id="pickRacesCollapse">
                        <div className="card card-body">
                            <button type="button" className="btn btn-outline-primary mb-2" onClick={this.toggleSetRacesHelp}>Set Included Races</button>

                            <button type="button" className="btn btn-outline-primary mb-2" onClick={this.toggleSetPlayerNamesHelp}>Set Player Names</button>

                            <Form.Group className="mb-3 d-flex" controlId="ensureRacialAnomalies">
                                <Form.Check name="ensureRacialAnomalies" type="checkbox" checked={this.props.ensureRacialAnomalies} onChange={this.handleInputChange} label="Ensure Racial Anomalies" />
                                <QuestionCircle className="icon" onClick={this.toggleEnsureRacialAnomaliesHelp} />
                            </Form.Group>
                        </div>
                    </div> */}

                    <Form.Group className="mb-3 d-flex" controlId="shuffleBoards">
                        <Form.Check name="shuffleBoards" type="checkbox" checked={this.props.shuffleBoards} onChange={this.handleInputChange} label="Randomize Priorities Before Placement" />
                        <QuestionCircle className="icon" onClick={this.toggleShufflePriorityHelp} />
                    </Form.Group>
                    {/* <div className="custom-control custom-checkbox mb-3 d-flex">
                        <input type="checkbox" className="custom-control-input" id="shuffleBoards" name="shuffleBoards" checked={this.state.shuffleBoards} onChange={this.handleInputChange} />
                        <label className="custom-control-label" htmlFor="shuffleBoards">Randomize Priorities Before Placement</label>
                        <QuestionCircle className="icon" onClick={this.toggleShufflePriorityHelp} />
                    </div> */}

                    <Form.Group className="mb-3 d-flex" controlId="reversePlacementOrder">
                        <Form.Check name="reversePlacementOrder" type="checkbox" checked={this.props.reversePlacementOrder} onChange={this.handleInputChange} label="Reverse Placement Order" />
                        <QuestionCircle className="icon" onClick={this.toggleReversePlacementOrderHelp} />
                    </Form.Group>
                    {/* <div className="custom-control custom-checkbox mb-3 d-flex">
                        <input type="checkbox" className="custom-control-input" id="reversePlacementOrder" name="reversePlacementOrder" checked={this.state.reversePlacementOrder} onChange={this.handleInputChange} />
                        <label className="custom-control-label" htmlFor="reversePlacementOrder">Reverse Placement Order</label>
                        <QuestionCircle className="icon" onClick={this.toggleReversePlacementOrderHelp} />
                    </div> */}

                    <SetPlayerNameModal visible={this.state.setPlayerNamesHelp} currentPlayerNames={this.props.currentPlayerNames}
                        hideModal={this.toggleSetPlayerNamesHelp} handleNameChange={this.handleNameChange}
                    />
                    <SetRacesModal visible={this.state.setRacesHelp} races={this.state.optionsPossible.races}
                        pokRaces={this.state.optionsPossible.pokRaces} useProphecyOfKings={this.props.useProphecyOfKings}
                        dsRaces={this.state.optionsPossible.dsRaces} useDiscordantStars={this.props.useDiscordantStars}
                        currentRaces={this.props.currentRaces}
                        hideModal={this.toggleSetRacesHelp} handleRacesChange={this.handleRacesChange}
                    />

                    <HelpModal key={"help-board"} visible={this.state.boardStyleHelp} hideModal={this.toggleBoardStyleHelp} title={"About Board Style"}
                        content='<p>
                         Board style changes how the tiles are actually laid out on a newly generated map.
                         <br>
                         <br>
                         Changing this would cause you to expect different hex layouts, such as different patterns of tiles, usage of hyperlanes, or unorthodox placement of home worlds.
                         </p>'
                    />
                    <HelpModal key={"help-placement"} visible={this.state.placementStyleHelp} hideModal={this.togglePlacementStyleHelp} title={"About Placement Style"}
                        content='<p>
                         Placement style dictates where important tiles are placed. Most revolve around having at least one tile near the home system with good resources.
                         <br>
                         <br>
                         <br><b>Slice:</b> Places tiles like a normal player would. Prioritizes a good pathway to mecatol, and filling in the area around the home system with good tiles.
                         <br><b>Initial:</b> Only guarantees a good tile right in front of the home system (on the way to mecatol). Everything else is random.
                         <br><b>Home:</b> Prioritizes all of the adjacent tiles to the home system and everything else is random.
                         <br><b>Random:</b> Shuffles the priority levels completely. No favoritism to tiles near the home system.
                         </p>'
                    />
                    <HelpModal key={"help-pick"} visible={this.state.pickStyleHelp} hideModal={this.togglePickStyleHelp} title={"About Pick Style"}
                        content='<p>
                         Pick Style is used to determine how tiles are weighted for when they are placed on the board. A higher weighted tile means that the hex is more important, and so (depending on the placement style) it is put closer to home worlds to facilitate available assets.
                         <br>
                         <br><b>Balanced:</b> A custom weight which favors resources and planet count more than anomalies. This more accurately factors in tech specialties and influence as trade-offs to the "Resource" pick.
                         <br><b>Resource:</b> Tiles are ordered primarily by their resource values. Higher resource planets are more coveted, and so are more important.
                         <br><b>Influence:</b> Similar to "Resource", tiles are ordered primarily by their influence values.
                         <br><b>Random:</b> Tiles are completely randomly ordered. Expect chaotic and unbalanced maps.
                         <br><b>Custom:</b> Enter your own values in for balancing tradeoffs between various tile qualities.
                         </p>'

                    />
                    <HelpModal key={"help-races"} visible={this.state.pickRacesHelp} hideModal={this.togglePickRacesHelp} title={"About Picking Races"}
                        content="<p>
                         Automatically assigns races to the players on the boards.
                         <br>
                         <br>
                         From the set of races, turning this on will assign every player a random race (designated by assigning them the homeworld tile of that race). You should pick which player sits at a certain position before turning this on.
                         </p>"
                    />
                    <HelpModal key={"help-multiple"} visible={this.state.pickMultipleRacesHelp} hideModal={this.togglePickMultipleRacesHelp} title={"About Picking Multiple Races"}
                        content="<p>
                         Divides all the races evenly up amongst the players in the game (with no overflow), so that they can choose from a selection instead of being specifically assigned one race.
                         <br>
                         <br>
                         Some groups prefer to have a draft, where every player is given a few races to pick between. This lets them pick the races that they want to play, but not have any conflicts with other players about playing a certain race.
                         </p>"
                    />
                    <HelpModal key={"help-priority"} visible={this.state.shufflePriorityHelp} hideModal={this.toggleShufflePriorityHelp} title={"About Shuffling Priority"}
                        content='<p>
                         Randomizes the priority picks for each picking round.
                         <br>
                         <br>
                         Normally when placing tiles, this tool attempts to place the tiles so player 1 does not always get the best tiles. To do this, it follows the game setup rules and (in a 6 player game) player 1 gets to place tile 1 and 12, while player 6 gets to place tile 6 and 7.
                         <br>
                         <br>
                         Turning this on stops this from happening, and instead completely randomizes the placement order.
                         </p>'
                    />
                    <HelpModal key={"help-reverse"} visible={this.state.reversePlacementOrderHelp} hideModal={this.toggleReversePlacementOrderHelp} title={"About Reverse Placement Order"}
                        content='<p>
                         Reverses which tiles are placed first in placement order.
                         <br>
                         <br>
                         Tiles are normally placed in priority (see randomize priority help). This reverses the order, so that the last picks are first, which generally has the effect of pushing the more valuable tiles towards the center of the galaxy.
                         </p>'
                    />
                    <HelpModal key={"help-racial-anomalies"} visible={this.state.ensureRacialAnomaliesHelp} hideModal={this.toggleEnsureRacialAnomaliesHelp} title={"About Ensure Racial Anomalies"}
                        content="<p>
                         Ensures that races get their beneficial anomalies
                         <br>
                         <br>
                         This option makes it so that Muaat will always receive a supernova, Saar will always receive an asteroid field, Empyrean will always receive a nebulae and Vuil'Raith and Nivyn (DS) will always receive a gravity rift.
                         </p>"
                    />

                    <Button type="submit" className="btn btn-primary">Generate</Button>
                </Form>
            </div>
        );
    }
}
export default MapOptions;