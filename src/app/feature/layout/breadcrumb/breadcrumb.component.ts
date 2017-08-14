import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <div class="breadcrumb">
      <div class="meta">
        <div class="page">
          Dashboard
        </div>
        <div class="breadcrumb-links">
          Home / Dashboard
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
