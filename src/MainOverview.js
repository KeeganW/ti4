import React from "react";

class MoreInfo extends React.Component {
    
    render() {
        return (
            <div id="overview" className={"justify-content-center" + (this.props.visible ? "" : " d-none")}>
                <div className="title">
                    <h2>TI4 Board Generator</h2>
                </div>
                <div id="description" className="pt-4">
                    <p>This tool is designed to help you pick out a Twilight Imperium 4 board to play your
                        next game on. By using the customization options to the right, you can design and
                        agree upon on a fair and balanced galaxy map before you even open the box to begin
                        setup. This helps cut down on game time and unlucky tile draws during traditional
                        game setup. Hit "Generate" to view a randomly generated 6 player map, and drag and
                        drop tiles to get started customizing your own board!</p>
                </div>
            </div>
        );
    }
}
export default MoreInfo;