const express = require("express");
const app = express();
const db = require("./models");
const port = process.env.PORT || 8080;

// const dotenv = require("dotenv");
const morgan = require("morgan");
const mysql = require("mysql2");
const helmet = require("helmet");
const cors = require("cors");

// dotenv.config();


///routing
const myUsersRouter = require("./routes/users");
const myauthRouter = require("./routes/auth");
const myPostRouter = require("./routes/post");
const myCommentRouter = require("./routes/comment");

//middleware
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("common"));



app.use("/api/users", myUsersRouter);
app.use("/api/auth", myauthRouter);
app.use("/api/post", myPostRouter);
app.use("/api/comment", myCommentRouter);


//mysql database//

db.sequelize.sync().then(() =>{
    app.listen(port, () => {
        console.log(`backend is active....on port ${port}`);
    });
});
