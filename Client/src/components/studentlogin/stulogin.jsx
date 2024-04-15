import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./stulogin.css";
import axios from "axios";
import { AuthContext } from "../../context/auth-context";
import { auth } from "../../config/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { usersDataEntity } from "../../db_entities";
import {addDoc} from "firebase/firestore"

const Stulogin = () => {
  const { login } = useContext(AuthContext);
  // const usersData = collection(db, "Users");
  const history = useNavigate();
  //i will have to change the state fnctions later
  const [errors, setErrors] = useState({});
  const [isAccurate, setisAccurate] = useState(false);
  const [user, setUserValues] = useState({
    firstName: "",
    lastName: "",
    userPassword: "",
    passconfirm: "",
    userEmail: "",
    userDOB: "",
    programme: "",
    stulevel: "",
  });

  const passwordRegex =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  const idRegex = /^\d{8}$/;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const userName = user.firstName + " " + user.lastName;

  const formData = {
    userName,
    userPassword: user.userPassword,
    userEmail: user.userEmail,
    userDOB: user.userDOB,
    stulevel: user.stulevel,
    programme: user.programme,
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
      case "passconfirm":
        errorsCopy.passconfirm =
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

  console.log(isAccurate);
  const sendFormData = async (e) => {
    e.preventDefault();
    if (isAccurate) {
      await axios
        .post("/api/auth/addstu", formData)
        .then((res) => {
          signInUser();
          history("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("invalid form data");
    }
  };

  // destructing the user object
  // const {userEmail, userPassword} = user;
  // const input = {userEmail, userPassword};
  const signInUser = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formData.userEmail, formData.userPassword).then((res)=>{
        console.log(res);
        history("/home");
      })
      const response = isAccurate ? await addDoc(usersDataEntity, formData): "";
      console.log(response)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="studentlog">
        <div className="stuWrapper">
          <h3>REGISTER</h3>
          <form className="stuloginfill" onSubmit={signInUser}>
            <div className="first-part">
              <div className="error-contain">
                <div className="div">
                  <input
                    name="firstName"
                    placeholder=""
                    type="text"
                    className="fnameinput"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="student-fn"> Firstname</label>
                </div>
                <span>{}</span>
              </div>
              <div className="error-contain">
                <div className="div">
                  <input
                    name="lastName"
                    placeholder=""
                    type="text"
                    className="lnameinput"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="student-ln">Lastname</label>
                </div>
                <span>{}</span>
              </div>
            </div>
            <div className="second-part">
              <div className="error-contain">
                <div className="div">
                  <input
                    name="userPassword"
                    placeholder=" "
                    type="password"
                    className="stupass"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="student-pass">Password</label>
                </div>
                <span>{errors.userPassword}</span>
              </div>
              <div className="error-contain">
                <div className="div">
                  <input
                    name="passconfirm"
                    placeholder=" "
                    type="password"
                    className="stupasscon"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="stu-pass-con">Confirm Password</label>
                </div>
                <span>{errors.passconfirm}</span>
              </div>
            </div>
            <div className="third-part">
              <div className="error-contain">
                <div className="div">
                  <input
                    name="userEmail"
                    placeholder=" "
                    type="email"
                    className="mail"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="stu-email">Email</label>
                </div>
                <span>{errors.userEmail}</span>
              </div>
              <div className="date-div">
                <label htmlFor="stuDOB">Date of Birth</label>
                <input
                  name="userDOB"
                  type="date"
                  className="userDOB"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="fourth">
              <div className="other-div">
                <select
                  name="programme"
                  className="programmeinput"
                  onChange={handleChange}
                >
                  <option value="">Programme</option>
                  <option value="Accounting and Finance">
                    Accounting and Finance
                  </option>
                  <option value="Business Management">
                    Business Management
                  </option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Economics and International Relations">
                    Economics and International Relations
                  </option>
                  <option value="English Proficiency">
                    English Proficiency
                  </option>
                  <option value="Executive MBA">Executive MBA</option>
                  <option value="Foundation Programme">
                    Foundation Programme
                  </option>
                  <option value="Law LLB Hons">Law LLB Hons</option>
                  <option value="Marketing BSc Hons">Marketing BSc Hons</option>
                  <option value="Politics and International Relations">
                    Politics and International Relations
                  </option>
                </select>
              </div>
              <div className="other-div">
                <select
                  name="stulevel"
                  id="levelselect"
                  onChange={handleChange}
                >
                  <option value="">select level</option>
                  <option value="foundation">Foundation</option>
                  <option value="1st year">1st Year</option>
                  <option value="2nd year">2nd Year</option>
                  <option value="3rd year">3rd Year</option>
                </select>
              </div>
            </div>
            <button id="stuformsubmit" type="submit" >
              Join_Community
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Stulogin;
