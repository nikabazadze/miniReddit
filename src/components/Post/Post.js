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

    function handleSeeMore() {
        setShowAllComments(true);
        renderComments();
    };

    function handleHideClick({target}) {
        let element = target.parentElement.parentElement.parentElement.parentElement;
        if (element.getAttribute("class") === "content-container") {
            element = element.parentElement;
        } else if (element.getAttribute("class") === "content-footer") {
            element = element.parentElement.parentElement;
        }
        element.style.display = "none";
    }

    return (
        <div className="post">
            <Sidebar score={post.score}/>
            <div className="content-container">
                <div className="content-header">
                    <span>{`Posted by u/${post.author} ${time}`}</span>
                    <h2>{post.title}</h2>
                </div>
                <Content post={post} />
                <div className="content-footer">
                    <div className="footer-icons-wrapper">
                        <div className="footer-icon-container comments-icon" onClick={toggleComments} >
                            <BiMessage className="footer-icon" />
                            <span>{shortNumber(post.num_comments, 1)} Comments</span>
                        </div>
                        <div className="footer-icon-container" onClick={handleHideClick} >
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