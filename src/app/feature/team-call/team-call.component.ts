// import {Component, OnInit} from '@angular/core';
//
// import {MdDialog, MdDialogRef} from '@angular/material';
//
//
// @Component({
//   selector: 'app-team-call',
//   templateUrl: './team-call.component.html',
//   styleUrls: ['./team-call.component.scss']
// })
// export class TeamCallComponent implements OnInit {
//   selectedOption: string;
//
//   constructor(public dialog: MdDialog) {
//   }
//
//   ngOnInit() {
//   }
//
//   public invokeAction() {
//     let dialogRef = this.dialog.open(TeamCallDialogComponent);
//     dialogRef.afterClosed().subscribe(result => {
//       this.selectedOption = result;
//     });
//   }
//
// }
//
// @Component({
//   selector: 'app-team-call-dialog',
//   templateUrl: './team-call-dialog.component.html',
// })
// export class TeamCallDialogComponent {
//   constructor(public dialogRef: MdDialogRef<TeamCallDialogComponent>) {
//   }
// }
