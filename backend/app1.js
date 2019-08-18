const express = require("express");
const bodyParser = require("body-parser");
const apirouter=require("./routes/router_api");
const updownrouter=require("./routes/router_test");
const app = express();
const path=require("path")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/",express.static(path.join(__dirname,"dist")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT,DELETE, OPTIONS"
  );
  next();
});

app.use("/",apirouter);
app.use("/test",updownrouter);
app.use((req,res,next ) => {
   res.sendFile(path.join("dist","index.html"))

 });
module.exports = app;
