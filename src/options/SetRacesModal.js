import React from "react";
import Modal from "react-bootstrap/Modal";

class HelpModal extends React.Component {
    render() {
        let visibleRaces = this.props.races
        if (this.props.useProphecyOfKings) {
            visibleRaces = visibleRaces.concat(this.props.pokRaces)
        }

        return (
            <Modal show={this.props.visible} onHide={this.props.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Set Races</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*{this.props.races}*/}
                    {/*{this.props.pokRaces}*/}
                    {/*{this.props.useProphecyOfKings}*/}
                    {/*{this.props.currentRaces}*/}
                    {/*{this.props.handleRacesChange}*/}
                    <form id={"includedRacesForm"}>
                        {/*<div className={"form-group"}>*/}
                        {/*    <input className={"form-control"} id={"filterRaces"} type={"text"} placeholder={"filterRaces"} />*/}
                        {/*</div>*/}
                        {visibleRaces.map((raceName, raceIndex) => {
                            return (
                                <div className={"custom-control custom-checkbox mb-3 races"} id={"wrapper" + raceName.replace(" ", "")}>
                                    <input className={"custom-control-input"} name={raceName} type={"checkbox"} id={"include" + raceName.replace(" ", "")} checked={this.props.currentRaces.indexOf(raceName) > -1} onChange={this.props.handleRacesChange} />
                                    <label className={"custom-control-label d-flex"} htmlFor={"include" + raceName.replace(" ", "")}>{raceName}</label>
                                </div>
                            )
                        })}
                    </form>


                </Modal.Body>
            </Modal>
        );
    }
}
export default HelpModal;