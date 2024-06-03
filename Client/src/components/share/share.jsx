import React from "react";
import "./share.css";
import { useState } from "react";
import Posting from "../../modals/posting/posting";

const Share = ({userData}) => {
  const [open, setOpen] = useState(false);
  const [picopen, setPicopen] = useState(false);
  const [eventopen, setEventopen] = useState(false);


  // toggling posting modal
  const togglePostingVid = () =>{
    setOpen(!open);
  }
  const togglePostingImg = () =>{
    setPicopen(!picopen);
  }
  //dealing with event post

  function eventPost() {}

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={userData.userProfile}
            alt="profile"
          />
          <input type="text" placeholder="Search post by the users name" />
        </div>

        {/* open and close logs */}

        {open ? (<Posting type={"video"} close={togglePostingVid}/>) : null}
        {picopen ? (<Posting type={"image"} close={togglePostingImg}/>) : null}
       {eventopen ? (
          <div className="port-contain">
            <div className="add">
              <h3>Happy Posting</h3>
              <textarea
                name="event-text"
                id="aboutevent"
                cols="13"
                rows="3"
                placeholder="Brief the event to be posted..."
                onChange={(e) => {
                  // seteventAbout(e.target.value);
                }}
              ></textarea>
              <div className="file-taker">
                <input
                  name="file"
                  type="file"
                  className="eventupload"
                  onChange={(e) => {
                    // setevent(e.target.files[0]);
                  }}
                />
                <button
                  onClick={() => {
                    eventPost();
                    setEventopen(false);
                  }}
                >
                  upload event
                </button>
              </div>
            </div>
          </div>) : null}
        {/* dealing with images  and other vital data*/}
        

        {/* buttons to control open and close modals */}

        <div className="shareBottom">
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            Add_Video
          </button>
          <button
            onClick={() => {
              setEventopen(true);
            }}
          >
            Add_Event
          </button>
          <button
            onClick={() => {
              setPicopen(true);
            }}
          >
            Add_Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
