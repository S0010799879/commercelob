
var model = require("../models/p_path")
var azure = require('azure-storage');
var fs = require('fs');

spawn = require('child_process').spawnSync;

data = JSON.parse(JSON.stringify(model));

exports.ImageConvert = function (image, upload, p) {
   console.log("upload to " + image + " " + upload + " " + p)
   if (upload) {

      for (i = 0; i < 4; i++) {
         console.log(" IMAGE" + data.pathSrc + image)
         const convert = spawn('magick', ['convert', data.pathSrc + image, '-strip', '-resize', data.resolution[i], data.pathServer + data.localDir[i] + image])

         console.log('convert  ' + data.resolution[i] + ' ' + data.pathSrc + image + '==>' + data.pathServer + data.localDir[i] + image)
         console.log(convert)
      }
   }
  }
