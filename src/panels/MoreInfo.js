import React from "react";
import adjacencyData from "../data/adjacencyData.json";
import tileData from "../data/tileData.json";

import influence from './icons/influence.png';
import planet from './icons/planet.png';
import resource from './icons/resource.png';
import specialtyBiotic from './icons/specialty-biotic.png';
import specialtyWarfare from './icons/specialty-warfare.png';
import specialtyPropulsion from './icons/specialty-propulsion.png';
import specialtyCybernetic from './icons/specialty-cybernetic.png';
import traitCultural from './icons/trait-cultural.png';
import traitHazardous from './icons/trait-hazardous.png';
import traitIndustrial from './icons/trait-industrial.png';

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
        let specialties = {
            "biotic": 0,
            "warfare": 0,
            "propulsion": 0,
            "cybernetic": 0
        };
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
                    specialties[planet["specialty"]] += 1;
                    traits[planet["trait"]] += 1;
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
                        <td>
                            <span className={"d-flex"}>
                                {[...Array(adjacentInfo.traits.cultural)].map((e, i) => <img className={"icon"} src={traitCultural} alt={"C"}/>)}
                                {[...Array(adjacentInfo.traits.hazardous)].map((e, i) => <img className={"icon"} src={traitHazardous} alt={"H"}/>)}
                                {[...Array(adjacentInfo.traits.industrial)].map((e, i) => <img className={"icon"} src={traitIndustrial} alt={"I"}/>)}
                            </span>
                        </td>
                        <td>
                            <span className={"d-flex"}>
                                {[...Array(adjacentInfo.specialties.biotic)].map((e, i) => <img className={"icon"} src={specialtyBiotic} alt={"B"}/>)}
                                {[...Array(adjacentInfo.specialties.warfare)].map((e, i) => <img className={"icon"} src={specialtyWarfare} alt={"W"}/>)}
                                {[...Array(adjacentInfo.specialties.propulsion)].map((e, i) => <img className={"icon"} src={specialtyPropulsion} alt={"P"}/>)}
                                {[...Array(adjacentInfo.specialties.cybernetic)].map((e, i) => <img className={"icon"} src={specialtyCybernetic} alt={"C"}/>)}
                            </span>
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
                                <th scope="col"><img className={"icon"} src={resource} alt={"Res."}/></th>
                                <th scope="col"><img className={"icon"} src={influence} alt={"Inf."}/></th>
                                <th scope="col"><img className={"icon"} src={planet} alt={"Planets"}/></th>
                                <th scope="col"><img className={"icon"} src={specialtyWarfare} alt={"Tech"}/></th>
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