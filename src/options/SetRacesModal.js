import React from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { EXPANSIONS } from "../data/tileData";

class SetRacesModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: ""
        }

        this.updateSearchString = this.updateSearchString.bind(this);
    }

    updateSearchString(event) {
        this.setState({
            searchString: event.target.value,
        })
    }

    render() {
        let visibleRaces = this.props.races
        if (this.props.includedExpansions[EXPANSIONS.POK]) {
            visibleRaces = visibleRaces.concat(this.props.pokRaces)
        }
        if (this.props.includedExpansions[EXPANSIONS.DS]) {
            visibleRaces = visibleRaces.concat(this.props.dsRaces)
        }

        let breakStyle = {
            "borderBottom": "1px solid #dee2e6"
        }

        return (
            <Modal show={this.props.visible} onHide={this.props.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Set Races</Modal.Title>
                </Modal.Header>
                <div style={breakStyle} >
                    <button type="button" name={"all"} className="btn btn-outline-primary m-2 ml-3" onClick={this.props.handleRacesChange}>Select All</button>
                    <button type="button" name={"none"} className="btn btn-outline-primary m-2" onClick={this.props.handleRacesChange}>Deselect All</button>
                </div>
                <Modal.Body>
                    <form id={"includedRacesForm"}>
                        <div className={"form-group mb-3"}>
                            <input className={"form-control"} id={"filterRaces"} type={"text"} placeholder={"Filter Races..."} value={this.state.searchString} onChange={this.updateSearchString} />
                        </div>
                        {visibleRaces.map((raceName, raceIndex) => {
                            let raceVisible = raceName.toLowerCase().includes(this.state.searchString);
                            return (
                                <Form.Group className={"custom-control custom-checkbox mb-2 races" + (raceVisible ? "" : " d-none")} controlId={"include" + raceName.replace(" ", "")} key={"set-races-" + raceIndex}>
                                    <Form.Check inline name={raceName} type="checkbox" checked={this.props.currentRaces.indexOf(raceName) > -1} onChange={this.props.handleRacesChange} label={raceName} />
                                </Form.Group>
                                // <div className={"custom-control custom-checkbox mb-2 races" + (raceVisible ? "" : " d-none")} key={"set-races-" + raceIndex}>
                                //     <input className={"custom-control-input"} name={raceName} type={"checkbox"} id={"include" + raceName.replace(" ", "")} checked={this.props.currentRaces.indexOf(raceName) > -1} onChange={this.props.handleRacesChange} />
                                //     <label className={"custom-control-label"} htmlFor={"include" + raceName.replace(" ", "")}>{raceName}</label>
                                // </div>
                            )
                        })}
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}
export default SetRacesModal;