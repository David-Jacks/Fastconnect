import React from "react";
import "./book.css";
import { FcLike } from "react-icons/fc";


const Book = () => {
    return(
        <>
        <div className="book">
                        <div className="topinfo">
                            <span><h3>Topic:</h3> Information systems</span>
                            <span><h3>Year:</h3> 2018</span>
                            <span><h3>Author:</h3> Steven Larkai</span>
                        </div>
                    <div className="bookcontainer">
                        <img src="./assets/let.jpeg" alt="" />
                        <div className="bookorder">
                        <button className="btnorder">OrderNow</button>
                        <span><FcLike  className="like"/> 1</span>
                        </div>
                    </div>
                    <div className="bookinfo">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quibusdam perferendis repellat itaque soluta eum laudantiu, aperiam quas consequuntur, culpa error consequatur nesciunt? Nobis dolor eveniet dolorem maxime rem sint                      
                        </p>
                    </div>
                    
        </div>
        </>
    )
}

export default Book;