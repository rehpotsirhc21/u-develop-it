const mysql = require("mysql2");

//connect to DB
const db = mysql.createConnection(
    {
      host: "localhost",
      //mysql UN
      user: "root",
      password: "Nicholas21#",
      database: "election",
    },
    console.log("Connected to the election database")
  );

  module.exports = db;