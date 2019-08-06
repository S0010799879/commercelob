import { Component, OnInit , OnDestroy} from '@angular/core';
import { CommercepicService } from './../../commercepic.service';

@Component({
  selector: 'app-pim',
  templateUrl: './pim.component.html',
  styleUrls: ['./pim.component.css']
})

export class PimComponent implements OnInit, OnDestroy {

  constructor(public comService: CommercepicService) { };

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



  ngOnInit() {

    this.comService.getmatFunUpdateListener()
                   .subscribe((funNr: string) => {
              this.matnr = funNr;
              this._setPimUrl () ;
             // alert( 'FunNr subscripbe' + funNr);
                 });
           this.matnr = this.comService.getMatFun();
           this._setPimUrl();
      }



      loadPim(matnr){

            this.matnr = matnr.trim();
            this._setPimUrl();

      }
      ngOnDestroy() {



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



