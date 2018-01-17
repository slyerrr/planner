import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-content-loading',
  template: `
    <div class="spinner" *ngIf="loading">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  `
})

export class ContentLoadingComponent{

  @Input() loading: boolean = false;

  constructor() {

  }


}
