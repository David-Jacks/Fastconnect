import React from "react";
import "./video.css";
import { GiStarFormation } from "react-icons/gi";
import { BiHide } from "react-icons/bi";
import { MdAddComment } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import Commentbox from "../commentbox/commentbox";
import { Link } from "react-router-dom";
import moment from "moment";

const Video = ({ video }) => {
  const [likes, setLikes] = useState(0);
  const [secret, setSecret] = useState(0);
  const [show, setShow] = useState(false);

  const theLikes = () => {
    setLikes(likes + 1);
  };
  const theSecret = () => {
    setSecret(secret + 1);
  };

  return (
    <div className="video">
      <div className="vidWrapper">
        <div className="vidcontent">
          <div className="user">
            <img src="./assets/final.png" alt="postuserprofile" />
            <div className="viddetails">
              <div>
                <Link to={"profilePage"} className="link">
                  <span className="userName">{video.userName}</span>
                </Link>
                <span>{moment(video.created_at).fromNow()}</span>
              </div>
              <FiMoreHorizontal className="close" />
            </div>
          </div>
          <div className="vidAbout">
            <p>{video.vidAbout}</p>
          </div>
          <div className="vid">
            {/* <video src="/assets/saved/vid1.mp4" controls></video> */}
            <video src={video.vid} controls></video>
          </div>
          <div className="reactioncenter">
            <div className="star">
              <GiStarFormation className="icon" onClick={theLikes} />
              <span>{likes}</span>
            </div>
            <div className="com">
              <MdAddComment className="icon" />
              <span>0</span>
            </div>
            <div className="sec">
              <BiHide className="icon" onClick={theSecret} />
              <span>{secret}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
