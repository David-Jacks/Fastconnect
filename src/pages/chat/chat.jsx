import React from "react";
import Chatflow from "../../components/chatflow/chatflow";
import Chatmain from "../../components/chatmain/chatmain";
import Chatonline from "../../components/chatonline/chatonline";
import "./chat.css";


const Chat = () =>{
    return(
        <>
        <div className="chatcontainer">
        <Chatflow />
        <Chatmain />
        <Chatonline />
        </div>
        </>
    )
}
export default Chat;