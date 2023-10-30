// const mysql = require("mysql2");
import mysql from'mysql2'
const connectionInformation = mysql.createConnection({
  host: "localhost",
  user: "group3",
  database: "bookstore",
  password: "group3"
});

export default   connectionInformation;
