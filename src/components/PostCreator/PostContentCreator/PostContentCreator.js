import React, { useState } from "react";

import './PostContentCreator.css';

function PostContentCreator({ contentType }) {
    const [ text, setText ] = useState("");
    const [ link, setLink ] =useState("");
    const [ selectedFile, setSelectedFile ] = useState(null);

    const renderContent = () => {
        if (contentType === "text") {
            return <textarea
                        value={text}
                        onChange={({target}) => setText(target.value)}
                        placeholder="Text (optional)"
                   ></textarea>
        } else if (contentType === "link") {
            return (
                <input 
                    type="text"
                    value={link}
                    onChange={({target}) => setLink(target.value)}
                    placeholder="Link Url *"
                />
            )
        }
    }

    const handleImageChange = ({ target }) => {
        setSelectedFile(target.files[0]);
    }

    return (
        <div className="content-creator">
            {renderContent()}
        </div>
    )
}

export default PostContentCreator;