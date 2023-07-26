import React from "react";

import './Menu.css';
import Feeds from "../Feeds/Feeds";
import Subreddits from "../../features/SubReddits/SubReddits";

function Menu({onClick}) {
    return (
        <div id="menu" onClick={() => onClick(false)}>
            <Feeds />
            <div className="menu-line"></div>
            <Subreddits />
        </div>
    )
}

export default Menu;