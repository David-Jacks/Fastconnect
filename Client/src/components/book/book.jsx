import React from "react";
import "./book.css";
import { FcLike } from "react-icons/fc";
import {AiFillLike, AiFillDislike} from "react-icons/ai";

const Book = ({bookData}) => {
  return (
    //i will remove you later
    <>
      <div class="card">
        <div className="card-img-top">
         <img src={bookData.bookimg}  alt="bookimg" />
        </div>
        <div class="card-body">
          <div className="card-title">
            <span>Algorithms</span>
            <span>{bookData.author}</span>
            <span>{bookData.year}</span>
          </div>
          <p class="card-text">
          {bookData.about}
          </p>
          <div className="card-reaction">
            <span>
            <a href="/" class="btn btn-danger">
              Order
            </a>
            </span>   
            <span >
              <AiFillLike className="imoj"/>
              {bookData.reactions.like}
              </span>
            <span>
              <AiFillDislike className="imoj"/>
              {bookData.reactions.hate}
              </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;

