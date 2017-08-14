import {NgModule} from '@angular/core';

import {ProjectsPageComponent} from './projects.page.component';

import {MdButtonModule, MdInputModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {GlobalSharedModule} from '../../shared/modules/global-shared.module';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {path: '', component: ProjectsPageComponent}
];


@NgModule({
  declarations: [
    ProjectsPageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
   // CommonModule
    // GlobalSharedModule,
    // MdButtonModule,
    // MdInputModule
  ],
  exports: [
    ProjectsPageComponent,
  ]
})
export class ProjectsModule {
}
