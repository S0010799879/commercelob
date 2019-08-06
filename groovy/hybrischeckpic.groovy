

def srcFolder_1 = "\\\\fbs179g\\B2B\\bilder\\"
def srcFolder_2 = "\\\\fbs179g\\B2B\\SCC\\bilder\\"
def srcFolder_3 ="\\\\fbs30g\\General\\Webshop_B2B\\Content\\Pictures\\"

 //def file_pim  =new File("C:\\daten\\nodejs\\projects\\commerce\\pim_load.txt")
 def file_pim  =new File("..\\out\\pim_load.txt")


file_pim.eachLine { String matnr ->

    println("suche Pim ")
    exist1 = check(srcFolder_1,matnr)
    exist2 = check(srcFolder_2,matnr)
    exist3=  check(srcFolder_3,matnr)

    exist = (exist1 || exist2 || exist3)

    if(exist){
        println(" ${matnr}  existiert  ${exist1}  ${exist2} ${exist3}  "  )

    }
    else {
        println(" ${matnr}  existiert nitcht " )
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
