import React from "react";
import {ArrowRepeat, Check, Share, Lock, X} from "react-bootstrap-icons";

class MainOverview extends React.Component {
    render() {
        return (
            <div id="overview" className={"flex-column justify-content-center" + (this.props.visible ? " d-flex" : " d-none")}>
                <div className="title">
                    <h1>TI4 Map Generator</h1>
                </div>

                <div className={"overview-panel my-4 mx-auto"}>
                    <h4 className={"m-3"}>Customize Your Next Twilight Imperium 4 Map!</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            Use this tool to generate a fresh new Twilight Imperium map for the next game you play. The
                            goal of this tool is to cut down the game setup time by letting you generate a fair and balanced map
                            before you play, so that you are not spending a half-hour picking and placing tiles, or getting a bad draw of tiles. Get started
                            by customizing settings via the generation panel on the right, and hit "Generate" to see a new
                            map.
                        </p>
                    </div>
                </div>

                <div className={"overview-panel my-4 mx-auto"}>
                    <h4 className={"m-3"}>Individual Tile Controls</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            Modify individual tiles by clicking on them to pull up the tile control menu. Lock the tile in place
                            with the (
                            <Lock className="icon d-inline" />
                            ) button. Include it in all future generations with the (
                            <Check className="icon d-inline" />
                            ) button. Exclude it from all future generations with the (
                            <X className="icon d-inline" />
                            ) button. Finally, swap it with a tile not on the board with the (
                            <ArrowRepeat className="icon d-inline" />
                            ) button. Controls reset on page refresh.
                        </p>
                    </div>
                </div>

                <div className={"overview-panel my-4 mx-auto"}>
                    <h4 className={"m-3"}>Drag and Drop for Further Customization</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            Unhappy with a wormhole next to a home world? Are two asteroids next to one another? Don't like
                            a certain system? Just swap it with another tile by clicking and dragging one tile over the top of
                            another tile. Alternatively, use the tile controls (click on a tile once to see them) and click
                            the bottom middle "Swap with an extra tile" button (
                            <ArrowRepeat className="icon d-inline" />
                            ) to swap with a tile not on the board.
                        </p>
                    </div>
                </div>

                <div className={"overview-panel my-4 mx-auto"}>
                    <h4 className={"m-3"}>New Prophecy of Kings Expansion Content</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            The new expansion content for TI4, called Prophecy of Kings, was recently released. Check out
                            the new tiles as well as the 7 and 8 player maps. Hyperlanes which connect systems together
                            were also added, and are included on some non expansion board styles.
                        </p>
                    </div>
                </div>

                <div className={"overview-panel my-4 mx-auto"}>
                    <h4 className={"m-3"}>Share With Your Friends</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            After you have made your custom map, click on the "Share This Map" button (
                            <Share className="icon d-inline" />
                            ) to find out how to send it to your friends! You can share the url as a link, copy the
                            Table Top Simulator string to use in the TI4 mod, or simply download an image of the map
                            to post. If you toggle the tile overlay on, you can have the tile numbers appear in your
                            downloaded image.
                        </p>
                    </div>
                </div>

                <div className={"overview-panel my-4 mx-auto"}>
                    <h4 className={"m-3"}>Use Any Tile You Want</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            Do you really like the gravity rift anomaly and not see it on the board? Click the "Show unused
                            tiles" button (
                            <svg id="showExtraTilesSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.35 311.21" className="icon d-inline" fill="currentColor">
                                <polygon id="showExtraTilesPoly" points="269.51 0 89.84 0 0 155.6 89.84 311.2 269.51 311.2 359.35 155.6 269.51 0" />
                            </svg>
                            ) to see any tiles not currently being used in the map, and drag and drop them to add them!
                        </p>
                    </div>
                </div>

                <div className={"overview-panel my-4 mx-auto"}>
                    <h4 className={"m-3"}>Easy Setup On Game Day</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            It can be hard to know which tile is which when it is time to setup your new board. Click the
                            "Toggle Tile Number Overlay" button (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.78 169.62" className="icon d-inline" fill="currentColor">
                                <polygon className="overlay-cls-1" points="148.03 4 51.81 4 4.61 86.92 52.02 169.84 148.03 169.84 195.03 86.92 148.03 4"/>
                                <text className="overlay-cls-2" transform="translate(27.09 132.03)">18</text>
                            </svg>
                            )
                             to see the numbers of every tile on your custom board.
                        </p>
                    </div>
                </div>

                <div className={"overview-panel my-4 mx-auto"}>
                    <h4 className={"m-3"}>Have Any Ideas On Improvements?</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            I am always open to feedback and suggestions! You can see
                            the <a href="https://github.com/KeeganW/ti4/issues">current set of issues</a> with the generator, or if
                            you don't see your issue or want to suggest a new feature, add
                            it <a href="https://github.com/KeeganW/ti4/issues/new">to my issue tracker</a>. Thanks for checking
                            this out!
                        </p>
                    </div>
                </div>

                <div className={"overview-panel my-4 mx-auto"}>
                    <h4 className={"m-3"}>Contributors</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-2"}>
                            Thank you to all the contributors to this project
                        </p>
                    </div>
                    <div className={"d-flex justify-content-center"}>
                        <ul className={"text-left"}>
                            <li>dotlogix</li>
                            <li>nicolajv</li>
                            <li>ninevra</li>
                            <li>qbixsd</li>
                            <li>shenanigans-be</li>
                            <li>tomb1125</li>
                        </ul>
                    </div>
                </div>

                <div className={"overview-panel my-4 mx-auto"}>
                    &#169; Keegan Williams 2023
                </div>
            </div>
        );
    }
}
export default MainOverview;