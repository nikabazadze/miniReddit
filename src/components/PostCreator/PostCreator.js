import React, { useState } from "react";

import './PostCreator.css';
import PostTypeChooser from "./PostTypeChooser/PostTypeChooser";
import PostTitleChooser from "./PostTitleChooser/PostTitleChooser";
import PostContentCreator from "./PostContentCreator/PostContentCreator";

function PostCreator() {
    const [ contentType, setContentType ] = useState("text");
    const [ postTitle, setPostTitle ] = useState("");

    const handlePost = () => {

    }

    return (
        <div id="post-creator">
            <h2>Create a post</h2>
            <div className="divider"></div>
            <div className="post-container">
                <PostTypeChooser contentType={contentType} setContentType={setContentType} />
                <PostTitleChooser postTitle={postTitle} setPostTitle={setPostTitle} />
                <PostContentCreator contentType={contentType} />
                <div className="button-wrapper"><button onClick={handlePost}>Post</button></div>
            </div>
        </div>
    )
}

export default PostCreator;