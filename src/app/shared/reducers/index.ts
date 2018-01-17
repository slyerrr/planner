// @ngrx
import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {routerReducer, RouterState} from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';
// reselect
import {createSelector} from 'reselect';

// environment


import * as projects from './projects.reducers';
import {environment} from "../../../environments/environment";

export interface State {
    router: RouterState,
    projects: projects.State,
}

const reducers = {
    router: routerReducer,
    projects: projects.reducer,

}

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

// production reducer
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

/**********************************************************
 * Projects Reducers
 *********************************************************/


export const getProjectsState = (state: State) => state.projects;

export const getProjectsList = createSelector(getProjectsState, projects.projectsList);
export const getProjectsListLoading = createSelector(getProjectsState, projects.projectsLoading);
export const getProjectsListLength = createSelector(getProjectsState, projects.projectsLength);
