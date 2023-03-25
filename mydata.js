
const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "logout.commysql",
    database: "fastconnect",
});

connection.connect(() =>{
    console.log("database connected");
});


  module.exports = connection;