import { Component, OnInit , OnDestroy} from '@angular/core';
import { CommercepicService } from './../../commercepic.service';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
  host = 'https://onepim-content.franke.com/api/public/c4c/?division=10005&organizationalUnits=global';

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
r


     _check_Pim( f) {
      let url =  this.host +  '&article=' + this.matnr + '&type=10030&res=' + this.resPic[0] + '&usage=em';
      console.log(url);
      this.http.get(url, this.httpOptions).subscribe((resultBlob: Blob) => {
        let downloadURL = URL.createObjectURL(resultBlob);

      //  window.open(downloadURL);

      })

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

