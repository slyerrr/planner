import {Component, OnInit} from "@angular/core";


@Component({
  selector: 'app-loader',
  template: `
    <div  [class.loader-hidden]="!show">
      <div>
        <mat-progress-bar mode="indeterminate" *ngIf="show"></mat-progress-bar>
      </div>
    </div>`
})

export class LoaderComponent implements  OnInit {

  private show: boolean = true;

  constructor() {

  }

  ngOnInit(): void {
  }

}
