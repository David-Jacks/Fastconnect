import React from "react";
import "./share.css";
import { useState } from "react";
import axios from "axios";
const Share = () => {
  const [open, setOpen] = useState(false);
  const [picopen, setPicopen] = useState(false);
  const [eventopen, setEventopen] = useState(false);

  //dealing with image post
  const [imgAbout, setimgAbout] = useState("");
  const [img, setimg] = useState("");

  const imageData = {
    imgAbout,
    img,
  };

  function imagePost() {
    axios
      .post("/api/post/postimg", imageData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  }
  //dealing with video post
  const [vidAbout, setvidAbout] = useState("");
  const [vid, setvid] = useState("");
  const vidData = {
    vidAbout,
    vid,
  };
  function vidPost() {
    axios
      .post("/api/post/vidpost", vidData)
      .then((res) => {})
      .catch((err) => {});
  }

  //dealing with event post
  const [eventAbout, seteventAbout] = useState("");
  const [event, setevent] = useState("");

  const eventData = {
    eventAbout,
    event,
  };
  function eventPost() {
    axios
      .post("/api/post/eventpost", eventData)
      .then((res) => {})
      .catch((err) => {});
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/02B00C71-F3B5-46C8-9F15-A768CF2AE1B7.jpeg"
            alt="profile"
          />
          <input type="text" placeholder="speak to the whole community" />
        </div>

        {/* open and close logs */}
        {open ? (
          <div className="add">
            <textarea
              name="video-text"
              id="aboutVideo"
              cols="15"
              rows="5"
              placeholder="Brief the vidoe to be posted..."
              onChange={(e) => {
                setvidAbout(e.target.value);
              }}
            ></textarea>
            <input
              type="file"
              className="vidupload"
              onChange={(e) => {
                setvid(e.target.value);
              }}
            />
            <button
              onClick={() => {
                vidPost();
                setOpen(false);
              }}
            >
              upload video
            </button>
          </div>
        ) : null}
        {eventopen ? (
          <div className="add">
            <textarea
              name="event-text"
              id="aboutevent"
              cols="15"
              rows="5"
              placeholder="Brief the event to be posted..."
              onChange={(e) => {
                seteventAbout(e.target.value);
              }}
            ></textarea>
            <input
              type="file"
              className="eventupload"
              onChangeCapture={(e) => {
                setevent(e.target.value);
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
        ) : null}
        {picopen ? (
          <div className="add">
            <textarea
              name="image-text"
              id="aboutImg"
              cols="15"
              rows="5"
              placeholder="Brief the image to be posted..."
              onChange={(e) => {
                setimgAbout(e.target.value);
              }}
            ></textarea>
            <input
              type="file"
              className="imageupload"
              onChange={(e) => {
                setimg(e.target.value);
              }}
            />
            <button
              onClick={() => {
                imagePost();
                setPicopen(false);
              }}
            >
              upload image
            </button>
          </div>
        ) : null}

        {/* buttons to control open and close logs */}
        <div className="shareBottom">
          <button
            onClick={() => {
              vidPost();
              setOpen(true);
            }}
          >
            Add_Video
          </button>
          <button
            onClick={() => {
              eventPost();
              setEventopen(true);
            }}
          >
            Add_Event
          </button>
          <button
            onClick={() => {
              imagePost();
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
