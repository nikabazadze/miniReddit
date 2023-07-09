import React from "react";
import { useSelector, useDispatch } from "react-redux";

import './RightColumn.css';
import popularIcon from './popularIcon.png';
import allIcon from './allIcon.png';

import { selectFeeds, selectChosenSubreddit, setChosenSubreddit } from "../../features/SubReddits/SubRedditsSlice";

function RightColumn() {
    const feeds = useSelector(selectFeeds);
    let chosenSubreddit = useSelector(selectChosenSubreddit);
    const dispatch = useDispatch();

    return (
        <div id="right-column">
            <h3>Feeds</h3>
            <ul>
                {feeds.map((feed, index) => (
                    <li 
                        key={feed.id} 
                        className={`subreddit ${chosenSubreddit === feed.url ? 'chosenSubreddit' : ''}`}
                        onClick={() => dispatch(setChosenSubreddit(feed.url))}
                    >
                        <img 
                            src={index === 0 ? popularIcon : allIcon}
                            alt={feed.display_name}
                            className="feed-avatar"
                        />
                        <p>{feed.display_name_prefixed}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RightColumn;