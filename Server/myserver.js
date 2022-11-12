const express = require("express");
const app = express();
const db = require("./models");
const port = process.env.PORT || 8080;

// const dotenv = require("dotenv");
const morgan = require("morgan");
const mysql = require("mysql2");
const helmet = require("helmet");
const myUsersRouter = require("./routes/users");
const myauthRouter = require("./routes/auth");
const myPostRouter = require("./routes/post");
// dotenv.config();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



app.use("/api/users", myUsersRouter);
app.use("/api/auth", myauthRouter);
app.use("/api/post", myPostRouter);


//mysql database//

db.sequelize.sync().then(() =>{
    app.listen(port, () => {
        console.log(`backend is active....on port ${port}`);
    });
});
