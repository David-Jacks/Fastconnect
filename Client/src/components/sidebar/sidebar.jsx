import React from "react";
import "./sidebar.css";
import { FaEvernote, FaJoomla, FaPersonBooth} from "react-icons/fa";
import { MdClass, MdGroups,} from "react-icons/md";
import { SiCoursera } from "react-icons/si";
import { FcDepartment } from "react-icons/fc";
import { useState } from "react";
import Courses from "../courses/courses";
import Clubs from "../clubs/clubs";
import Department from "../department/department";
import Group from "../groups/group";
import Class from "../class/class";
import Colleagues from "../colleagues/colleagues";



const Sidebar = () =>{
      const [courseshow, setCourseShow] = useState(false);
      const [clubshow, setClubShow] = useState(false);
      const [departmentshow, setDepartmentShow] = useState(false);
      const [groupshow, setGroupShow] = useState(false);
      const [classshow, setClassShow] = useState(false);
      const [colleaguesshow, setColleaguesShow] = useState(false);


    return(
        <>
        <div className="sidebar">
            <div className="sidebar-Wrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                       <SiCoursera className="sidebarIcon"/>
                       <button onClick={() =>{setCourseShow(!courseshow)}} className="sidebarListItemText">Courses</button>  
                    </li>
                    {courseshow ?
                     <div className="course-wrapper">
                        <Courses />
                    </div>
                     : ""}
                    <li className="sidebarListItem">
                       <FaPersonBooth className="sidebarIcon"/>
                       <button onClick={()=>{setClubShow(!clubshow)}} className="sidebarListItemText">Students Clubs</button>  
                    </li>
                    { clubshow ?<div className="club-wrapper">
                        <Clubs />
                    </div>: ""
                     }
                    <li className="sidebarListItem">
                       <FcDepartment className="sidebarIcon"/>
                       <button onClick={() =>  {setDepartmentShow(!departmentshow)}} className="sidebarListItemText">Departments</button>  
                    </li>
                    {departmentshow ?<div className="department-wrapper">
                     <Department />
                    </div>: ""}
                    <li className="sidebarListItem">
                       <MdGroups className="sidebarIcon"/>
                       <button onClick={() => {setGroupShow(!groupshow)}} className="sidebarListItemText">Groups</button>  
                    </li>
                    {groupshow ? <div className="group-wrapper">
                     <Group />
                    </div> : ""}
                    <li className="sidebarListItem">
                       <MdClass className="sidebarIcon"/>
                       <button  onClick={() => {setClassShow(!classshow)}} className="sidebarListItemText">MyClass</button>  
                    </li>
                    {classshow ? <div className="class-wrapper">
                     <Class />
                    </div>: ""}
                    <li className="sidebarListItem">
                       <FaJoomla className="sidebarIcon"/>
                       <button onClick={() => {setColleaguesShow(!colleaguesshow)}} className="sidebarListItemText">Colleagues</button>  
                    </li>
                    {colleaguesshow ?<div className="colleagues-wrapper">
                     <Colleagues />
                    </div>: ""}
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