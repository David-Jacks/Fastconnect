import React from "react";
import "./login.css";
import { Link} from 'react-router-dom';

const Login = () =>{
    return(
        <>
       <div className="bigcontainer">
        <div className="loginheader">
            <span>First Time to LancasterFastConnect? </span>
           <div className="dropdown">
           <button className="drop">Sign up</button>
           <div className="dropcontent">
            <Link  to={'/stulogin'} className="studrop"> Student</Link>
            <Link to={'/stalogin'} className="stadrop"> Staff</Link>
           </div>
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
                <form action="">
                    <label htmlFor="Idno">
                        ID No.
                    </label>
                    <input type="number" className="fullID" />
                    <label htmlFor="pass">
                    Password    
                    </label>
                    <input type="text" className="password" /> 
                </form>
                
            </div>
            <div className="finalBtn">
                    <Link to={'/home'}>Take me there</Link>
            </div>
        </div>
       </div>
        </>
    );
};

export default Login;
