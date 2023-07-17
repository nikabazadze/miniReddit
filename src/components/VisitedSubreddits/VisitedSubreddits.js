import React from "react";
import { useSelector, useDispatch } from "react-redux";

import './VisitedSubreddits.css';
import defaultAvatar from '../../features/SubReddits/avatar.svg';
import { selectChosenSubreddit, selectVisitedSubreddits, setChosenSubreddit } from "../../features/SubReddits/SubRedditsSlice";


function VisitedSubreddits() {
    let chosenSubreddit = useSelector(selectChosenSubreddit);
    const visitedSubreddits = useSelector(selectVisitedSubreddits);
    const dispatch = useDispatch();

    return (
        <div id="visited-subreddits">
            <h3>Visited Subreddits</h3>
            <ul className="visited-subreddits-list">
                {visitedSubreddits.map((subreddit) => (
                    <li 
                        key={subreddit.id} 
                        className={`subreddit ${(chosenSubreddit[0] === subreddit.url && chosenSubreddit[1] === "visitedSubreddits") ? 'chosenSubreddit' : ''}`}
                        onClick={() => dispatch(setChosenSubreddit([subreddit.url, "visitedSubreddits"]))}
                    >
                        <img 
                            src={subreddit.icon_img || defaultAvatar}
                            alt={subreddit.display_name}
                            className="subreddit-avatar"
                        />
                        <p>{subreddit.display_name_prefixed}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default VisitedSubreddits;