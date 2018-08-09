import {Component, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from "@ngrx/store";
// import {getProjectsList, getProjectsListLoading, State} from "../../shared/reducers/index";
import {LoadProjectsAction} from "../../shared/actions/projects.actions"; // refactor inlcude in one place !


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row">
      <div class="col-sm-4">
        <h2> Edit Project </h2>
      </div>
    </div>

    <div class="panel">
      <div class="panel-body">



        <div class="content__box">

          <app-project-form></app-project-form>

        </div>

      </div>
    </div>
  `,
})
export class ProjectEditPageComponent {

  // * wewnatrz tworzenia projektu ma byc typehad po pracownikach.
  // trim dodac do inputow

  /*
  zalezne od linka albo Edit Project  albo New Project
   */



  // constructor(private store: Store<State>) {
  constructor() {
  }



}
