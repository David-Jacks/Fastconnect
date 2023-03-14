import React from "react";
import "./rightbar.css";
import Events from "../events/event";

const Rightbar = () => {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="rightbarHead">
            <span>UPCOMING EVENTS</span>
          </div>
          <div className="eventblock">
            <Events />
            <Events />
            <Events />
            <Events />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
