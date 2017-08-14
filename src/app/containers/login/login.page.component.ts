import {Component, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-login></app-login>
  `,
})
export class LoginPageComponent {


  constructor() {

  }
}
