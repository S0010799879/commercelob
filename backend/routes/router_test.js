const express = require("express");
const bodyParser = require("body-parser");
var model = require("../models/p_path")
const multer = require('multer');
var converter=require("../controllers/convert")
var router = express.Router();
var fs = require('fs')
var url =require('url')
var Promise = require('promise');
const ma=require('../controllers/testMail')
// Hört auf /test
var data =JSON.parse( JSON.stringify(model));

const DIR = data.pathSrc
  
               

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      //cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
      cb(null, file.originalname);
    }
});



let upload = multer({storage: storage});

   async function convert(fileName,toconvert){
     return new Promise(function(resolve,reject){
      var a= true;
      var err=false;
      console.log("[CONVERTER] start Converter "+toconvert)
      converter.convertFile(fileName,toconvert)
      err?reject(a):resolve(a);

  })

}

async function lconverter(fileName,toconvert){
   var a = await convert(fileName, toconvert)

}


router.get("/",function (req, res, next)  {
  const picture = req.params.id;
  //console.log(model);
      for (i=0 ; i<4 ; i++ ){
         console.log(data.localDir[i]);
  }
  console.log('GET/ ' + data.pathSrc);
 // res.status(200).json(data) ;
 res.writeHead(200, {'Content-type':'text/html'})
 res.end("No such image"); 


 //res.status(200). ;
});


router.post('/api/up',upload.single('photo'), function (req, res) {
    console.log(req)
  if (!req.file) {
      console.log("No file received");
      return res.send({
      success: false
      });

    } else {
     // console.log(req.file)
     var y= lconverter(req.file.originalname,false)
     var x= lconverter(req.file.originalname,true)
            //  converter.convertFile(req.file.originalname,true)
            
      console.log('[POST/up] ==> file  received Upload / convert Done');
    return res.send({ success: true })
    }
})



router.get("/api/convert", (req, res, next) => {
  var query = url.parse(req.url,true).query;
  pic = query.image;

  var filename=data.pathUrl + data.localDir[1] + pic
  console.log("Filename " +filename)

  fs.readFile(data.pathSrc +  pic+ ".jpg", function (err, content) {
    if (err) {
        res.writeHead(400, {'Content-type':'text/html'})
        console.log("[/GET/Convert] ==> " + err);
        res.end("No such image");    
    } else {
        //specify the content type in the response will be an image
        console.log("convert Files ")
        converter.convertFile(pic,true)
        res.writeHead(200,{'Content-type':'image/jpg'});
        res.end(content);
    }
  });
})


 router.get("/api/check", (req, res, next) => {
  
  query = url.parse(req.url,true).query;
  pic = query.image;
  console.log(query.image)
  resolution= query.res
  filename=data.pathServer + resolution +'\\' + pic
  console.log("test Filename" + filename)
  console.log("[GET/check] ==> Filename " +filename)
  fs.readFile(filename , function (err, content) {
    if (err) {
        res.writeHead(200, {'Content-type':'text/html'})
        console.log(err);
        res.end("No such image");    
    } else {
        //specify the content type in the response will be an image
        
        strUrl="";
        strUrl= url.parse(req.url,true).query.image +'&res=' + url.parse(req.url,true).query.res
        console.log(   strUrl   + ' ==> ' + url.parse(req.url,true).query.res );
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(strUrl);
    }
 });
})

 



router.get("/api/down", (req, res, next) => {
  var query = url.parse(req.url,true).query;
  pic = query.image;
  resolution= query.res
  var filename=data.pathServer + resolution +'\\' + pic
  console.log("[GET/down] ==> Filename " +filename)
  fs.readFile(filename , function (err, content) {
    if (err) {
        res.writeHead(400, {'Content-type':'text/html'})
        console.log(err);
        res.end("No such image");    
    } else {
        //specify the content type in the response will be an image
        res.writeHead(200,{'Content-type':'image/jpg'});
        res.end(content);
    }
 });
})

router.get("/api/mail", (req, res, next) => {
    console.log('mailer')
    ma.mailer();
    res.status(200).json({
    message: "Maill send 1" ,
  });
});


router.get("/api/upload", (req, res, next) => {
    const picture = req.params.id
    res.status(200).json({
    message: "up request Picture " + picture,
  });
});


module.exports = router
