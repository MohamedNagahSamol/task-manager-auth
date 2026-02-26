const express = require("express")
const app = express()
const mongo = require('mongoose')
require("dotenv").config()
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
var cookieParser = require('cookie-parser')
app.use(cookieParser())

mongo.connect(process.env.MONGO_URL)
.then(()=>console.log('connection'))
.catch((err)=>console.log(err))

app.get('/',(req,res)=>{
    res.send('hello')
})


app.listen(process.env.PORT)
// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3001;
// const mongoose = require("mongoose");
// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.use(express.static("public"));
// var methodOverride = require("method-override");
// app.use(methodOverride("_method"));
// const allRoutes = require("./routes/allRoutes");
// const addUserRoute = require("./routes/addUser");

// app.use(express.json())
// // cookie-parser
// var cookieParser = require('cookie-parser')
// app.use(cookieParser())

// require('dotenv').config()

// // Auto refresh
// const path = require("path");
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, "public"));

// const connectLivereload = require("connect-livereload");
// app.use(connectLivereload());

// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

// mongoose
//   .connect(
//   'mongodb://localhost:27017/'
//   )
//   .then(() => {
//     app.listen(3001, () => {
//       console.log(`http://localhost:${3001}/`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// app.use(allRoutes);
// app.use( "/user/add.html",addUserRoute);
