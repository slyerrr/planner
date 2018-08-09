import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/models/User';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="Absolute-Center is-Responsive">
            <h2 class="login">Login</h2>

            <form class="form__login card-panel"
                  [formGroup]="loginForm"
                  (ngSubmit)="registerUser($event)"
                  novalidate
                  #form="ngForm"
                  autocomplete="off">
              <!--<div *ngIf="showError" class="form__errorBlock">-->
              <!--Error trying to login!-->
              <!--</div>-->
              <div class="group"
                   [ngClass]="{'form__group--error' : !loginForm.controls['username'].valid && form.submitted}">

                <mat-form-field class="example-full-width">
                  <input matInput
                         placeholder="Username"
                         value="{{user.username}}"
                         ngControl="username">
                </mat-form-field>

                <div *ngIf="!loginForm.controls['username'].valid && form.submitted"
                     class="form--error">This field is required.
                </div>
              </div>
              <div class="group"
                   [ngClass]="{'form__group--error' : !loginForm.controls['password'].valid && form.submitted}">

                <mat-form-field class="example-full-width">
                  <input matInput
                         placeholder="Password"
                         value="{{user.password}}"
                         ngControl="password"
                         formControlName="password">
                </mat-form-field>


                <div *ngIf="!loginForm.controls['password'].valid && form.submitted"
                     class="form--error">This field is required.
                </div>
              </div>
              <button mat-button color="accent">Login</button>
            </form>
          </div>
        </div>


          <!--<div class="centered-block">-->
            <!--<h2>Register</h2>-->
            <!--<form (ngSubmit)="registerUser()">-->

              <!--<div class="form-group">-->
                <!--<label for="email">Email</label>-->
                <!--<input type="email" id="email"  name="email" required>-->
              <!--</div>-->

              <!--<div class="form-group">-->
                <!--<label for="email">Password</label>-->
                <!--<input type="password" id="password" name="password" required>-->
              <!--</div>-->

              <!--<button type="submit" class="btn btn-default">Submit</button>-->
            <!--</form>-->

           <!---->
          <!--</div>-->



      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  private showError = false;

  private user: User = {
    username: '',
    password: ''
  };

  private register = {
    email: '',
    password: ''
  };

  private loginForm: FormGroup;

  private newForm: FormGroup;

  constructor(private builder: FormBuilder, private authService: AuthService, private router: Router) {

    this.loginForm = builder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });

    this.newForm = builder.group(({
      'first': [null, Validators.required]
    }));

  }

  ngOnInit() {
  }

  registerUser() {
    const register = {
      email : 'asddddd@gmail.com',
      password: 'ssj2trunks'
    };

    // this.authService.registerUser(register).subscribe((res) => {
    //   if (res['success'] === true) {
    //     this.authService.setUser(res['user']);
    //     this.router.navigate(['']);
    //   } else {
    //     console.log('message!!', res['message']);
    //   }
    // })
  }

  private loginSubmit(event): void {
    console.log('login', this.loginForm.controls);

    const register = {
      email : 'asdasdasdasd@gmail.com',
      password: 'ssj2trunks'
    };

    // this.authService.registerUser(register).subscribe((res) => {
    //   if (res['success'] === true) {
    //     this.authService.setUser(res['user']);
    //     this.router.navigate(['']);
    //   } else {
    //     console.log('message!!', res['message']);
    //   }
    // })


    //if (this.loginForm.valid && this.loginForm.dirty) {
    console.log('git');
    // this.authService.signup(this.user).subscribe(data => {
    //   console.log('data', data);
    //   if (data.success === false) {
    //     console.log('false');
    //   } else {
    //     console.log('true');
    //     localStorage.setItem('token', data.token);
    //     this.router.navigateByUrl('/projects')
    // }
    // })
    // }
  }

}
