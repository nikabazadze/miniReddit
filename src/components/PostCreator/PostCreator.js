import React, { useState } from "react";

import './PostCreator.css';
import PostTypeChooser from "./PostTypeChooser/PostTypeChooser";
import PostTitleChooser from "./PostTitleChooser/PostTitleChooser";

function PostCreator() {
    const [ contentType, setContentType ] = useState("post");
    const [ postTitle, setPostTitle ] = useState("");

    return (
        <div id="post-creator">
            <h2>Create a post</h2>
            <div className="divider"></div>
            <div className="post-container">
                <PostTypeChooser contentType={contentType} setContentType={setContentType} />
                <PostTitleChooser postTitle={postTitle} setPostTitle={setPostTitle} />
            </div>
        </div>
    )
}

export default PostCreator;