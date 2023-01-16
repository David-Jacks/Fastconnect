import React from "react";
import "./login.css";
import { Link} from 'react-router-dom';
import { useState } from "react";

const Login = () =>{
const [userid, setUserID] = useState("");
const [userpasscode, setUserPasscode] = useState("");
const [log,setLog] = useState(false);
    return(
        <>
       <div className="bigcontainer">
        <div className="loginheader">
            <span>First Time to LancasterFastConnect? </span>
           <div className="dropdown">
                <button className="drop" onClick={()=>setLog(!log)}>Sign up</button>
                {log ? <div className="dropcontent">  
                <Link  to={'/stulogin'} className="studrop"> Student</Link>
                <Link to={'/stalogin'} className="stadrop"> Staff</Link>
                </div> :""}
           </div>
        </div>
        <div className="mainlog">
            <div className="profilecontainer">
                <img src="https://www.schooldrillers.com/wp-content/uploads/2021/05/Lancaster-University-Ghana-Courses.jpg" alt="lancaster" />
                <h2>Lancaster Fastconnect</h2>
            </div>
            <div className="animate">
                <span>An effective way for Communication and Management </span>
            </div>
            <div className="loginform">
                <form action="" method="POST">
                    <label htmlFor="Idno">
                        ID No.
                    </label>
                    <input type="number" className="fullID" onChange={()=>{setUserID(document.querySelector(".fullID").value)}}/>
                    <label htmlFor="pass">
                    Password    
                    </label>
                    <input type="text"  className="fullID" onChange={()=>{setUserPasscode(document.querySelector(".fullID").value)}}/> 
                </form>
            <div className="finalBtn">
                    <Link to={'/home'} onClick={console.log(userid, userpasscode)}> Let's Go!</Link>
            </div>
            </div>
            </div>
            
       </div>
        </>
    );
};

export default Login;
