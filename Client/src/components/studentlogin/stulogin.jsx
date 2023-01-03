import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import "./stulogin.css";
import axios from "axios";
const Stulogin = () =>{

    const [stuID, setStuID] = useState(""); 
    const [firstName, setFirstName] = useState(""); 
    const [LastName, setLastName] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [passconfirm, setPassconfirm] = useState(""); 
    const [stuemail, setstuEmail] = useState("");
    const [studob, setstuDOB] = useState("");
    const [programme, setProgramme] = useState("");
    const [stugender, setstuGender] = useState("");
    const [stulevel, setstuLevel] = useState("");

// const sendFormData = () =>{
//     axios.post("http://localhost:8080/api/auth/sendStudent").then((response)=>{

//             console.log(response);
            
//         })
// }

    return(
        <>
        <div className="studentlog">
            <div className="stuWrapper">
                <form action="submit" className="stuloginfill" method="POST">
                    <div>
                         <label htmlFor="id">
                            Stu. ID
                        </label> 
                        <input name="ID" type="number" className="stuidinput" onChange={(e) => setStuID(e.target.value)}/>
                    </div>
                       <div> 
                        <label htmlFor="fname">
                            First name
                        </label> 
                        <input name="FN" type="text" className="fnameinput" onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                       <div> 
                        <label htmlFor="lname">
                            Last name
                        </label> 
                        <input name="LN" type="text" className="lnameinput" onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div> 
                        <label htmlFor="lname">
                            Password
                        </label> 
                        <input name="PCODE" type="password" className="stupass" onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>
                        <div> 
                        <label htmlFor="lname">
                            Confirm Password
                        </label> 
                        <input name="PCODEC" type="password" className="stupasscon" onChange={(e) => {setPassconfirm(e.target.value)}}/>
                        </div>
                       <div> <label htmlFor="mail">
                            Email
                        </label>
                        <input name="MAIL" type="email" className="mail" onChange={(e) => {setstuEmail(e.target.value)}}/>
                        </div>
                       <div> 
                        <label htmlFor="stuDOB">
                            Date of Birth
                        </label> 
                        <input name="DOB" type="date" className="studob"onChange={(e) => {setstuDOB(e.target.value)}}/>
                        </div>
                       <div> 
                        <label htmlFor="Programme">
                            Programme
                        </label> 
                        <input name="PRO" type="text" className="programmeinput" onChange={(e) => {setProgramme(e.target.value)}}/>
                        </div>
                       <div> <label htmlFor="gender">Gender</label>
                        <select name="GENDER" id="stugen" onChange={(e) => {setstuGender(e.target.value)}}>
                            <option value="Male">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Femal</option>
                        </select>
                        </div>
                       <div> 
                        <label htmlFor="level">Institutional Level</label>
                        <select name="LEVEL" id="levelselect"  onChange={(e) => {setstuLevel(e.target.value)}}>
                            <option value="foundation">select level</option>
                            <option value="foundation">Foundation</option>
                            <option value="1st year">1st Year</option>
                            <option value="2nd year">2nd Year</option>
                            <option value="3rd year">3rd Year</option>
                        </select>
                        </div>
                        <Link id="stuformsubmit"/*to={"/home"}*/ onClick={{/*sendFormData*/}}>Join_community</Link>
                    </form>

            </div>
        </div>
        </>
    );
}


export default Stulogin;