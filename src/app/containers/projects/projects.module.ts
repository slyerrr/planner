import {NgModule} from '@angular/core';

import {ProjectsPageComponent} from './projects.page.component';
import {RouterModule, Routes} from '@angular/router';
import {GlobalSharedModule} from '../../shared/modules/global-shared.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';


import {ProjectsListComponent} from '../../feature/projects/list/projects-list.component';
import {ProjectsSidebarComponent} from '../../feature/projects/sidebar/projects-sidebar.component';
// import {ProjectsHeaderComponent} from '../../feature/projects/list/projects-header.component';
import {ProjectFormComponent} from '../../feature/projects/form/project-form.component';
import {ProjectsTableComponent} from '../../feature/projects/table/projects-table.component';
import {ProjectNewPageComponent} from './project-new.page';
import {ProjectEditPageComponent} from './project-edit.page';

import {CanActivateAuthGuard} from '../../shared/guards/auth.guard';

import {ProjectsEffects} from "../../core/effects/projects.effects";
import {ProjectsService} from "../../core/services/projects.service";

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
  //  canActivate: [CanActivateAuthGuard]
  },
  {
    path: 'new',
    component: ProjectNewPageComponent
  },
  {
    path: ':id',
    component: ProjectEditPageComponent
  }
];


@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectsSidebarComponent,
    ProjectsListComponent,
    ProjectFormComponent,
    ProjectNewPageComponent,
    ProjectEditPageComponent,
    ProjectsTableComponent,
  //  ProjectsHeaderComponent
  ],
  imports: [
    RouterModule.forChild(routes),
   // EffectsModule.forRoot([ProjectsEffects]),
    CommonModule,
    // CommonModule
    GlobalSharedModule,
    FormsModule,
    EffectsModule.forFeature([ProjectsEffects])
    // MatButtonModule,
    // MatInputModule
    // MatAutocompleteModule,
    // MatCheckboxModule,
    // MatInputModule,
    // MatRadioModule,
    // MatListModule,
    // MatIconModule,
    // MatButtonModule,
    // MatDatepickerModule,
    // MatSelectModule,
    // MatRadioModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatTableModule,
    // MatFormFieldModule,
    // MatCommonModule
  ],
  exports: [
    ProjectsPageComponent,
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule {
}
