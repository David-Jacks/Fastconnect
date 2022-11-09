const myRouter = require("express").Router();

myRouter.get("/", (req, res) => {
    res.send("welcome to the homepage i am new");
})

module.exports = myRouter;

