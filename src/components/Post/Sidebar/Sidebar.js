import React from "react";
import { useState } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";

import './Sidebar.css';
import { shortNumber } from "../../../utils/shortNumber";

function Sidebar({score, display}) {
    const [ vote, setVote ] = useState(0);

    /**
     * Increases votes by one. If it's already increased
     * then it reduces it by one, returning were it was.
     */
    function handleUpClick() {
        if (vote === 0 || vote === -1) {
            setVote(1);
        } else {
            setVote(0);
        }
    }

    /**
     * Reduces votes by one. If it's already reduced
     * then it increases it by one, returning were it was.
     */
    function handleDownClick() {
        if (vote === 0 || vote === 1) {
            setVote(-1);
        } else {
            setVote(0);
        }
    }

    return (
        <div className={display} id="sidebar" >
            <BiUpvote onClick={handleUpClick} className={`vote-icon upVote ${vote === 1 && "green"}`} />
            <span className={`${vote === 1 && "green"} ${vote === -1 && "red"} 
                              ${score === -1 && "clear-score"} ${score > 999 && "bigNum"}`}>
                {score !== "" ? shortNumber(score + vote, 1) : ""}
            </span>
            <BiDownvote onClick={handleDownClick} className={`vote-icon downVote ${vote === -1 && "red"}`}  />
        </div>
    )
}

export default Sidebar;