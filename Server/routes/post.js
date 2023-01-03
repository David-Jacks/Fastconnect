const myPostRouter = require("express").Router();

const { Post} = require("../models");

    myPostRouter.get("/", async(req, res)=>{
        const listOfPost = await Post.findAll();
        res.json(listOfPost); 
});

    myPostRouter.post("/post", async (req, res) =>{
         const post = req.body;
          await Post.create(post);
         res.json(post); 
        //  res.redirect(303, "")
})

module.exports = myPostRouter;