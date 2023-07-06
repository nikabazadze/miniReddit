import React from "react";
import { useState } from "react";
import './Content.css';
import { BiLinkExternal } from "react-icons/bi";

import { shortLink } from "../../../utils/shortLink";

function Content({post}) {
    const [ linkClicked, setLinkClicked ] = useState(false);
    const [ showLongText, setShowLongText ] = useState(false);

    function handleSeeMore() {
        setShowLongText(true);
        renderContent();
    };

    function renderContent() {
        if (post.is_self) {
            let text = !post.selftext.includes('|:--') ? post.selftext : "";
            if (text.length < 1000 || showLongText) {
                return <p>{text}</p>;
            } else {
                let shortText = text.slice(0, 1000);
                shortText += "...";
                return (
                    <div className="short-text">
                        <p>{shortText}</p>
                        <button className="see-more-button" onClick={handleSeeMore}>See more</button>
                    </div>
                );
            }
        } else if (post.post_hint === "link") {
            return (
                <div>
                    <a href={post.url} target="_blank" onClick={() => setLinkClicked(true)}>
                        {shortLink(post.url)}<BiLinkExternal className={`link-icon ${linkClicked && "icon-clicked"}`}/>
                    </a>
                </div>
            );
        } else if (post.is_video) {
            return (
                <div className="video-container">
                   <video src={post.media.reddit_video.fallback_url} controls>
                        Video not supported
                    </video>    
                </div>
            );
        } else if (post.post_hint === "image") {
            return <img src={post.url} alt="post's media contnet"/>;
        } else {
            return "";
        }
    };

    return (
        <div className={`post-content ${showLongText && "full-text"}`}>
            {renderContent()}
        </div>
    );
}

export default Content;