import {Actions, ActionTypes} from '../actions/projects.actions';

// import { Channel } from '../models/channel.model';


export interface State {

  list: {
    request: Object;
    data: Object;
    error: Error;
    pending: boolean;
  };

}

export const initialState: State = {
 list: {
   request: null,
   data: null,
   error: null,
   pending: false
 }


};

export function reducer(state: any = initialState, action: Actions): State {

  switch (action.type) {
    case ActionTypes.LOAD_PROJECTS:
      return Object.assign({}, state, {
        list: {
          request: action.payload.parameters,
          data: null,
          error: null,
          pending: true
        }
      });
    case ActionTypes.LOAD_PROJECTS_SUCCESS:
      return Object.assign({}, state, {
        list: {
          request: state.list.request,
          data: action.payload,
          error: null,
          pending: true
        }
      });
    case ActionTypes.LOAD_PROJECTS_FAIL:
      return Object.assign({}, state, {
        list: {
          request: state.list.request,
          data: null,
          error:  action.payload,
          pending: false
        }
      });


    default: {
      return state;
    }

  }
}

export const projectsList = (state: State) => state.list.data;
export const projectsLoading = (state: State) => state.list.pending;



