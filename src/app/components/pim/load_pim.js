
var request = require('request')
var fs = require('fs')
var stream = request('https://onepim-content.franke.com/api/public/c4c/?division=10005&organizationalUnits=global&article=122.0374.690&type=10030&res=10091&usage=em').pipe(fs.createWriteStream('test.jpg'))
