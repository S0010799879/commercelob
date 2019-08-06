@Grab(group='org.codehaus.groovy.modules.http-builder', module='http-builder', version='0.7.1')
@Grab(group='org.apache.httpcomponents', module='httpmime', version='4.0-alpha3')
import groovyx.net.http.HTTPBuilder
import static groovyx.net.http.ContentType.*
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.impl.client.DefaultHttpClient;
import static groovyx.net.http.Method.GET
import static groovyx.net.http.Method.POST
import static groovyx.net.http.ContentType.JSON
import static groovyx.net.http.ContentType.HTML
import static groovyx.net.http.ContentType.XML
import static groovyx.net.http.ContentType.TEXT



//def file = new File('1350339209.jpg')
    FileBody pic = new FileBody(new File('1350339246.jpg'));

http = new HTTPBuilder('http://localhost:3000')

http.request (POST,TEXT) { multipartRequest ->

      uri.path = '/test/api/up'
    //  uri.query = [param1:value, param2:value, param3:value, param4:value]
      requestContentType = 'multipart/form-data'
      MultipartEntity mpe = new MultipartEntity()
      mpe.addPart( "photo", pic )
      multipartRequest.setEntity(mpe)

      response.success = { resp,text->
          println "POST response status: ${resp.statusLine}"
          println "Query response: ${body}"
      }

      response.failure = {  resp ->
          println "POST response statusline: ${resp.statusLine}"
      }
}