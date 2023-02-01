const myAuthRouter = require("express").Router();
const connection = require("../mydata");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = "fastConnect.com";

  function createToken(userid, role){
    const payload = {
        userid: userid,
        role: role
    };
    const token = jwt.sign(payload, secret);

    return token;
}

  function verifyToken(token){
    try{
            const decode = jwt.verify(token, secret);

            return decode;
    }catch(err){
            return null;
    }
}


myAuthRouter.post("/check", async(req, res) => {
    if (!req.body || !req.body.userid || !req.body.userpassword) {
        return res.status(400).json({ error: "Bad request, userid and password are required" });
    }

    const userid = req.body.userid;
    const password = req.body.userpassword;
    
    connection.query(`SELECT userID, password, role FROM students WHERE userID = ?
    UNION
    SELECT userID, password, role FROM staffs WHERE userID = ?`, [userid, password, role], (err, results)=>{
        if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        } 
        if(results.length === 0){
            return res.status(401).json({ error: "Invalid Credentials" });
        }else {
            const hashedPassword = results[0].password;
            const role = results[0].role;

            bcrypt.compare(password, hashedPassword, function(err, match) {
                if (err) {
                    return res.status(500).json({ error: "Internal Server Error" });
                }
                if(match){
                    
                    const token = createToken(userid, role); 
                    verifyToken(token);
                    return res.json({token});
                }else {
                    return res.status(401).json({ error: "Invalid Credentials" });
                }
            });
        }
    });   
});



module.exports = myAuthRouter;

