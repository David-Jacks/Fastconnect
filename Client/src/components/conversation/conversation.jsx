import React from "react";
import "./conversation.css";

const Conversation = ({ click, chatData }) => {
  return (
    <>
      <div className="conversationdisplay" onClick={click}>
        <div className="confirst">
          <div>
            <img src={chatData.userProfile} alt="chatprofile" />
            <span className="con-f-child">{chatData.userName}</span>
            <span className="con-ident">Student</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
