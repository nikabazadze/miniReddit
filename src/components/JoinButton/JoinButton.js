import React from "react";
import './JoinButton.css';

function JoinButton({cta, placement}) {
    return <button className={`join-button ${placement}`}>{cta}</button>;
}

export default JoinButton;