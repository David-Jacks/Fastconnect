import React, { useEffect, useState } from "react";
import Post from "../post/post";
import Share from "../share/share";
import "./feed.css";
import { getDocs } from "firebase/firestore";
import { userPostCollection } from "../../db_entities";



const Feed = ({userData}) => {

  const [postData, setPostData] = useState([]) 
  // getting feed data from firebase and redering on the feed page
  // getting post data everytime the page loads
  useEffect(()=>{
    async function getPostData(){
      try {
        const postDocs = await getDocs(userPostCollection);
        const feedData = postDocs.docs.map((doc)=>{
          const data = doc.data();
          return {...data, id: doc.id}
        })
        console.log(feedData);
        setPostData(feedData);
      } catch (error) {
        console.error(error)
      }
    }
    getPostData()
  },[])
  console.log(postData);
  return (
    <>
      <div id="feed">
          <div className="head-const">
            <h1>Lancaster_Community</h1>
          </div>
          <Share userData={userData}/>
        <div className="feedWrapper">
          {postData.length > 0 ? postData.map((postData) => (
            <Post key={postData.id} post={postData} />
          )): <p>Feed is loading please wait...</p>}
        </div>
      </div>
    </>
  );
};

export default Feed;
