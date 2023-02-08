const myPostRouter = require("express").Router();
const connection = require("../mydata");
//getting post from the database

    myPostRouter.get("/getimg", async(req, res)=>{
        post = req.body;
        res.json(post); 
});
//image post route
    myPostRouter.post("/postimg", async (req, res) =>{
        const post = req.body;
        const imgAbout =post.imgAbout;
        const img =post.img;
        if(!imgAbout || !img){
            res.status(401).send("invalid credentials");
        }else{
            connection.query("INSERT INTO imgpost SET ?", post, (err, res) =>{
                    if(err){
                            console.log("an error occured" + err);
                    }if(res){
                        console.log("data sucessfully inserted");

                    }
            })

        }
})

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