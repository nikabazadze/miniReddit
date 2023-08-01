import React from "react";
import { useState } from "react";
import './Content.css';
import { BiLinkExternal } from "react-icons/bi";

import { shortLink } from "../../../utils/shortLink";

function Content({post}) {
    const [ linkClicked, setLinkClicked ] = useState(false);
    const [ showLongText, setShowLongText ] = useState(false);

    /**
     * It renders post's content by checking several properties of the post object
     * @returns post content
     */
    function renderContent() {
        // Renders text content
        if (post.is_self) {
            let text = "";
            // Checks for tables in the selftext
            if (!post.selftext.includes('|:-') && !post.selftext.includes('|--')) {
                text = post.selftext;
            } else {
                return renderLink();
            }

            // If text is too long then render small text and show full text by clicking "see more" button
            const smallLength = window.innerWidth > 480 ? 700 : 500;
            if (text.length < smallLength || showLongText) {
                return <p>{text}</p>;
            } else {
                let shortText = text.slice(0, smallLength);
                shortText += "...";
                return (
                    <div className="short-text">
                        <p>{shortText}</p>
                        <button className="see-more-button" onClick={handleSeeMore}>See more</button>
                    </div>
                );
            }
        // Renders video content
        } else if (post.is_video) {
            return (
                <div className="video-container">
                   <video src={post.media.reddit_video.fallback_url} playsInline controls>
                        Video not supported
                    </video>    
                </div>
            );
        // Renders image content
        } else if (post.post_hint === "image") {
            return <img src={post.url} alt="post's media contnet"/>;
        // Renders external link content
        } else if (post.post_hint === "link" || post.domain) {
            return renderLink();
        } else {
            return "";
        }
    };

    /**
     * Renders full long text
     */
    function handleSeeMore() {
        setShowLongText(true);
        renderContent();
    };

    /**
     * Renders link content with external link icon
     * @returns link content
     */
    function renderLink() {
        return (
            <div>
                <a href={post.url} target="_blank" rel="noopener noreferrer" onClick={() => setLinkClicked(true)}>
                    {shortLink(post.url)}<BiLinkExternal className={`link-icon ${linkClicked && "icon-clicked"}`}/>
                </a>
            </div>
        );
    };

    return (
        <div className={`post-content ${showLongText && "full-text"}  ${post.is_video && "flex-content"}`}>
            {renderContent()}
        </div>
    );
}

export default Content;