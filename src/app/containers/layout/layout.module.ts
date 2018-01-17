import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from '../../feature/layout/layout.component';
import {LayoutPageComponent} from './layout.page.component';
import {MatButtonModule, MatInputModule, MatIconModule, MatMenuModule, MatSidenavModule} from '@angular/material';
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
      },
      {
        path: 'calendar',
        loadChildren: '../calendar/calendar.module#CalendarModule'
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
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    LayoutPageComponent
  ]

})
export class LayoutModule {
}
