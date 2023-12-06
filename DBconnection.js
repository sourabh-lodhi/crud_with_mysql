const mysql = require("mysql");
const { promisify } = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user",
});
connection.query = promisify(connection.query).bind(connection);
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DB connected");
  }
});
module.exports = connection;
