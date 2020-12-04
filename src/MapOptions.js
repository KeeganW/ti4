import React from "react";
import {QuestionCircle} from "react-bootstrap-icons";
import boardData from "./boardData.json";
import tileData from "./tileData.json";

class MoreInfo extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            optionsPossible: {
                numberOfPlayers: [6, 5, 4, 3, 2],
                boardStyles: {
                    6: ["normal", "warzone"],
                    5: ["normal", "diamond"],
                    4: ["normal", "horizontal", "vertical", "gaps"],
                    3: ["normal", "compact", "manta"],
                    2: ["normal"],
                },
                pickStyles: ['random', 'resource', 'influence', 'tas'],
                races: [
                    "Sardakk N'orr", "The Arborec", "The Barony of Letnev",
                    "The Clan of Saar", "The Embers of Muaat", "The Emirates of Hacan",
                    "The Federation of Sol", "The Ghosts of Creuss", "The Lizix Mindnet",
                    "The Mentak Coalition", "The Naalu Collective", "The Nekro Virus",
                    "The Universities of Jol-Nar", "The Winnu", "The Xxcha Kingdom",
                    "The Yin Brotherhood", "The Yssaril Tribes"
                ]
            },
            useProphecyOfKings: false,
            currentNumberOfPlayers: 6,
            currentBoardStyleOptions: ["normal", "warzone"],
            currentBoardStyle: "normal",
            currentPickStyle: "normal",
            currentPlayerNames: ["P1", "P2", "P3", "P4", "P5", "P6"],
            currentRaces: ["Sardakk N'orr", "The Arborec", "The Barony of Letnev", "The Clan of Saar", "The Embers of Muaat", "The Emirates of Hacan", "The Federation of Sol", "The Ghosts of Creuss", "The Lizix Mindnet", "The Mentak Coalition", "The Naalu Collective", "The Nekro Virus", "The Universities of Jol-Nar", "The Winnu", "The Xxcha Kingdom", "The Yin Brotherhood", "The Yssaril Tribes"],
            currentSeed: "",
            userSetSeed: false,
            pickRaces: false,
            pickMultipleRaces: false,
            shuffleBoards: false,
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updatePlayerCount = this.updatePlayerCount.bind(this);
        this.updateSeed = this.updateSeed.bind(this);
        
        this.updateBoardStyleOptions = this.updateBoardStyleOptions.bind(this); // TODO is the bind needed?

        this.generateBoard = this.generateBoard.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }
    updatePlayerCount(event) {
        this.setState(state => ({
            currentNumberOfPlayers: parseInt(event.target.value)
        }), this.updateBoardStyleOptions );
    }
    updateBoardStyleOptions() {
        this.setState(state => ({
            currentBoardStyleOptions: this.state.optionsPossible.boardStyles[this.state.currentNumberOfPlayers]
        }));
    }
    updateSeed(event) {
        this.setState(state => ({
            currentSeed: event.target.value,
            userSetSeed: event.target.value !== ""  // Ignore user entry if the value is blank
        }));
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
        e.preventDefault();
        
        let currentSeed = this.state.currentSeed
        if (!this.state.userSetSeed) {
            currentSeed = Math.floor(Math.random() * Math.floor(9999));
        }
        
        // Get a list of planets to populate
        let planetIndexesToPlace = this.getPlanetIndexesToPlace(currentSeed)
        
        // Get an ordered list of planets to use to fill board with
        let possiblePlanets = this.getPossiblePlanets()
        
        // Place planets in a specific order, focusing on spreading the planets evenly
        let newTiles = Array.apply(-1, Array(37)).fill(-1);  // Reset tiles to be empty
        for (let planetIndex in planetIndexesToPlace){
            newTiles[planetIndexesToPlace[planetIndex]] = possiblePlanets.shift()
        }
        
        // Get current races for placing races
        let currentRaces = [...this.state.currentRaces]
        currentRaces = this.shuffle(currentRaces, currentSeed)
        
        for (let index = 0; index < boardData[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['home_worlds'].length; index++) {
            let planetIndex = boardData[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['home_worlds'][index]
            if (this.state.pickRaces && !this.state.pickMultipleRaces) {
                // Convert races into race hexes
                // Assign a random race to a player
                
                // TODO make this cleaner. Currently looping over all homeworlds to try to match the race name
                const homeworlds = Array.from({length: 18}, (_, i) => i+1)
                for (let planetTileNumberIndex in homeworlds) {
                    let planetTileNumber = homeworlds[planetTileNumberIndex]
                    if (tileData[planetTileNumber.toString()]['race'] === currentRaces[0]) {
                        newTiles[planetIndex] = planetTileNumber;
                        currentRaces.shift();
                    }
                }
            } else {
                // Set home worlds to 0, races to be decided later
                newTiles[planetIndex] = 0
            }
        }
        
        newTiles[0] = 18
        
        this.setState({
            currentSeed: currentSeed
        }, this.props.updateTiles(newTiles));
    }
    
    getPlanetIndexesToPlace(currentSeed) {
        let primary = [...boardData[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['primary_tiles']]
        let secondary = [...boardData[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['secondary_tiles']]
        let tertiary = [...boardData[this.state.currentNumberOfPlayers.toString()][this.state.currentBoardStyle]['tertiary_tiles']]
        
        // If shuffling, we need to shuffle primary, secondary, and tertiary indexes.
        if (this.state.shuffleBoards) {
            primary = this.shuffle(primary, currentSeed)
            secondary = this.shuffle(secondary, currentSeed)
            tertiary = this.shuffle(tertiary, currentSeed)
        }
        
        // Return this list of planet tiles to populate
        return primary.concat(secondary).concat(tertiary)
    }
    
    getPossiblePlanets() {
        let possiblePlanets = Array.from({length: 32}, (_, i) => i + 19)
        let weights = {};
        
        switch (this.state.currentPickStyle) {
            case "random":
                // shuffle(possible_planets)
                return possiblePlanets
            case "resource":
                weights = {
                    "resource": 1.0,
                    "influence": 0.1,
                    "planet_count": 0.1,
                    "specialty": 0.1,
                    "anomaly": 0.1,
                    "wormhole": 0.1
                }
                break;
            case "influence":
                weights = {
                    "resource": 0.1,
                    "influence": 1.0,
                    "planet_count": 0.1,
                    "specialty": 0.1,
                    "anomaly": 0.1,
                    "wormhole": 0.1
                }
                break;
            case "tas":
            default:
                weights = {
                    "resource": 1.0,
                    "influence": 0.4,
                    "planet_count": 0.4,
                    "specialty": 0.6,
                    "anomaly": 0.1,
                    "wormhole": 0.1
                }
                break;
        }
        possiblePlanets = this.getWeightedPlanetList(possiblePlanets, weights)
        return possiblePlanets
    }
    
    getWeightedPlanetList(possiblePlanets, weights) {
        let planetWeights = [];
        for (let planetTileNumber in possiblePlanets) {
            planetWeights.push([possiblePlanets[planetTileNumber], this.getWeight(possiblePlanets[planetTileNumber], weights)])
        }
        
        // Sort the returned list by weight
        planetWeights.sort(function(a, b) {
            return b[1] - a[1];
        })
        
        // Get just the planet number
        let orderedPlanets = [];
        for (let weightedPlanet in planetWeights) {
            orderedPlanets.push(planetWeights[weightedPlanet][0]);
        }
        return orderedPlanets
    }
    
    getWeight(planetTileNumber, weights) {
        let total_weight = 0
        let tile = tileData[planetTileNumber.toString()]
        
        for (let planetIndex in tile['planets']) {
            let planet = tile['planets'][planetIndex]
            total_weight += planet['resources'] * weights['resource']
            total_weight += planet['influence'] * weights['influence']
            total_weight += weights['planet_count']
            if (planet['specialty']) {
                total_weight += weights['specialty']
            }
        }
        
        if (tile['type'] === 'anomaly') {
            total_weight += weights['anomaly']
        }
        if (tile['wormhole']) {
            total_weight += weights['wormhole']
        }
        
        return total_weight
    }
    
    render() {
        return (
            <div id="options" className={this.props.visible ? "" : "d-none"}>
                <div className="title">
                    <h4 className="text-center">Generation Options</h4>
                </div>
                <form id="generateForm" onSubmit={this.generateBoard}>
            
                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="pokExpansion" name="useProphecyOfKings" checked={this.state.useProphecyOfKings} onChange={this.handleInputChange} />
                        <label className="custom-control-label" htmlFor="pokExpansion">Use Prophecy of Kings Expansion</label>
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="playerCount">Number of Players</label>
                        <select className="form-control" id="playerCount" name="currentNumberOfPlayers" value={this.state.currentNumberOfPlayers} onChange={this.updatePlayerCount}>
                            {this.state.optionsPossible.numberOfPlayers.map((x) => <option key={x} value={x}>{x}</option>)}
                        </select>
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="boardStyle" className="d-flex">Board Style
                            <QuestionCircle className="icon" />
                        </label>
                        <select className="form-control" id="boardStyle" name="currentBoardStyle" value={this.state.currentBoardStyle} onChange={this.handleInputChange}>
                            {this.state.currentBoardStyleOptions.map((x) => <option key={x} value={x}>{this.capitalize(x)}</option>)}
                        </select>
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="pickStyle" className="d-flex">Picking Style
                            <QuestionCircle className="icon" />
                        </label>
                        <select className="form-control" id="pickStyle" name="currentPickStyle" value={this.state.currentPickStyle} onChange={this.handleInputChange}>
                            {this.state.optionsPossible.pickStyles.map((x) => <option key={x} value={x}>{this.capitalize(x)}</option>)}
                        </select>
                    </div>
            
            
                    <div className="form-group">
                        <label htmlFor="seed">Specific Seed</label>
                        <input className="form-control" id="seed" name="updateSeed" type="text" placeholder="Enter a number to seed generation..." value={this.state.currentSeed} onChange={this.updateSeed} />
                    </div>
            
                    <div className="custom-control custom-checkbox mb-3 d-flex">
                        <input type="checkbox" className="custom-control-input" id="pickRaces" name="pickRaces" checked={this.state.pickRaces} onChange={this.handleInputChange} />
                        <label className="custom-control-label" htmlFor="pickRaces">Pick Races for Players</label>
                        <QuestionCircle className="icon" />
                    </div>
                    <div className={"ml-2 collapse " + (this.state.pickRaces ? "show" : "")} id="pickRacesCollapse">
                        <div className="card card-body">
                            <button type="button" className="btn btn-outline-primary mb-2">Set Player Names</button>
                    
                            <button type="button" className="btn btn-outline-primary mb-2">Set Included Races</button>
                    
                            <div className="custom-control custom-checkbox d-flex">
                                <input type="checkbox" className="custom-control-input" id="pickMultipleRaces" name="pickMultipleRaces" checked={this.state.pickMultipleRaces} onChange={this.handleInputChange} />
                                <label className="custom-control-label" htmlFor="pickMultipleRaces">Let Players Pick From Multiple</label>
                                <QuestionCircle className="icon" />
                            </div>
                        </div>
                    </div>
            
                    <div className="custom-control custom-checkbox mb-3 d-flex">
                        <input type="checkbox" className="custom-control-input" id="shuffleBoards" name="shuffleBoards" checked={this.state.shuffleBoards} onChange={this.handleInputChange} />
                        <label className="custom-control-label" htmlFor="shuffleBoards">Randomize Priorities Before Placement</label>
                        <QuestionCircle className="icon" />
                    </div>
            
                    <button type="submit" className="btn btn-primary">Generate</button>
                </form>
            </div>
        );
    }
}
export default MoreInfo;