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
var request = require("request")
var rp = require("request-promise")
var image=require("../controllers/cv")
// Hört auf /test

var data =JSON.parse( JSON.stringify(model));

const DIR = data.pathSrc
const hotFolder= data.pathHot


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

   async function convert(fileName,toconvert,p){

     return new Promise(function(resolve,reject){
      var a= true;
      var err=false;
      console.log("[CONVERTER] start Converter "+toconvert)
      converter.convertFile(fileName,toconvert,p)
      err?reject(a):resolve(a);

  })

}

async function lconverter(fileName,toconvert,p){
  console.log("parameter in p " + p)
   var a = await convert(fileName, toconvert,p)

}
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


router.get("/",function (req, res, next)  {
  const picture = req.params.id;
  console.log(req.params);
      for (i=0 ; i<4 ; i++ ){
         console.log(data.localDir[i]);
  }

  console.log('GET/ ' + data.pathSrc);
 // res.status(200).json(data) ;
   res.writeHead(200, {'Content-type':'text/html'})
   res.end("No such image");

 //res.status(200). ;
});



router.get('/api/up',upload.single('photo'), function (req, res) {
  consloe.log("hier bin ich")
  console.log(req.headers)
  var pAt =  req.headers["azuretype"]
if (!req.file) {
    console.log("No file received",pAt);
    return res.send({
    success: false
    });

  } else {
   console.log("OrgName " +  req.file.originalname)
   var y= lconverter(req.file.originalname,false,'none')
   var x= lconverter(req.file.originalname,true)
          //  converter.convertFile(req.file.originalname,true)

    console.log('[POST/up] ==> file  received Upload / convert Done');
  return res.send({ success: true })
  }
})


router.post('/api/up',upload.single('photo'), function (req, res) {
   console.log(req.headers)
  //console.log("[request Auzre] " + req.azureType)
   console.log("[show azureType] ==>" +req.headers["azuretype"])
   var pAt =  req.headers["azuretype"]

  if (!req.file) {
      console.log("No file received");
      return res.send({
      success: false
      });

    } else {
     // console.log(req.file)
     var y= lconverter(req.file.originalname,false,'none')
     var x= lconverter(req.file.originalname,true,pAt)
            //  converter.convertFile(req.file.originalname,true)

      console.log('[POST/up] ==> file  received Upload / convert Done');
    return res.send({ success: true })
    }
})

//http://fbs179g:3000/api/convert?image=1010052390.jpg&upload=false&azureType='none'


router.get("/api/conv", (req, res, next) => {
      var query = url.parse(req.url,true).query;
      console.log(url)
      var strConv = "false"
  //console.log(req)
      var bConv = false
      pic = query.image.replace('.jpg','') + '.jpg';

      if (query.upload){
      strConv = query.upload;
     }
  bConv =(strConv=="true")?true:false;
  var pAt =  req.headers["azuretype"]
  var filename=data.pathUrl + data.localDir[1] + pic
  console.log("Filename " +filename + 'Query ' + strConv)

  var x= lconverter(pic,bConv,pAt)

       res.writeHead(200,{'Content-type':'text/html'});
        res.end('ok');
    }
);

router.get("/api/convert", (req, res, next) => {
  var query = url.parse(req.url,true).query;
  console.log(url)
  var strConv = "false"
  //console.log(req)
  var bConv = false
  pic = query.image.replace('.jpg','') + '.jpg';

  if (query.upload){
  strConv = query.upload;
  }
  bConv =(strConv=="true")?true:false;
  var pAt =  req.headers["azuretype"]
  var filename=data.pathUrl + data.localDir[1] + pic
  console.log("Filename " +filename + 'Query ' + strConv)

  fs.readFile(data.pathSrc +  pic , function (err, content) {
    if (err) {
        res.writeHead(400, {'Content-type':'text/html'})
        console.log("[/GET/Convert] ==> " + err);
        res.end("No such image"  + data.pathSrc +  pic + "Pic "  + pic    );
    } else {
        //specify the content type in the response will be an image
        console.log("convert Files ")

        // converter.convertFile(pic,bConv)
        var x= lconverter(pic,bConv,pAt)
       res.writeHead(200,{'Content-type':'text/html'});
        res.end('ok');
    }
  });
})

// http://fbs179g:3000/api/checkclient?image=1010383523.jpg&res=104Wx104H

 router.get("/api/checkclient", (req, res, next) => {

  query = url.parse(req.url,true).query;
  pic = query.image;
  console.log(query.image)
  resolution= query.res
  filename=ata.pathServer + resolution +'\\' + pic
  console.log("test Filename" + filename)
  console.log("[GET/check] ==> Filename " +filename)
  fs.readFile(filename , function (err, content) {
    if (err) {
        res.writeHead(200, {'Content-type':'text/html'})
        console.log(err);
        res.end("No such image Request Sample   http://fbs179g:3000/api/checkclient?image=1010383523.jpg&res=104Wx104H ");
    } else {
        //specify the content type in the response will be an image

        strUrl="";
        strUrl="<a href=http://fbs179g:3000/api/down?image=" + url.parse(req.url,true).query.image +'&res=' + url.parse(req.url,true).query.res + '>Picture exists </a>'


        //strUrl ="<a href='http://fbs179g:3000/api/down?image='>test</a>"
        console.log(   strUrl   + ' ==> ' + url.parse(req.url,true).query.res );
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(strUrl);
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
        res.end("No such image : Try:  http://fbs179g:3000/api/checkclient?image=1010383523.jpg&res=104Wx104H ");
    } else {
        //specify the content type in the response will be an image

        strUrl="";
        strUrl= url.parse(req.url,true).query.image +'&res=' + url.parse(req.url,true).query.res
        console.log(   strUrl   + ' ==> ' + url.parse(req.url,true).query.res );
        res.writeHead(200,{'Content-type': 'text/html'});
        res.end(strUrl);
    }
 });
})



// http://fbs179g:3000/api/down?image=1010383523.jpg&res=104Wx104H


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
        res.end("No such image request Sample  http://fbs179g:3000/api/down?image=1010383523.jpg&res=104Wx104H" );
    } else {
        //specify the content type in the response will be an image
        res.writeHead(200,{'Content-type':'image/jpg'});
        res.end(content);
    }
 });
})



var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
  console.log('content-type:', res.headers['content-type']);
  console.log('content-length:', res.headers['content-length']);

  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
  };


router.get("/api/down/pim", (req, res, next) => {
   var query = url.parse(req.url,true).query;
   pic = query.image;
   console.log("[GET/down/pim] ==> Filename " + pic)
  strUrl="https://onepim-content.franke.com/api/public/c4c/?division=10005&organizationalUnits=global&article="+ pic+"&type=10030&res=10091&usage=em"

    filename = pic.replace('.','').replace('.','')+".jpg"
    console.log(filename)
   console.log(strUrl)

     download  (strUrl,DIR+filename,function(){
       console.log('done')
      // var y= lconverter(filename,false,'none')
       var x= lconverter(filename,true,'All')

      })
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
