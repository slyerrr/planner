// import {Actions, ActionTypes} from '../actions/projects.actions';
// import {createSelector} from 'reselect';
//
// export interface State {
//
//   list: {
//     request: Object;
//     response: Object;
//     error: Error;
//     pending: boolean;
//     length: number;
//   };
//
// }
//
// export const initialState: State = {
//  list: {
//    request: null,
//    response: null,
//    error: null,
//    pending: false,
//    length: 0,
//  }
//
//
// };
//
// export function reducer(state: any = initialState, action: Actions): State {
//
//   switch (action.type) {
//
//     case ActionTypes.LOAD_PROJECTS:
//       return Object.assign({}, state, {
//         list: {...state.list, ...action.payload, pending: true}
//       });
//
//
//     case ActionTypes.LOAD_PROJECTS_SUCCESS:
//     case ActionTypes.LOAD_PROJECTS_FAIL:
//       return Object.assign({}, state, {
//         list: {...state.list, ...action.payload, pending: false}
//       });
//
//     default: {
//
//
//
//       return state;
//     }
//
//   }
// }
//
// export const projectsList = (state: State) => state.list.response;
// export const projectsLoading = (state: State) => state.list.pending;
// export const projectsLength = (state: State) => state.list.length;
//
//
//
