const Router = require("express").Router();
const { addVid, getVid } = require("../controllers/post");
const path = require("path");
const multer = require("multer");

Router.get("/", getVid);

Router.post("/vid", addVid);

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
  res.status(201).json(file.filename);
});
module.exports = Router;
