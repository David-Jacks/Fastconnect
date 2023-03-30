import React from "react";
import "./person.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import axios from "axios";

function Person() {
  const handleLogout = async () => {
    axios
      .post("api/auth/logout")
      .then((res) => {
        if (res) {
          localStorage.removeItem("user");
          window.location.reload(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="person">
      <div className="person-wrapper">
        <div className="images">
          <img src="./assets/new.jpeg" alt="" className="cover" />
          <img src="./assets/final.png" alt="" className="profilepic" />
        </div>
        <div className="about-style">
          <div className="profile-container">
            <div className="user-info">
              <div className="user-handles">
                <a href="{}">
                  @facebook <BsFacebook />
                </a>
                <a href="{}">
                  @LinkedIn <FaLinkedinIn />
                </a>
                <a href="{}">
                  @Instagram <BsInstagram />
                </a>
                <a href="{}">
                  @SpanChat <BsInstagram />
                </a>
                <a href="{}">
                  @Instagram <BsInstagram />
                </a>
              </div>
              <span className="person-name">David Jackson</span>
              <div className="abt">
                <span>Studying:</span>
                <span>Computer Science</span>
                <span>Level:</span>
                <span>Foundation</span>
              </div>
            </div>
          </div>
          <div className="abt-user">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, labore. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vitae totam molestias nostrum cum, laboriosam
              quibusdam fugit doloribus aperiam ratione suscipit doloremque eos?
            </p>
          </div>
          <button
            className="log-out"
            onClick={() => {
              handleLogout();
            }}
          >
            log-out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Person;
