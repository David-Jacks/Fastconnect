const express = require("express");
// const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

///routing
const myUsersRouter = require("./routes/users");
const myauthRouter = require("./routes/auth");
const myPostRouter = require("./routes/post");
const myHomeRouter = require("./routes/home");
const myCommentRouter = require("./routes/comment");
const clientCatch = require("./routes/clientAll");
const cookieParser = require("cookie-parser");

//my midlewares

app.use((req, res, next) => {
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.header("Access-Control-Allow-Credentials", true); //this is to allow the access of credetials that comes with my token.
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", myUsersRouter);
app.use("/api/auth", myauthRouter);
app.use("/api/post", myPostRouter);
app.use("/api/comment", myCommentRouter);
app.use("/api/home", myHomeRouter);
app.use("/api/client", clientCatch);

app.listen(port, () => {
  console.log(`backend is active..and ready to start..on port ${port}`);
});
