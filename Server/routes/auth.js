const myauthRouter = require("express").Router();

myauthRouter.get("/", (req, res) => {
    res.send("welcome to the homepage i am new");
});

myauthRouter.get("/stalogin", (req, res) => {
    res.send("welcome to the staff login page i am new");
});

myauthRouter.get("/stulogin", (req, res) => {
    res.send("welcome to the student login page i am new");
})


module.exports = myauthRouter;

