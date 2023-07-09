import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import './Feed.css';
import { selectFilteredPosts, selectPosts, loadPosts } from "./FeedSlice";
import { selectChosenSubreddit, setChosenSubreddit } from "../SubReddits/SubRedditsSlice";
import { selectSearchTerm, setSearchTerm } from "../Search/SearchSlice";
import Post from "../../components/Post/Post";

function Feed() {
    const searchTerm = useSelector(selectSearchTerm);
    const posts = useSelector(searchTerm ? selectFilteredPosts : selectPosts);
    const chosenSubreddit = useSelector(selectChosenSubreddit);
    const dispatch = useDispatch();

    useEffect(() => {
        if (chosenSubreddit) {
            dispatch(loadPosts(chosenSubreddit));
            searchTerm && dispatch(setSearchTerm(""));
            window.scrollTo(0, 0);
        }
    }, [chosenSubreddit, dispatch]);

    useEffect(() => {
        if (searchTerm) {
            dispatch(setChosenSubreddit(""));
            dispatch(loadPosts("/r/all/"));
            window.scrollTo(0, 0);
        }
    }, [searchTerm, dispatch]);

    return (
        <div id="feed">
            {
                posts.map((post, index) => {
                    return <Post
                                key={post.id}
                                post={post}
                                index={index}
                           />
                })
            }
        </div>
    )
}

export default Feed;