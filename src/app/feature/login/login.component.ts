import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/models/User';

@Component({
  selector: 'app-login',
  template: `
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="Absolute-Center is-Responsive">
            <h2 class="login">Login</h2>
            <form class="form__login card-panel" [formGroup]="loginForm" (ngSubmit)="loginSubmit($event)"
                  novalidate #form="ngForm" autocomplete="off">
              <div *ngIf="showError" class="form__errorBlock">
                Error trying to login!
              </div>
              <div class="group"
                   [ngClass]="{'form__group--error' : !loginForm.controls['username'].valid && form.submitted}">
                <md-input-container>
                  <input mdInput placeholder="Username" [(ngModel)]="user.username" ngControl="username"
                         formControlName="username">
                </md-input-container>
                <div *ngIf="!loginForm.controls['username'].valid && form.submitted"
                     class="form--error">This field is required.
                </div>
              </div>
              <div class="group"
                   [ngClass]="{'form__group--error' : !loginForm.controls['password'].valid && form.submitted}">
                <md-input-container>
                  <input mdInput placeholder="Password" [(ngModel)]="user.password" ngControl="password"
                         formControlName="password">
                </md-input-container>
                <div *ngIf="!loginForm.controls['password'].valid && form.submitted"
                     class="form--error">This field is required.
                </div>
              </div>
              <button md-raised-button color="accent">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  private showError: boolean = false;

  private user: User = {
    username: '',
    password: ''
  };

  private loginForm: FormGroup;

  constructor(private builder: FormBuilder) {

    this.loginForm = builder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });

  }

  ngOnInit() {
  }

  private loginSubmit(): void {
    if (this.loginForm.valid && this.loginForm.dirty) {
      console.log(this.loginForm);
    }
  }

}
