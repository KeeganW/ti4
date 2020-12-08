import React from "react";
import exampleMap from './exampleMap.png';
import exampleMapNumbered from './exampleMapNumbered.png';
import dragAndDrop from './dragAndDrop.png';
import st82 from './ST_82.png';

class MainOverview extends React.Component {
    render() {
        return (
            <div id="overview" className={"flex-column justify-content-center" + (this.props.visible ? " d-flex" : " d-none")}>
                <div className="title">
                    <h1>TI4 Map Generator</h1>
                </div>

                <div className={"overview-panel mb-4 mt-4 ml-auto mr-auto"}>
                    <h4 className={"m-3"}>Customize Your Next Twilight Imperium 4 Map!</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            Use this tool to generate a fresh new Twilight Imperium map for the next game you play. The
                            goal of this tool is to cut down the game setup time by letting you generate a fair and balanced map
                            before you play, so that you are not spending a half-hour picking and placing tiles, or getting a bad draw of tiles. Get started
                            by customizing settings via the generation panel on the right, and hit "Generate" to see a new
                            map.
                        </p>
                        <img className={"overview-image"} src={exampleMap} alt="TI4 Generated Map"/>
                    </div>
                </div>

                <div className={"overview-panel mb-4 mt-4 ml-auto mr-auto"}>
                    <h4 className={"m-3"}>Drag and Drop for Further Customization</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            Unhappy with a wormhole next to a home world? Are two asteroids next to one another? Don't like
                            a certain system? Just swap it with another tile by click and dragging one tile over the top of
                            another tile.
                        </p>
                        <img className={"overview-image"} src={dragAndDrop} alt="Tile Drag Example"/>
                    </div>
                </div>

                <div className={"overview-panel mb-4 mt-4 ml-auto mr-auto"}>
                    <h4 className={"m-3"}>New Prophecy of Kings Expansion Content</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            The new expansion content for TI4, called Prophecy of Kings, was recently released. Check out
                            the new tiles and 7 and 8 player maps. Hyperlane additions are still a work in progress.
                        </p>
                        <img className={"overview-image"} src={st82} alt="TI4 Generated Map"/>
                    </div>
                </div>

                <div className={"overview-panel mb-4 mt-4 ml-auto mr-auto"}>
                    <h4 className={"m-3"}>Share With Your Friends</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            After you have made your custom map, just copy the url and send it to your friends!
                        </p>
                    </div>
                </div>

                <div className={"overview-panel mb-4 mt-4 ml-auto mr-auto"}>
                    <h4 className={"m-3"}>Use Any Tile You Want</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            Do you really like the gravity rift anomaly and not see it on the board? Click the "Show unused
                            tiles" button to see any tiles not currently being used in the map, and drag and drop them to add them!
                        </p>
                    </div>
                </div>

                <div className={"overview-panel mb-4 mt-4 ml-auto mr-auto"}>
                    <h4 className={"m-3"}>Easy Setup On Game Day</h4>
                    <div className={"d-flex"}>
                        <p className={"text-left p-3"}>
                            It can be hard to know which tile is which when it is time to setup your new board. Click the
                            "Toggle Tile Number Overlay" button to see the numbers of every tile on your custom board.
                        </p>
                        <img className={"overview-image"} src={exampleMapNumbered} alt="TI4 Generated Map"/>
                    </div>
                </div>

                <div className={"overview-panel mb-4 mt-4 ml-auto mr-auto"}>
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
            </div>
        );
    }
}
export default MainOverview;