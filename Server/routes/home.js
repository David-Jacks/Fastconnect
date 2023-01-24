const myHomeRouter = require("express").Router();


myHomeRouter.get("/", (req, res)=>{
if(!req.session.authenticated){
    res.redirect("/login");
}else{
    res.render("/home", {user: req.session.userid});
}

});


module.exports = myHomeRouter;