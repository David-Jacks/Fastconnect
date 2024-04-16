import React from "react";
import "./share.css";
import { useState } from "react";
import Posting from "../../modals/posting/posting";
import { storage } from "../../config/firebase";
import {ref, uploadBytes} from "firebase/storage"

const Share = ({userData}) => {
  const [open, setOpen] = useState(false);
  const [picopen, setPicopen] = useState(false);
  const [eventopen, setEventopen] = useState(false);
  
  const [fileAbout, setFileAbout] = useState("");
  const [fileUpload, setFileUpload] = useState(null);

  //dealing with image post
  // const queryClient = useQueryClient(); //will use to refresh post automatically
  
  // taking file from child modal component "Posting"
  const recieveObj = async(objToRec) =>{
    await setFileAbout(objToRec.about);
    await setFileUpload(objToRec.file);
    console.log(fileUpload);

    // if (fileUpload.type.includes("image")){
    //   handleImgFileUpload();
    // }else if(fileUpload.type.includes("video")){
    //   handleVidFileUpload();
    // }
  }
  //uploading image files to firebase storage
  const handleImgFileUpload = async() =>{
    // setFileAbout(objToRec.about);
    // setFileUpload(objToRec.file);
    // console.log(fileUpload);
    
    // firebase storage referencing
    if (fileUpload){
      const imgFile = ref(storage, `imageFiles/${fileUpload?.name}`);
      try {
        await uploadBytes(imgFile, fileUpload);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }else{
      console.log("image file is not added yet");
    }
  };

  // upoading video files to firebase
  const handleVidFileUpload = async() =>{
    // setFileAbout(objToRec.about);
    // setFileUpload(objToRec.file);
    // console.log(fileUpload);
    
    // firebase storage referencing
    if(fileUpload){
      const vidFile = ref(storage, `videoFiles/${fileUpload?.name}`);
      try {
        await uploadBytes(vidFile, fileUpload);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }else{
      console.log("the video file is not added yet")
    }
  };


  // toggling posting modal
  const togglePostingVid = () =>{
    setOpen(!open);
  }
  const togglePostingImg = () =>{
    setPicopen(!picopen);
  }
  //dealing with event post

  function eventPost() {}

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={userData.userProfile}
            alt="profile"
          />
          <input type="text" placeholder="Search post by the users name" />
        </div>

        {/* open and close logs */}

        {open ? (<Posting upload={recieveObj} type={"video"} close={togglePostingVid}/>) : null}
        {picopen ? (<Posting upload={recieveObj} type={"image"} close={togglePostingImg}/>) : null}
       {eventopen ? (
          <div className="port-contain">
            <div className="add">
              <h3>Happy Posting</h3>
              <textarea
                name="event-text"
                id="aboutevent"
                cols="13"
                rows="3"
                placeholder="Brief the event to be posted..."
                onChange={(e) => {
                  // seteventAbout(e.target.value);
                }}
              ></textarea>
              <div className="file-taker">
                <input
                  name="file"
                  type="file"
                  className="eventupload"
                  onChange={(e) => {
                    // setevent(e.target.files[0]);
                  }}
                />
                <button
                  onClick={() => {
                    eventPost();
                    setEventopen(false);
                  }}
                >
                  upload event
                </button>
              </div>
            </div>
          </div>) : null}
        {/* dealing with images  and other vital data*/}
        

        {/* buttons to control open and close modals */}

        <div className="shareBottom">
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            Add_Video
          </button>
          <button
            onClick={() => {
              setEventopen(true);
            }}
          >
            Add_Event
          </button>
          <button
            onClick={() => {
              setPicopen(true);
            }}
          >
            Add_Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
