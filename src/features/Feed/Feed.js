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

    useEffect(() => {
        if (chosenSubreddit.length > 0) {
            dispatch(loadPosts(chosenSubreddit[0]));
            searchTerm && dispatch(setSearchTerm(""));
            window.scrollTo(0, 0);
        }
    }, [chosenSubreddit, dispatch]);

    useEffect(() => {
        if (searchTerm) {
            dispatch(setChosenSubreddit([]));
            dispatch(loadPosts("/r/all/"));
            window.scrollTo(0, 0);
        }
    }, [searchTerm, dispatch]);

    function renderPosts() {
        if (postIsLoading) {
            return (
                <div>
                    {renderLoadingPost()}
                    {renderLoadingPost()}
                </div>
            )
        }
        return (
            <div>
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

    function renderLoadingPost() {
        return (
            <div className="post-skeleton-wrapper">
                <Sidebar score={""}/>
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
            {renderPosts()}
        </div>
    )
}

export default Feed;