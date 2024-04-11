const connection = require("../mydata");
const Router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = "fastConnect.com";

function createToken(userid, role){
    const payload = {
        userid: userid,
        role: role
    };
    const token = jwt.sign(payload, secret);

    return token;
}

  function verifyToken(token){
    try{
            const decode = jwt.verify(token, secret);

            return decode;
    }catch(err){
            return null;
    }
}




   
module.exports = Router;

