import React from "react";
import './messaging.css';



const Messaging = ({own}) => {
    return(
        <>
        <div className="messagingdisplay">
            <div className="messagefirst">
                <img src=".//assets/res.jpeg" alt="" />
                <p className="messagepara">Lorem ipsum dolor sit, uidem adipiscir quos officiis!</p>
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