const myauthRouter = require("express").Router();
const db = require("../models");
const {Students} = require("../models");

myauthRouter.get("/", async(req, res) => {
    const stu = await Students.findAll();
    res.json(stu);
});

myauthRouter.post("/sendStudent", async(req, res) => {
    const stusend = req.body;
    await Students.create(stusend);
    res.json(stusend);
});
//trying to send the data to the mysql database
// db.query("studentId, firstname,lastname,password,email,dateofbirth,programme,gender,level",Value () );



module.exports = myauthRouter;

