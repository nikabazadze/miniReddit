import React from "react";

import './LeftColumn.css';
import Subreddits from "../../features/SubReddits/SubReddits";

function LeftColumn() {
    return (
        <div id="left-column">
            <Subreddits />
        </div>
    );
}

export default LeftColumn;