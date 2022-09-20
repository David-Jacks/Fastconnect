import React from "react";
import "./food.css";
import { FcLike } from "react-icons/fc";

const Food = () =>{
    return(
        <>
        <div className="food">
            <div className="foodtop">
                <span><h3>FoodName:</h3>Rice and Stew</span>
                <span><h3>FoodPrice:</h3>GHC20.00</span>
                <span><h3>FoodSource:</h3>Cafeteria</span>
            </div>
            <div className="foodcontent">
                <img src="./assets/funny.jpeg" alt="" />
                <div className="foodreaction">
                    <button className="foodorder">GetMe</button>
                   <span><FcLike className="foodlike"/>0</span> 
                </div>
            </div>
            <div className="fooddetails">
                <p>food contains Salad ketchup, egg and rice and genuinely prepared stew</p>
            </div>

        </div>
        </>
    )
}

export default Food;