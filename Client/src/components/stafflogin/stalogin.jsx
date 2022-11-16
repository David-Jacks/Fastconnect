import React from "react";
import "./stalogin.css";
import { Link } from "react-router-dom";
import {useState } from "react";

const Stalogin = () =>{
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [staffid, setStaffID] = useState("");
const [passcode, setPasscode] = useState("");
const [passcon, setPasscon] = useState("");
const [email, setEmail] = useState("");
const [dob, setDOB] = useState("");
const [department, setDepartment] = useState("");
const [gender, setGender] = useState("");



    return(
        <>
        <div className="stafflog">
            <div className="staWrapper">
            <form action="submit" className="staloginfill">
                        <div>       
                        <label htmlFor="id">
                            Staff. ID
                        </label>
                        <input type="number" className="staidinput" onChange={(e)=>{setStaffID(e.target.value)}}/>
                        </div>
                        <div><label htmlFor="fname">
                            First name
                        </label>
                        <input type="text" className="stafname" onChange={(e)=>{setFirstName(e.target.value)}}/>
                        </div>
                        <div><label htmlFor="stalname">
                            Last name
                        </label>
                        <input type="text" className="stalname" onChange={(e) =>{setLastName(e.target.value)}}/>
                        </div>
                        <div><label htmlFor="stalname">
                            Password
                        </label>
                        <input type="password" className="stalpasscode" onChange={(e) =>{setPasscode(e.target.value)}}/>
                        </div>
                        <div><label htmlFor="stalname">
                            Confirm Password
                        </label>
                        <input type="password" className="stalpassconfirm" onChange={(e) =>{setPasscon(e.target.value)}}/>
                        </div>
                        <div><label htmlFor="stalname">
                            Email
                        </label>
                        <input type="email" className="stalemail" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div><label htmlFor="stalname">
                            Date of Birth
                        </label>
                        <input type="date" className="staldob" onChange={(e)=>{setDOB(e.target.value)}}/>
                        </div>
                        <div>
                            <label htmlFor="department">
                            Department
                        </label>
                        <input type="text" className="departinput" onChange={(e)=>{setDepartment(e.target.value)}}/>
                        </div>
                        <div><label htmlFor="stagender">Gender</label>
                        <select name="stagender" id="stagen" onChange={(e)=>setGender(e.target.value)}>
                            <option value="Male">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Femal</option>
                        </select>
                        </div>
                        
                        <Link id="staformsubmit" /*</form>to={"/home"}*/ onClick={console.log(staffid, firstName, lastName, dob, passcon, gender, email, department, passcode)}>Join_community</Link>
                    </form>

            </div>
        </div>
        </>
    );
}


export default Stalogin;