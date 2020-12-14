import React from "react";
import Modal from "react-bootstrap/Modal";

class SetPlayerNameModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.visible} onHide={this.props.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Set Player Names</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id={"playerNameForm"}>
                        {this.props.currentPlayerNames.map((x, i) => {
                            return (
                                <div className={"form-group"} key={"set-names-" + i}>
                                    <label htmlFor={"player" + (i+1) + "Name"}>Player {(i+1)}</label>
                                    <input className={"form-control"} name={"playerName" + i} type={"text"} placeholder={"P" + (i+1)} defaultValue={x} onChange={this.props.handleNameChange} />
                                </div>
                            )
                        })}
                    </form>


                </Modal.Body>
            </Modal>
        );
    }
}
export default SetPlayerNameModal;