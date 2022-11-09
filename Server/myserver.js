const express = require("express");
const app = express();


const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const myRouter = require("./routes/users");
const myauthRouter = require("./routes/auth");

dotenv.config();

//mysql database
app.get('/stulogin', (req, res) => {
    dbase.query("INSERT INTO student (stu_id, firstname, lastname, programme, gender, level, email) VALUES (?, ?, ?, ?, ?, ?, ?)"), 
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
    console.log("backend is active");
});