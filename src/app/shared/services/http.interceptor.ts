import {Inject, Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import {environment} from "../../../environments/environment";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  private restServer: string;

  constructor() {
    this.restServer = environment.restServer;
  }


  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      url: this.restServer + req.url
    });

    return next.handle(req);
  }


}
