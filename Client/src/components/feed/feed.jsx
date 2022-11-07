import React from "react";
import Post from "../post/post";
import Share from "../share/share";
import "./feed.css";
import { Poster } from "../../myData";

const Feed = () =>{
    return(
        <>
        <div className="feed">
            <div className="head-const">
                <h1>Lancaster_Community</h1>
            </div>
            <Share />
            {Poster.map(p =>(
                <Post key= {p.postID} post = {p}/>
            ))}
            
           
            
        </div>
        </>
    );
}

export default Feed;