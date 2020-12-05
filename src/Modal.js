import React from "react";

class MoreInfo extends React.Component {
    
    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="modalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabel">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MoreInfo;