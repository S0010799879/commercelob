import { SetupComponent } from './components/setup/setup.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { FuploadComponent } from './components/fupload/fupload.component';
import { PimComponent } from './components/pim/pim.component';


const routes: Routes =[
     { path: '', component: FuploadComponent  },
     {  path:  'setup', component: SetupComponent},
     {  path:  'pim',  component:  PimComponent}

];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {}
