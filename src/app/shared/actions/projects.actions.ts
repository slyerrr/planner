// import @ngrx
import {Action} from '@ngrx/store';
import {type} from '../utils/util';


export const ActionTypes = {
  LOAD_PROJECTS: type('[Projects] Load Projects'),
  LOAD_PROJECTS_SUCCESS: type('[Projects] Load Projects Success'),
  LOAD_PROJECTS_FAIL: type('[Projects] Load Projects Fail'),

};


export class LoadProjectsAction implements Action {
  readonly type: string = ActionTypes.LOAD_PROJECTS;

  constructor(public payload: any) {
  }
}

export class LoadProjectsSuccessAction implements Action {
  readonly type: string = ActionTypes.LOAD_PROJECTS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoadProjectsFailAction implements Action {
  readonly type: string = ActionTypes.LOAD_PROJECTS_FAIL;

  constructor(public payload: Error) {
  }
}

export type Actions
  =
    LoadProjectsAction
  | LoadProjectsSuccessAction
  | LoadProjectsFailAction

