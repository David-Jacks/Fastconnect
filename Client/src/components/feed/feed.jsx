import React, { useState } from "react";
import Post from "../post/post";
import Share from "../share/share";
import "./feed.css";
import axios from "axios";
import { useEffect } from "react";

const Feed = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("/api/post/getimg")
      .then((response) => {
        console.log(response.data);
        // response.forEach((response) => {});
        const data = response.data.map((img) => ({
          ...img,
        }));
        console.log(data);
        setImages(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="feed">
        <div className="head-const">
          <h1>Lancaster_Community</h1>
        </div>
        <Share />
        {images.map((images) => (
          <Post key={images.id} images={images} />
        ))}
      </div>
    </>
  );
};

export default Feed;
