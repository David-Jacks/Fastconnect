import React from "react";
import "./share.css";
import { useState } from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import makeRequest from "../../myAxios";
import axios from "axios";

const Share = () => {
  const [open, setOpen] = useState(false);
  const [picopen, setPicopen] = useState(false);
  const [eventopen, setEventopen] = useState(false);
  const [vidAbout, setvidAbout] = useState("");
  const [vid, setvid] = useState(null);
  const [eventAbout, seteventAbout] = useState("");
  const [event, setevent] = useState(null);
  const [imgAbout, setimgAbout] = useState("");
  const [img, setimg] = useState(null);

  //dealing with image post
  // const queryClient = useQueryClient(); //will use to refresh post automatically

  //route to send images to server

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/post/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const imageData = { imgAbout, img };
  const handleRoute = async (imageData) => {
    await axios
      .post("api/post/post", imageData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const imagePost = async () => {
    if (imgAbout === "") {
      console.log("please write something");
    } else {
      let imgUrl = "";
      if (img) {
        imgUrl = await upload(img);
      }
      imageData.img = imgUrl;
      handleRoute(imageData);
    }
  };

  //dealing with video post

  // const vidupload = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", vid);
  //     const res = await makeRequest.post("/vidpost/upload", formData);
  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleVidRoute = async (vidData) => {
    await axios
      .post("/api/vidpost/vid", vidData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const vidData = { vidAbout, vid };

  const vidPost = async () => {
    if (vidAbout === "") {
      console.log("please write something abt your video");
    } else {
      let vidURL = "";
      if (vid) {
        vidURL = await upload(vid);
      }
      vidData.vid = vidURL;
      handleVidRoute(vidData);
    }
  };
  //dealing with event post

  function eventPost() {}
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
          <div className="port-contain">
            <div className="add">
              <h3>Happy Posting</h3>
              <textarea
                name="video-text"
                id="aboutVideo"
                cols="13"
                rows="3"
                placeholder="Brief the vidoe to be posted..."
                onChange={(e) => {
                  setvidAbout(e.target.value);
                }}
              ></textarea>
              <div className="file-taker">
                <input
                  name="file"
                  type="file"
                  className="vidupload"
                  onChange={(e) => {
                    setvid(e.target.files[0]);
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
            </div>
          </div>
        ) : null}
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
                  seteventAbout(e.target.value);
                }}
              ></textarea>
              <div className="file-taker">
                <input
                  name="file"
                  type="file"
                  className="eventupload"
                  onChange={(e) => {
                    setevent(e.target.files[0]);
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
          </div>
        ) : null}
        {picopen ? (
          <div className="port-contain">
            <div className="add">
              <h3>Happy Posting</h3>
              <textarea
                name="image-text"
                id="aboutImg"
                cols="13"
                rows="3"
                placeholder="Brief the image to be posted..."
                onChange={(e) => {
                  setimgAbout(e.target.value);
                }}
              ></textarea>
              <div className="file-taker">
                <input
                  type="file"
                  name="file"
                  className="imageupload"
                  onChange={(e) => {
                    setimg(e.target.files[0]);
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
            </div>
          </div>
        ) : null}

        {/* buttons to control open and close logs */}
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
