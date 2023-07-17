import React from "react";

import './Menu.css';
import Feeds from "../Feeds/Feeds";
import Subreddits from "../../features/SubReddits/SubReddits";

function Menu() {
    return (
        <div id="menu">
            <Feeds />
            <div className="menu-line"></div>
            <Subreddits />
        </div>
    )
}

export default Menu;