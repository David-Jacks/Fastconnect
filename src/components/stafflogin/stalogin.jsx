import React from "react";
import "./stalogin.css";

const Stalogin = () =>{
    return(
        <>
        <div className="stafflog">
            <div className="staWrapper">
            <form action="submit" className="staloginfill">
                        <label htmlFor="id">
                            Staff. ID
                        </label>
                        <input type="number" className="staidinput"/>
                        <label htmlFor="fname">
                            First name
                        </label>
                        <input type="text" className="stafname"/>
                        <label htmlFor="stalname">
                            Last name
                        </label>
                        <input type="text" className="stalname"/>
                        <label htmlFor="department">
                            Department
                        </label>
                        <input type="text" className="departinput"/>
                        <label htmlFor="stagender">Gender</label>
                        <select name="stagender" id="stagen">
                            <option value="Male">Male</option>
                            <option value="Female">Femal</option>
                        </select>
                        <label htmlFor="stahobby">
                            Interests or Hobby
                        </label>
                        <select name="stahobby" id="stahob">
                            <option value="reading">Reading</option>
                            <option value="basketball">Basketball</option>
                            <option value="shopping">Shopping</option>
                            <option value="singing">Singing</option>
                            <option value="learning new languaages">Learning New Languages</option>
                            <option value="playing instrument">Playing instruments</option>
                            <option value="Listening to music">Listening to music</option>
                            <option value="Dancing">Dancing</option>
                        </select>
                        <button type="submit" id="staformsubmit">Join_community</button>
                    </form>

            </div>
        </div>
        </>
    );
}


export default Stalogin;