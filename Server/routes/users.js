const myUsersRouter = require("express").Router();

myUsersRouter.get("/user", (req, res) => {
    res.send("welcome to the homepage i am new");
})

module.exports = myUsersRouter;

