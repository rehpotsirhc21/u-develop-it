const mysql = require("mysql2");
const express = require("express");
const res = require("express/lib/response");
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
// TODO: replace query statements with API routes
// db.query(` SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows);
// });
// find one canidates
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

//delete a canidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result)=> {
//   if(err) {
//     console.log(err)
//   }
//   console.log(result);
// });

// create canidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
VALUES (?,?,?,?)`;
const params = [1, "Ronald", "Firbank", 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
