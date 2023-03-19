import React, { useContext, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../context/auth-context";
import axios from "axios";

const Login = () => {
  // const { login } = useContext(AuthContext);

  const history = useNavigate();
  const [errors, setErrors] = useState({});
  const [isAccurate, setisAccurate] = useState(false);
  const [change, setChange] = useState(false);
  const [user, setUserValues] = useState({
    userid: "",
    userPassword: "",
  });
  const passwordRegex =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  const idRegex = /^\d{8}$/;
  const { userid, userPassword } = user;
  const inputs = { userid, userPassword };

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
      case "userid":
        errors.userid = !idRegex.test(value) ? "Invalid ID" : "";
        !idRegex.test(value) ? setisAccurate(false) : setisAccurate(true);
        break;
      default:
        break;
    }
  }
  const HandleLogin = async (e) => {
    e.preventDefault();
    if (isAccurate) {
      await axios
        .post("/api/auth/login", inputs)
        .then((res) => {
          const data = res.data;
          localStorage.setItem("user", JSON.stringify(data));
          history("/home");
        })
        .catch((err) => {
          console.log(err);
        });
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
            <form onSubmit={HandleLogin}>
              <span className="login">Log-In</span>

              <div className="idinput">
                <input
                  name="userid"
                  type="number"
                  className="fullID"
                  placeholder="Input ID!"
                  onChange={handleChange}
                />
                <span>{errors.userid}</span>
              </div>
              <div className="passinput">
                <input
                  name="userPassword"
                  type="password"
                  placeholder="Input passcode!"
                  className="fullID"
                  onChange={handleChange}
                />
                <span>{errors.userPassword}</span>
              </div>
              <div className="form-btn">
                <button className="btn btn-danger" type="submit">
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
