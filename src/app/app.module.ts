// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';


import {IPAS_ROUTER_PROVIDERS, routing} from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    routing
  ],
  providers: [IPAS_ROUTER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
