import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import { HttpClient } from '@angular/common/http';


import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {go} from '@ngrx/router-store';
import {State} from '../reducers/index';
import 'rxjs/operator/map';



@Injectable()
export class ProjectsService {


  constructor(private http: HttpClient,
              private store: Store<State>) {
  }

 getProjects(params: any) {
    return this.http.get(`projects?` + params)
      .map(res => {
        return res;
      })
      .catch((error: Error) => {
        return Observable.throw(error);
      })

  }


}