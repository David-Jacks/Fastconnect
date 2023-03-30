const Router = require("express").Router();
const path = require("path");
const multer = require("multer");
const { getPost, addPost } = require("../controllers/post");

Router.get("/", getPost);

Router.post("/post", addPost);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Client/public/upload");
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

module.exports = Router;
