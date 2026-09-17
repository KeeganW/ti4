import React from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { EXPANSIONS } from "../data/tileData";

class SetFactionsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: "",
    };

    this.updateSearchString = this.updateSearchString.bind(this);
  }

  updateSearchString(event) {
    this.setState({
      searchString: event.target.value,
    });
  }

  render() {
    let visibleFactions = this.props.factions;
    if (this.props.includedExpansions[EXPANSIONS.POK]) {
      visibleFactions = visibleFactions.concat(this.props.pokFactions);
    }
    if (this.props.includedExpansions[EXPANSIONS.TE]) {
      visibleFactions = visibleFactions.concat(this.props.teFactions);
    }
    if (this.props.includedExpansions[EXPANSIONS.DS]) {
      visibleFactions = visibleFactions.concat(this.props.dsFactions);
    }

    let breakStyle = {
      borderBottom: "1px solid #dee2e6",
    };

    return (
      <Modal show={this.props.visible} onHide={this.props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Set Factions</Modal.Title>
        </Modal.Header>
        <div style={breakStyle}>
          <button
            type="button"
            name={"all"}
            className="btn btn-outline-primary m-2 ml-3"
            onClick={this.props.handleFactionsChange}
          >
            Select All
          </button>
          <button
            type="button"
            name={"none"}
            className="btn btn-outline-primary m-2"
            onClick={this.props.handleFactionsChange}
          >
            Deselect All
          </button>
        </div>
        <Modal.Body>
          <form id={"includedFactionsForm"}>
            <div className={"form-group mb-3"}>
              <input
                className={"form-control"}
                id={"filterFactions"}
                type={"text"}
                placeholder={"Filter Factions..."}
                value={this.state.searchString}
                onChange={this.updateSearchString}
              />
            </div>
            {visibleFactions.map((factionName, factionIndex) => {
              let factionVisible = factionName
                .toLowerCase()
                .includes(this.state.searchString);
              return (
                <Form.Group
                  className={
                    "custom-control custom-checkbox mb-2 factions" +
                    (factionVisible ? "" : " d-none")
                  }
                  controlId={"include" + factionName.replace(" ", "")}
                  key={"set-factions-" + factionIndex}
                >
                  <Form.Check
                    inline
                    name={factionName}
                    type="checkbox"
                    checked={
                      this.props.currentFactions.indexOf(factionName) > -1
                    }
                    onChange={this.props.handleFactionsChange}
                    label={factionName}
                  />
                </Form.Group>
                // <div className={"custom-control custom-checkbox mb-2 factions" + (factionVisible ? "" : " d-none")} key={"set-factions-" + factionIndex}>
                //     <input className={"custom-control-input"} name={factionName} type={"checkbox"} id={"include" + factionName.replace(" ", "")} checked={this.props.currentFactions.indexOf(factionName) > -1} onChange={this.props.handleFactionsChange} />
                //     <label className={"custom-control-label"} htmlFor={"include" + factionName.replace(" ", "")}>{factionName}</label>
                // </div>
              );
            })}
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}
export default SetFactionsModal;
