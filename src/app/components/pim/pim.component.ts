import { Component, OnInit , OnDestroy} from '@angular/core';
import { CommercepicService } from './../../commercepic.service';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse, HttpParams  } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pim',
  templateUrl: './pim.component.html',
  styleUrls: ['./pim.component.css']

})

export class PimComponent implements OnInit, OnDestroy {

  constructor(public comService: CommercepicService , public http: HttpClient) { };
  firstName:string;
  lastName:string;
  matnr: string;
  pimok:String;
  host =   'https://onepim-content.franke.com/api/public/c4c/?division=10005&organizationalUnits=global';
  URLPim = 'http://localhost:3000/api/down/pim';
 resPic: String[] = ['10091', '10092', '10090', '10088', '10086'];
 resDraw: String[] = ['10263', '10264'];

 resValPic: string[] = ['486x486', '640x640', '390x390', '250x250', '1000x1000'];
 resValDraw: string[] = ['640x640', '860x860'];


 artikelt1 = '&article=' + this.matnr + '&type=10031&res=10264&usage=em';
 artikelt2 = '&article=' + this.matnr + '&type=10032&res=10263&usage=em';


 imgPic: String [] = [];
 imgDraw: String [] = [];

 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': "image/jpeg",
    'Access-Control-Allow-Origin': '*'

  })
};

  ngOnInit() {

    this.comService.getmatFunUpdateListener()
                   .subscribe((funNr: string) => {
                    this.matnr = funNr;
                    this._setPimUrl () ;
                 });
           this.matnr = "122.0374.690" ; // this.comService.getMatFun();

           this._setPimUrl();
      }



      loadPim(matnr){
           this._setPimUrl();
      }

      ngOnDestroy() {
     }
      _submit(f) {
        console.log(f)

      }


      setMatnr (cid) {

        console.log ("CID   " + cid)
      }


   _check_Pim( f) {

    let params = new HttpParams();
        params = params.append('image', this.matnr);
        params = params.append('responseType', 'text');

      console.log(this.URLPim);
      this.http.get(this.URLPim,{params:params}).subscribe(res => {
        console.log(res)
        var info=JSON.parse(JSON.stringify(res));
        console.log(info)
        console.log(info.status);




       }) ;

      }

      _setPimUrl () {
    let i;
    for (i = 0 ; i < 5 ; i++) {
      this.imgPic[i] = this.host +  '&article=' + this.matnr + '&type=10030&res=' + this.resPic[i] + '&usage=em';
    }
    for (i = 0 ; i < 2 ; i++) {
      this.imgDraw[i] = this.host +  '&article=' + this.matnr + '&type=10031&res=' + this.resDraw[i] + '&usage=em';
    }
  }
}

