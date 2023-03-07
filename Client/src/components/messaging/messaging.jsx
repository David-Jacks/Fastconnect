import React from "react";
import "./messaging.css";

const Messaging = ({ own }) => {
  return (
    <>
      <div className="messagingdisplay">
        <div className="messagefirst">
          <img src="../assets/res.jpeg" alt="" />
          <p className="messagepara">
            Lorem ipsum dolor sit, uidem adipiscir quos officiis! Lorem ipsum
            dolor sit, uidem adipisci
          </p>
          <span className="myicon">Just now</span>
        </div>
      </div>
    </>
  );
};

export default Messaging;
