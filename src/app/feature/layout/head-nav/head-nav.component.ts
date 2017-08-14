import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.scss']
})
export class HeadNavComponent implements OnInit {

  @Input() sidenav: any;

  constructor() { }

  ngOnInit() {
  }

}
