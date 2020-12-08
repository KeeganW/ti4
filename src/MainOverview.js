import React from "react";

class MainOverview extends React.Component {
    render() {
        return (
            <div id="overview" className={"justify-content-center" + (this.props.visible ? "" : " d-none")}>
                <div className="title">
                    <h1>TI4 Map Generator</h1>
                </div>
                <div className={"p-2 mb-3"}>
                    <h5>Customize Your Next Twilight Imperium 4 Map!</h5>
                    <p className={"text-left"}>
                        Use this tool to generate a fresh new Twilight Imperium map for the next game you play. The
                        goal of this is to cut down the game setup time by letting you generate a fair and balanced map
                        before you play, so that you are not spending an hour picking and placing tiles. Get started
                        by customizing settings via the generation panel on the right, and hit "Generate" to see a new
                        map.
                    </p>
                </div>
                <div className={"p-2 mb-3"}>
                    <h5>Drag and Drop for Further Customization</h5>
                    <p className={"text-left"}>
                        Unhappy with a wormhole next to a home world? Are two asteroids next to one another? Don't like
                        a certain system? Just swap it with another tile! Click and drag one tile over the top of
                        another tile to swap the two.
                    </p>
                </div>
                <div className={"p-2 mb-3"}>
                    <h5>Prophecy of Kings Expansion Content</h5>
                    <p className={"text-left"}>
                        The new expansion content for TI4, called Prophecy of Kings, was recently released. Check out
                        the new tiles and 7 and 8 player maps. Hyperlane additions are still a work in progress. Let me
                        know by <a href="https://github.com/KeeganW/ti4/issues/new">creating a new issue</a> if you have
                        any ideas on how to include them!
                    </p>
                </div>
                <div className={"p-2 mb-3"}>
                    <h5>Use Any Tile You Want</h5>
                    <p className={"text-left"}>
                        Do you really like the gravity rift anomaly and not see it on the board? Click the "Show unused
                        tiles" button to see any tiles not currently being used in the map. Drag and drop these tiles
                        onto the board to replace another tile to further customize your map.
                    </p>
                </div>
                <div className={"p-2 mb-3"}>
                    <h5>Easy Setup On Game Day</h5>
                    <p className={"text-left"}>
                        It can be hard to see what tile is which when it is time to setup your new board. Click the
                        "Toggle Tile Number Overlay" button to see the numbers of every tile on your custom board.
                    </p>
                </div>
                <div className={"p-2 mb-3"}>
                    <h5>Have Any Ideas On Improvements?</h5>
                    <p className={"text-left"}>
                        I am always open to feedback and suggestions! You can see
                        the <a href="https://github.com/KeeganW/ti4/issues">current set of issues</a> with this tool, or if
                        you don't see your issue or want to suggest a new feature, add
                        it <a href="https://github.com/KeeganW/ti4/issues/new">to my issue tracker</a>. Thanks for checking
                        this out!
                    </p>
                </div>
            </div>
        );
    }
}
export default MainOverview;