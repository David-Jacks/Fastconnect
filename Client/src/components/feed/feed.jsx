import React from "react";
import Post from "../post/post";
import Video from "../video/video";
import Share from "../share/share";
import "./feed.css";
// import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../myAxios";

const Feed = () => {
  //making use of react query
  // const { isLoading, error, data } = useQuery(["post"], () => {
  //   return makeRequest.get("/post").then((res) => {
  //     return res.data;
  //   });
  // });
  const { isLoading, error, data } = useQuery(["post", "video"], () => {
    return Promise.all([
      makeRequest.get("/post").then((res) => res.data),
      makeRequest.get("/post/vid").then((res) => res.data),
    ]).then(([posts, videos]) => {
      return [...posts, ...videos];
    });
  });
  console.log(data);

  return (
    <>
      <div className="feed">
        <div className="feedWrapper">
          <div className="head-const">
            <h1>Lancaster_Community</h1>
          </div>
          <Share />
          {error
            ? "something went wrong with feed loading"
            : isLoading
            ? "Loading"
            : data.map((item) => {
                if (item.img) {
                  return <Post key={item.id} post={item} />;
                }
                if (item.vid) {
                  return <Video key={item.id} video={item} />;
                } else {
                  return null;
                }
              })}
        </div>
      </div>
    </>
  );
};

export default Feed;
