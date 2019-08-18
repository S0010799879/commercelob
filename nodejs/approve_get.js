
var Request = require("request-promise");
var xml2js =  require("xml2js");
var convert = require('xml-js');
var jsonQuery = require('json-query');

var fs = require ("fs");
var username = 'admin'
var password = 'J&)zs{7;wgkV5L=et+&68t{~8'

pskip =1000




function get_option(pskip ) {


  var options = {
    method : 'GET',
    auth: {
      user: username,
      password: password
    },
     uri:"https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com/odata2webservices/InboundFrankeProductThumbnail/Products?$filter=catalogVersion/integrationKey%20eq%20%27Staged%7CB2B-FBSProductCatalog%27&$skip="+pskip+"&$top=1000",
   // uri:"https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com/odata2webservices/InboundProduct/Products?$filter=catalogVersion/integrationKey%20eq%20%27Staged%7CB2B-FBSProductCatalog%27&$skip="+pskip+"&$top=1000",
   // uri:"https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com/odata2webservices/InboundProduct/Products?$filter=catalogVersion/integrationKey%20eq%20%27Staged%7CB2B-FKTProductCatalog%27&$skip="+pskip+"&$top=3",

   headers:{

    }
  }
return options

}




async function get_data(pskip){



const result = await   Request.get(get_option(pskip), (error, response, body) => {
     if(error) {
        return "error" //console.dir(error);
    }
    else
      return body
  }
)
    return result
}

async function analyse(body) {

     let exit_code=0
     fs.writeFileSync('resp.xml',body)
     var parser = new xml2js.Parser();
         let lauf = 0
         let integrationKey=""
          parser.parseString(body,function(err,result){

              try{
                e = result['feed']['entry'][0]
                console.log("Check exit" )
              }
              catch(e){
                console.log(e.message)
                exit_code = 1
              }


             //  console.log(result)
              e = result['feed']['entry']


              to_json =  convert.xml2json(body, {compact: true, spaces: 4});
              console.log(to_json);




              if (exit_code==0){
               e.forEach(element => {

                //  console.log(integrationKey)

                  fun =  element['content'][0]['m\:properties'][0]['d\:code']



                  integrationKey = element['content'][0]['m\:properties'][0]['d\:integrationKey']
                //  console.log(integrationKey)
                  console.log(lauf++)

                 // media  = element['link'][2]['m\:inline'][0]
                  console.log("fun" + fun )
                  //    console.log(media)
                try {
                 //obj = media['entry'][0]['id']
              //   console.log("Entry ===>" + obj)
                 //  console.log("da")
                   fs.appendFileSync('cat_approove.txt', ";"+ fun+ ";" +'\r\n',function (err){
                })


                 }
                catch(e){
                console.log("nicht da")
               // fs.appendFileSync('pim_load.txt', fun +'\r\n',function (err){
               // })
              }
                console.log ("fun")
             })
            }
        })
        return exit_code
      }


function init(){
  fs.unlink('cat_approove.txt',function(err){

  })

  fs.unlink('resp.json',function(err){

  })
}


async function main (){
   init()
  // for(i=0;i<20;i++){
  let exit = false
  let i=0
  while(!exit)  {
     console.log(" Starte LAUF::>" + i)
     let body = await get_data(i*1000)
     i++
   //  console.log(body)
   //   fs.writeFileSync('resp.xml',body)
      x=await analyse(body)
      console.log("x"  + x)
      if(x>0){
       exit = true;
   }
 }
}

async function main_test (){
  init()
 // for(i=0;i<20;i++){
 let exit = false
 let i=4
 while(!exit)  {
    console.log(" Starte LAUF::>" + i)
    let body = await get_data(i*1000)
    i++
  //  console.log(body)
  //   fs.writeFileSync('resp.xml',body)
     x=await analyse(body)
     console.log("x"  + x)

      exit = true;

}
}


main()
