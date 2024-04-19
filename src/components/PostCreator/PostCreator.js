import React, { useState } from "react";

import './PostCreator.css';
import PostTypeChooser from "./PostTypeChooser/PostTypeChooser";
import PostTitleChooser from "./PostTitleChooser/PostTitleChooser";

function PostCreator() {
    const [ postTitle, setPostTitle ] = useState("");

    return (
        <div id="post-creator">
            <h2>Create a post</h2>
            <div className="divider"></div>
            <div className="post-container">
                <PostTypeChooser />
                <PostTitleChooser postTitle={postTitle} setPostTitle={setPostTitle} />
            </div>
        </div>
    )
}

export default PostCreator;