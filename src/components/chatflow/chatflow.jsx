import React from "react";
import Conversation from "../conversation/conversation";
import './chatflow.css';



const Chatflow = () => {
    return(
        <>
        <div className="chatdisplay">
            <div className="flowsearch">
                <input type="text" placeholder="Search Chat" />
            </div>
            <div className="flowlist">
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
            </div>
        </div>
        </>
    )
}


export default Chatflow;