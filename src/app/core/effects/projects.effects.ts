import {Injectable} from '@angular/core';

import { HttpClient } from '@angular/common/http';

// import @ngrx
import {Actions, Effect, ofType } from '@ngrx/effects';
import {Action} from '@ngrx/store';

// import rxjs
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

// import actions
// import {
//   ActionTypes, LoadProjectsFailAction, LoadProjectsSuccessAction
// } from '../actions/projects.actions';
 import {ProjectsService} from "../services/projects.service";
import { of } from 'rxjs/observable/of';

import {
  ProjectsActionTypes,
  GetProjects,
  GetProjectsSuccess,
  GetProjectsFailure,
} from '../actions/project.actions';

@Injectable()
export class ProjectsEffects {

  @Effect()
  getProjects$: Observable<Action> = this.actions$.pipe(
    ofType<GetProjects>(ProjectsActionTypes.GetProjects),
    map(action => action.payload),
    exhaustMap((auth: any) =>
      this.projectsService
        .getProjects(auth)
        .pipe(
          map(projects => new GetProjectsSuccess({ projects })),
          catchError(error => of(new GetProjectsFailure(error)))
        )
    )
  );


    // constructor(private actions$: Actions, private projectsService: ProjectsService) {
  constructor(private projectsService: ProjectsService, private actions$: Actions) {
    }

  // @Effect()
  // getProjects$: Observable<Action> = this.actions$
  //   .ofType(ActionTypes.LOAD_PROJECTS)
  //   .map(toPayload)
  //   .switchMap(payload => {
  //     return this.projectsService.getProjects(payload.request)
  //       .map(response => new LoadProjectsSuccessAction(response))
  //       .catch(error => Observable.of(new LoadProjectsFailAction({error: error})));
  //   });




}
