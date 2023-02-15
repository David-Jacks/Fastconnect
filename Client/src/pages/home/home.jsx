import React, { useEffect, useState } from "react";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import "../home/home.css";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Home = () => {
  const [userData, setUserData] = useState({});

  //using react query
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed userData={userData} />
          <Rightbar />
        </div>
      </QueryClientProvider>
    </>
  );
};

export default Home;
