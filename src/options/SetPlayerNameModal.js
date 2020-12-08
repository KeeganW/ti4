import React from "react";
import Modal from "react-bootstrap/Modal";

class HelpModal extends React.Component {
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
                                <div className={"form-group"}>
                                    <label htmlFor={"player" + i + "Name"}>Player {i}</label>
                                    <input className={"form-control"} name={"playerName" + i} type={"text"} placeholder={"P" + i} defaultValue={x} onChange={this.props.handleNameChange} />
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