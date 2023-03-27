const express = require("express");

const app = express();

const mysql = require("mysql2");

const cors = require("cors");

// const nodemailer = require("nodemailer");

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
      }
      // else {
      //   const transporter = nodemailer.createTransport({
      //     service: "gmail",
      //     auth: {
      //       user: "gcwebdevelopment.santiago@gmail.com",
      //       pass: "losmismosdesiempre6",
      //     },
      //   });

      //   const mailOptions = {
      //     from: "gcwebdevelopment.santiago@gmail.com",
      //     to: "santiagogonzalezc22@gmail.com",
      //     subject: "GGT Estudios | Contacto",
      //     text: message,
      //   };

      //   transporter.sendMail(mailOptions, (error, info) => {
      //     if (error) {
      //       console.log(error);
      //     } else {
      //       console.log("Email sent: " + info.response);
      //     }
      //   });

      //   res.send("Values inserted");
      // }
    }
  );
});

app.listen(3001, () => {
  console.log("Yay, your server is running on port 3001");
});
