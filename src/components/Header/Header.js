import React from "react";
import './Header.css';
import logo from './logo.png';
import Search from '../../features/Search/Search.js'

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <div className="logo">
                    <a href="#"><img src={logo} alt="MiniReddit logo"/></a>
                </div>
                <a href="#"><p><span className="highlight">Mini</span>Reddit</p></a>
            </div>
            <Search />
        </div>
    )
}

export default Header;