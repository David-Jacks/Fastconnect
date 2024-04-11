import React from "react";
import "./chatmain.css";
import { AiOutlineSend } from "react-icons/ai";
import { BsFillCameraFill, BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdVideoCall } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

import Messaging from "../messaging/messaging";

const Chatmain = ({ click, chatData }) => {
  return (
    <div className="chatmainall">
      <div className="chatmaincontent">
        <div className="chatcontenthead">
          <IoMdArrowRoundBack className="back" onClick={click} />
          <div className="left">
            <img src="./assets/profile6.JPG" alt="" />          <div className="text">
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
              <BsEmojiSmile className="chat-icon" />
              <textarea
                name="chatinput"
                id="messagewrite"
                cols="30"
                rows="10"
                placeholder="Message..."
              ></textarea>
               <FaMicrophone className="chat-icon" />
                <BsFillCameraFill className="chat-icon" />
              <div className="chat-tools">
               <AiOutlineSend className="send-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatmain;
