import React, { useContext } from "react";
import "./stalogin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth-context";

const Stalogin = () => {
  const { login } = useContext(AuthContext);
  const history = useNavigate();

  const [errors, setErrors] = useState({});
  const [isAccurate, setisAccurate] = useState(false);
  const [user, setUserValues] = useState({
    firstName: "",
    lastName: "",
    userid: "",
    userPassword: "",
    passcon: "",
    userEmail: "",
    userDOB: "",
    userGender: "",
    Department: "",
  });

  const passwordRegex =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  const idRegex = /^\d{8}$/;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const userName = user.firstName + " " + user.lastName;
  const staffData = {
    userid: user.userid,
    userName,
    userPassword: user.userPassword,
    userEmail: user.userEmail,
    userDOB: user.userDOB,
    userGender: user.userGender,
    Department: user.Department,
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setUserValues({ ...user, [name]: value });
    const errorsCopy = { ...errors };

    switch (name) {
      case "userPassword":
        errorsCopy.userPassword = !passwordRegex.test(value)
          ? "password should have a special character, lowercase, number,  uppercase, and be between 7 and 21 charcters"
          : "";
        !passwordRegex.test(value) ? setisAccurate(false) : setisAccurate(true);
        break;
      case "userid":
        errorsCopy.userid = !idRegex.test(value) ? "Invalid ID" : "";
        !idRegex.test(value) ? setisAccurate(false) : setisAccurate(true);
        break;
      case "passcon":
        errorsCopy.passcon =
          value !== user.userPassword ? "password mismatch" : "";
        value !== user.userPassword
          ? setisAccurate(false)
          : setisAccurate(true);
        break;
      case "userEmail":
        errorsCopy.userEmail = !emailRegex.test(value) ? "Invalid email" : "";
        !emailRegex.test(value) ? setisAccurate(false) : setisAccurate(true);
        break;
      default:
        break;
    }
    setErrors(errorsCopy);
  }
  // login in the user automatically after sign-up

  const sendStaffData = async (e) => {
    e.preventDefault();

    if (isAccurate) {
      await axios
        .post("/api/auth/addstaff", staffData)
        .then((res) => {
          HandleLogin();
          history("/home");
        })
        .catch((err) => console.log(err));
    } else {
      console.log("invalid form data");
    }
  };
  // trying to make sure these recently signed in user will get the needed data in the local storage
  const { userid, userPassword } = user;
  const inputs = { userid, userPassword };
  const HandleLogin = async () => {
    try {
      await login(inputs);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="stafflog">
        <div className="staWrapper">
          <h3>REGISTER</h3>
          <form className="staloginfill" onSubmit={sendStaffData}>
            <div className="error-log">
              <div className="my-div">
                <input
                  name="userid"
                  type="number"
                  placeholder=" "
                  className="staidinput"
                  onChange={handleChange}
                />
                <label htmlFor="">Input ID</label>
              </div>
              <span>{errors.userid}</span>
            </div>

            <div className="first-log">
              <div className="error-log">
                <div className="my-div">
                  <input
                    name="firstName"
                    type="text"
                    placeholder=" "
                    className="stafname"
                    onChange={handleChange}
                  />
                  <label htmlFor="">Firstname</label>
                </div>
                <span>{errors.firstName}</span>
              </div>
              <div className="error-log">
                <div className="my-div">
                  <input
                    name="lastName"
                    type="text"
                    placeholder=" "
                    className="stalname"
                    onChange={handleChange}
                  />
                  <label htmlFor="">Lastname</label>
                </div>
                <span>{errors.lastName}</span>
              </div>
            </div>
            <div className="second-log">
              <div className="error-log">
                <div className="my-div">
                  <input
                    name="userPassword"
                    type="password"
                    placeholder=" "
                    className="stalpasscode"
                    onChange={handleChange}
                  />
                  <label htmlFor="">Password</label>
                </div>
                <span>{errors.userPassword}</span>
              </div>
              <div className="error-log">
                <div className="my-div">
                  <input
                    name="passcon"
                    type="password"
                    placeholder=" "
                    className="stalpassconfirm"
                    onChange={handleChange}
                  />
                  <label htmlFor="">Confirm Password</label>
                </div>
                <span>{errors.passcon}</span>
              </div>
            </div>
            <div className="third-log">
              <div className="error-log">
                <div className="my-div">
                  <input
                    name="userEmail"
                    type="email"
                    placeholder=" "
                    className="stalemail"
                    onChange={handleChange}
                  />
                  <label htmlFor="">Email</label>
                </div>
                <span>{errors.userEmail}</span>
              </div>
              <div className="my-date-div">
                <label htmlFor="">Date of Birth</label>
                <input
                  name="userDOB"
                  type="date"
                  className="staldob"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="fourth-log">
              <div className="other-div">
                <select name="Department" id="depart" onChange={handleChange}>
                  <option value="">Department</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Female">Female</option>
                  <option value="Female">Female</option>
                  <option value="Female">Female</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="other-div">
                <select name="userGender" id="stagen" onChange={handleChange}>
                  <option value="Male">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <button id="staformsubmit" type="submit" onClick={()=>{history("/home")}}>
              Join_community
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Stalogin;
