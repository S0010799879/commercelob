
var Request = require("request-promise");
var xml2js =  require("xml2js");
var convert = require('xml-js');
var jsonQuery = require('json-query');
var fs       = require('fs')
var js = require('jsonpath')


var xml = fs.readFileSync('resp.xml', 'utf8');


result = convert.xml2json(xml, {compact: true, spaces: 0});


JSON.parse(result).feed.entry.forEach( it=>{
  console.log(it.content["m:properties"])
  a = it.content
//  console.log(a["m:properties"])
})

