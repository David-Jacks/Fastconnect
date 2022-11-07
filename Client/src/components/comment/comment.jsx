import React from "react";
import "./comment.css";
const Comment = () =>{
    return(
        <>
        <div className="comments">
            <div className="comment-head">
                <img src=".//assets/rep.jpeg" alt="" />
                <span>commenter</span>
            </div>
            <div className="comment-body">
                    <p className="actuallcomment">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis numquam possimus expedita 
                       fuga repellendus delectus. Neque magni, 
                       animi natus harum facere culpa, eius ipsum, repellat ullam repellendus eos voluptatibus tempore. 
                    </p>
            </div>

        </div>
        </>
    );
}

export default Comment;