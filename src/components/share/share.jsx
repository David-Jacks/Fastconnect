import React from "react";

import './share.css';

const Share = () =>{
    return(
        <div>
            <div className="share">
                <div className="shareWrapper">
                    <div className="shareTop">
                    <img src="/assets/02B00C71-F3B5-46C8-9F15-A768CF2AE1B7.jpeg" alt="profile" />
                    <input type="text" placeholder="speak to the whole community" />
                    </div>
                    <div className="shareBottom">
                        <a href="{}">Post</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share;