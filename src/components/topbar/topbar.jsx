import React from "react";
import "./topbar.css";
import {FaNotEqual, FaSearch} from "react-icons/fa";
import {IoMdChatbubbles} from "react-icons/io";
import {BsFillBasket3Fill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Notify from "../notification/notify";


 const Topbar = () => {
    const [open, setOpen] = useState(false);

   const openFunction = () => {
        setOpen(!open);
    }
    return(
        <>
        <div className="topbarContainer">
            <div className="topbarLeft">
                <img src="data:image/jpeg;base64,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" alt="logo" />
                <span className="logo">LancasterFastConnect</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <FaSearch  className="searchIcon"/>
                    <input type="text" className="searchInput"  placeholder="Search for post or event"/>

                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                <a href="https:/www.lancaster.edu.gh/" rel= 'noreferrer' className="topbarLink" target={'_blank'}>LanWeb</a>
                <a href="https://ghana-modules.lancaster.ac.uk/" target={"_blank"} rel= 'noreferrer' className="topbarLink">Module</a>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                       <Link to={'/chat'}> <IoMdChatbubbles className="iconedite"/></Link>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                       <Link to= {'/basket'}> <BsFillBasket3Fill className="iconedite"/> </Link>
                        <span className="topbarIconBadge">5</span>
                    </div>
                    <div className="topbarIconItem" >
                    <Link><FaNotEqual onClick={openFunction} className="iconedite"/></Link>
                        <span className="topbarIconBadge">6</span>
                        {open ?<div className="notification-panel">
                            <button>
                                X
                            </button>
                            <div className="n-head">
                                   you are notified bellow
                            </div>
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
                        </div>: ""
                            }
                      
                    </div>
                </div>
                <img src="/assets/02B00C71-F3B5-46C8-9F15-A768CF2AE1B7.jpeg" alt="" className="topbarImage" />
            </div>
        </div>
        </>
    );
 }

 export default Topbar;