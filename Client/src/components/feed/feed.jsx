import React, { useState } from "react";
import Post from "../post/post";
import Share from "../share/share";
import "./feed.css";
// import { Poster } from "../../myData";
import axios from "axios";
import { useEffect } from "react";

const Feed = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/user/${token.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = await response.json();
      setUserData(user);
    };

    fetchUser();
  }, []);

  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("/api/post/getimg")
      .then((response) => {
        console.log(response);
        setImages(response.data);
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
        {images.map((image) => (
          <Post key={image.id} image={image} userData={userData} />
        ))}
      </div>
    </>
  );
};

export default Feed;
