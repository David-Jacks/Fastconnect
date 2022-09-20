import React from "react";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import "../home/home.css";

const Home = () =>{
    return(
        <>
        <Topbar />
        <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
        </div>
           
        </>
    );
}

export default Home;