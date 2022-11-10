const express = require("express");
const app = express();


const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const mysql = require("mysql2");
const myRouter = require("./routes/users");
const myauthRouter = require("./routes/auth");
dotenv.config();

//mysql database//

const dbase = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "logout.commysql",
    database: "schooldb"
});
dbase.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
app.get('/stulogin', (req, res) => {
    dbase.query("INSERT IGNORE INTO student (stu_id, firstname) VALUES ('4567', 'david');"), 
    (err, results) =>{
        res.send(results);
    }
});


//middleware
app.use("/api/users", myRouter);
app.use("/api/auth", myauthRouter);

app.use(express.json());
app.use(morgan("common"));
app.use(helmet());

app.listen(8080, () => {
    console.log("backend is active....");
});