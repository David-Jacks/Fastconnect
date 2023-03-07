import React from "react";
import Conversation from "../../components/conversation/conversation";
import Chatmain from "../../components/chatmain/chatmain";
import Topbar from "../../components/topbar/topbar";
import { GoPerson } from "react-icons/go";
import { FiClipboard } from "react-icons/fi";
import "./chat.css";

const Chat = () => {
  return (
    <>
      <div className="chatcontainer">
        <div className="chat-top">
          <Topbar />
        </div>
        <div className="chat-content">
          <div className="chat-converse">
            <div className="con-head">
              <span>
                Chat
                <GoPerson className="chat-icon" />
              </span>
              <span>
                Class
                <FiClipboard className="chat-icon icon2" />
              </span>
            </div>
            <div className="flow">
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
          <Chatmain />
        </div>
      </div>
    </>
  );
};
export default Chat;
