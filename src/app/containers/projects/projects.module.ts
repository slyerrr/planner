import {NgModule} from '@angular/core';

import {ProjectsPageComponent} from './projects.page.component';

import {
  MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdIconModule, MdInputModule, MdListModule,
  MdPaginatorModule,
  MdRadioModule, MdSelectModule, MdTableModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {GlobalSharedModule} from '../../shared/modules/global-shared.module';
import {CommonModule} from '@angular/common';
import {ProjectsSidebarComponent} from "../../feature/projects/projects-sidebar/projects-sidebar.component";
import {FormsModule} from "@angular/forms";
import {ProjectsListComponent} from "../../feature/projects/projects-list/projects-list.component";
import {EffectsModule} from "@ngrx/effects";
import {ProjectsEffects} from "../../shared/effects/projects.effects";
import {ProjectsService} from "../../shared/services/projects.service";


const routes: Routes = [
  {path: '', component: ProjectsPageComponent}
];


@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectsSidebarComponent,
    ProjectsListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    EffectsModule.run(ProjectsEffects),
    CommonModule,
    // CommonModule
     GlobalSharedModule,
    FormsModule,
    // MdButtonModule,
    // MdInputModule
    MdAutocompleteModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    MdDatepickerModule,
    MdSelectModule,
    MdRadioModule,
    MdPaginatorModule,
    MdTableModule
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
