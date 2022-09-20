import React from "react";
import "./post.css";
import { GiStarFormation } from "react-icons/gi";
import { MdAddComment, MdReport } from "react-icons/md";
import { Users } from "../../myData";

const Post = ({post}) =>{
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
                        <div className="starRate"><GiStarFormation className="icon"/><span>Star {post.star}</span></div> 
                        <div className="commentRate"><MdAddComment className="icon"/><span>{post.comment} comments</span></div>
                        <div className="reportRate"><MdReport className="icon"/><span>no </span></div>                           
                        </div>
                    </div>
                    <div className="postcomment">
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;