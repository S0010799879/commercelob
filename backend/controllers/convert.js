
var model = require("../models/p_path")
var azure = require('azure-storage');
var fs = require('fs');

spawn = require('child_process').spawnSync;

data = JSON.parse(JSON.stringify(model));

//D1
var blobServiceD1 = azure.createBlobService('wd5rgzcw5v5bdpwsc4jlrgv', 'q/4YVkKZDkHhWfiOD3xVcHkg8dz8Ynbzduti6uFWePkl3TGW7qQ5MnFIfuc6rDA7WyiZ90ZC3YxJ09mvHIe5+w==');

//S1
var blobServiceS1 = azure.createBlobService('4rz4xjawsvsal9pm44vk5bw', 'pe9kBRfX+uJjVqY6MSN2QPT+N/W54QcH0PswDhkRpgH6KIUqpzHoXcPPaKw7lpQ2oVzAEogagcwQhJU4dFsZQg==');
//P1
var blobServiceP1 = azure.createBlobService('adeojiziae1b68mdswkovdl', 'Geyj9bSje1c74OEhSY4zVEKgIDxKcGyWPqeW/Oba+m4LD+PSj9LnXyzgFcQb0FaJthPzYNR7/JRQNbvkl92mdg==');



exports.convertFile = async function (image, upload, p) {
   console.log("upload to " + image + " " + upload + " " + p)
   if (upload) {

      for (i = 0; i < 4; i++) {
         console.log(" IMAGE" + data.pathSrc + image)
         let convert = spawn('magick', ['convert', data.pathSrc + image, '-strip', '-resize', data.resolution[i], data.pathServer + data.localDir[i] + image])

         console.log('convert  ' + data.resolution[i] + ' ' + data.pathSrc + image + '==>' + data.pathServer + data.localDir[i] + image)
         console.log(convert)
      }
   }

   if (upload && p != 'none') {
      for (i = 0; i < 4; i++) {

         filename = image.replace('.jpg', '') + '_' + data.localDir[i].replace('\\', '') + '.jpg'
         console.log('Filename: ' + filename)

         // blobService.createBlockBlobFromLocalFile('hybris','master/hotfolder/'+ data.azurePath[i] + image, data.pathServer + data.localDir[i] + image, function(error, result, response) {
         if (p == 'D1' || p == 'All') {
            console.log("Dp upload to D1")
            blobServiceD1.createBlockBlobFromLocalFile('hybris', 'master/hotfolder/' + filename, data.pathServer + data.localDir[i] + image, function (error, result, response) {
               if (!error) {
                  console.log('[AZURE Upload D1] ' + image + ' ==> ' + result.name)
               }
               else {
                  console.log(error.message)
               }
            });
         }
         if (p == 'S1' || p == 'All') {
            console.log("Do upload to S1")
            blobServiceS1.createBlockBlobFromLocalFile('hybris', 'master/hotfolder/' + filename, data.pathServer + data.localDir[i] + image, function (error, result, response) {


               //console.log(result.name)


               if (!error) {
                  console.log('[AZURE Upload S1]  ' + image + ' ==> ' + result.name)
               }
               else {
                  console.log(error.message)
               }
            });
         }
         if (p == 'P1' || p == 'All') {
            console.log("Do upload to P1")
            blobServiceP1.createBlockBlobFromLocalFile('hybris', 'master/hotfolder/' + filename, data.pathServer + data.localDir[i] + image, function (error, result, response) {

               if (!error) {
                  console.log('[AZURE Upload p1] ' + image + ' ==> ' + result.name)
               }
               else {
                  console.log(error.message)
               }
            });
         }


      }
   }

   return "{Message : 'done'}";
}
