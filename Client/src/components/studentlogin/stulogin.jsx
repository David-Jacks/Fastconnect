import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./stulogin.css";
import axios from "axios";

const Stulogin = () => {
  const navigate = useNavigate();
  //i will have to change the state fnctions later
  const [userid, setStuID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [passconfirm, setPassconfirm] = useState("");
  const [userEmail, setstuEmail] = useState("");
  const [userDOB, setstuDOB] = useState("");
  const [programme, setProgramme] = useState("");
  const [userGender, setstuGender] = useState("");
  const [stulevel, setstuLevel] = useState("");

  const userName = firstName + " " + lastName;

  const formData = {
    userid,
    userName,
    userPassword,
    userEmail,
    userDOB,
    userGender,
    stulevel,
    programme,
  };

  const sendFormData = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/users/addstu", formData)
      .then((res) => {
        console.log(res);
        if (res.status === 201 && passconfirm === userPassword) {
          navigate("/home");
        } else navigate("/Stulogin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="studentlog">
        <div className="stuWrapper">
          <form action="submit" className="stuloginfill">
            <div>
              <input
                name="ID"
                type="number"
                placeholder="Stu. ID"
                className="stuidinput"
                onChange={(e) => setStuID(e.target.value)}
              />
            </div>
            <div>
              <input
                name="FN"
                type="text"
                placeholder="First name"
                className="fnameinput"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <input
                name="LN"
                type="text"
                placeholder="Last name"
                className="lnameinput"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <input
                name="PCODE"
                type="userPassword"
                placeholder="Password"
                className="stupass"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                name="PCODEC"
                type="userPassword"
                placeholder="Confirm Password"
                className="stupasscon"
                onChange={(e) => {
                  setPassconfirm(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                name="MAIL"
                type="email"
                placeholder="Email"
                className="mail"
                onChange={(e) => {
                  setstuEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="stuDOB">Date of Birth</label>
              <input
                name="DOB"
                type="date"
                className="userDOB"
                onChange={(e) => {
                  setstuDOB(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                name="PRO"
                type="text"
                placeholder="Programme"
                className="programmeinput"
                onChange={(e) => {
                  setProgramme(e.target.value);
                }}
              />
            </div>
            <div>
              <select
                name="GENDER"
                id="stugen"
                onChange={(e) => {
                  setstuGender(e.target.value);
                }}
              >
                <option value="Male">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <select
                name="LEVEL"
                id="levelselect"
                onChange={(e) => {
                  setstuLevel(e.target.value);
                }}
              >
                <option value="foundation">select level</option>
                <option value="foundation">Foundation</option>
                <option value="1st year">1st Year</option>
                <option value="2nd year">2nd Year</option>
                <option value="3rd year">3rd Year</option>
              </select>
            </div>
            <Link id="stuformsubmit" onClick={sendFormData}>
              Join_community
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Stulogin;
