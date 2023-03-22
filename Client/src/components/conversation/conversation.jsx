import React from "react";
import "./conversation.css";

const Conversation = ({ click }) => {
  return (
    <>
      <div className="conversationdisplay" onClick={click}>
        <div className="confirst">
          <div>
            <img src="../../assets/rep.jpeg" alt="chatprofile" />
            <span className="con-f-child">David Jackson</span>
            <span className="con-ident">Student</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
