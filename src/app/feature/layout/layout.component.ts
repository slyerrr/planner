import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `    
    <mat-sidenav-container id="sidenav-fab-container">
      <mat-sidenav #sidenav class="sidenav" mode="side" opened="false">
        <app-side-nav></app-side-nav>
      </mat-sidenav>
      <div id="content-wrapper">
        <app-head-nav [sidenav]="sidenav"></app-head-nav>
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
      </div>
    </mat-sidenav-container>
  `,
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
