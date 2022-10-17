import React from "react";
import Bookshow from "../../components/bookshow/bookshow";
import Topbasket from "../../components/topbasket/topbasket";
import "./basket.css";

const Basket = () =>{
    return(
        <>
        <div className="basket">
            <Topbasket />
            <div className="basketwrapper">
            <Bookshow />
            </div>
            
        </div>
        </>
    )
};

export default Basket;