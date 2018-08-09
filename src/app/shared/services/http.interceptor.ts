import {Inject, Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  private restServer: string;

  constructor() {
    this.restServer = environment.restServer;
  }


  intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    request = request.clone({
      url: this.restServer + request.url
    });

    return next.handle(request);
  }


}
