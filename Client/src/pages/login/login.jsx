import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userid, setUserID] = useState("");
  const [userpassword, setUserPasscode] = useState("");
  const [log, setLog] = useState(false);

  const userData = { userid, userpassword };

  const history = useNavigate();

  const checkUser = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/check", userData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const token = res.data.token;
          localStorage.setItem("token", token);
          history("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bigcontainer">
        <div className="loginheader">
          <span>First Time to LancasterFastConnect? </span>
          <div className="dropdown">
            <button className="drop" onClick={() => setLog(!log)}>
              Sign up
            </button>
            {log ? (
              <div className="dropcontent">
                <Link to={"/stulogin"} className="studrop">
                  Student
                </Link>
                <Link to={"/stalogin"} className="stadrop">
                  Staff
                </Link>
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
        <div className="mainlog">
          <div className="profilecontainer">
            <img
              src="https://cdn.modernghana.com/story_/400/250/818201662154_142961407894lancasteruniversityghana.png"
              alt="lancaster"
            />
            <h2>Lancaster Fastconnect</h2>
          </div>
          <div className="animate">
            <span>An effective way for Communication and Management </span>
          </div>
          <div className="loginform">
            <form action="" method="POST">
              <label htmlFor="Idno">ID No.</label>
              <input
                type="number"
                className="fullID"
                onChange={(e) => {
                  setUserID(e.target.value);
                }}
              />
              <label htmlFor="pass">Password</label>
              <input
                type="text"
                className="fullID"
                onChange={(e) => {
                  setUserPasscode(e.target.value);
                }}
              />
            </form>
            <div className="finalBtn">
              <Link onClick={checkUser}>Let's Go!</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
