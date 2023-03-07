import React from "react";
import Bookshow from "../../components/bookshow/bookshow";
import Topbar from "../../components/topbar/topbar";
import "./basket.css";

const Basket = () => {
  return (
    <>
      <div className="basket">
        <Topbar />
        <div className="basketwrapper">
          <Bookshow />
        </div>
      </div>
    </>
  );
};

export default Basket;
