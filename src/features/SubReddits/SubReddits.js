import React from "react";
import { useDispatch, useSelector } from "react-redux";

import './SubReddits.css';
import { setChosenSubreddit, selectChosenSubreddit } from "./SubRedditsSlice";

import avatar1 from '../../db/avatar1.svg';
import avatar2 from '../../db/avatar2.svg';
import avatar3 from '../../db/avatar3.svg';

function Subreddits() {
    let chosenSubreddit = useSelector(selectChosenSubreddit);
    const dispatch = useDispatch();

    // mock data for subreddits
    const subreddits = [
        {
            id: 1,
            icon_img: avatar1,
            url: 'r/mySubreddit' 
        },
        {
            id: 2,
            icon_img: avatar2,
            url: 'r/elonMusk' 
        },
        {
            id: 3,
            icon_img: avatar3,
            url: 'r/crypto' 
        },
        {
            id: 4,
            icon_img: avatar1,
            url: 'r/gaming' 
        },
        {
            id: 5,
            icon_img: avatar2,
            url: 'r/chatgpt' 
        },
        {
            id: 6,
            icon_img: '',
            url: 'r/somthingElse' 
        }
    ]

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
                            src={subreddit.icon_img || avatar1}
                            alt={subreddit.url}
                            className="subreddit-avatar"
                        />
                        <p>{subreddit.url}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Subreddits;