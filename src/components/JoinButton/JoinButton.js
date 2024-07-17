import React, { useState } from "react";
import AlertDialog from "../AlertDialog/AlertDialog";
import './JoinButton.css';

function JoinButton({cta, placement, containerStyle}) {
    const [ openDialog, setOpenDialog ] = useState(false);

    return (
        <div className={containerStyle}>
            <button className={`join-button ${placement}`} onClick={() => setOpenDialog(true)}>{cta}</button>
            {openDialog &&  <AlertDialog 
                                title="Can not sign up!"
                                content="This is a front-end only website without any server and database."
                                onClose={setOpenDialog}
                            />
            }
        </div>
    )
}

export default JoinButton;