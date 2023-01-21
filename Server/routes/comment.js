const myCommentRouter = require("express").Router();



myCommentRouter.get("/", (req, res)=>{
    res.send("hello")
})

myCommentRouter.post("/comment", async (req, res) =>{
         const comment = req.body;

         res.json(comment)
})

module.exports = myCommentRouter;