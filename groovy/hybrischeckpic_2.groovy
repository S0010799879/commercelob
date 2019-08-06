

 def srcFolder_2 = "\\\\fbs179g\\B2B\\bilder\\"

 def srcFolder_2 = "\\\\fbs179g\\B2B\\Pictures\\"
 //def srcFolder_2 = "\\\\fbs179g\\B2B\\SCC\\bilder\\"
//def srcFolder_3 ="\\\\fbs30g\\General\\Webshop_B2B\\Content\\Pictures\\"

def destFolder ="\\\\fbs179g\\B2B\\SCC\\hotfolder"

// def file_pim  =new File("C:\\daten\\nodejs\\projects\\commerce\\pim_load.txt")
 def file_pim  =new File("..\\out\\pim_load.txt")



 def cmdfile = new  File ("cppim_picture.cmd")
     cmdfile.delete()
 def i=0
println("suche Pim ${srcFolder_2} ")
file_pim.eachLine { String matnr ->


//    exist1 = check(srcFolder_1,matnr)
     exist2 = check(srcFolder_2,matnr)
//    exist3=  check(srcFolder_3,matnr)

   // exist = (exist1 || exist2 || exist3)
    println("checked ${i++}")
    if(exist2){

        String mmatnr = matnr.replace('.','').replace('.','')
        strCmd = "copy  ${srcFolder_2}${mmatnr}.jpg ${destFolder}  " + "\r\n"

        cmdfile << strCmd

        println(" ${matnr}  existiert   ${exist2}  "  )

    }
    else {
      //  println(" ${matnr}  existiert nitcht " )
    }


}

def check(String folder, String matnr){
   def jpeg = matnr.replace('.','').replace('.','') + '.jpg'

   def f = new File(folder + jpeg)
   if (f.exists()){
         return true
   }
   else{
         return false
   }


}
