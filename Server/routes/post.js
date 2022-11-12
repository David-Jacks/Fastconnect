const myPostRouter = require("express").Router();

const { Post} = require("../models");
myPostRouter.get("/", (req, res)=>{
    res.send("hello")
})

myPostRouter.post("/post", async (req, res) =>{
         const post = req.body;
           await Post.create(post);
         res.json(post)
})

module.exports = myPostRouter;