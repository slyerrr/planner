import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


// components


// operators
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdInputModule} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [


  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    MdButtonModule,
    MdInputModule
  ],

})
export class GlobalSharedModule {
}
