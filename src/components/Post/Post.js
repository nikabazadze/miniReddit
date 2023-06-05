import React from "react";
import moment from 'moment';
import { BiMessage, BiHide } from "react-icons/bi";

import './Post.css';
import { shortNumber } from "../../utils/shortNumber";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

function Post({post}) {
    const time = moment.unix(post.created_utc).fromNow();

    function handleHideClick({target}) {
        const element = target.parentElement.parentElement.parentElement.parentElement;
        element.style.display = "none";
    }

    return (
        <div class="post">
            <Sidebar score={post.score}/>
            <div className="content-container">
                <div className="content-header">
                    <span>{`Posted by u/${post.author} ${time}`}</span>
                    <h2>{post.title}</h2>
                </div>
                <Content post={post} />
                <div className="content-footer">
                    <div className="footer-icon-container">
                        <BiMessage className="footer-icon" />
                        <span>{shortNumber(post.num_comments, 1)} Comments</span>
                    </div>
                    <div className="footer-icon-container" onClick={handleHideClick} >
                        <BiHide className="footer-icon" />
                        <span>Hide Post</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;