import React from "react";
import './share.css';
import {useState} from "react";
const Share = () =>{
const [open, setOpen] = useState(false);
const [picopen, setPicopen] = useState(false);
const [eventopen, setEventopen] = useState(false);

    return(
            <div className="share">
                <div className="shareWrapper">
                    <div className="shareTop">
                    <img src="/assets/02B00C71-F3B5-46C8-9F15-A768CF2AE1B7.jpeg" alt="profile" />
                    <input type="text" placeholder="speak to the whole community" />
                    </div>
                    {open ? <div className="add">
                        <textarea name="video-text" id="aboutVideo" cols="15" rows="5" placeholder="Brief the vidoe to be posted..."></textarea>
                        <input type="file" className="vidupload" />
                        <button onClick={()=>{setOpen(false)}}>upload video</button>
                    </div>: null}
                    {eventopen ? <div className="add">
                    <textarea name="event-text" id="aboutevent" cols="15" rows="5" placeholder="Brief the event to be posted..."></textarea>
                        <input type="file" className="eventupload" />
                        <button onClick={()=>{setEventopen(false)}}>upload event</button>
                    </div>: null}
                    {picopen ? <div className="add">
                    <textarea name="image-text" id="aboutImg" cols="15" rows="5" placeholder="Brief the image to be posted..."></textarea>
                        <input type="file" className="imageupload" />
                        <button onClick={()=>{setPicopen(false)}}>upload image</button>
                    </div>: null}
                    <div className="shareBottom">
                        <button  onClick={()=>setOpen(true)}>Add_Video</button>
                        <button onClick={()=>setEventopen(true)}>Add_Event</button>
                        <button onClick={()=>setPicopen(true)}>Add_Image</button>
                    </div>
                </div>
            </div>
    )
}

export default Share;