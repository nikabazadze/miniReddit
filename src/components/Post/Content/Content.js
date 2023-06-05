import React from "react";
import { useState } from "react";
import './Content.css';
import { BiLinkExternal } from "react-icons/bi";

import { shortLink } from "../../../utils/shortLink";

function Content({post}) {
    const [ linkClicked, setLinkClicked ] = useState(false);
    let content;

    if (post.is_self) {
        content = <p>{post.selftext}</p>;
    } else if (post.post_hint === "link") {
        content = <div>
                    <a href={post.url} target="_blank" onClick={() => setLinkClicked(true)}>
                        {shortLink(post.url)}<BiLinkExternal className={`link-icon ${linkClicked && "icon-clicked"}`}/>
                    </a>
                  </div>
    } else if (post.is_video) {
        content = <div className="video-container">
                    <video src={post.media.reddit_video.fallback_url} controls>
                        Video not supported
                    </video>    
                  </div>
    } else if (post.post_hint === "image") {
        content = <img src={post.url} alt="post's media contnet"/>
    } else {
        content = "";
    }

    return (
        <div className="post-content">
            {content}
        </div>
    )
}

export default Content;