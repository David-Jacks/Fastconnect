import React from "react";
import Book from "../../components/book/book";
import Topbar from "../../components/topbar/topbar";
import "./basket.css";
import bookData from "../../books.json";

const Basket = ({userData}) => {
  return (
    <>
      <div className="basket">
        <Topbar userData={userData}/>
        <div className="basketwrapper">
        {bookData.map((bookData)=> <Book  key={bookData.id} bookData={bookData}/>)}
    
        </div>
      </div>
    </>
  );
};

export default Basket;

