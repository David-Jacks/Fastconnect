const express = require("express");
const app = express();
const db = require("./models");
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
const myCommentRouter = require("./routes/comment");

//middleware
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



app.use("/api/users", myUsersRouter);
app.use("/api/auth", myauthRouter);
app.use("/api/post", myPostRouter);
app.use("/api/comment", myCommentRouter);


//mysql database//

db.sequelize.sync().then(() =>{
    app.listen(port, () => {
        console.log(`backend is active..and ready to start..on port ${port}`);
    });
});
