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
      <a routerLink="/{{item.url}}">{{item.name}} <md-icon class="menu-icon">{{item.icon}}</md-icon></a>
      </li>
    </ul>
  `,
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  menu: any = [
    {
      url: 'dashboard',
      name: 'Dashboard',
      icon: 'dashboard'
    },
    {
      url: 'calendar',
      name: 'Calendar',
      icon: 'perm_contact_calendar'
    },
    {
      url: 'teamCall',
      name: 'Team view',
      icon: 'recent_actors'
    },
    {
      url: 'tasks',
      name: 'Tasks',
      icon: 'event_note'
    },
    {
      url: 'projects',
      name: 'Projects',
      icon: 'view_list'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  public toggleSidebar() {
    console.log('clicked');
  }

}
