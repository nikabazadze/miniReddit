import React from "react";
import { useSelector, useDispatch } from "react-redux";

import './RightColumn.css';
import popularIcon from './popularIcon.png';
import allIcon from './allIcon.png';
import defaultAvatar from '../../features/SubReddits/avatar.svg';

import { selectFeeds, selectChosenSubreddit, selectVisitedSubreddits, setChosenSubreddit } from "../../features/SubReddits/SubRedditsSlice";

function RightColumn() {
    const feeds = useSelector(selectFeeds);
    let chosenSubreddit = useSelector(selectChosenSubreddit);
    const visitedSubreddits = useSelector(selectVisitedSubreddits);
    const dispatch = useDispatch();

    function renderFeeds() {
        return (
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
        );
    };

    function renderVisitedSubreddits() {
        return (
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
        );
    };

    return (
        <div id="right-column">
            <h3>Feeds</h3>
            {renderFeeds()}
            {visitedSubreddits.length > 0 && (
                <div className="visited-subreddits">
                    <h3>Visited Subreddits</h3>
                    {renderVisitedSubreddits()}
                </div>
            )}
            <div className="join-section">
                <p>Create an account to follow your favorite communities and start taking part in conversations.</p>
                <div className="button-container">
                    <button className="join-button">Join MiniReddit</button>
                </div>
            </div>
        </div>
    )
}

export default RightColumn;