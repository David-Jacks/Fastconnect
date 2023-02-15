import React, { useState } from "react";
import Post from "../post/post";
import Share from "../share/share";
import "./feed.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../myAxios";

const Feed = () => {
  //making use of react query
  const { isLoading, error, data } = useQuery(["post"], () => {
    return makeRequest.get("/post").then((res) => {
      return res.data;
    });
  });

  // console.log(data);

  return (
    <>
      <div className="feed">
        <div className="head-const">
          <h1>Lancaster_Community</h1>
        </div>
        <Share />
        {error
          ? "something went wrong with feed loading"
          : isLoading
          ? "Loading"
          : data.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default Feed;
