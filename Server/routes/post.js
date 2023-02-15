const Router = require("express").Router();
const connection = require("../mydata");
const multer = require("multer");

const { getPost, addPost } = require("../controllers/post");


//getting post from the database

    Router.get("/", getPost);


    Router.post("/post", addPost);




  
//event post route
Router.post("/postevent", async (req, res) =>{
    const post = req.body;

    res.json(post); 
   //  res.redirect(303, "")
})

//video post route
Router.post("/postvid", async (req, res) =>{
    const post = req.body;

    res.json(post); 
   //  res.redirect(303, "")
})

module.exports = Router;