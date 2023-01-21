
const { Student } = require("../models")

const myUsersRouter = require("express").Router();

myUsersRouter.post("/sendStudent", async (req, res) => {
    try {
      const newStudent = await Student.create(req.body);
      res.status(201).send(newStudent);
    } catch (error) {
      res.status(400).send(error);
    }
  });


   
module.exports = myUsersRouter;

