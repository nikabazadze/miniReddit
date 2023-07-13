import React from "react";
import './Header.css';
import logo from './logo.png';
import Search from '../../features/Search/Search.js'
import popularIcon from '../popularIcon.png';
import allIcon from '../allIcon.png';

function Header() {
    return (
        <div className="header">
            <div className="logo-container" onClick={() => window.location.reload(false)}>
                <div className="logo">
                    <img src={logo} alt="MiniReddit logo"/>
                </div>
                <p><span className="highlight">Mini</span>Reddit</p>
            </div>
            <Search />
        </div>
    )
}

export default Header;