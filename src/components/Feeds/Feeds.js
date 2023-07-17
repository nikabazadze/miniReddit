import React from "react";
import { useSelector, useDispatch } from "react-redux";

import './Feeds.css';
import popularIcon from '../popularIcon.png';
import allIcon from '../allIcon.png';
import { selectFeeds, selectChosenSubreddit, setChosenSubreddit } from "../../features/SubReddits/SubRedditsSlice";

function Feeds() {
    const feeds = useSelector(selectFeeds);
    let chosenSubreddit = useSelector(selectChosenSubreddit);
    const dispatch = useDispatch();

    return (
        <div id="feeds">
            <h3>Feeds</h3>
            <ul>
                {feeds.map((feed, index) => (
                    <li 
                        key={feed.id} 
                        className={`subreddit feed ${chosenSubreddit[0] === feed.url ? 'chosenFeed' : ''}`}
                        onClick={() => dispatch(setChosenSubreddit([feed.url, "feeds"]))}
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
    );
}

export default Feeds;