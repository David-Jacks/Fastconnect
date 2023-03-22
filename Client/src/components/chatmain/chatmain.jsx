import React from "react";
import "./chatmain.css";
import { AiOutlineSend } from "react-icons/ai";
import { BsFillCameraFill, BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdVideoCall } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

import Messaging from "../messaging/messaging";

const Chatmain = ({ toggle }) => {
  return (
    <div className="chatmainall">
      <div className="chatmaincontent">
        <div className="chatcontenthead">
          <IoMdArrowRoundBack className="back" onClick={toggle} />
          <div className="left">
            <img src="./assets/final.png" alt="" />
            <div className="text">
              <span className="span">David Jackson</span>
              <span className="span">Typing...</span>
            </div>
          </div>
          <div className="right">
            <FiPhoneCall className="one" />
            <MdVideoCall className="one" />
          </div>
        </div>
        <div className="chatbox">
          <div className="chatdate">
            <span>21/09/2022</span>
          </div>
          <Messaging />
          <Messaging />
          <Messaging />
          <Messaging />
          <Messaging />
          <Messaging />
          <Messaging />
          <Messaging />
          <Messaging />
          <Messaging />
          <div className="chatsend">
            <div className="chatsend-div">
              <textarea
                name="chatinput"
                id="messagewrite"
                cols="30"
                rows="10"
                placeholder="Message..."
              ></textarea>
              <div className="chat-tools">
                <FaMicrophone className="chat-icon" />
                <BsFillCameraFill className="chat-icon" />
                <BsEmojiSmile className="chat-icon" />
              </div>
              <AiOutlineSend className="send-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatmain;
