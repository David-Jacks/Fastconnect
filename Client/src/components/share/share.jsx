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
                    {open ? <div className="addvideo">
                        <input type="text" placeholder="About video" />
                        <input type="file" className="vidupload" />
                        <button>upload video</button>
                    </div>: null}
                    {eventopen ? <div className="addevent">
                        <input type="text" placeholder="About event" />
                        <input type="file" className="eventupload" />
                        <button>upload event</button>
                    </div>: null}
                    {picopen ? <div className="addimage">
                        <input type="text" placeholder="Aboutimage" />
                        <input type="file" className="imageupload" />
                        <button>upload image</button>
                    </div>: null}
                    <div className="shareBottom">
                        <button  onClick={()=>setOpen(!open)}>Add_Video</button>
                        <button onClick={()=>setEventopen(!eventopen)}>Add_Event</button>
                        <button onClick={()=>setPicopen(!picopen)}>Add_Image</button>
                    </div>
                </div>
            </div>
    )
}

export default Share;