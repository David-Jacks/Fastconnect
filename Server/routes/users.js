const connection = require("../mydata");
const myUsersRouter = require("express").Router();
const bcrypt = require("bcrypt");

myUsersRouter.post("/sendStudent", async (req, res) => {
  try {
      const data = req.body;
      const hash =async (pass)=>{
          return await bcrypt.hash(pass, 10);
        }
        const passencrypt = await hash(data.password);

        data.password = passencrypt;
    connection.query("INSERT INTO students SET ?", data, function (err, result) {
    if (err) {
        console.log("An error occurred: " + err);
        res.status(400).send(err);
        return;
    } res.status(201).send("Data inserted successfully!");
    });
} catch (error) {
    res.status(400).send(error);
}
});

myUsersRouter.post("/sendStaff", async(req, res) =>{
    try{
        const data = req.body;
        const hash =async (pass)=>{
            return await bcrypt.hash(pass, 10);
          }
          const passencrypt = await hash(data.password);
  
          data.password = passencrypt;
       connection.query("INSERT INTO staffs SET ?", data, function(err, result){
            if (err){
                console.log("An error happend" + err);
                res.status(400).send(err);
                return;
            } res.status(201).send("your data is inserted successfully!");
        })
    }catch(error){
        res.status(400).send(error);
    }
})



   
module.exports = myUsersRouter;

