// import {Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef} from '@angular/core';
// import {CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
// import {MdDialogRef, MdDialog} from "@angular/material";
// import {FormGroup, FormBuilder, FormControl} from "@angular/forms";
// import { colors } from './shared/colors';
//
// @Component({
//   selector: 'app-calendar',
//   templateUrl: './calendar.component.html',
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   styleUrls: ['./calendar.component.scss']
// })
// export class CalendarComponent implements OnInit {
//   view: string = 'month';
//
//   viewDate: Date = new Date();
//
//   // events: CalendarEvent[] = [];
//
//   clickedDate: Date;
//
//   selectedOption: string;
//
//
//   events: CalendarEvent[] = [{
//     title: 'Event 1',
//     color: colors.yellow,
//     start: new Date(),
//   }, {
//     title: 'Event 2',
//     color: colors.yellow,
//     start: new Date(),
//   }, {
//     title: 'Event 3',
//     color: colors.blue,
//     start: new Date(),
//   }, {
//     title: 'Event 4',
//     color: colors.red,
//     start: new Date(),
//   }, {
//     title: 'Event 5',
//     color: colors.red,
//     start: new Date(),
//   }];
//
//
//   constructor(public dialog: MdDialog) {
//   }
//
//   ngOnInit() {
//   }
//
//   dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {
//     console.log('date');
//     console.log(date);
//     console.log(events);
//     this.invokeAction();
//     // if (isSameMonth(date, this.viewDate)) {
//     //   if (
//     //     (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
//     //     events.length === 0
//     //   ) {
//     //     this.activeDayIsOpen = false;
//     //   } else {
//     //     this.activeDayIsOpen = true;
//     //     this.viewDate = date;
//     //   }
//     // }
//   }
//
//   handleEvent(action: string, event: CalendarEvent): void {
//     console.log('handleEvent');
//     console.log(action);
//     console.log(event);
//     // this.modalData = {event, action};
//     // this.modal.open(this.modalContent, {size: 'lg'});
//   }
//
//   public invokeAction() {
//     let dialogRef = this.dialog.open(CalendarDialogComponent);
//     dialogRef.afterClosed().subscribe(result => {
//       this.selectedOption = result;
//     });
//   }
//
//
// }
//
// @Component({
//   selector: 'app-calendar-event-dialog',
//   templateUrl: './calendar-event-dialog.component.html',
//   styleUrls: ['./calendar.component.scss']
// })
// export class CalendarDialogComponent implements OnInit {
//
//   statuses = [
//     {
//       view: 'Berlin',
//       value: '2'
//     },
//     {
//       view: 'Gliwice',
//       value: '3'
//     },
//     {
//       view: 'Katowice',
//       value: '4'
//     },
//     {
//       view: 'Hamburg',
//       value: '5'
//     },
//     {
//       view: 'Sick',
//       value: '6'
//     },
//     {
//       view: 'Home office',
//       value: '7'
//     },
//     {
//       view: 'Training',
//       value: '8'
//     },
//     {
//       view: 'Vacation',
//       value: '9'
//     }
//   ];
//
//   public addBookStatusForm: FormGroup;
//   public bookStatus;
//   public psp: FormControl;
//   public desc: FormControl;
//   public hours: FormControl;
//
//   bookingElements = [
//     {
//       value: '1',
//       viewValue: 'VE Sales GmbH - EVSB (B2B)---00IPI36/00---CO04.2017/I2---iPas 2.0---KSt:2320'
//     },
//     {
//       value: '2',
//       viewValue: 'VE Sales GmbH - EVSB (B2B)---00IPI36/RZ---CO04.2017/I2---iPas 2.0 - Travel time---KSt:2320'
//     },
//     {
//       value: '3',
//       viewValue: 'Internal---026W009---W00X---Holidays---KSt:2310'
//     },
//     {
//       value: '4',
//       viewValue: 'Internal---026W001---W00X---Training---KSt:2310'
//     }
//   ];
//
//   constructor(public dialogRef: MdDialogRef<CalendarDialogComponent>, private builder: FormBuilder) {
//     this.addBookStatusForm = this.builder.group({
//       psp: this.psp,
//       desc: this.desc,
//       hours: this.hours
//     });
//
//   }
//
//   ngOnInit() {
//     this.bookStatus = {};
//   }
// }
//
