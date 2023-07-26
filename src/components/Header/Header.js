import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import './Header.css';
import logo from './logo.png';
import Search from '../../features/Search/Search.js'
import JoinButton from "../JoinButton/JoinButton";
import popularIcon from '../popularIcon.png';
import allIcon from '../allIcon.png';
import menuIcon from './menuIcon.svg';
import { setChosenSubreddit, selectChosenSubreddit } from "../../features/SubReddits/SubRedditsSlice";
import Menu from "../Menu/Menu";

function Header() {
    const [ showMenu, setShowMenu ] = useState(false);
    let chosenSubreddit = useSelector(selectChosenSubreddit);
    const dispatch = useDispatch();

    return (
        <div id="header">
            <div className="header-leftside-container">
                <div className="logo-container" onClick={() => window.location.reload(false)}>
                    <div className="logo">
                        <img src={logo} alt="MiniReddit logo"/>
                    </div>
                    <p><span className="highlight">Mini</span>Reddit</p>
                </div>
                <div id="dropdown-menu" onClick={() => setShowMenu(!showMenu)} >
                    <img src={menuIcon} alt="Dropdown menu icon" className="menu-icon"/>
                </div>
                {showMenu && <Menu onClick={setShowMenu} />}
            </div>
            <Search />
            <div className="header-rightside-container">
                <ul className="feeds-container">
                    <li onClick={() => dispatch(setChosenSubreddit(["/r/popular/", "feeds"]))}>
                        <img 
                            src={popularIcon} 
                            alt="Popular feed icon" 
                            className={`feed-icon ${chosenSubreddit[0] === "/r/popular/" ? 'chosen-feed-icon' : ''}`} />
                    </li>
                    <li onClick={() => dispatch(setChosenSubreddit(["/r/all/", "feeds"]))}>
                        <img 
                            src={allIcon} 
                            alt="All feed icon" 
                            className={`feed-icon ${chosenSubreddit[0] === "/r/all/" ? 'chosen-feed-icon' : ''}`} />
                    </li>
                </ul>
                <div className="header-cta-container">
                    <JoinButton cta="Sign up" placement="header-cta" />
                </div>
            </div>
        </div>
    )
}

export default Header;