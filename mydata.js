const mysql = require("mysql2");
// mysql://b407aa85827dc5:1adbd647@us-cdbr-east-06.cleardb.net/heroku_e730e4e1eab6206?reconnect=true

const connection = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b407aa85827dc5",
  password: "1adbd647",
  database: "heroku_e730e4e1eab6206",
});

connection.connect(() => {
  console.log("database connected");
});

module.exports = connection;
