import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import './Feed.css';
import { selectPosts, loadPosts } from "./FeedSlice";

function Feed() {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts());
    }, []);

    return (
        <div>

        </div>
    )
}

export default Feed;