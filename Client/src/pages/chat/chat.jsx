import React, { useEffect, useState } from "react";
import Conversation from "../../components/conversation/conversation";
import Chatmain from "../../components/chatmain/chatmain";
import Topbar from "../../components/topbar/topbar";
import "./chat.css";
//wiill remove comment later
const Chat = () => {
  const [remove, setRemove] = useState(true);
  const [move, setMove] = useState(true);

  // this is to make the chat responsive on smaller screens
  useEffect(() => {
    const handleScreen = () => {
      if (window.innerWidth <= 767) {
        setRemove(false);
      } else {
        setRemove(true);
      }
    };
    handleScreen();
    window.addEventListener("resize", handleScreen);
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);

  const toggleChat = () => {
    setRemove(!remove);
    setMove(!move);
  };

  return (
    <>
      <div id="chatcontainer">
        <div className="chat-top">
          <Topbar />
        </div>
        <div className="chat-content">
          {move ? (
            <div className="chat-converse">
              <div className="con-head">
                <input
                  type="text"
                  className="chat-search"
                  placeholder="Search for Chat..."
                />
              </div>

              <div className="flow">
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
                <Conversation click={toggleChat} />
              </div>
            </div>
          ) : null}
          {remove ? <Chatmain toggle={toggleChat} /> : null}
        </div>
      </div>
    </>
  );
};
export default Chat;
