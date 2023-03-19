import React from "react";
import Book from "../../components/book/book";
import Bookshow from "../../components/bookshow/bookshow";
import Topbar from "../../components/topbar/topbar";
import "./basket.css";

const Basket = () => {
  return (
    <>
      <div className="basket">
        <Topbar />
        <div className="basketwrapper">
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </>
  );
};

export default Basket;
