import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import './Search.css';
import searchIcon from './search-icon.svg'
import { setSearchTerm } from "./SearchSlice";

function Search() {
    const [ localSearchTerm, setLocalSearchTerm ] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    /**
     * Handles click event for mobile phone screen.
     * When clicked on, search bar becomes wider to see input text clearly 
     */
    function handleClick() {
        if (window.innerWidth < 411) {
            inputRef.current.focus();   // When clicking search icon instead of input field, it does not give input field focus without this code
            widenSearch(true);
        }
    }

    /**
     * Fires when search input field loses focus. When fired it shrinks search bar to its normal size
     * @param {Object} e 
     */
    function handleBlur(e) {
        if ((window.innerWidth < 411) && (e.target.offsetWidth > (window.innerWidth * 0.4))) {
            widenSearch(false);
        }
    }

    /**
     * Makes search bar wider or shrinks it to its normal size depending on boolean argument "grow"
     * @param {boolean} grow 
     */
    function widenSearch(grow) {
        const searchContainer = document.getElementById("searchBar");
        const icon = document.getElementById("search-icon");
        const input = document.getElementById("search-input");
        searchContainer.style.width = grow ? "93%" : "40%";
        searchContainer.style.transition = "width 0.12s linear";
        input.style.marginRight = grow ? "0" : "1.25rem";
        icon.style.display = grow ? "none" : "block";
    }

    /**
     * Dispatches search term to the redux store
     * @param {Object} e 
     */
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            inputRef.current.blur();
            dispatch(setSearchTerm(localSearchTerm));
            setLocalSearchTerm('');
        }
    }

    return (
        <div id="searchBar" onClick={handleClick} onBlur={handleBlur} >
            <img src={searchIcon} id="search-icon" alt="search icon" />
            <input
                id="search-input"
                type="text"
                value={localSearchTerm}
                ref={inputRef}
                onKeyDown={handleKeyDown}
                onChange={(({target}) => setLocalSearchTerm(target.value))}
                placeholder="Search"
            />
        </div>
    )
}

export default Search;