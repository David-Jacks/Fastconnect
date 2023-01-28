const myPostRouter = require("express").Router();

//     myPostRouter.get("/", async(req, res)=>{
      
//         res.json(listOfPost); 
// });

    myPostRouter.post("/post", async (req, res) =>{
         const post = req.body;

         res.json(post); 
        //  res.redirect(303, "")
})

module.exports = myPostRouter;