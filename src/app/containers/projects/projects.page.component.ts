import {Component, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from "@ngrx/store";
import {getProjectsList, getProjectsListLoading, State} from "../../shared/reducers/index";
import {LoadProjectsAction} from "../../shared/actions/projects.actions"; // refactor inlcude in one place !


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row">
      <div class="col-sm-4">
        <h2> Projects </h2>
      </div>
      <div class="col-sm-8 text-right headline__buttons">
        <a md-raised-button color="accent" routerLink="/project/new">
          <md-icon>add</md-icon>
          Add new project
        </a>
      </div>
    </div>

    <div class="panel">
      <div class="panel-body">
        <!--<div class="container-fluid">-->
        <!--<div class="row">-->
        <!--<div class="col-sm-2">-->
        <div class="content__sidebar">
          <projects-sidebar #sideBar
                            (filterByStatus)="filterByStatus($event)"
                            (filterByTags)="filterByTags($event)"
                            (filterByOwner)="filterByOwner($event)"></projects-sidebar>
        </div>
        <!--</div>-->
        <!--<div class="col-sm-10">-->

        <div class="content__box">

          <div class="loading">


            <div class="spinner">
              <div class="rect1"></div>
              <div class="rect2"></div>
              <div class="rect3"></div>
              <div class="rect4"></div>
              <div class="rect5"></div>
            </div>
          </div>
          
          
          <projects-list
            [loading]="projectsLoading$ | async"
            [projects]="projects$ | async"
            (pagination)="pagination($event)"
            (filterByName)="filterByName($event)"
          >
          </projects-list>
        </div>
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
      </div>
    </div>
  `,
})
export class ProjectsPageComponent {

  projects$: Observable<Object>;

  projectsLoading$: Observable<boolean>;

  loading: boolean = false;


  constructor(private store: Store<State>) {

    this.store.dispatch(new LoadProjectsAction({parameters: '_page=1&_limit=10'}));

    this.projects$ = this.store.select(getProjectsList);
    this.projectsLoading$ = this.store.select(getProjectsListLoading);






    /*
    combineLatest i pobierac tagi, ownerow itp itd.
     */

  }

  pagination(params: any) {
    this.store.dispatch(new LoadProjectsAction({parameters: `_page=${params.pageIndex}&_limit=${params.pageSize}`}));
  }

  filterByName(name: string) {
    this.store.dispatch(new LoadProjectsAction({parameters: `name_like=${name}`}));
  }

  filterByStatus(status: string) {
    this.store.dispatch(new LoadProjectsAction({parameters: `status=${status}`}));
  }

  filterByTags(tag: any) {
    console.log('tag', tag.checked, tag.source.value); // boolean, value
  }

  filterByOwner(owner: string) {
    console.log('owner', owner);
  }

}
