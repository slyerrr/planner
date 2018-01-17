// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';


import {IPAS_ROUTER_PROVIDERS, routing} from './app.routes';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducer} from './shared/reducers/index';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppHttpInterceptor} from './shared/services/http.interceptor';
import {MatProgressBarModule} from '@angular/material';
import {LoaderComponent} from './shared/components/loader.component';
import {CanActivateAuthGuard} from "./shared/guards/auth.guard";
import {AuthService} from "./shared/services/auth.service";
import {Http, HttpModule} from "@angular/http";


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
    RouterStoreModule.connectRouter(),
    StoreModule.provideStore(reducer, {
      router: window.location.pathname + window.location.search
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    },
    IPAS_ROUTER_PROVIDERS,
    AuthService,
    CanActivateAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
