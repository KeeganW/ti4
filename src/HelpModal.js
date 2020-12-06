import React from "react";
import Modal from "react-bootstrap/Modal";

class HelpModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.visible} onHide={this.props.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div dangerouslySetInnerHTML={{__html: this.props.content}} />
                </Modal.Body>
            </Modal>
        );
    }
}
export default HelpModal;