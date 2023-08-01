import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { BiMessage, BiHide } from "react-icons/bi";
import moment from 'moment';

import './Post.css';
import { shortNumber } from "../../utils/shortNumber";
import { loadPostComments } from "../../features/Feed/FeedSlice";
import { selectCommentIsLoading, selectCommentHasError } from "../../features/Feed/FeedSlice";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import Comment from "./Comment/Comment";

function Post({post, index}) {
    const [ commentIsLoading, commentHasError ] = [ useSelector(selectCommentIsLoading), useSelector(selectCommentHasError) ];
    const [ showComments, setShowComments ] = useState(false);
    const [ showAllComments, setShowAllComments ] = useState(false);
    const time = moment.unix(post.created_utc).fromNow();
    const dispatch = useDispatch();

    /**
     * It hides or shows comments. On first click, it dispatches
     * action to redux store to fetch the comments
     */
    function toggleComments() {
        if (!showComments) {
            if (!post.comments) {
                const arg = {
                    permalink: post.permalink,
                    index: index
                }
                dispatch(loadPostComments(arg));
            }
            setShowComments(true);
        } else {
            setShowComments(false);
        }
    }

    /**
     * Firstly, it renders loading skeleton while fetching comments.
     * If successful fetch it renders comments, otherwise renders error message.
     * @returns comments
     */
    function renderComments() {
        if (commentIsLoading) {
            return (
                <div className="comments-skeleton-wrapper">
                    <Skeleton count={5} />
                </div>
            )
        } else if (commentHasError) {
            return (
                <div className="comments-error">
                    <h3>Error Loading Comments!!!</h3>
                </div>
            )
        } else {
            if (post.comments.length < 10 || showAllComments) {
                // Renders all comments
                return (
                    <div className="comments">
                        {
                            post.comments.slice(0, post.comments.length - 1).map((comment) => (<Comment comment={comment} />))
                        }
                    </div>
                )
            } else {
                // Renders only first 10 comments
                return (
                    <div className="comments">
                        {
                            post.comments.slice(0, 10).map((comment) => (<Comment comment={comment} />))
                        }
                        <button className="see-more-button" onClick={handleSeeMore}>See more</button>
                    </div>
                )
            }
        }
    }

    /**
     * When clicked it shows all the comments
     */
    function handleSeeMore() {
        setShowAllComments(true);
        renderComments();
    };

    /**
     * Hides the post. Firstly, it tries to find the main "post" container and
     * then shrinks it with transition (animation). Finally, removes it from view
     * @param {Object} event 
     */
    function handleHideClick({target}) {
        let element = target.parentElement.parentElement.parentElement.parentElement;
        if (element.getAttribute("class") === "content-container") {
            element = element.parentElement;
        } else if (element.getAttribute("class") === "content-footer") {
            element = element.parentElement.parentElement;
        }
        element.style.width = "40%"
        setTimeout(() => {
            element.style.display = "none";
        }, 150)
    }

    return (
        <div className="post">
            <Sidebar score={post.score} display="sidebar-desktop" />
            <div className="content-container">
                <div className="content-header">
                    <span>{`Posted by u/${post.author} ${time}`}</span>
                    <h2>{post.title}</h2>
                </div>
                <Content post={post} />
                <div className="content-footer">
                    <div className="footer-icons-wrapper">
                        <Sidebar score={post.score} display="sidebar-mobile" />
                        <div className="footer-icon-container comments-icon" onClick={toggleComments} >
                            <BiMessage className="footer-icon" />
                            <span>{shortNumber(post.num_comments, 1)} Comments</span>
                        </div>
                        <div className="footer-icon-container hide-icon" onClick={handleHideClick} >
                            <BiHide className="footer-icon" />
                            <span>Hide Post</span>
                        </div>
                    </div>
                    {showComments && renderComments()}
                </div>
            </div>
        </div>
    )
}

export default Post;