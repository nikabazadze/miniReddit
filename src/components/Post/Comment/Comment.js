import React from "react";
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import './Comment.css';

import avatar1 from './avatar1.svg';
import avatar2 from './avatar2.svg';
import avatar3 from './avatar3.svg';
import avatar4 from './avatar4.svg';
import avatar5 from './avatar5.svg';
import avatar6 from './avatar6.svg';

function Comment({comment}) {
    const avatars = [ avatar1, avatar2, avatar3, avatar4, avatar5, avatar6 ];
    const randomIndex = Math.floor(Math.random() * avatars.length);
    const avatar = avatars[randomIndex];
    const time = moment.unix(comment.created_utc).fromNow();

    return (
        <div className="comment">
            <div className="comment-header">
                <img src={avatar} alt="Comment author's avatar" className="comment-avatar" />
                <h3>{comment.author}</h3>
                <span>&nbsp;&#183; {time}</span>
            </div>
            <div className="comment-body">
                <ReactMarkdown children={comment.body} />
            </div>
        </div>
    )
}

export default Comment;