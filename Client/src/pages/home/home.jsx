import React, { useEffect, useState } from "react";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import "../home/home.css";
import axios from "axios";

const Home = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // console.log(token);
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token not found in local storage.");
    } else {
      console.log(token);
    }
    // const fetchUser = async () => {
    //   const response = await axios.get(`/api/users/${token.userid}`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   const user = response.data;
    //   setUserData(user);
    // };

    // fetchUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed userData={userData} />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
