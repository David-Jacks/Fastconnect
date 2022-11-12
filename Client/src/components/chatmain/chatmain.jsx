import React from "react";
import './chatmain.css';
import {GrSend} from "react-icons/gr";
import Messaging from "../messaging/messaging";


const Chatmain = () => {
    return(
        <div className="chatmainall">
            <div className="chatmainsearch">
                <input className="searchmessage" type="text" placeholder="search message" />
            </div>
            <div className="chatmaincontent">
                <div className="chatcontenthead">
                    <img src=".//assets/rep.jpeg" alt="" />
                    <span>ChatNameis verylong</span>
                </div>
                <div className="chatbox">
                    <div className="chatdate">
                        <span>21/09/2022</span>
                    </div>
                        <Messaging />
                        <Messaging />
                        <Messaging />
                        <Messaging />
                        <Messaging />
                        <Messaging />
                        <Messaging />
                        <Messaging />
                        <Messaging />
                        <Messaging />
                </div>
                <div className="chatsend">
                    <textarea name="chatinput" id="messagewrite" cols="30" rows="10" placeholder="Write your message"></textarea>
                    <button className="sender">Fast <GrSend className="sendicon"/></button>
                </div>
            </div>
            <div className="somefield">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos voluptas at id impedit tenetur repellat tempore voluptatibus 
                    itaque dolores? Optio laboriosam impedit ullam ex delectus voluptatibus! Hic doloribus quas officia!</p>
            </div>
        </div>
    )
}


export default Chatmain;