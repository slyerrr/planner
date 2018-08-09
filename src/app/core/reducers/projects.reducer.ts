import {
  ProjectsActionUnion,
  ProjectsActionTypes,
} from '../actions/project.actions';

export interface State {
  list: {
    request: Object;
    response: Object;
    error: Error;
    pending: boolean;
    length: number;
  };
}

const initialState: State = {
  list: {
    request: null,
    response: null,
    error: null,
    pending: false,
    length: 0,
  }
};

export function reducer(state: State = initialState,
                        action: ProjectsActionUnion): State {
  switch (action.type) {

    case ProjectsActionTypes.GetProjects:
      return Object.assign({}, state, {
        list: {...state.list, ...action.payload, pending: true}
      });


    case ProjectsActionTypes.GetProjectsSuccess:
      return Object.assign({}, state, {
        list: {...state.list, ...action.payload.projects, pending: false}
      });

    case ProjectsActionTypes.GetProjectsFailure:
      return Object.assign({}, state, {
        list: {...state.list, ...action.payload.error, pending: false}
      });

    default:
      return state;
  }
}

export const projectsList = (state: State) => state.list.response;
export const projectsLoading = (state: State) => state.list.pending;
export const projectsLength = (state: State) => state.list.length;
