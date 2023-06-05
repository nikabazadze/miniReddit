import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import './Feed.css';
import { selectPosts, loadPosts } from "./FeedSlice";
import { selectChosenSubreddit } from "../SubReddits/SubRedditsSlice";
import Post from "../../components/Post/Post";

function Feed() {
    const posts = useSelector(selectPosts);
    const chosenSubreddit = useSelector(selectChosenSubreddit);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts(chosenSubreddit));
    }, [chosenSubreddit]);

    return (
        <div id="feed">
            {
                posts.map((post) => {
                    return <Post
                                key={post.id}
                                post={post}
                           />
                })
            }
        </div>
    )
}

export default Feed;