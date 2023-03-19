const db = require("../mydata");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Registering a Student
const stuRegister = (req, res) => {
  //first check if user exist
  const syntax = "SELECT * FROM users WHERE userid = ?";

  db.query(syntax, [req.body.userid], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      if (results.length) {
        return res.status(409).json("user already exist");
      } else {
        //create a new user
        const data = {
          userid: req.body.userid,
          userPassword: req.body.userPassword,
          userEmail: req.body.userEmail,
          userName: req.body.userName,
          userDOB: req.body.userDOB,
          userGender: req.body.userGender,
        };
        const stu = {
          userID: req.body.userid,
          stulevel: req.body.stulevel,
          programme: req.body.programme,
        };
        const userid = data.userid;
        //hask the users password
        const hash = (pass) => {
          return bcrypt.hashSync(pass, 10);
        };
        const passencrypt = hash(data.userPassword);
        data.userPassword = passencrypt;

        //insert new user into the database
        db.query("INSERT INTO users SET ?", data, function (err, result) {
          if (err) {
            console.log("An error occurred: " + err);
          }
          if (result) {
            res.status(201).json("A student has been added");
          }
        });

        db.query("INSERT INTO students SET ?", stu, function (err, results) {
          if (err) {
            console.log("An error occurred: " + err);
          }
          if (results) {
            console.log("I added to student table");
          }
        });
      }
    }
  });
};

// Registering a Staff
const staRegister = (req, res) => {
  //first check if user exist
  const syntax = "SELECT * FROM users WHERE userid = ?";

  db.query(syntax, [req.body.userid], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      if (results.length) {
        return res.status(409).json("user already exist");
      } else {
        //create a new user
        const data = {
          userid: req.body.userid,
          userPassword: req.body.userPassword,
          userEmail: req.body.userEmail,
          userName: req.body.userName,
          userDOB: req.body.userDOB,
          userGender: req.body.userGender,
        };
        const sta = {
          userID: req.body.userid,
          Department: req.body.Department,
        };
        //hask the users password
        const hash = (pass) => {
          return bcrypt.hashSync(pass, 10);
        };
        const passencrypt = hash(data.userPassword);
        data.userPassword = passencrypt;

        //insert new user into the database
        db.query("INSERT INTO users SET ?", data, function (err, result) {
          if (err) console.log("An error occurred: " + err);

          if (result) {
            res.status(201).json("A staff has been added");
          }
        });

        db.query("INSERT INTO staffs SET ?", sta, function (err, results) {
          if (err) console.log("An error occurred: " + err);

          if (results) console.log("I added to staff table");
        });
      }
    }
  });
};

// Login in a user
const login = (req, res) => {
  if (!req.body.userid || !req.body.userPassword) {
    return res
      .status(400)
      .json({ error: "Bad request, userid and password are required" });
  }

  const userid = req.body.userid;
  const password = req.body.userPassword;

  const syntax = "SELECT * FROM users WHERE userid = ?";
  db.query(syntax, [userid], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (results.length === 0) {
      return res.status(401).json("user not found");
    }

    const hashedPassword = bcrypt.compareSync(
      password,
      results[0].userPassword
    );

    // checking if the password is equal to the already hashed password
    if (!hashedPassword) {
      return res.status(400).json("wrong password or username");
    }
    const token = jwt.sign({ id: userid }, "fastConnect.com", {
      expiresIn: "24h",
    });

    //removing password from what will be sent as response
    const { userPassword, ...others } = results[0];
    res
      .cookie("accessToken", token, {
        httpOnly: true, //make it accesible by only our url, and no other script can access the route
        sameSite: "strict",
      })
      .status(200)
      .json(others);
  });
};

const logout = (req, res) => {
  try {
    res.clearCookie("accessToken").status(200).json("user has been logged out");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  staRegister,
  stuRegister,
  login,
  logout,
};
