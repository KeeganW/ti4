import React from "react";

/**
 * Scripts for bootstrap and jquery integration.
 */
class BootstrapScripts extends React.Component {
    render() {
        return (
            <div id="bootstrapScripts">
                <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                         integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                         crossOrigin="anonymous" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                        crossOrigin="anonymous" />
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                        crossOrigin="anonymous" />
            </div>
        );
    }
}
export default BootstrapScripts;