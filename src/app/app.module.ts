import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { FormsliderComponent } from './formslider/formslider.component';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuploadComponent } from './components/fupload/fupload.component';
 import { HttpClientModule } from '@angular/common/http';
 import { AppRoutingModule} from './app-routing.module';
 import { HeaderComponent } from './components/header/header.component';
import { SetupComponent } from './components/setup/setup.component';
import { PimComponent } from './components/pim/pim.component';
@NgModule({
  declarations: [
    AppComponent,
    FormsliderComponent,
    FileSelectDirective,
    FuploadComponent,
    HeaderComponent,
    SetupComponent,
    PimComponent
    ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
