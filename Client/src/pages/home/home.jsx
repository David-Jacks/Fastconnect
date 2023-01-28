import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import "../home/home.css";

const Home = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const history = useNavigate;
  //   if (token) {
  //     if (token.role === "student" || token.role === "staff") {
  //       // render main homepage
  //       history.push("/home");
  //     } else {
  //       history.push("/login");
  //     }
  //   } else {
  //     history.push("/login");
  //   }
  // }, []);
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
