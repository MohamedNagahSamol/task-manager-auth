const express = require("express");
const app = express();

require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var jwt = require("jsonwebtoken");
const authroutes = require("./routes/authRoutes");
const taskroutes = require("./routes/taskroutes");

const { check, validationResult } = require("express-validator");
var cookieParser = require("cookie-parser");
app.use(cookieParser());

const mongo = require("mongoose");

const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
  res.send("hello");
});
app.use(authroutes);
app.use(taskroutes)

mongo
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connection"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT);
