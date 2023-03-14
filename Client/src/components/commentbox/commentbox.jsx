import React from "react";
import Comment from "../comment/comment";
import "./commentbox.css";
import { useState } from "react";

const Commentbox = () => {
  const [comment, setComment] = useState(0);

  const theComments = () => {
    setComment(comment + 1);
  };
  return (
    <>
      <div className="commentbox-wrapper">
        <div className="commentboxinput">
          <div className="psuedo">
            <textarea
              name="commentinput"
              id="areatext"
              placeholder="write your comments"
            ></textarea>
          </div>
          <button
            className="comment-saver"
            onClick={() => {
              theComments();
            }}
          >
            comment
          </button>
        </div>
        <div className="commentstorage">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </>
  );
};

export default Commentbox;
