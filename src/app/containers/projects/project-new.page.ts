import {Component, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
// import {getProjectsList, getProjectsListLoading, State} from '../../shared/reducers/index';
import {LoadProjectsAction} from '../../shared/actions/projects.actions'; // refactor inlcude in one place !


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row">
      <div class="col-sm-4">
        <h2> New Project </h2>
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
export class ProjectNewPageComponent {

  // * wewnatrz tworzenia projektu ma byc typehad po pracownikach.
  // trim dodac do inputow

  /*

  formatki:
   - nazwa
   - owner typehead
   - description as textarea
   - kraj select/typehead
   - Cost
   - status : open - skoro nowy projekt ma byc wybrany
   - start i end date
   - category : IT, Other

   - dodawanie userow z bazy danych do projektu

   - tagi

  ladda when form saved ?
  zalezne od linka albo Edit Project  albo New Project
  Stautus : Open, skoro nowy projekt
  dodac description jako textarea
  cost jako jakis component js
  Owner z tablicy
  project color
  start date i end date z datepickera
  wybor kraju z tablicy
  dodawanie usera : z bazy danych z listy
  Category : IT, Other, itp
  stuatus: open, in progress, completed
  Owner projektu z typeheada

  buttony : save changes
  Cancel
  trimm na inputach
  flaga submitted
  gwiazdki do mandatory rzeczy
  Tagi

  walidacja jakas fancy, animacje
  hinty : https://material.angular.io/components/form-field/overview


  - oWner ma byc type3333333333333333333333333333333333333headem



   */


  //constructor(private store: Store<State>) {

    constructor() {

  }


}
