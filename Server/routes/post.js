const myPostRouter = require("express").Router();
const connection = require("../mydata");

const multer = require("multer");


//setting up storage to keep files on disk
const storage = multer.diskStorage({
  destination:  function (req, file, cb) {
    cb(null, "../public/assets");
      },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
});
const fileFilter =(req, file, cb) => {
if(file.mimeType === "image/jpeg" || file.mimeType === "image.png"){
      cd(null, true);
}else{
  cb (new Error("Unsupported files"), false)
}
}

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 1024*1024*10
  },
  fileFilter: fileFilter  
});


//getting post from the database

    myPostRouter.get("/getimg", async(req, res)=>{
        connection.query("SELECT * FROM imgpost", function (error, results, fields) {
            if (error) throw error;
            results.forEach((result) => {
                const image = result.img;
                const imageBase64 = image.toString("base64");
                const imageSrc = `data:image/jpeg;base64,${imageBase64}`;

                result.img = imageSrc;
            });
            res.json(results);
        })
});
//image post route

myPostRouter.post("/postimg", upload.single("img"), async (req, res) => {
  const post = req.body;
  const imgAbout = post.imgAbout;
  let img = post.img;
  // img = req.file.buffer;
  
  if (!imgAbout || !img) {
    return res.status(400).json({ msg: "Please provide all details" });
  }

  connection.query("INSERT INTO imgpost (imgAbout, img) VALUES (?,?)", [imgAbout, img], function (error, results, fields) {
    if (error) throw error;
    res.json({ msg: "Post added successfully" });
  });
});


  
//event post route
myPostRouter.post("/postevent", async (req, res) =>{
    const post = req.body;

    res.json(post); 
   //  res.redirect(303, "")
})

//video post route
myPostRouter.post("/postvid", async (req, res) =>{
    const post = req.body;

    res.json(post); 
   //  res.redirect(303, "")
})

module.exports = myPostRouter;