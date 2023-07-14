import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import './SubReddits.css';
import { loadSubreddits, setChosenSubreddit, addVisitedSubreddit, 
         selectSubreddits, selectChosenSubreddit, selectVisitedSubreddits, selectSubredditIsLoading, selectSubredditHasError } from "./SubRedditsSlice";

import defaultAvatar from './avatar.svg';

function Subreddits() {
    const subreddits = useSelector(selectSubreddits);
    let chosenSubreddit = useSelector(selectChosenSubreddit);
    const visitedSubreddits = useSelector(selectVisitedSubreddits);
    const [ isLoading, hasError ] = [ useSelector(selectSubredditIsLoading), useSelector(selectSubredditHasError) ];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSubreddits());
    }, [dispatch]);

    function renderSubreddits() {
        if (isLoading) {
            return renderLoadingSubreddits();
        } else if (hasError) {
            return (
                <div className="subreddits-error">
                    <p>Could Not Load Subreddits</p>
                </div>
            );
        };
        return (
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
        );
    };

    function renderLoadingSubreddits() {
        const loadingSubreddits = [];
        for (let i = 0; i < 20; i++) {
            const loadingSubreddit = (<div className="subreddit-skeleton">
                                        <Skeleton className="subreddit-avatar-skeleton"/>
                                        <Skeleton className="subreddit-title-skeleton"/>
                                     </div>);
            loadingSubreddits.push(loadingSubreddit);
        };

        return (
            <div className="subreddits-skeleton-wrapper">
                <ul>
                    {loadingSubreddits.map((subreddit, index) => (
                        <li key={index}>{subreddit}</li>
                    ))}
                </ul>
            </div>
        );
    };

    /**
     * Sets chosen subreddit and if the viewport width is more than 1050px adds
     * subreddit in the visitedSubreddit object if it is not already added
     * @param {Object} subreddit 
     */
    function handleClick(subreddit) {
        dispatch(setChosenSubreddit([subreddit.url, "subreddits"]));

        // Checks if the viewport width is more than 1050px. Below 1050px visited subreddits section is not rendered
        if (window.innerWidth > 1050) {
            // Checks if the clicked subreddit is "Popular" or "All" feed/subreddit
            if (subreddit.id !== 1 && subreddit.id !== 2) {
                // Checks if the clicked subreddit is already added in the visitedSubreddits array
                !visitedSubreddits.find(visitedSubreddit => visitedSubreddit.id === subreddit.id) && dispatch(addVisitedSubreddit(subreddit));
            }
        }
    };

    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            {renderSubreddits()}
        </div>
    );
}

export default Subreddits;