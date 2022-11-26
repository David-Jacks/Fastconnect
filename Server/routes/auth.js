const myauthRouter = require("express").Router();
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



module.exports = myauthRouter;

