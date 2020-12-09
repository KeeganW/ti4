import React from "react";
import adjacencyData from "../data/adjacencyData.json";
import tileData from "../data/tileData.json";

class MoreInfo extends React.Component {
    constructor(props) {
        super(props);

        this.getAdjacent = this.getAdjacent.bind(this);
    }

    getAdjacent(tileNumber) {
        // TODO rewrite this to calculate adjacencies, not reference them from a data file
        let adjacencies = [...adjacencyData[tileNumber]];
        adjacencies.push(tileNumber);

        let planets = 0;
        let resources = 0;
        let influence = 0;
        let specialties = 0;
        let traits = {
            "cultural": 0,
            "industrial": 0,
            "hazardous": 0
        }

        for (let adjacentIndex in adjacencies) {
            let adjacentTileNumber = adjacencies[adjacentIndex]
            let adjacentTile = this.props.tiles[adjacentTileNumber]
            if (adjacentTile > 0) {
                for (let planetIndex in tileData.all[adjacentTile]["planets"]) {
                    let planet = tileData.all[adjacentTile]["planets"][planetIndex];
                    planets += 1;
                    resources += planet["resources"];
                    influence += planet["influence"];
                    specialties += planet["specialty"] ? 1 : 0;
                    traits[planet["trait"]] = traits[planet["trait"]] + 1
                }
            }
        }
        return {
            "planets": planets,
            "resources": resources,
            "influence": influence,
            "specialties": specialties,
            "traits": traits,
        }
    }

    render() {
        let moreInfoByPlayer = [];

        for (let tileNumber in this.props.tiles) {
            if ((this.props.tiles[tileNumber] >= 0 && this.props.tiles[tileNumber] < 18) ||
                (this.props.tiles[tileNumber] >= 51 && this.props.tiles[tileNumber] < 58)) {
                // This is a homeworld, so gather its info
                let adjacentInfo = this.getAdjacent(tileNumber);
                let playerName = this.props.currentPlayerNames[moreInfoByPlayer.length];
                if (playerName === "") {
                    playerName = "P" + (moreInfoByPlayer.length + 1);
                }
                moreInfoByPlayer.push(
                    <tr>
                        <th scope="row">{playerName}</th>
                        <td>{adjacentInfo.resources}</td>
                        <td>{adjacentInfo.influence}</td>
                        <td>{adjacentInfo.planets}</td>
                        <td>{adjacentInfo.specialties}</td>
                        <td>
                            <span className={"text-nowrap"}>C: {adjacentInfo.traits.cultural} | I: {adjacentInfo.traits.industrial} | H: {adjacentInfo.traits.hazardous}</span>
                        </td>
                    </tr>
                );
            }

        }
        return (
            <div id="moreInfoContainer" className={this.props.visible ? "" : "d-none"}>
                <div className="title">
                    <h4 id="infoTitle" className="text-center">Assets Adjacent to Home System</h4>
                </div>
                <div id="moreInfo" className="">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Resources</th>
                                <th scope="col">Influence</th>
                                <th scope="col">Planets</th>
                                <th scope="col">Tech</th>
                                <th scope="col">Traits</th>
                            </tr>
                        </thead>
                        <tbody>
                            {moreInfoByPlayer}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default MoreInfo;