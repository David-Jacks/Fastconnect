import React, { useEffect, useState } from "react";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import "./home.css";
import { MdTableRows, MdEventAvailable } from "react-icons/md";


const Home = ({userData}) => {
  const [on, setOn] = useState(false);
  const [open, setOpen] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setOn(false);
        setOpen(false);
      } else {
        setOn(true);
        setOpen(true);
      }
    };
    handleResize(); // Call the function once to set the initial state
    window.addEventListener("resize", handleResize); // Add event listener
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
    
      <Topbar userData={userData} />
        <div className="control">
          <MdTableRows
            className="left"
            onClick={() => {
              setOn(!on);
            }}
          />

          <MdEventAvailable
            className="right"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
        <div className="homeContainer">
          {on ? <Sidebar /> : null}
          <Feed userData={userData}/>
          {open ? <Rightbar /> : null}
        </div>
    </>
  );
};

export default Home;

