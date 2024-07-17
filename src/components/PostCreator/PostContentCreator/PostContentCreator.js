import React, { useState, useEffect } from "react";

import './PostContentCreator.css';
import FileUpload from "../../FileUpload/FileUpload";

function PostContentCreator({ contentType, setContent }) {
    const [ text, setText ] = useState("");
    const [ link, setLink ] = useState("");
    const [ fileUrl, setFileUrl ] = useState(null);

    useEffect(() => {
        setText("");
        setLink("");
        setFileUrl(null);
    }, [contentType]);

    useEffect(() => {
        const content = text ? text : link ? link : fileUrl;
        setContent(content);
    }, [text, link, fileUrl]);

    const renderContent = () => {
        if (contentType === "text") {
            return <textarea
                        value={text}
                        onChange={({target}) => setText(target.value)}
                        placeholder="Text (optional)"
                   ></textarea>
        } else if (contentType === "link") {
            return <input 
                        type="text"
                        value={link}
                        onChange={({target}) => setLink(target.value)}
                        placeholder="Link Url *"
                    />
        } else if (contentType === "image" || contentType === "video") {
            return <FileUpload fileUrl={fileUrl} setFileUrl={setFileUrl} contentType={contentType} />
        }
    }

    return (
        <div className="content-creator">
            {renderContent()}
        </div>
    )
}

export default PostContentCreator;