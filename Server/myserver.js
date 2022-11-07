const express = require("express");
const app = express();


const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const myRouter = require("./routes/users");
const myauthRouter = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log("connected");
});

//middleware
app.use("/api/user", myRouter);
app.use("/api/auth", myauthRouter);

app.use(express.json());
app.use(morgan("common"));
app.use(helmet());


app.listen(8080, () => {
    console.log("backend is active");
});