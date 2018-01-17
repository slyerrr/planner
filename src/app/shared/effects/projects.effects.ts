import {Injectable} from '@angular/core';

// import @ngrx
import {Effect, Actions, toPayload} from '@ngrx/effects';
import {Action} from '@ngrx/store';

// import rxjs
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

// import actions
import {
  ActionTypes, LoadProjectsFailAction, LoadProjectsSuccessAction
} from '../actions/projects.actions';
import {ProjectsService} from "../services/projects.service";

@Injectable()
export class ProjectsEffects {


    constructor(private actions$: Actions, private projectsService: ProjectsService) {
    }

  @Effect()
  getProjects$: Observable<Action> = this.actions$
    .ofType(ActionTypes.LOAD_PROJECTS)
    .map(toPayload)
    .switchMap(payload => {
      return this.projectsService.getProjects(payload.request)
        .map(response => new LoadProjectsSuccessAction(response))
        .catch(error => Observable.of(new LoadProjectsFailAction({error: error})));
    });




}
