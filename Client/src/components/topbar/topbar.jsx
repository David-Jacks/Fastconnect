import React from "react";
import "./topbar.css";
import { FaNotEqual, FaSearch } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import Notify from "../notification/notify";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <img src="./assets/download.jfif" alt="logo" />
          <span className="logo">FastConnect</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <FaSearch className="searchIcon" />
            <input
              type="text"
              className="searchInput"
              placeholder="Search for post or event"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <a
              href="https:/www.lancaster.edu.gh/"
              rel="noreferrer"
              className="topbarLink"
              target={"_blank"}
            >
              LanWeb
            </a>
            <a
              href="https://ghana-modules.lancaster.ac.uk/"
              target={"_blank"}
              rel="noreferrer"
              className="topbarLink"
            >
              Module
            </a>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Link to={"/chat"}>
                <IoMdChatbubbles className="iconedite" />
              </Link>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Link to={"/basket"}>
                <BsFillBasket3Fill className="iconedite" />
              </Link>
              <span className="topbarIconBadge">5</span>
            </div>
            <div className="topbarIconItem">
              <Link>
                <FaNotEqual
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="iconedite"
                />
              </Link>
              <span className="topbarIconBadge">6</span>
              {open ? (
                <div className="notification-panel">
                  <button
                    className="btn-noti"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    X
                  </button>
                  <div className="n-head">you are notified bellow</div>
                  <div className="n-body">
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                    <Notify />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <img
            src="/assets/02B00C71-F3B5-46C8-9F15-A768CF2AE1B7.jpeg"
            alt=""
            className="topbarImage"
          />
        </div>
      </div>
    </>
  );
};

export default Topbar;
