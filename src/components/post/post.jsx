import React from "react";
import "./post.css";
import { GiStarFormation } from "react-icons/gi";
import { BiHide } from "react-icons/bi";
import { MdAddComment } from "react-icons/md";
import { Users } from "../../myData";
import { useState } from "react";
import Commentbox from "../commentbox/commentbox";



const Post = ({post}) =>{
    
    const [likes, setLikes] = useState(0);
    const [secret, setSecret] = useState(0);
    const [show, setShow] = useState(true);

    const theLikes = () =>{
            setLikes(likes + 1)
}


    const theSecret = () =>{
    setSecret(secret + 1)
}
    return(
        <div>
            <div className="postdiv">
                <div className="postWrapper">
                    <div className="postmain">
                        <div className="postabout">
                            <img src={Users.filter((u) => u.UserId === post.Userid)[0].profilepicture} alt="postuserprofile" />
                            <span>{post.postabout}</span>
                        </div>
                        <div className="postcontent">
                            <img src={post.postpicture} alt="postimg" />
                        </div>
                        <div className="reactioncenter">
                            <div className="starRate"><button onClick={theLikes}><GiStarFormation className="icon"/></button><span>Star {likes}</span></div> 
                            <div className="commentRate"><button onClick={() =>{setShow(!show)}}><MdAddComment className="icon"/></button><span className="countfind"> comments</span></div>
                            <div className="reportRate"><button onClick={theSecret}><BiHide className="icon"/></button><span>{secret}</span></div>                           
                        </div>
                    </div>
                    {show? <div className="postcomment">
                       <Commentbox />
                    </div>: null}
                </div>
            </div>
        </div>
    );
}

export default Post;