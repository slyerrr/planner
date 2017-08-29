import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'projects-list',
  template: `    
      <md-list>
        <md-input-container>
          <input mdInput [formControl]="filterInput" placeholder="Filter by name">
        </md-input-container>

        <md-divider></md-divider>
        <md-list-item *ngFor="let project of projects">
          <md-icon md-list-icon>chrome_reader_mode</md-icon>
          <h4 md-line>{{project.name}}</h4>
          <p md-line> {{project.start | date}} - {{project.end | date}}  - status: {{project.status}}</p>
        </md-list-item>
        <!--<md-list-item *ngFor="let project of projects  | myfilter:{filter:'name',searchPhrase:filterargs}|myfilter:{filter:'owner',searchPhrase:sideBar.chosenManager}" (click)="router.navigateByUrl('/project/'+project.name)" [@anim]="project">-->
        <!--<md-icon md-list-icon>chrome_reader_mode</md-icon>-->
        <!--<h4 md-line>{{project.name}}</h4>-->
        <!--<p md-line> {{project.start | date}} - {{project.end | date}} </p>-->
        <!--</md-list-item>-->
      </md-list>
      <md-divider></md-divider>
      
      
      table / list
      
      <md-divider></md-divider>
      <md-paginator [length]="50"
                    [pageSize]="10"
                    [pageSizeOptions]="[5, 10, 25, 50]"
                    (page)="pagination.emit($event)">
      </md-paginator>
    
  `,
})
export class ProjectsListComponent implements OnInit {

  filterInput = new FormControl();

  @Input() loading: boolean;
  @Input() projects: any;

  @Output() pagination = new EventEmitter<any>();
  @Output() filterByName = new EventEmitter<any>();


  /*
  paginacje itp loading i wszystko zrobic jako observable.combineLatest
   */


  constructor() {



  }



  ngOnInit() {

    this.filterInput
      .valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(data =>  this.filterByName.emit(data));

    // destroy it ?

  }


}
