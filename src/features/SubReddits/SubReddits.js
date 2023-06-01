import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import './SubReddits.css';
import { loadSubreddits, setChosenSubreddit, selectSubreddits, selectChosenSubreddit } from "./SubRedditsSlice";

import defaultAvatar from '../../db/avatar1.svg';

function Subreddits() {
    const subreddits = useSelector(selectSubreddits);
    let chosenSubreddit = useSelector(selectChosenSubreddit);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSubreddits());
    }, [])

    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            <ul>
                {subreddits.map((subreddit) => (
                    <li 
                        key={subreddit.id} 
                        className={`subreddit ${chosenSubreddit === subreddit.url ? 'chosenSubreddit' : ''}`}
                        onClick={() => dispatch(setChosenSubreddit(subreddit.url))}
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

export default Subreddits;