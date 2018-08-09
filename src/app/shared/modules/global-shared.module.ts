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
// import {
//   MatButtonModule, MatCommonModule, MatFormFieldModule, MatInputModule,
//   MatPaginatorModule
// } from '@angular/material';
import {ContentLoadingComponent} from '../components/content-spinner.component';
import {PaginationComponent} from '../components/pagination.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from "@angular/material/divider";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatListModule} from "@angular/material/list";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  imports: [
    CommonModule,
    // MatCommonModule,
    // MatFormFieldModule,
    RouterModule,
    // MatButtonModule,
    // MatInputModule,
    // MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule
  ],
  declarations: [
    ContentLoadingComponent,
    PaginationComponent

  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    // MatButtonModule,
    // MatInputModule,
    ContentLoadingComponent,
    PaginationComponent,
    // MatCommonModule,
    // MatFormFieldModule,
    // MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule
  ],

})
export class GlobalSharedModule {
}
