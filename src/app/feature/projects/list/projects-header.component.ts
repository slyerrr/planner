import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {go} from '@ngrx/router-store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects-header',
  template: `

    <div class="pull-left">
      
      
      <!--<mat-form-field>-->
        <!--<mat-select placeholder="Favorite food">-->
          <!--<mat-option *ngFor="let food of sortColumns" [value]="food.value">-->
            <!--{{ food.viewValue }}-->
          <!--</mat-option>-->
        <!--</mat-select>-->
      <!--</mat-form-field>-->
      
      
      
      <mat-form-field>
        <mat-select placeholder="Sort by" (change)="sortByColumn.emit($event)">
          <mat-option *ngFor="let column of sortColumns" [value]="column.value">
            {{ column.name }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>

    <div class="pull-right">
      <ul class="view-selector">
        <li [ngClass]="{'active': showAsList}" (click)="changeViewSelector('list')">List</li>
        <li [ngClass]="{'active': !showAsList}" (click)="changeViewSelector('table')">Table</li>
      </ul>
    </div>






  `,
})
export class ProjectsHeaderComponent {

  sortColumns = [
    {value: 'id', name: 'id'},
    {value: 'name', name: 'name'},
    {value: 'start', name: 'start date'},
    {value: 'end', name: 'end date'}
  ];


  showAsList: boolean = true;

  @Output() sortByColumn = new EventEmitter<any>();
  @Output() selectView = new EventEmitter<boolean>();


  constructor(private router: Router) {


  }

  changeViewSelector(view: String) {
    if (!this.showAsList && view === 'list') {
      this.showAsList = true;
      this.selectView.emit(true);
    } else if (this.showAsList && view === 'table') {
      this.showAsList = false;
      this.selectView.emit(false);
    }
  }


}
