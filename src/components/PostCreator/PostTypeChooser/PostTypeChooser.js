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
    return (
        <div className="main-container">
            <div onClick={() => setContentType("post")} className={(contentType === "post") && "chosen-type"}>
                <img 
                    src={contentType === "post" ? postFilledIcon : postOutlinedIcon} 
                    alt="icon"
                    className="content-icon"
                />
                <span>post</span>
            </div>
            <div onClick={() => setContentType("image")} className={contentType === "image" && "chosen-type"}>
                <img 
                    src={contentType === "image" ? imageFilledIcon : imageOutlinedIcon} 
                    alt="icon"
                    className="content-icon"
                />
                <span>image</span>
            </div>
            <div onClick={() => setContentType("video")} className={contentType === "video" && "chosen-type"}>
                <img 
                    src={contentType === "video" ? videoFilledIcon : videoOutlinedIcon} 
                    alt="icon"
                    className="content-icon"
                />
                <span>video</span>
            </div>
            <div onClick={() => setContentType("link")} className={contentType === "link" && "chosen-type"}>
                <img 
                    src={contentType === "link" ? linkFilledIcon : linkOutlinedIcon} 
                    alt="icon"
                    className="content-icon"
                />
                <span>link</span>
            </div>
        </div>
    )
}

export default PostTypeChooser;