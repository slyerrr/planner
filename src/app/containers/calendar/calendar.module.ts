import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule as AngularCalendar} from 'angular-calendar';

import {
  MatTabsModule, MatButtonModule, MatListModule, MatDialogModule, MatNativeDateModule,
  MatOptionModule, MatInputModule, MatDialogRef, MatDialog
} from '@angular/material';
import {CommonModule} from '@angular/common';
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CalendarComponent, CalendarDialogComponent} from '../../feature/calendar/calendar.component';
import {CalendarHeaderComponent} from '../../feature/calendar/calendar-header/calendar-header.component';
import {Routes, RouterModule} from "@angular/router";
import {CalendarPageComponent} from "./calendar.page.component";
import {CanActivateAuthGuard} from "../../shared/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: CalendarPageComponent,
  //  canActivate: [CanActivateAuthGuard]
  },
];


@NgModule({
  declarations: [
    CalendarPageComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    CalendarDialogComponent
  ],
  bootstrap: [CalendarDialogComponent, CalendarComponent],
  imports:      [
    RouterModule.forChild(routes),
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularCalendar.forRoot(),
    MatTabsModule,
    MatButtonModule,
    // NgbModal,
    MatListModule,
    MatDialogModule,
    MatNativeDateModule,
    MatOptionModule,
    MatInputModule,
  ],
  exports: [
    CalendarPageComponent
  ]
})
export class CalendarModule {}
