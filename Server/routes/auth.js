const myAuthRouter = require("express").Router();
const connection = require("../mydata");
const bcrypt = require("bcrypt");

myAuthRouter.post("/check", async(req, res) => {
    if (!req.body || !req.body.userid || !req.body.userpassword) {
        return res.status(400).json({ error: "Bad request, userid and password are required" });
    }

    const userid = req.body.userid;
    const password = req.body.userpassword;

    connection.query(`SELECT userID, password FROM students WHERE userID = ?
    UNION
    SELECT userID, password FROM staffs WHERE userID = ?`, [userid, password], (err, results)=>{
        if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        } 
        if(results.length === 0){
            return res.status(401).json({ error: "Invalid Credentials" });
        }else {
            const hashedPassword = results[0].password;
            bcrypt.compare(password, hashedPassword, function(err, match) {
                if (err) {
                    return res.status(500).json({ error: "Internal Server Error" });
                }
                if(match){
                    /// credentials match, proceed to next page
                    req.session.userid = userid;
                    req.session.authenticated = true;
                    return res.redirect('/api/home'); 
                }else {
                    return res.status(401).json({ error: "Invalid Credentials" });
                }
            });
        }
    });   
});



module.exports = myAuthRouter;

