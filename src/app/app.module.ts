// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';


import {ROUTER_PROVIDERS, routing} from './app.routes';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
// import {reducer} from './shared/reducers/index';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppHttpInterceptor} from './shared/services/http.interceptor';
import {MatProgressBarModule} from '@angular/material';
import {LoaderComponent} from './shared/components/loader.component';
import {CanActivateAuthGuard} from './shared/guards/auth.guard';
import {AuthService} from './shared/services/auth.service';
import {Http, HttpModule} from '@angular/http';
import {GlobalSharedModule} from "./shared/modules/global-shared.module";

import { reducers, metaReducers } from './reducers';

import { environment } from '../environments/environment.prod';

import { CustomRouterStateSerializer } from './shared/utils';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
  routerReducer
} from '@ngrx/router-store';

import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
  ],
  imports: [
    // * wewnatrz tworzenia projektu ma byc typehad po pracownikach.
    BrowserAnimationsModule,
    MatProgressBarModule,
    HttpClientModule,
    routing,
    HttpModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),
    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
      stateKey: 'router',
    }),


    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store DevTools',
      logOnly: environment.production,
    }),

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([]),


    // RouterStoreModule.connectRouter(),
    // StoreModule.provideStore(reducer, {
    //   router: window.location.pathname + window.location.search
    // }),
    // StoreDevtoolsModule.instrumentOnlyWithExtension()

  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    },
    ROUTER_PROVIDERS,
    AuthService,
    CanActivateAuthGuard,
    /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
