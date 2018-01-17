import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private base_url = 'http://127.0.0.1:3000/users';
  token: string;
  private userSource = new Subject<any>();
  user$ = this.userSource.asObservable();

  constructor(public http: Http) { }

  setUser(user: any) {
    this.userSource.next(user);
  }

  registerUser(user): Observable<boolean> {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.base_url}/register`, body, options).map( (res) => this.setToken(res) );
  }

  loginUser(user): Observable<Object> {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.base_url}/login`, body, options).map( (res) => this.setToken(res) );
  }

  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  verify(): Observable<Object> {

    let currUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = ( currUser && 'token' in currUser) ? currUser.token : this.token;
    let headers = new Headers({ 'x-access-token': token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.base_url}/check-state`, options).map( res => this.parseRes(res) );

  }

  setToken(res){
    let body = JSON.parse(res['_body']);
    if( body['success'] == true ){
      this.token = body['token'];
      localStorage.setItem('currentUser', JSON.stringify({
        email: body['user']['email'],
        token: this.token
      }));
    }
    return body;
  }

  parseRes(res){
    let body = JSON.parse(res['_body']);
    return body;
  }

}













// import {Injectable} from '@angular/core';
// import {Http, Headers, RequestOptions} from '@angular/http';
// import {Router} from '@angular/router';
//
// import {Observable} from 'rxjs/RX';
// import 'rxjs/add/operator/map';
// // import 'rxjs/Rx'; //For complete
//
// import {User} from '../interface/user.interface';
//
// @Injectable()
// export class AuthService {
//
//   public serverurl = 'http://localhost:3000/';
//   public isloggedin: boolean;
//
//   constructor(private http: Http, private router: Router) {
//
//   }
//
//   signin(user): Observable<any> {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     let options = new RequestOptions({headers: headers});
//
//     return this.http.post(this.serverurl + 'auth/signin', user, options).map(data => {
//       data = data.json();
//       return data;
//     })
//   }
//
//   signup(user): Observable<any> {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     let options = new RequestOptions({headers: headers});
//
//     return this.http.post(this.serverurl + 'auth/signup', user, options).map(data => data.json());
//   }
//
//   signout() {
//     localStorage.removeItem('token');
//   }
// }
