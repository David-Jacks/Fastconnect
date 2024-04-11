import React from "react";
import "./events.css";

const Events = ({eventData}) => {
  return (
    <>
      <div className="eventcontainer">
        <div className="eventheader">
          <p className="eventTopic">{eventData.eventName}</p>
          <p>{eventData.eventDay}</p>
          <p>{eventData.eventPlace}</p>
        </div>
        <div className="mainevent">
          <img src={eventData.eventPic} alt="events" />
        </div>
        <div className="eventreaction">
          <a href="{}" className="aboutevent">
            make enquiries
          </a>
        </div>
      </div>
    </>
  );
};

export default Events;
