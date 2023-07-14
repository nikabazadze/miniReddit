import React from "react";
import { useSelector, useDispatch } from "react-redux";

import './Header.css';
import logo from './logo.png';
import Search from '../../features/Search/Search.js'
import JoinButton from "../JoinButton/JoinButton";
import popularIcon from '../popularIcon.png';
import allIcon from '../allIcon.png';
import { setChosenSubreddit, selectChosenSubreddit } from "../../features/SubReddits/SubRedditsSlice";

function Header() {
    let chosenSubreddit = useSelector(selectChosenSubreddit);
    const dispatch = useDispatch();

    return (
        <div className="header">
            <div className="logo-container" onClick={() => window.location.reload(false)}>
                <div className="logo">
                    <img src={logo} alt="MiniReddit logo"/>
                </div>
                <p><span className="highlight">Mini</span>Reddit</p>
            </div>
            <Search />
            <div className="inheader-feeds-cta">
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