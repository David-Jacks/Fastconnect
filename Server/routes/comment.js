const myCommentRouter = require("express").Router();

const {Comments} = require("../models");

myCommentRouter.get("/", (req, res)=>{
    res.send("hello")
})

myCommentRouter.post("/comment", async (req, res) =>{
         const comment = req.body;
           await Comments.create(comment);
         res.json(comment)
})

module.exports = myCommentRouter;