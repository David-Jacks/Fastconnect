import React from "react";
import {useState} from "react";
import "./stulogin.css";
import {Link} from "react-router-dom";
const Stulogin = () =>{

    const [stuID, setStuID] = useState(""); 
    const [firstName, setFirstName] = useState(""); 
    const [LastName, setLastName] = useState(""); 
    const [password, setPassword] = useState(""); 

    return(
        <>
        <div className="studentlog">
            <div className="stuWrapper">
                <form action="submit" className="stuloginfill">
                    <div>
                         <label htmlFor="id">
                            Stu. ID
                        </label> 
                        <input type="number" className="stuidinput" onChange={() => setStuID(document.querySelector(".stuidinput").value)}/>
                    </div>
                       <div> 
                        <label htmlFor="fname">
                            First name
                        </label> 
                        <input type="text" className="fnameinput" onChange={() => setFirstName(document.querySelector(".fnameinput").value)}/>
                        </div>
                       <div> 
                        <label htmlFor="lname">
                            Last name
                        </label> 
                        <input type="text" className="lnameinput" onChange={() => setLastName(document.querySelector(".lnameinput").value)}/>
                        </div>
                        <div> 
                        <label htmlFor="lname">
                            Password
                        </label> 
                        <input type="password" className="stupass" onChange={() => {setPassword(document.querySelector(".stupass").value)}}/>
                        </div>
                        <div> 
                        <label htmlFor="lname">
                            Confirm Password
                        </label> 
                        <input type="password" className="lnameinput"/>
                        </div>
                       <div> <label htmlFor="mail">
                            Email
                        </label>
                        <input type="email" className="mail"/>
                        </div>
                       <div> 
                        <label htmlFor="stuDOB">
                            Date of Birth
                        </label> 
                        <input type="date" className="studob"/>
                        </div>
                       <div> <label htmlFor="Programme">
                            Programme
                        </label> 
                        <input type="text" className="programmeinput"/>
                        </div>
                       <div> <label htmlFor="gender">Gender</label>
                        <select name="gender" id="stugen">
                            <option value="Male">Male</option>
                            <option value="Female">Femal</option>
                        </select>
                        </div>
                       <div> 
                        <label htmlFor="level">Institutional Level</label>
                        <select name="stu.level" id="levelselect">
                            <option value="foundation">Foundation</option>
                            <option value="1st year">1st Year</option>
                            <option value="2nd year">2nd Year</option>
                            <option value="3rd year">3rd Year</option>
                        </select>
                        </div>
                        <Link id="stuformsubmit" to={"/home"} onClick={() => {
                            console.log(password); 
                            console.log(firstName); 
                            console.log(LastName)
                            console.log(stuID)}}>Join_community</Link>
                    </form>

            </div>
        </div>
        </>
    );
}


export default Stulogin;