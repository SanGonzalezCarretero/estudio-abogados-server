const express = require("express");

const app = express();

const mysql = require("mysql2");

const cors = require("cors");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "sfas41146734",
  database: "lawyers",
});

app.use(cors());

app.use(express.json());

app.post("/create", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const message = req.body.message;

  db.query(
    "INSERT INTO user (name, surname, email, message) VALUES (?,?,?,?)",
    [name, surname, email, message],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Yay, your server is running on port 3001");
});

console.log("Hola");
