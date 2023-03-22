const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

///routing
const myUsersRouter = require("./routes/users");
const myauthRouter = require("./routes/auth");
const myPostRouter = require("./routes/post");
const myCommentRouter = require("./routes/comment");
const myVideoRouter = require("./routes/vidPost");
const cookieParser = require("cookie-parser");

//my midlewares

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true); //this is to allow the access of credetials that comes with my token.
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", myUsersRouter);
app.use("/api/auth", myauthRouter);
app.use("/api/post", myPostRouter);
app.use("/api/comment", myCommentRouter);
app.use("/api/vidpost", myVideoRouter);

app.listen(port, () => {
  console.log(`backend is active..and ready to start..on port ${port}`);
});
