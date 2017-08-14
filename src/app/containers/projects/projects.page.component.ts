import {Component, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1> Projects</h1>
  `,
})
export class ProjectsPageComponent {


  constructor() {

  }
}
