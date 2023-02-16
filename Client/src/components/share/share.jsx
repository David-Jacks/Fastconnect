import React, { useContext } from "react";
import "./share.css";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth-context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../myAxios";

const Share = () => {
  //dealing with image post
  const [imgAbout, setimgAbout] = useState("");
  const [img, setimg] = useState(null);

  const queryClient = useQueryClient(); //will use to refresh post automatically

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", img);
      const res = await makeRequest.post("/post/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const { currentUser } = useContext(AuthContext);

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/post/post", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["post"]);
      },
    }
  );

  const imagePost = async () => {
    if (imgAbout === "") {
      console.log("please write something");
    } else {
      let imgUrl = "";
      if (img) {
        imgUrl = await upload();
      }
      mutation.mutate({ imgAbout, img: imgUrl });
    }
  };

  const [open, setOpen] = useState(false);
  const [picopen, setPicopen] = useState(false);
  const [eventopen, setEventopen] = useState(false);

  //dealing with video post
  const [vidAbout, setvidAbout] = useState("");
  const [vid, setvid] = useState("");
  const vidData = {
    vidAbout,
    vid,
  };
  function vidPost() {}

  //dealing with event post
  const [eventAbout, seteventAbout] = useState("");
  const [event, setevent] = useState("");

  const eventData = {
    eventAbout,
    event,
  };
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
