import React from "react";
import "./events.css";

const Events = () => {
  return (
    <>
      <div className="eventcontainer">
        <div className="eventheader">
          <p className="eventTopic"> October summit 2022</p>
        </div>
        <div className="mainevent">
          <img src="/assets/SavedPictures/madrid.jpg" alt="" />
        </div>
        <div className="eventreaction">
          <a href="{}" className="aboutevent">
            About
          </a>
          <a href="{}" className="loveevent">
            {" "}
            Ask Question?{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Events;
