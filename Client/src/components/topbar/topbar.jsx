import React from "react";
import "./topbar.css";
import { FaNotEqual } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { BsFillBasket3Fill, BsFacebook, BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useState } from "react";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <img src="../assets/res.jpeg" alt="logo" />
            <span className="logo">Lancaster Fastconnect</span>
          </Link>
        </div>

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
            href="https:/www.lancaster.edu.gh/"
            rel="noreferrer"
            className="topbarLink"
            target={"_blank"}
          >
            Lancaster Store
          </a>
          <a
            href="https://ghana-modules.lancaster.ac.uk/"
            target={"_blank"}
            rel="noreferrer"
            className="topbarLink"
          >
            Module
          </a>
          <a
            href="https://ghana-modules.lancaster.ac.uk/"
            target={"_blank"}
            rel="noreferrer"
            className="topbarhan"
          >
            <BsFacebook />
          </a>
          <a
            href="https://ghana-modules.lancaster.ac.uk/"
            target={"_blank"}
            rel="noreferrer"
            className="topbarhan"
          >
            <GrInstagram />
          </a>
          <a
            href="https://ghana-modules.lancaster.ac.uk/"
            target={"_blank"}
            rel="noreferrer"
            className="topbarhan"
          >
            <BsLinkedin />
          </a>
        </div>
        {/* bootsrap */}

        <div className="topbarRight">
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Link to={"/chat"}>
                <IoMdChatbubbles className="iconedite" />
                <span className="topbarIconBadge">20</span>
              </Link>
            </div>
            <div className="topbarIconItem">
              <Link to={"/basket"}>
                <BsFillBasket3Fill className="iconedite" />
              </Link>
              <span className="topbarIconBadge">50</span>
            </div>
            <div className="topbarIconItem">
              <Link>
                <FaNotEqual className="iconedite" />
                <span className="topbarIconBadge">6</span>
              </Link>
            </div>
          </div>
          <Link to={"/profile"}>
            <img
              src="/assets/02B00C71-F3B5-46C8-9F15-A768CF2AE1B7.jpeg"
              alt="profile"
              className="topbarImage"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Topbar;
