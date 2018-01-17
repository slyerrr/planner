import {Component, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {getProjectsList, getProjectsListLength, getProjectsListLoading, State} from '../../shared/reducers/index';
import {LoadProjectsAction} from '../../shared/actions/projects.actions'; // refactor inlcude in one place !


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row">
      <div class="col-sm-4">
        <h2> Calendar </h2>
      </div>
      
      </div>
    <div class="panel">
      <div class="panel-body">
        <div class="content__box">
          <app-calendar></app-calendar>
        </div>
        
      </div>
    </div>

  `,
})
export class CalendarPageComponent {






  constructor(private store: Store<State>) {







  }




}
