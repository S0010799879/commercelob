 //def url = 'http://pim-kitchensystems.franke.com/pim/images_lr/IMG_6_ZOOM/PP001_101.0016.452.JPG'


 //file_pim  =new File("C:\\daten\\nodejs\\projects\\commerce\\pim_load.txt")
file_pim  =new File("..\\out\\pim_load.txt")







 file_log = new File('..\\out\\log.txt')
 file_notfoundlog = new File('..\\out\\notlog.txt')

 file_log.delete()
 file_notfoundlog.delete()

def srcFolder = "\\\\fbs179g\\B2B\\bilder"

def destFolder ="c:\\temp\\hybris\\bilder\\"

def counter = file_counter( file_pim)
def file_gefunden = 0

  println( "counter = ${counter}")

def actline=0
file_pim.eachLine { String matnr ->
  actline++
  println("file ${actline}  von / ${counter }  / gefunden ${file_gefunden}")


   println ("fun:     ${matnr}  " )


   // def strFileanme =  ".\\pics\\" + it.matnr.replace('.','') 1010073098.JPG
   def strFileanme =  destFolder + matnr.replace('.','').replaceAll(' ','')
   def strFileSorry=  "sorry.jpg"

   println(strFileanme.length().toString())
   println ("fileName ${strFileanme}.jpg  ")

   def url ="https://onepim-content.franke.com/api/public/c4c/?division=10005&organizationalUnits=global&article=${matnr}&type=10030&res=10091&usage=em"


   def file = new File( "${strFileanme}.jpg").newOutputStream()

   try {

		file  << new URL(url).openStream()
	    file.close()

		 def f = new File("${strFileanme}.jpg")
		 f.size()==0?f.delete:println("f ist grösser 0")

       // f.size()==71286?f.delete():println("f ist grösser 0 aber vermutlich kein Bild")

        if(binaryDiff(new File(strFileSorry),f)){
            println("file is equal ")
            def a = f.delete()
           // file.close()
            println('deleted ' + a)


        }
        else{

            println("file diffs ")

        }

	//	println f.size().toString()
//		println ("file ${strFileanme}.jpg  erstellt ")
	    file_log << "${matnr} ;in Pim\r\n"

        if (f.size()==0 || f.size()==71286){
             file_notfoundlog << "${matnr} ;in Pim\r\n"
		}
		else {
		    file_log << "${matnr} ;in Pim\r\n"
            file_gefunden++
		}

	}
	catch (Exception e){
 //        println(e.message)
//	      println ("file ${strFileanme}.jpg  nicht erstellt ")
	      file_notfoundlog << "${matnr} not in Pim\r\n"
          file.close()
          def f = new File("${strFileanme}.jpg")
		  println('datei zum Löschen'  f.exists())
		   def a =  f.delete()
//		  println("${a}    ${f.size()}")
//		  println("${f.name} gelöscht")
	//	  x=null
	 }
}

def file_counter(File f){
     def i=0
     println(f.name)
     f.eachLine {String l->
        println(l)
        i++
     }
     return i

}

def binaryDiff(File a, File b) throws IOException {
    if(a.length() != b.length()){
        return false;
    }

    final int BLOCK_SIZE = 1024;
    InputStream aStream = new FileInputStream(a);
    InputStream bStream = new FileInputStream(b);
    byte[] aBuffer = new byte[BLOCK_SIZE];
    byte[] bBuffer = new byte[BLOCK_SIZE];
    while (true) {
        int aByteCount = aStream.read(aBuffer, 0, BLOCK_SIZE);
        bStream.read(bBuffer, 0, BLOCK_SIZE);
        if (aByteCount < 0) {
            aStream.close();
            bStream.close();
            return true;
        }
        if (!Arrays.equals(aBuffer, bBuffer)) {
            aStream.close();
            bStream.close();
            return false;
        }
    }
}
