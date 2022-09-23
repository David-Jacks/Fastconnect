import React from "react";
import './messaging.css';



const Messaging = () => {
    return(
        <>
        <div className="messagingdisplay">
            <div className="messagefirst">
                <img src=".//assets/res.jpeg" alt="" />
                <p>hello how are you doing</p>
            </div>
            <div className="messagereact">
                <div className="myicon"></div>
                <span>Just now</span>
            </div>
        </div>
        </>
    )
}


export default Messaging;