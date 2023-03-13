import React, { useContext, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../context/auth-context";

const Login = () => {
  const [userid, setUserID] = useState("");
  const [userPassword, setUserPasscode] = useState("");
  const [change, setChange] = useState(false);

  const inputs = { userid, userPassword };

  const { login } = useContext(AuthContext);
  const history = useNavigate();

  const checkUser = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      history("/home");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let newClass = document.querySelector(".dropdown");
    let drop = document.querySelector(".drop");
    if (change) {
      newClass.classList.add("newDrop");
      drop.innerHTML = "Close";
    } else {
      drop.innerHTML = "Sign-up";
      newClass.classList.remove("newDrop");
    }
  }, [change]);

  return (
    <>
      <div className="bigcontainer">
        <div className="mainlog">
          <div className="conner">
            <img
              src="https://cdn.modernghana.com/story_/400/250/818201662154_142961407894lancasteruniversityghana.png"
              alt="lancaster"
            />
            <h2>Lancaster Fastconnect</h2>
          </div>
          <div className="pageAbout">
            <div className="welMess">
              <span>Welcome to the</span>
              <span>Lancaster University Intranet media</span>
              <span>Effective for Communication and Management </span>
              <span>&&</span>
              <span>
                Where all the <b className="mystery">Mystery Lies</b>
              </span>
            </div>
          </div>
          <div className="loginform">
            <form>
              <span className="login">Log-In</span>

              <div className="idinput">
                <input
                  type="number"
                  className="fullID"
                  placeholder="Input ID!"
                  onChange={(e) => {
                    setUserID(e.target.value);
                  }}
                />
              </div>
              <div className="passinput">
                <input
                  type="password"
                  placeholder="Input passcode!"
                  className="fullID"
                  onChange={(e) => {
                    setUserPasscode(e.target.value);
                  }}
                />
              </div>
              <div className="form-btn">
                <button className="finalBtn" onClick={checkUser}>
                  Let's Go!
                </button>
              </div>
            </form>
            <div className="signUp">
              <div>
                <span>First time to Lancaster Fastconnect? </span>
                <button className="drop" onClick={() => setChange(!change)}>
                  Sign-up
                </button>
              </div>
              <div className="dropdown">
                <div className="dropcontent">
                  <Link to={"/stulogin"} className="studrop">
                    as a Student
                  </Link>
                  <Link to={"/stalogin"} className="stadrop">
                    as a Staff
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
