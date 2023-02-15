const db = require("../mydata");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const getPost = (req, res) => {
    const syntax = `SELECT p.*, u.userid as userid, userName, userProfile FROM post AS p JOIN users AS u ON (u.userid = p.userid)`;
  
    db.query(syntax, (err, data) => { 
      if (err) {
        return res.status(500).json(err);
      }
      if (data) {
          return res.status(200).json(data);
      }
    });
  };



  const addPost = (req, res) =>{
    const token = req.cookies.accessToken;
        if(!token){
            return res.status(403).json("user not logged in");
        }

       jwt.verify(token, "fastConnect.com", (err, userInfo)=>{
            if(err) return res.status(403).json("Token is not valid");

           const  syntax = "INSERT INTO post SET ?";
        const values = {
            imgAbout: req.body.imgAbout,
            img: req.body.img,
            userid: userInfo.id,
            created_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        }
            db.query(syntax, values, (err, data) =>{
                if(err){
                    return res.status(500).json(err);
                }

                return res.status(200).json("post data inserted successfully");
            })
       }) 


  }
  




module.exports ={
    getPost, addPost
}



