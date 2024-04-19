import React, { useState } from "react";

import './PostCreator.css';
import PostTypeChooser from "./PostTypeChooser/PostTypeChooser";

function PostCreator() {
    return (
        <div id="post-creator">
            <h2>Create a post</h2>
            <div className="divider"></div>
            <div className="post-container">
                <PostTypeChooser />
            </div>
        </div>
    )
}

export default PostCreator;