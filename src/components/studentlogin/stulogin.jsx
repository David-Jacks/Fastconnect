import React from "react";
import "./stulogin.css";

const Stulogin = () =>{
    return(
        <>
        <div className="studentlog">
            <div className="stuWrapper">
                <form action="submit" className="stuloginfill">
                        <label htmlFor="id">
                            Stu. ID
                        </label>
                        <input type="number" className="stuidinput"/>
                        <label htmlFor="fname">
                            First name
                        </label>
                        <input type="text" className="fnameinput"/>
                        <label htmlFor="lname">
                            Last name
                        </label>
                        <input type="text" className="lnameinput"/>
                        <label htmlFor="course">
                            Course
                        </label>
                        <input type="text" className="courseinput"/>
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="stugen">
                            <option value="Male">Male</option>
                            <option value="Female">Femal</option>
                        </select>
                        <label htmlFor="stuhobby">
                            Interests or Hobby
                        </label>
                        <select name="hobby" id="stuhob">
                            <option value="reading">Reading</option>
                            <option value="basketball">Basketball</option>
                            <option value="shopping">Shopping</option>
                            <option value="singing">Singing</option>
                            <option value="learning new languaages">Learning New Languages</option>
                            <option value="playing instrument">Playing instruments</option>
                            <option value="Listening to music">Listening to music</option>
                            <option value="Dancing">Dancing</option>
                        </select>
                        <label htmlFor="level">Institutional Level</label>
                        <select name="stu.level" id="levelselect">
                            <option value="foundation">Foundation</option>
                            <option value="1st year">1st Year</option>
                            <option value="2nd year">2nd Year</option>
                            <option value="3rd year">3rd Year</option>
                        </select>
                        <button type="submit" id="formsubmit">Join_community</button>
                    </form>

            </div>
        </div>
        </>
    );
}


export default Stulogin;