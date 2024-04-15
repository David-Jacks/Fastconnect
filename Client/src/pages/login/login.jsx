import React, { useContext, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { auth, googleAuth } from "../../config/firebase";
import {signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isAccurate, setisAccurate] = useState(false);
  const [change, setChange] = useState(false);
  const [user, setUserValues] = useState({
    userEmail: "",
    userPassword: "",
  });
  const passwordRegex =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const { userEmail, userPassword } = user;
  const inputs = { userEmail, userPassword };

  function handleChange(e) {
    const { name, value } = e.target;
    setUserValues({ ...user, [name]: value });

    switch (name) {
      case "userPassword":
        errors.userPassword = !passwordRegex.test(value)
          ? "password should have a special character, lowercase, number,  uppercase, and be between 7 and 21 charcters"
          : "";
        !passwordRegex.test(value) ? setisAccurate(false) : setisAccurate(true);
        break;
      case "userEmail":
        errors.userEmail = !emailRegex.test(value) ? "Invalid email" : "";
        !emailRegex.test(value) ? setisAccurate(false) : setisAccurate(true);
        break;
      default:
        break;
    }
  }
  const HandleLogin = async (e) => {
    e.preventDefault();
    if (isAccurate) {
      await signInWithEmailAndPassword(auth, user.userEmail, user.userPassword)
        .then((res) => {
          console.log(res);
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const googleSignIn = async() =>{
      await signInWithPopup(auth, googleAuth).then((res) =>{
        navigate("/home");
      }).catch((err) =>{
        console.log(err);
      })
  }
  return (
    <>
      <div className="bigcontainer">
        <div className="mainlog">
          
          <div className="pageAbout">
            <div className="welMess">
              <span>Welcome to </span>
              <span>LANCASTER FASTCONNECT</span>
              <span>Effective for Communication and Management </span>
              <span>
                Where all the Mystery Lies
              </span>
            </div>
          </div>
          <div className="loginform">
            <form onSubmit={HandleLogin}>
              <span className="login">Log In</span>

              <div className="idinput">
                <input
                  name="userEmail"
                  type="email"
                  className="fullID"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <span className="err">{errors.userEmail}</span>
              <div className="passinput">
                <input
                  name="userPassword"
                  type="password"
                  placeholder="Password"
                  className="fullID"
                  onChange={handleChange}
                />
              </div>
              <span className="err">{errors.userPassword}</span>
              <div className="form-btn">
                <button className="btn btn-danger" type="submit" >
                  Let's Go!
                </button>
              </div>
            </form>
            <div className="signUp">
              <div className="dropdown">
                <Link to={"/stulogin"}>create account</Link> or sign up with <Link onClick={googleSignIn} >
                    google account
                  </Link>
                {/* <div className="dropcontent">

                  <Link to={"/stulogin"} className="studrop">
                    as a Student
                  </Link>
                  <Link to={"/stalogin"} className="stadrop">
                    as a Staff
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
