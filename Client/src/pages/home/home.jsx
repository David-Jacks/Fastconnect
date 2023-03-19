import React, { useEffect, useState } from "react";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import "./home.css";
import { MdTableRows, MdEventAvailable } from "react-icons/md";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Home = () => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setOn(false);
      } else {
        setOn(true);
      }
    };
    handleResize(); // Call the function once to set the initial state
    window.addEventListener("resize", handleResize); // Add event listener
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
          <Feed />
          <Rightbar />
        </div>
      </QueryClientProvider>
    </>
  );
};

export default Home;
