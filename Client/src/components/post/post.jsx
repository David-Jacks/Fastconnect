import React from "react";
import "./post.css";
import { GiStarFormation } from "react-icons/gi";
import { BiHide } from "react-icons/bi";
import { MdAddComment } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import Commentbox from "../commentbox/commentbox";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
                    {post.userName && (
                      <span className="name">{post.userName}</span>
                    )}
                  </Link>
                  {post.created_at && (
                    <span>{moment(post.created_at).fromNow()}</span>
                  )}
                </div>
              </div>
              <FiMoreHorizontal className="close" />
            </div>
            {post.imgAbout && <p className="about">{post.imgAbout}</p>}
            {post.vidAbout && <p className="about">{post.vidAbout}</p>}
            <div className={post.img ? "postcontent" : "vid"}>
              {post.img && (
                <img
                  src={"./upload/" + post.img}
                  alt="postimg"
                  className="img-fluid"
                />
              )}
              {post.vid && (
                <video src={"./video/" + post.vid} alt="video" controls></video>
              )}
            </div>
            <div className="reactioncenter">
              <div className="starRate">
                <GiStarFormation className="icon" onClick={theLikes} />

                <span> {likes}</span>
              </div>
              <div className="commentRate">
                <MdAddComment
                  className="icon"
                  onClick={() => {
                    setShow(!show);
                  }}
                />
              </div>
              <div className="reportRate">
                <BiHide className="icon" onClick={theSecret} />

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
