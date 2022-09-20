import React from "react";
import Bookshow from "../../components/bookshow/bookshow";
import Foodshow from "../../components/foodshow/foodshow";
import Topbasket from "../../components/topbasket/topbasket";
import "./basket.css";

const Basket = () =>{
    return(
        <>
        <div className="basket">
            <Topbasket />
            <div className="basketwrapper">
            <Bookshow />
            <Foodshow />
            </div>
            
        </div>
        </>
    )
};

export default Basket;