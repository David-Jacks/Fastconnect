import React from "react";
import "./rightbar.css";
import Events from "../events/event";
import eventData from "../../event.json";
const Rightbar = () => {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="rightbarHead">
            <span>UPCOMING EVENTS</span>
          </div>
          <div className="eventblock">
            {eventData.map((eventData)=> <Events eventData={eventData}/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
