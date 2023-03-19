import React from "react";
import "./book.css";
import { FcLike } from "react-icons/fc";

const Book = () => {
  return (
    //i will remove you later
    <>
      <div class="card">
        <img src="./assets/final.png" class="card-img-top " alt="" />
        <div class="card-body">
          <h5 class="card-title">
            Topic: <span>Algorithms</span>
          </h5>
          <h5 class="card-title">
            Author: <span>David Kweku Jackson</span>
          </h5>
          <h5 class="card-title">
            Year: <span>2023</span>
          </h5>
          <p class="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            perferendis repellat itaque soluta eum laudantiu, aperiam quas
            consequuntur, culpa error consequatur nesciunt? Nobis dolor eveniet
            dolorem maxime rem sint
          </p>
          <div className="card-reaction">
            <a href="/" class="btn btn-danger">
              Order
            </a>
            <span className="imoj">👍</span>
            <span className="imoj">😲</span>
            <span className="imoj">🥰</span>
          </div>
        </div>
      </div>
      {/* <div className="book">
        <div className="topinfo">
          <span>
            <h3>Topic:</h3> Information systems
          </span>
          <span>
            <h3>Year:</h3> 2018
          </span>
          <span>
            <h3>Author:</h3> Steven Larkai
          </span>
        </div>
        <div className="bookcontainer">
          <div className="bookorder">
            <button className="btnorder">OrderNow</button>
            <span>
              <FcLike className="like" /> 1
            </span>
          </div>
        </div>
        <div className="bookinfo">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            perferendis repellat itaque soluta eum laudantiu, aperiam quas
            consequuntur, culpa error consequatur nesciunt? Nobis dolor eveniet
            dolorem maxime rem sint
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Book;
