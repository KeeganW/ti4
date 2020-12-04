import React from "react";

class MoreInfo extends React.Component {
    
    render() {
        return (
            <div id="moreInfoContainer" className={this.props.visible ? "" : "d-none"}>
                <div className="title">
                    <h4 id="infoTitle" className="text-center">More Info</h4>
                </div>
                <div id="moreInfo" className="">
                </div>
            </div>
        );
    }
}
export default MoreInfo;