import React from "react";
import "./topbasket.css";

const Topbasket = () =>{
    return(
        <>
        <div className="topbasket">
            <div className="topbasketwrapper">
                <div className="basketright">
                        <h3>Library Display</h3>
                    <div className="booksearch">
                        <input type="text"  className="search" placeholder="Search book by course or year"/>
                        <button className="searchbooks">Go</button>
                    </div>
                </div>
                <div className="basketleft">
                        <h3>Cafeteria Display</h3>
                    <div className="foodsearch">
                        <input type="text"  className="search" placeholder="Search food by name or price"/>
                        <button className="searcgfoods">Go</button>
                    </div>
                </div>
               
            </div>
            
        </div>
        </>
    )
}
export default Topbasket;