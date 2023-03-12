const Router = require("express").Router();
const multer = require("multer");
const path = require("path");

const { getPost, addPost, addVid, getVid } = require("../controllers/post");

Router.get("/", getPost);

//dealing with image
Router.post("/post", addPost);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

Router.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

//dealing with videos
Router.post("/vid", addVid);

Router.get("/vid", getVid);

const vidstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/video");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const vidupload = multer({ storage: vidstorage });

//this is the rout to put upload and store the video into the video folder in my server on my diskStorage
Router.post("/vidupload", vidupload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

//event post route
// Router.post("/postevent", async (req, res) =>{
//     const post = req.body;

//     res.json(post);
//    //  res.redirect(303, "")
// })

// //video post route
// Router.post("/postvid", async (req, res) =>{
//     const post = req.body;

//     res.json(post);
//    //  res.redirect(303, "")
// })

module.exports = Router;
