const myAuthRouter = require("express").Router();
const {Students} = require("../models");
const {Staff} = require("../models");

// myAuthRouter.get("/", async(req, res) => {
//     const stu = await Students.findAll();
//     res.json(stu);
// });

myAuthRouter.post("/sendStudent", async(req, res) => {
    const stusend = req.body;
    await Students.create(stusend);
    res.json(stusend);
});
//trying to send the data to the mysql database
// db.query("studentId, firstname,lastname,password,email,dateofbirth,programme,gender,level",Value () );

myAuthRouter.post("/sendStaff", async(req, res) => {
    const stasend = req.body;
    await Staff.create(stasend);
    res.json(stasend);
});


module.exports = myAuthRouter;

