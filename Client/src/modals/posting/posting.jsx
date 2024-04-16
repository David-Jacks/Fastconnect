import React, { useState } from 'react'
import "./posting.css"

function Posting(props) {
    const [about, setAbout] = useState("");
    const [file, setFile] = useState(null);

    const objToSend = {file: file, about: about}
   
  
  return (
    <div id="port-contain">
        <div className="add">
            <button className="close" onClick={props.close}>x</button>
            <h3>Happy Posting</h3>
            <textarea
                name="video-text"
                id="aboutVideo"
                cols="13"
                rows="4"
                placeholder={`write about your ${props.type}`}
                onChange={(e) => {
                setAbout(e.target.value);
                }}
            ></textarea>
            <div className="file-taker">
                <input
                name="vid"
                type="file"
                className="vidupload"
                onChange={(e) => {
                    setFile(e.target.files[0]);
                }}
                />
                <button
                onClick={() => {
                    // vidPost();
                    // setOpen(false);
                    props.upload(objToSend)
                }}
                >
                {`upload ${props.type}`}
                </button>
            </div>
        </div>
  </div>
  )
}

export default Posting