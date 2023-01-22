const myAuthRouter = require("express").Router();
const connection = require("../mydata");


myAuthRouter.post("/check", async(req, res) => {
    const dataCheck = req.body;
//i will have to check this section to ensure accurate checking of query
    connection.query(`SELECT userID FROM students WHERE userID = '${dataCheck.userid}'
    UNION
    SELECT userID FROM staffs WHERE userID = '${dataCheck.userid}'
    `, (err, results)=>{
        if (err) {
            res.status(500).json({ error: err });
        } else {
            // check for results
           console.log(results);
        }
    })
   
});


module.exports = myAuthRouter;

