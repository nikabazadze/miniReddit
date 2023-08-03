import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from 'react-loading-skeleton';

import './Feed.css';
import { selectFilteredPosts, selectPosts, loadPosts } from "./FeedSlice";
import { selectChosenSubreddit, setChosenSubreddit } from "../SubReddits/SubRedditsSlice";
import { selectSearchTerm, setSearchTerm } from "../Search/SearchSlice";
import { selectPostIsLoading, selectPostHasError } from "./FeedSlice";
import Sidebar from "../../components/Post/Sidebar/Sidebar";
import Post from "../../components/Post/Post";

function Feed() {
    const searchTerm = useSelector(selectSearchTerm);
    const posts = useSelector(searchTerm ? selectFilteredPosts : selectPosts);
    const chosenSubreddit = useSelector(selectChosenSubreddit);
    const [ postIsLoading, postHasError ] = [ useSelector(selectPostIsLoading), useSelector(selectPostHasError) ];
    const dispatch = useDispatch();

    // Loads chosen subreddit's posts
    useEffect(() => {
        if (chosenSubreddit.length > 0) {
            dispatch(loadPosts(chosenSubreddit[0]));
            searchTerm && dispatch(setSearchTerm(""));
            window.scrollTo(0, 0);
        }
    }, [chosenSubreddit, dispatch]);

    // When search term is set, it loads "all" subreddits to filter post's titles with search term
    useEffect(() => {
        if (searchTerm) {
            dispatch(setChosenSubreddit([]));
            dispatch(loadPosts("/r/all/"));
            window.scrollTo(0, 0);
        }
    }, [searchTerm, dispatch]);

    // If posts are loading it returns two loading post skeletons
    if (postIsLoading) {
        return (
            <div id="feed">
                {renderLoadingPost()}
                {renderLoadingPost()}
            </div>
        );
    };

    // If there is an error while fetching posts, it returns loading error message
    if (postHasError) {
        return (
            <div id="feed">
                <div className="no-result">
                    <p>Could Not Load Posts</p>
                </div>
            </div>
        );
    };
     
    /**
     * Renders loading post skeleton
     * @returns loading skeleton
     */
    function renderLoadingPost() {
        return (
            <div className="post-skeleton-wrapper">
                <Sidebar score={""} display="sidebar-desktop" />
                <div className="post-skeletons">
                    <Skeleton className="author-skeleton" />
                    <Skeleton className="title-skeleton first" />
                    <Skeleton className="title-skeleton" />
                    <Skeleton className="title-skeleton" />
                    <Skeleton className="content-skeleton" />
                </div>
            </div>
        );
    };

    return (
        <div id="feed">
            {posts.length ? 
                posts.map((post, index) => {
                    return <Post
                                key={post.id}
                                post={post}
                                index={index}
                            />
                }) : searchTerm &&
            <div className="no-result">
                <p>No Results Found</p>
            </div>
            }
        </div>
    )
}

export default Feed;