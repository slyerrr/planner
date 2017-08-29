// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';


import {IPAS_ROUTER_PROVIDERS, routing} from './app.routes';
import {RouterStoreModule} from "@ngrx/router-store";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {reducer} from './shared/reducers/index'
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppHttpInterceptor} from "./shared/services/http.interceptor";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    routing,
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
    IPAS_ROUTER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
