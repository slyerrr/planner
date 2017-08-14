import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from '../../feature/layout/layout.component';
import {LayoutPageComponent} from './layout.page.component';
import {MdButtonModule, MdInputModule, MdIconModule, MdMenuModule, MdSidenavModule} from '@angular/material';
import {HeadNavModule} from '../../feature/layout/head-nav/head-nav.module';
import {RouterModule, Routes} from '@angular/router';
import {GlobalSharedModule} from '../../shared/modules/global-shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {SideNavComponent} from '../../feature/layout/side-nav/side-nav.component';
import {HeadNavComponent} from '../../feature/layout/head-nav/head-nav.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'projects',
        loadChildren: '../projects/projects.module#ProjectsModule'
      }
    ]
  }
];

@NgModule({
  declarations: [
    LayoutPageComponent,
    SideNavComponent,
    HeadNavComponent,
    LayoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    GlobalSharedModule,
    MdSidenavModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule
  ],
  exports: [
    LayoutPageComponent
  ]

})
export class LayoutModule {
}
