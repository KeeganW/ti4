import React from "react";
import {ArrowBarLeft, ArrowBarRight} from "react-bootstrap-icons";

class OptionsControls extends React.Component {
    render() {
        return (
            <div className="controls btn-group-justified btn-group-sm">
                <button type="button" id="toggleOptions" className={"btn btn-primary" + (this.props.visible ? "" : " hidden") + (this.props.isMobileView ? " full-screen" : "")} onClick={this.props.toggleOptions}>
                    <ArrowBarRight className={"icon icon-contract"} />
                    <ArrowBarLeft className={"icon icon-expand"} />
                </button>
            </div>
        );
    }
}
export default OptionsControls;