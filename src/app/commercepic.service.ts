import { Injectable , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Cmessage,  Posts } from './commerce.model';
import { allSettled } from 'q';
import { FileItem } from 'ng2-file-upload';

@Injectable({
  providedIn: 'root'
})



export class CommercepicService {
  constructor(private http: HttpClient, private router: Router) {   }
 matFun: string;
 message: Cmessage;
 messageUpdated = new Subject <Cmessage> ();
 matFunUpdated =  new  Subject <String>();
 matFunOrg: String;
 matFunFile: FileItem;

 lPost: Posts[];

  getMessage() {
      this.message = {msg: 'ok'};
        return this.message;
   }

   getMessageUpdateListener() {
    return this.messageUpdated.asObservable();
  }

  getmatFunUpdateListener() {
    return this.matFunUpdated.asObservable();
  }


  set_Message(mess) {

     this.message = {msg: 'ok'};
     this.message.msg = mess;
     this.messageUpdated.next(this.message);
 }

   getMessage1() {
       return 'ok';
 }


   setMatFun(matFun, f: FileItem) {

       console.log('matFun' + matFun);
       this.matFunOrg = matFun;
       this.matFun = this._convert2FunNr(matFun);
       this.matFunUpdated.next(this.matFun) ;
       this.matFunFile = f;
   }

   getMatFunOrg() {

    return this.matFunOrg;
   }

    getMatFun() {
         return this.matFun;

    }
    getMatFile() {
      return this.matFunFile;
    }

   _convert2FunNr(matnr) {


      return matnr.substring(0, 3) + '.' + matnr.substring(3, 7) + '.' + matnr.substring(7, 10)    ;

   }

   getSetup() {
    this.lPost = [
               {id: '1' ,
               title: 'title1',
               content: 'content2'} ,
               {id: '2',
               title: 'title2 ',
               content: 'content2'}

      ];
      return this.lPost;
   }

}
