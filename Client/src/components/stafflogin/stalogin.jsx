import React from "react";
import "./stalogin.css";
import { Link } from "react-router-dom";

const Stalogin = () =>{
    return(
        <>
        <div className="stafflog">
            <div className="staWrapper">
            <form action="submit" className="staloginfill">
                        <div>       
                        <label htmlFor="id">
                            Staff. ID
                        </label>
                        <input type="number" className="staidinput"/>
                        </div>
                        <div><label htmlFor="fname">
                            First name
                        </label>
                        <input type="text" className="stafname"/>
                        </div>
                        <div><label htmlFor="stalname">
                            Last name
                        </label>
                        <input type="text" className="stalname"/>
                        </div>
                        <div><label htmlFor="stalname">
                            Password
                        </label>
                        <input type="password" className="stalname"/>
                        </div>
                        <div><label htmlFor="stalname">
                            Confirm Password
                        </label>
                        <input type="password" className="stalname"/>
                        </div>
                        <div><label htmlFor="stalname">
                            Email
                        </label>
                        <input type="email" className="stalname"/>
                        </div>
                        <div><label htmlFor="stalname">
                            Date of Birth
                        </label>
                        <input type="date" className="stalname"/>
                        </div>
                        <div>
                            <label htmlFor="department">
                            Department
                        </label>
                        <input type="text" className="departinput"/>
                        </div>
                        <div><label htmlFor="stagender">Gender</label>
                        <select name="stagender" id="stagen">
                            <option value="Male">Male</option>
                            <option value="Female">Femal</option>
                        </select>
                        </div>
                        
                        <Link id="staformsubmit" to={"/home"}>Join_community</Link>
                    </form>

            </div>
        </div>
        </>
    );
}


export default Stalogin;