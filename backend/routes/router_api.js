const express = require("express");
const bodyParser = require("body-parser");
//var model = require("../models/p_path.js")

var router = express.Router();


router.get("/",function (req, res, next)  {
  const picture = req.params.id
  res.status(200).json({
  message: "request Picture " + picture,
 });
});



router.get("/api/down/:id", (req, res, next) => {
 const picture = req.params.id
  
  console.log('Picture ' + picture)
  console.log(req.query)
  res.status(200).json({
  message: "down mit id request Picture " + picture,
 
})
});

router.get("/api/down", (req, res, next) => {
  const picture = req.params.id
  const q = req.query
  console.log(req.params)
  console.log(req.query)
  res.status(200).json({
  message: "down request Picture " + picture 
   

})
});
router.get("/api/upload", (req, res, next) => {
    const picture = req.params.id
    res.status(200).json({
    message: "up request Picture " + picture,
  });
});


module.exports = router
