import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import './SubReddits.css';
import { loadSubreddits, setChosenSubreddit, addVisitedSubreddit, selectSubreddits, selectChosenSubreddit, selectVisitedSubreddits } from "./SubRedditsSlice";

import defaultAvatar from './avatar.svg';

function Subreddits() {
    const subreddits = useSelector(selectSubreddits);
    let chosenSubreddit = useSelector(selectChosenSubreddit);
    const visitedSubreddits = useSelector(selectVisitedSubreddits);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSubreddits());
    }, [dispatch]);

    function handleClick(subreddit) {
        dispatch(setChosenSubreddit([subreddit.url, "subreddits"]));

        // Checks if the clicked subreddit is "Popular" or "All" feed/subreddit
        if (subreddit.id !== 1 && subreddit.id !== 2) {
            // Checks if the clicked subreddit is already added in the visitedSubreddits array
            !visitedSubreddits.find(visitedSubreddit => visitedSubreddit.id === subreddit.id) && dispatch(addVisitedSubreddit(subreddit));
        }
    };

    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            <ul>
                {subreddits.slice(2).map((subreddit) => (
                    <li 
                        key={subreddit.id} 
                        className={`subreddit ${(chosenSubreddit[0] === subreddit.url && chosenSubreddit[1] === "subreddits") ? 'chosenSubreddit' : ''}`}
                        onClick={() => handleClick(subreddit)}
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
    );
}

export default Subreddits;