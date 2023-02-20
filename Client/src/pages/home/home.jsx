import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import "./home.css";
import { MdTableRows, MdEventAvailable } from "react-icons/md";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Home = () => {
  const [userData, setUserData] = useState({});
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 487) {
      setOn(false);
    } else {
      setOn(true);
    }
  }, []);

  //using react query
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Topbar />
        <div className="control">
          <MdTableRows
            className="left"
            onClick={() => {
              setOn(!on);
            }}
          />

          <MdEventAvailable className="right" />
        </div>
        <div className="homeContainer">
          {on ? <Sidebar /> : null}
          <Feed userData={userData} />
          <Rightbar />
        </div>
      </QueryClientProvider>
    </>
  );
};

export default Home;
