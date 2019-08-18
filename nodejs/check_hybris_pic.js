
var Request = require("request-promise");
var xml2js = require("xml2js");

var fs = require ("fs");
var username = 'admin'
var password = 'J&)zs{7;wgkV5L=et+&68t{~8' 
               
pskip =1000

var options1 = {
  method : 'GET',
  auth: {
    user: username,
    password: password
  },
 uri:"https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com/odata2webservices/InboundFrankeProductThumbnail/Products?$filter=catalogVersion/integrationKey%20eq%20%27Staged%7CDefault%27&",
 headers:{

  }
}


function get_option(pskip ) {


  var options = {
    method : 'GET',
    auth: {
      user: username,
      password: password
    },
   uri:"https://backoffice.ct075nck5-franketec1-p1-public.model-t.cc.commerce.ondemand.com/odata2webservices/InboundFrankeProductThumbnail/Products?$filter=catalogVersion/integrationKey%20eq%20%27Staged%7CDefault%27&$skip="+pskip+"&$top=1000&$expand=thumbnail",
   headers:{
  
    }
  }
return options

}




async function commercePic(pskip){

 

const result = await   Request.get(get_option(pskip), (error, response, body) => {
     if(error) {
        return console.dir(error);
    }
    else
      return body
  }
)
    return result 
}

async function analyse(body) {


     fs.writeFileSync('resp.xml',body)
     var parser = new xml2js.Parser();
           
          parser.parseString(body,function(err,result){
               console.log(result)
               e = result['feed']['entry']

               e.forEach(element => {
                  fun =  element['content'][0]['m\:properties'][0]['d\:code']  
                  media  = element['link'][2]['m\:inline'][0]   
                  console.log("fun" + fun)
                  //    console.log(media) 
                try {
                 obj = media['entry'][0]['id']
              //   console.log("Entry ===>" + obj)
                 console.log("da")
                 

                }
                catch(e){
                console.log("nicht da")
                fs.appendFileSync('pim_load.txt', fun +'\r\n',function (err){
                })  
              } 
                console.log (media)
             })
        })
     
      }
  
  
function init(){
  fs.unlink('pim_load.txt',function(err){

  }) 

}


async function main (){
   init()
   for(i=0;i<11;i++){
     console.log(" Starte LAUF::>" + i)
     let body = await commercePic(i*1000)
     fs.writeFileSync('resp.xml',body)
     await analyse(body)
   }
}

main()