import { Component, OnInit } from '@angular/core';
import { CommercepicService } from './../../commercepic.service';
import { Cmessage, Posts } from './../../commerce.model';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatRippleModule,
  MatToolbarModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatExpansionModule
  } from '@angular/material';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  isLoading =false;
posts: Posts[];
  constructor( public comService: CommercepicService) { }

  ngOnInit() {
    this.posts = this.comService.getSetup();
  }

}




