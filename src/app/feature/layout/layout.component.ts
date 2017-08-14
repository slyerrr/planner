import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <md-sidenav-container id="sidenav-fab-container">
      <md-sidenav #sidenav class="sidenav" mode="side" opened="true">
        <app-side-nav></app-side-nav>
      </md-sidenav>
      <div id="content-wrapper">
        <app-head-nav [sidenav]="sidenav"></app-head-nav>
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
      </div>
    </md-sidenav-container>
  `,
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
