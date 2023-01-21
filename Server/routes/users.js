const connection = require("../mydata");
const myUsersRouter = require("express").Router();

myUsersRouter.post("/sendStudent", async (req, res) => {
  try {
    const data = req.body;
    connection.query("INSERT INTO students SET ?", data, function (err, result) {
    if (err) {
        console.log("An error occurred: " + err);
        res.status(400).send(err);
        return;
    }

    res.status(201).send("Data inserted successfully!");
    });
} catch (error) {
    res.status(400).send(error);
}
});





   
module.exports = myUsersRouter;

