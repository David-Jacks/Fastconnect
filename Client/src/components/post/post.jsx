import React from "react";
import "./post.css";
import { GiStarFormation } from "react-icons/gi";
import { BiHide } from "react-icons/bi";
import { MdAddComment } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import Commentbox from "../commentbox/commentbox";
import { Link } from "react-router-dom";
import moment from "moment";
// import { useQuery } from "@tanstack/react-query";
// import { makeRequest } from "../../myAxios";

const Post = ({ post }) => {
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
    <div>
      <div className="postdiv">
        <div className="postWrapper">
          <div className="postmain">
            <div className="postabout">
              <div className="f-part">
                <img src="./assets/final.png" alt="postuserprofile" />
                <div className="details">
                  <Link to={"profilePage"} className="link">
                    <span className="name">{post.userName}</span>
                  </Link>
                  <span>{post.created_at}</span>
                </div>
              </div>
              <FiMoreHorizontal />
            </div>
            <div className="postcontent">
              <p className="about">{post.imgAbout}</p>
              <img src={"./upload/" + post.img} alt="postimg" />
            </div>
            <div className="reactioncenter">
              <div className="starRate">
                <button onClick={theLikes}>
                  <GiStarFormation className="icon" />
                </button>
                <span> {likes}</span>
              </div>
              <div className="commentRate">
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <MdAddComment className="icon" />
                </button>
              </div>
              <div className="reportRate">
                <button onClick={theSecret}>
                  <BiHide className="icon" />
                </button>
                <span>{secret}</span>
              </div>
            </div>
          </div>
          {show ? (
            <div className="postcomment">
              <Commentbox />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Post;
