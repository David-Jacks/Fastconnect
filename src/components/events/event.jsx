import React from "react";
import "./events.css";
import { GiEternalLove } from "react-icons/gi";
const Events = () =>{
    return(
        <>
         <div className="eventcontainer">
                  <div className="eventheader">
                     <span>Event: </span><span className="eventTopic"> October summit 2022</span>
                  </div>
                  <div className="mainevent">
                     <img src="/assets/SavedPictures/madrid.jpg" alt="" />
                  </div>
                  <div className="eventreaction">
                     <a href="{}" className="aboutevent">About</a>
                   <span style={{display: "flex", alignItems: "center", gap:"4px"}}><GiEternalLove /><span className="lovecount">0</span></span>
                     <a href="{}" className="loveevent"> Ask Question? </a>
                  </div>
                </div>
        </>
    );
}

export default Events;