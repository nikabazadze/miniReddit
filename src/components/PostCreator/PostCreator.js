import React, { useState } from "react";
import { useDispatch } from "react-redux";

import './PostCreator.css';
import AlertDialog from "../AlertDialog/AlertDialog";
import { addPost } from "../../features/Feed/FeedSlice";
import PostTypeChooser from "./PostTypeChooser/PostTypeChooser";
import PostTitleChooser from "./PostTitleChooser/PostTitleChooser";
import PostContentCreator from "./PostContentCreator/PostContentCreator";

function PostCreator() {
    const [ contentType, setContentType ] = useState("text");
    const [ postTitle, setPostTitle ] = useState("");
    const [ content, setContent ] = useState(null);
    const [ clearContent, setClearContent ] = useState(0);
    const [ openDialog, setOpenDialog ] = useState(false);
    const dispatch = useDispatch();

    const handlePost = () => {
        if (!postTitle || !content) {
            setOpenDialog(true);
            return;
        };

        const date = new Date();
        const unixTimestamp = Math.floor(date.getTime() / 1000);

        const post = {
            id: Math.floor(Math.random() * 100000),
            score: 0,
            author: "GuestUser",
            created_utc: unixTimestamp,
            title: postTitle,
            num_comments: 0,
            is_self: (contentType === "text"),
            selftext: (contentType === "text") ? content : "",
            is_video: (contentType === "video"),
            media: {
                reddit_video: {
                    fallback_url: (contentType === "video") ? content : "",
                }
            },
            post_hint: (contentType === "image") ? "image" : (contentType === "link") ? "link" : "",
            url: (contentType === "image" || contentType === "link") ? content : "",
        };

        dispatch(addPost(post));
        clearState();
    };

    const clearState = () => {
        setContentType("text");
        setPostTitle("");
        setContent(null);
        setClearContent(prev => prev + 1);
    };

    return (
        <div id="post-creator">
            <h2>Create a post</h2>
            <div className="divider"></div>
            <div className="post-container">
                <PostTypeChooser contentType={contentType} setContentType={setContentType} />
                <PostTitleChooser postTitle={postTitle} setPostTitle={setPostTitle} />
                <PostContentCreator contentType={contentType} setContent={setContent} clearContent={clearContent} />
                <div className="button-wrapper"><button onClick={handlePost}>Post</button></div>
                {openDialog &&  <AlertDialog 
                                    title={`Missing post ${!postTitle ? "title" : "content"}`}
                                    content={`You have to add a post ${!postTitle ? "title" : "content"} to create a post!`}
                                    onClose={setOpenDialog} 
                                />
                }
            </div>
        </div>
    );
};

export default PostCreator;