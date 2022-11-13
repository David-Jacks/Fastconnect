import React from "react";
import Post from "../post/post";
import Share from "../share/share";
import "./feed.css";
import { Poster } from "../../myData";
import {useEffect} from "react";
const axios = require("axios");
const Feed = () =>{
    useEffect (() => {
        axios.get("").then(() =>{
            
        })
    })

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