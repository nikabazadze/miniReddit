import React from "react";
import { useSelector } from "react-redux";

import './RightColumn.css';
import JoinButton from "../JoinButton/JoinButton";
import Feeds from "../Feeds/Feeds";
import VisitedSubreddits from "../VisitedSubreddits/VisitedSubreddits";
import { selectVisitedSubreddits } from "../../features/SubReddits/SubRedditsSlice";

function RightColumn() {
    const visitedSubreddits = useSelector(selectVisitedSubreddits);

    return (
        <div id="right-column">
            <Feeds />
            {visitedSubreddits.length > 0 && <VisitedSubreddits />}
            <div id="join-section" style={visitedSubreddits.length > 0 ? {marginTop: "0rem"} : {}}>
                <p>Create an account to follow your favorite communities and start taking part in conversations.</p>
                <JoinButton cta="Join MiniReddit" placement="right-column" />
            </div>
        </div>
    )
}

export default RightColumn;