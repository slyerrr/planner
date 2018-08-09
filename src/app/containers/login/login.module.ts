import {NgModule} from '@angular/core';

import {LoginPageComponent} from './login.page.component';
import {LoginComponent} from '../../feature/login/login.component';

// import {MatButtonModule, MatInputModule, MatFormFieldModule, MatCommonModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {GlobalSharedModule} from '../../shared/modules/global-shared.module';
// import {MatFormFieldModule} from "@angular/material/form-field";
// import {MatInputModule} from "@angular/material/input";
//
// import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {path: '', component: LoginPageComponent}
];


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    GlobalSharedModule,
    // MatButtonModule,
    // MatInputModule,
    // MatFormFieldModule,



  ],
  exports: [
    LoginPageComponent,
    LoginComponent
  ]
})
export class LoginModule {
}
