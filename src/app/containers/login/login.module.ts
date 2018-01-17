import {NgModule} from '@angular/core';

import {LoginPageComponent} from './login.page.component';
import {LoginComponent} from '../../feature/login/login.component';

import {MatButtonModule, MatInputModule, MatFormFieldModule, MatCommonModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {GlobalSharedModule} from '../../shared/modules/global-shared.module';

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
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule


  ],
  exports: [
    LoginPageComponent,
    LoginComponent
  ]
})
export class LoginModule {
}
