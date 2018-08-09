import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import {urlEncodeQueryParams} from "../../shared/utils/urlEncodeQueryParams";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProjectsService {
  constructor(private http: HttpClient) {
  }


  getProjects(params: any) {

    return this.http.get(`projects?` + urlEncodeQueryParams(params), {observe: 'response'})
      .map((res) => {
        return {response: res.body, length: res.headers.get('X-Total-Count')};
      })
      .catch((error: Error) => {
        return Observable.throw(error);
      });
  }

  // login({ username, password }: Authenticate): Observable<User> {
  //   /**
  //    * Simulate a failed login to display the error
  //    * message for the login form.
  //    */
  //   if (username !== 'test') {
  //     return throwError('Invalid username or password');
  //   }
  //
  //   return of({ name: 'User' });
  // }
  //
  // logout() {
  //   return of(true);
  // }
}
