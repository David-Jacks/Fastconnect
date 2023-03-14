import React from "react";
import Person from "../person/person";
import Rightbar from "../rightbar/rightbar";
import Sidebar from "../sidebar/sidebar";
import Topbar from "../topbar/topbar";
import "./profile.css";

function Profile() {
  return (
    <div className="profilecontainer">
      <Topbar />
      <div className="profile-wrapper">
        <Sidebar />
        <Person />
        <Rightbar />
      </div>
    </div>
  );
}

export default Profile;
