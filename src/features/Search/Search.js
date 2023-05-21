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

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            inputRef.current.blur();
            dispatch(setSearchTerm(localSearchTerm));
            setLocalSearchTerm('');
        }
    }

    return (
        <div className="searchBar">
            <img src={searchIcon} className="search-icon" alt="search icon" />
            <input  
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