import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  template: `
    <ul class="sidebar">
      <li class="sidebar-main">
        <a (click)="toggleSidebar()">
          PROJECT
        </a>
      </li>
      <li class="sidebar-title"><span>NAVIGATION</span></li>
      <li class="sidebar-list" *ngFor="let item of menu">
      <a routerLink="/{{item.url}}">{{item.name}} <mat-icon class="menu-icon">{{item.icon}}</mat-icon></a>
      </li>
    </ul>
  `,
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  menu: any = [
    {
      url: 'calendar',
      name: 'Calendar',
      icon: 'perm_contact_calendar'
    },
    {
      url: 'projects',
      name: 'Projects',
      icon: 'view_list'
    },
    {
      url: 'contacts',
      name: 'Contacts',
      icon: 'recent_actors'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public toggleSidebar() {
    console.log('clicked');
  }

}
