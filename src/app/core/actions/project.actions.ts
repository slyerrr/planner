import { Action } from '@ngrx/store';


export enum ProjectsActionTypes {
  GetProjects = '[Projects] Projects',
  GetProjectsSuccess = '[Projects] Projects Success',
  GetProjectsFailure = '[Projects] Projects Failure',
}

export class GetProjects implements Action {
  readonly type = ProjectsActionTypes.GetProjects;

  constructor(public payload: any) {}
}

export class GetProjectsSuccess implements Action {
  readonly type = ProjectsActionTypes.GetProjectsSuccess;

  constructor(public payload: any) {}
}

export class GetProjectsFailure implements Action {
  readonly type = ProjectsActionTypes.GetProjectsFailure;

  constructor(public payload: any) {}
}

// export class LoginSuccess implements Action {
//   readonly type = AuthActionTypes.LoginSuccess;
//
//   constructor(public payload: { user: User }) {}
// }
//
// export class LoginFailure implements Action {
//   readonly type = AuthActionTypes.LoginFailure;
//
//   constructor(public payload: any) {}
// }
//
// export class LoginRedirect implements Action {
//   readonly type = AuthActionTypes.LoginRedirect;
// }
//
// export class Logout implements Action {
//   readonly type = AuthActionTypes.Logout;
// }

export type ProjectsActionUnion =
  | GetProjects
  | GetProjectsSuccess
  | GetProjectsFailure;
