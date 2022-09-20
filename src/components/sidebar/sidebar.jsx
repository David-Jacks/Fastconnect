import React from "react";
import "./sidebar.css";
import { FaEvernote, FaJoomla, FaPersonBooth} from "react-icons/fa";
import { MdClass, MdGroups,} from "react-icons/md";
import { SiCoursera } from "react-icons/si";
import { FcDepartment } from "react-icons/fc";



const Sidebar = () =>{
    return(
        <>
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                       <SiCoursera className="sidebarIcon"/>
                       <button className="sidebarListItemText">Courses</button>  
                    </li>
                    <li className="sidebarListItem">
                       <FaPersonBooth className="sidebarIcon"/>
                       <button className="sidebarListItemText">Students Clubs</button>  
                    </li>
                    <li className="sidebarListItem">
                       <FcDepartment className="sidebarIcon"/>
                       <button className="sidebarListItemText">Departments</button>  
                    </li>
                    <li className="sidebarListItem">
                       <MdGroups className="sidebarIcon"/>
                       <button className="sidebarListItemText">Groups</button>  
                    </li>
                    <li className="sidebarListItem">
                       <MdClass className="sidebarIcon"/>
                       <button className="sidebarListItemText">MyClass</button>  
                    </li>
                    <li className="sidebarListItem">
                       <FaJoomla className="sidebarIcon"/>
                       <button className="sidebarListItemText">Colleagues</button>  
                    </li>
                    <li className="sidebarListItem">
                       <FaEvernote className="sidebarIcon"/>
                       <button className="sidebarListItemText">Events</button>  
                    </li>
                </ul>
                <button className="sidebarButton">Show Associates</button>
                <hr className="sidebarHr"/>
            </div>
       
        </div>
        
        </>
    );
}

export default Sidebar;