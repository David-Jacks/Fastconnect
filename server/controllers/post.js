const db = require("../mydata");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const getPost = (req, res) => {
  //taking everything from the post table and some rows in the user table
  const syntax = `SELECT p.*, u.userid as userid, userName, userProfile FROM post AS p JOIN users AS u ON (u.userid = p.userid) ORDER BY p.created_at DESC`;

  db.query(syntax, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data) {
      return res.status(200).json(data);
    }
  });
};

const getVid = (req, res) => {
  //taking everything from the video table and some rows in the user table
  const syntax = `SELECT v.*, u.userid as userid, userName, userProfile FROM video AS v JOIN users AS u ON (u.userid = v.userid) ORDER BY v.created_at DESC`;

  db.query(syntax, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data) {
      return res.status(200).json(data);
    }
  });
};

const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(403).json("user not logged in");
  }

  jwt.verify(token, "fastConnect.com", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const syntax = "INSERT INTO post SET ?";
    const values = {
      imgAbout: req.body.imgAbout,
      img: req.body.img,
      userid: userInfo.id,
      created_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    };
    db.query(syntax, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json("post data inserted successfully");
    });
  });
};
const addVid = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(403).json("user not logged in");
  }

  jwt.verify(token, "fastConnect.com", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const syntax = "INSERT INTO video SET ?";
    const values = {
      vidAbout: req.body.vidAbout,
      vid: req.body.vid,
      userid: userInfo.id,
      created_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    };
    db.query(syntax, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json("post data inserted successfully");
    });
  });
};

module.exports = {
  getPost,
  addPost,
  addVid,
  getVid,
};
