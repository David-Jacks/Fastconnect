const myAuthRouter = require("express").Router();



// myAuthRouter.get("/", async(req, res) => {
//     const stu = await Students.findAll();
//     res.json(stu);
// });


myAuthRouter.post("/sendStaff", async(req, res) => {
    const stasend = req.body;
    await Staff.create(stasend);
    res.json(stasend);
});


module.exports = myAuthRouter;

