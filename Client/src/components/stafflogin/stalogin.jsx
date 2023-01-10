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
        <div  className="stafflog">
            <div className="staWrapper">
            <form className="staloginfill" method="POST">
                        <div>       
                        <input name ="ID" type="number" placeholder="Staff. ID"  className="staidinput" onChange={(e)=>{setStaffID(e.target.value)}}/>
                        </div>
                        <div>
                        <input name ="FN" type="text" placeholder="First name"  className="stafname" onChange={(e)=>{setFirstName(e.target.value)}}/>
                        </div>
                        <div>
                        <input name ="LN" type="text" placeholder=" Last name"  className="stalname" onChange={(e) =>{setLastName(e.target.value)}}/>
                        </div>
                        <div>
                        <input name ="PCODE" type="password" placeholder="Password"  className="stalpasscode" onChange={(e) =>{setPasscode(e.target.value)}}/>
                        </div>
                        <div>
                        <input name ="PCODEC" type="password" placeholder=" Confirm Password"  className="stalpassconfirm" onChange={(e) =>{setPasscon(e.target.value)}}/>
                        </div>
                        <div>
                        <input name ="MAIL" type="email" placeholder="Email"  className="stalemail" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div><label htmlFor="stalname">
                            Date of Birth
                        </label>
                        <input name ="DOB" type="date" placeholder="Date of Birth"  className="staldob" onChange={(e)=>{setDOB(e.target.value)}}/>
                        </div>
                        <div>
                        <input name ="DEPT" type="text" placeholder="Department"  className="departinput" onChange={(e)=>{setDepartment(e.target.value)}}/>
                        </div>
                        <div>
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