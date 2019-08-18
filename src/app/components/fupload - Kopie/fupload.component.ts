import { CommercepicService } from './../../commercepic.service';
import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective, FileItem } from 'ng2-file-upload/ng2-file-upload';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, flatMap } from 'rxjs/operators';
import { Cmessage, Posts } from './../../commerce.model';
import { ChildActivationStart } from '@angular/router';
const URL = 'http://localhost:3000/api/up';


@Component({
  selector:   'app-fupload',
  templateUrl: './fupload.component.html',
  styleUrls: [ './fupload.component.css']
})
export class FuploadComponent implements OnInit {
  constructor(public sanitizer:DomSanitizer, public http: HttpClient, public comService: CommercepicService) {
  }
  selected = true;
  fileName: String  = 'no Image';
  localImageUrl: String = '';
  displayMsg: String = 'Test';
  isLoading: Boolean = false ;
  cmessage: Cmessage;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'text/html'
    })
  };

  res_208: String = '208Wx208H';
  res_500: String = '500Wx500H';
  res_162: String = '162Wx162H';
  res_104: String = '104Wx104H';

  f_104: String = '';
  f_162: String = '';
  f_208: String = '';
  f_500: String = '';
  f_http: String = ' //localhost:3000/api/down?image=';
  f_http_: String = '//localhost:3000/api/check?image=';
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  ngOnInit() {
          this.comService.getMessageUpdateListener()
          .subscribe((cmessage: Cmessage) => {
              this.cmessage = cmessage;
              this.displayMsg = cmessage.msg;
              });

             this.fileName =  this.comService.getMatFunOrg() + '.jpg';

             if (this.fileName) {
               console.log(this.fileName);

           //    this.comService.getMatFile();
               this._initFname(this.fileName);
                let a: FileItem [];

                console.log(this.comService.getMatFile());
            //    a[0] = this.comService.getMatFile();
               // a.push('asdfa');
               //this.uploader.addToQueue( a );

               //this.uploader.addToQueue();

              }

           //  alert('ngOnInit =>' + this.fileName);
             this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false;
              this.fileName = file.file.name;

              let url1 = (window.URL) ? window.URL.createObjectURL(file._file) : (window as any).webkitURL.createObjectURL(file._file);
              this.localImageUrl = url1;
              this._initFname(this.fileName);

              console.log('==>' + this.fileName.replace('.jpg', '').replace('picture', '')  );
              this.comService.setMatFun(this.fileName.replace('.jpg', '').replace('picture', '') , file  );
       //   alert(file._file.name);

      } ;
          this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        //  alert('ImageUpload:uploaded:', item, status, response);
        // alert(' File uploaded successfully');

      };

      this.uploader.onSuccessItem  = (item: any, response: any, status: any, headers: any) => {
      //  alert('ImageUpload:uploaded Success:', item, status, response);

        setTimeout(() => {
          this._testExist(this.fileName);
          this.isLoading = false;
                 },
               2000);
             };
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


  upload()  {
    this.isLoading = true ,
    this.uploader.uploadAll();
  }

  refresh_()  {
   //  alert(this.fileName);
   // alert(this.uploader)

     this.uploader.clearQueue();
     //  this._initFname('');
     // this._initFname(this.fileName);
     this._testExist (this.fileName);
   }

   refresh() {
    this.cmessage =  this.comService.getMessage();
    this._testExist (this.fileName);
    this.comService.set_Message('erfolg!!');
  }

_testExit_2(fName) {
  this._initFname('');
  let strUrl = '';

  console.log(fName);
  strUrl  =  this.f_http_ + fName + '&res=' + this.res_104;
   this.http.request('GET', strUrl, {responseType: 'text'}).subscribe(res => {
   this.f_104 = this.f_http + res; }) ;
   console.log('URL  ==>' +  this.f_104);


   strUrl  =  this.f_http_ + fName + '&res=' + this.res_500;
   this.http.request('GET', strUrl, {responseType: 'text'}).subscribe(res => {
   this.f_500 = this.f_http + res; }) ;
    console.log('URL  ==>' +  this.f_500);

    strUrl  =  this.f_http_ + fName + '&res=' + this.res_208 ;
    this.http.request('GET', strUrl, {responseType: 'text'}).subscribe(res => {
    this.f_208 = this.f_http + res; }) ;
    console.log('URL  ==>' +  this.f_208);


    strUrl  =  this.f_http_ + fName + '&res=' + this.res_162 ;
    this.http.request('GET', strUrl, {responseType: 'text'}).subscribe(res => {
    this.f_162 = this.f_http + res ; }) ;
   console.log(this.f_162);

   }



_testExist (fName) {
  this._initFname('');
  let strUrl = '';
  fName = this.fileName;
  console.log(fName);






  strUrl  =  this.f_http_ + fName + '&res=' + this.res_500;
   this.http.request('GET', strUrl, {responseType: 'text'}).subscribe(res => {
   this.f_500 = this.f_http + res; }) ;
  console.log('URL  ==>' +  this.f_500);

   strUrl  =  this.f_http_ + fName + '&res=' + this.res_208 ;
    this.http.request('GET', strUrl, {responseType: 'text'}).subscribe(res => {
    this.f_208 = this.f_http + res; }) ;
   console.log('URL  ==>' +  this.f_208);

   strUrl  =  this.f_http_ + fName + '&res=' + this.res_104 ;
    this.http.request('GET', strUrl, {responseType: 'text'}).subscribe(res => {
    this.f_104 = this.f_http + res ; }) ;
  console.log(this.f_104);

  strUrl  =  this.f_http_ + fName + '&res=' + this.res_162 ;
   this.http.request('GET', strUrl, {responseType: 'text'}).subscribe(res => {
   this.f_162 = this.f_http + res ; }) ;
  console.log(this.f_162);

}
  _initFname(filename) {

 if (filename.length === 0) {
    this.f_104 = '';
    this.f_162 = '';
    this.f_208 = '';
    this.f_500 = '';
   // alert('leer' + this.f_500);.
  }  else {
    this.f_104 = this.f_http + filename + '&res=' + this.res_104 ;
    this.f_162 = this.f_http + filename + '&res=' + this.res_162 ;
    this.f_208 = this.f_http + filename + '&res=' + this.res_208 ;
    this.f_500 = this.f_http + filename + '&res=' + this.res_500 ;
   // alert(this.f_500);
        }
   }


}

