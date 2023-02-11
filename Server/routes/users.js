const connection = require("../mydata");
const myUsersRouter = require("express").Router();
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

// myUsersRouter.get("/api/users/:id", async (req, res) => {
//     const userId = req.params.id;
  
//     connection.query("SELECT * FROM students, staff  WHERE id = ?", [userId], function (error, results, fields) {
//         if (error) throw error;
//         const user = results[0];
//         // Do something with the user data
//         // If a user with the given ID is found, return the user data in the response
//         if (user) {
//           res.json({ user });
//         } else {
//           // If a user with the given ID is not found, return a 404 status
//           res.status(404).send("User not found");
//         }
//       });
  
//   });

myUsersRouter.post("/sendStudent", async (req, res) => {
    try {
        const data = req.body;
        const userid = data.userID;
        const role = data.role;
        const hash =async (pass)=>{
          return await bcrypt.hash(pass, 10);
        }
        const passencrypt = await hash(data.password);

        data.password = passencrypt;
    connection.query("INSERT INTO students SET ?", data, function (err, result){
    if (err) {
        console.log("An error occurred: " + err);
    } if(result){
        res.status(201);
        console.log("Data succesfully inserted");
      const token = createToken(userid, role);
      verifyToken(token);
      return res.json({token});
    }
});
} catch (error) {
   res.status(400).send(error);
}
});

myUsersRouter.post("/sendStaff", async(req, res) =>{
    try{
        const data = req.body;
        const userid = data.userID;
        const role = data.role;
        const hash =async (pass)=>{
            return await bcrypt.hash(pass, 10);
          }
          const passencrypt = await hash(data.password);
  
        data.password = passencrypt;
       connection.query("INSERT INTO staffs SET ?", data, function(err, result){
            if (err){
                console.log("An error happend" + err);
            }if(result){
            res.status(201);
            console.log("your data is inserted successfully!");
            const token = createToken(userid, role);
              verifyToken(token);
              return res.json({token});
            }
        })
    }catch(error){
        res.status(400).send(error);
    }
})



   
module.exports = myUsersRouter;

