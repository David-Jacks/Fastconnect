import React, { useEffect, useState } from "react";
import Person from "../../components/person/person";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import "./profile.css";
import { MdTableRows, MdEventAvailable } from "react-icons/md";

function Profile() {
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
    <div className="profilecontainer">
      <Topbar />
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
      <div className="profile-wrapper">
        {on ? <Sidebar /> : null}
        <Person />
        {open ? <Rightbar /> : null}
      </div>
    </div>
  );
}

export default Profile;
