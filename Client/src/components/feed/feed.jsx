import React from "react";
import Post from "../post/post";
import Share from "../share/share";
import "./feed.css";
import postData from "../../post.json";
// import { useQuery } from "@tanstack/react-query";
// import makeRequest from "../../myAxios";

const Feed = ({userData}) => {
  //making use of react query

  // this is to use the react query library to fetch my image and video post and sort it depending on the time they were posted
  // const { isLoading, error, data } = useQuery(["post", "video"], () => {
  //   return Promise.all([
  //     makeRequest.get("/post").then((res) => res.data),
  //     makeRequest.get("/vidpost").then((res) => res.data),
  //   ]).then(([posts, videos]) => {
  //     let combinedPost = [...posts, ...videos];
  //     return combinedPost;
  //   });
  // });

  return (
    <>
      <div id="feed">
          <div className="head-const">
            <h1>Lancaster_Community</h1>
          </div>
          <Share userData={userData}/>
        <div className="feedWrapper">
          {postData.map((postData) => <Post key={postData.id} post={postData} />)}
        </div>
      </div>
    </>
  );
};

export default Feed;

