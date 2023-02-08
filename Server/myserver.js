const express = require("express");
const path = require("path");
const app = express();
const session = require('express-session');

const port = process.env.PORT || 8080;

// const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// dotenv.config();


///routing
const myUsersRouter = require("./routes/users");
const myauthRouter = require("./routes/auth");
const myPostRouter = require("./routes/post");
const myHomeRouter = require("./routes/home");
const myCommentRouter = require("./routes/comment");
const clientCatch = require("./routes/clientAll");

//middlewares
// myauthRouter.createToken(userid, "student");
// myauthRouter.verifyToken(token);


app.use(express.static(path.join(__dirname, "../coding/MyProjects/Fastconnect/Client/build/index.html")));
//my session middleware setting
// app.use(session({
//   secret: 'your-secret-key', //use a secret key to encrypt the session data
//   resave: false, // do not resave the session if nothing changed
//   saveUninitialized: true, //create new session for new users
//   cookie: { secure: false } // set to true if using https
// }))
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    'default-src': ["'self'"],
    'script-src': ["'self'"],
    'style-src': ["'self'"],
    'img-src': ["'self'"],
    'connect-src': ["'self'"],
    'font-src': ["'self'"],
    'object-src': ["'none'"],
    'media-src': ["'self'"],
    'frame-src': ["'none'"],
    'worker-src': ["'self'"],
    'manifest-src': ["'self'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'block-all-mixed-content': [],
    'upgrade-insecure-requests': [],
    'report-uri': '/report-violation',
    'report-to': 'default',
    'sandbox': ['allow-forms', 'allow-scripts'],
    'require-trusted-types-for': 'script'
  }
}))

app.use(morgan("common"));  

//api's
app.use("/api/users", myUsersRouter);
app.use("/api/auth", myauthRouter);
app.use("/api/post", myPostRouter);
app.use("/api/comment", myCommentRouter);
app.use("/api/home", myHomeRouter);
app.use("/api/client", clientCatch);


//mysql database//


    app.listen(port, () => {
        console.log(`backend is active..and ready to start..on port ${port}`);
    });

