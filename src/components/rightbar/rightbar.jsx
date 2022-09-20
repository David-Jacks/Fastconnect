import React from "react";
import "./rightbar.css";
import Events from "../events/event";


const Rightbar = () =>{
    return(
        <>
        <div className="rightbar">
            <div className="rightbarWrapper">
                  <div className="rightbarHead">
                     <span>UPCOMING EVENTS</span>
                  </div>
                <hr className="rightbarHr"/>
                <div className="eventblock">
                  <Events/>
                  <Events/>
                  <Events/>
                  <Events/>
                </div>
                <button className="sidebarButton">Show More</button>
            </div>
        </div>
        </>
    );
}

export default Rightbar;