const Router = require("express").Router();

const {
  stuRegister,
  staRegister,
  login,
  logout,
} = require("../controllers/auth");

Router.post("/addstu", stuRegister);

Router.post("/addstaff", staRegister);

Router.post("/login", login);

Router.post("/logout", logout);

module.exports = Router;
