import React from "react";
import { useState } from "react";
import { BiUpvote, BiDownvote } from "react-icons/bi";

import './Sidebar.css';
import { shortNumber } from "../../../utils/shortNumber";

function Sidebar({score}) {
    const [ vote, setVote ] = useState(0);

    function handleUpClick() {
        if (vote === 0 || vote === -1) {
            setVote(1);
        } else {
            setVote(0);
        }
    }

    function handleDownClick() {
        if (vote === 0 || vote === 1) {
            setVote(-1);
        } else {
            setVote(0);
        }
    }

    return (
        <div className="sideBar">
            <BiUpvote onClick={handleUpClick} className={`vote-icon upVote ${vote === 1 && "green"}`} />
            <span className={`${vote === 1 && "green"} ${vote === -1 && "red"} ${score > 999 && "bigNum"}`}>{score !== "" ? shortNumber(score + vote, 1) : ""}</span>
            <BiDownvote onClick={handleDownClick} className={`vote-icon downVote ${vote === -1 && "red"}`}  />
        </div>
    )
}

export default Sidebar;