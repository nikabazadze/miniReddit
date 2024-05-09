import React from "react";

import './PostTypeChooser.css';
import postFilledIcon from '../icons/postFilled.png';
import postOutlinedIcon from '../icons/postOutlined.png';
import imageFilledIcon from '../icons/imageFilled.png';
import imageOutlinedIcon from '../icons/imageOutlined.png';
import videoFilledIcon from '../icons/videoFilled.png';
import videoOutlinedIcon from '../icons/videoOutlined.png';
import linkFilledIcon from '../icons/linkFilled.png';
import linkOutlinedIcon from '../icons/linkOutlined.png';

function PostTypeChooser({ contentType, setContentType }) {

    const renderPostType = postType => (
        <div onClick={() => setContentType(postType)} className={(contentType === postType) && "chosen-type"}>
            <img 
                src={getIcon(postType)} 
                alt="icon"
                className="content-icon"
            />
            <span>{postType}</span>
        </div>
    );

    const getIcon = postType => {
        if (postType === "post") {
            return contentType === "post" ? postFilledIcon : postOutlinedIcon;
        } else if (postType === "image") {
            return contentType === "image" ? imageFilledIcon : imageOutlinedIcon;
        } else if (postType === "video") {
            return contentType === "video" ? videoFilledIcon : videoOutlinedIcon;
        } else if (postType === "link") {
            return contentType === "link" ? linkFilledIcon : linkOutlinedIcon;
        };
    };

    return (
        <div className="main-container">
            {renderPostType("post")}
            {renderPostType("image")}
            {renderPostType("video")}
            {renderPostType("link")}
        </div>
    )
}

export default PostTypeChooser;