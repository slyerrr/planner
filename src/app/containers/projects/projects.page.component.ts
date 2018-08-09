import {Component, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { select, Store } from '@ngrx/store';
// import {getProjectsList, getProjectsListLength, getProjectsListLoading, State} from '../../shared/reducers/index';
import {LoadProjectsAction} from '../../shared/actions/projects.actions'; // refactor inlcude in one place !

import * as ProjectsActions from '../../core/actions/project.actions';
import * as fromRoot from '../../core/reducers';
import * as fromProjects from '../../core/reducers/projects.reducer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row">
      <div class="col-sm-4">
        <h2> Projects </h2>
      </div>
      <div class="col-sm-8 text-right headline__buttons">
        <a mat-raised-button color="accent" routerLink="/projects/new">
          <mat-icon>add</mat-icon>
          Add new project
        </a>
      </div>
    </div>

    <div class="panel">
      <div class="panel-body">
        <div class="content__sidebar">
          <app-projects-sidebar #sideBar
                                (filterByStatus)="filterByStatus($event)"
                                (filterByTags)="filterByTags($event)"
                                (filterByName)="filterByName($event)"
                                (filterByOwner)="filterByOwner($event)">
          </app-projects-sidebar>
        </div>


        <div class="content__box">

          <div class="content__box__header">
            <!--<app-projects-header (sortByColumn)="sortByColumn($event)"-->
                                 <!--(selectView)="showAsList = $event">-->

            <!--</app-projects-header>-->
          </div>


          <div class="clearfix"></div>
          <mat-divider></mat-divider>


          <app-content-loading [loading]="projectsLoading$ | async"></app-content-loading>

          <app-projects-list *ngIf="showAsList"
                             [loading]="projectsLoading$ | async"
                             [projects]="projects$ | async"
                             (pagination)="pagination($event)"
                             (filterByName)="filterByName($event)">
          </app-projects-list>

          <app-projects-table *ngIf="!showAsList"
                              [loading]="projectsLoading$ | async"
                              [projects]="projects$ | async"
                              (pagination)="pagination($event)"
                              (filterByName)="filterByName($event)">
          </app-projects-table>

          <mat-divider></mat-divider>

          <app-pagination [length]="projectsLength$ | async" (pagination)="pagination($event)"></app-pagination>


        </div>

      </div>
    </div>
  `,
})
export class ProjectsPageComponent {

  projectsParams: Object = {
    _page: 1,
    _limit: 10
  };

  projects$: Observable<Object>;

  projectsLoading$: Observable<boolean>;

  projectsLength$: Observable<number>;

  loading: boolean = false;

  showAsList: boolean = true;


  constructor(private store: Store<fromRoot.State>) {
  // constructor(private store: Store<State>) {

     // this.store.dispatch(new LoadProjectsAction({request: this.projectsParams}));
    this.store.dispatch(new ProjectsActions.GetProjects({}));
    //
    //  this.projects$ = this.store.select(getProjectsList);
     this.projects$ = this.store.pipe(select(fromRoot.getProjectsList));
    // this.projectsLoading$ = this.store.select(getProjectsListLoading);
    // this.projectsLength$ = this.store.select(getProjectsListLength);


    /**
     *
     *
     * jesli loading to blokujemy status tez, sortowanie, kliaknie wszelkie.
     * podpiecie message jesli jest error z servisem
     *
     * tagi ?
     *
     * spinner loader
     * spinner przechodzenie miedzy page
     *
     * notification
     *
     *

     * responsywnosc
     *


     */


    /*
    combineLatest i pobierac tagi, ownerow itp itd.
     */

  }

  sortByColumn(column: string) {
    this.projectsParams = {...this.projectsParams, _sort: column['value']};
   // this.store.dispatch(new LoadProjectsAction({request: this.projectsParams}));
  }

  pagination(params: object) {
    this.projectsParams = {...this.projectsParams, _page: params['pageIndex'], _limit: params['pageSize']};
   // this.store.dispatch(new LoadProjectsAction({request: this.projectsParams}));
  }

  filterByName(name: string) {
    this.projectsParams = {...this.projectsParams, name_like: name};
  //  this.store.dispatch(new LoadProjectsAction({request: this.projectsParams}));
  }

  filterByStatus(status: string) {
    this.projectsParams = {...this.projectsParams, status};
    //this.store.dispatch(new LoadProjectsAction({request: this.projectsParams}));
  }

  filterByTags(tag: any) {
    console.log('tag', tag.checked, tag.source.value); // boolean, value
  }


}
