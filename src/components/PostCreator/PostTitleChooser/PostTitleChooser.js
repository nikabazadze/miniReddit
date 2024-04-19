import React, { useState } from "react";
import './PostTitleChooser.css';

function PostTitleChooser({ postTitle, setPostTitle }) {
    return (
        <div className="title-container">
            <input 
                type="text"
                value={postTitle}
                onChange={({target}) => setPostTitle(target.value)}
                placeholder="Title"
                maxLength={300}
            />
            <span>{postTitle.length + " / 300"}</span>
        </div>
    )
}

export default PostTitleChooser;