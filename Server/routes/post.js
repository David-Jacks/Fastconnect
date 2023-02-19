const Router = require("express").Router();
const multer = require("multer");


const { getPost, addPost } = require("../controllers/post");


//getting post from the database

    Router.get("/", getPost);


    Router.post("/post", addPost);
//dealing with image
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
          cb(null, "../client/public/upload")
        },
        filename: function (req, file, cb){
          cb(null, Date.now() + file.originalname);
        }
      })
      const upload = multer({storage: storage});

    Router.post("/upload", upload.single("file"), (req, res) => {
        const file = req.file;
        res.status(200).json(file.filename);
      });



  
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