import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects-table',
  template: `

    <div class="table-responsive-vertical shadow-z-1">
      <table id="table" class="table table-hover table-light">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>start date</th>
          <th>end date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr  *ngFor="let project of projects">
          <td data-title="id">{{project.id}}</td>
          <td data-title="name">{{project.name}}</td>
          <td data-title="startDate">
            {{project.start | date}}
          </td>
          <td data-title="endDate">
            {{project.end | date}}
          </td>
          <td data-title="status">{{project.status}}</td>
        </tr>
        </tbody>
      </table>
    </div>

      

    
  `,
})
export class ProjectsTableComponent implements OnInit {

  filterInput = new FormControl();

  @Input() loading: boolean;
  @Input() projects: any;


  @Output() filterByName = new EventEmitter<any>();


  /*
  paginacje itp loading i wszystko zrobic jako observable.combineLatest
   */


  constructor(private router: Router) {



  }



  ngOnInit() {

    this.filterInput
      .valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(data =>  this.filterByName.emit(data));

    // destroy it ?

  }

  openItem(id: number) {
    console.log('project', id);
    this.router.navigate(['/projects', id]);

    //this.store.dispatch(go('project/' + id));
  }


}
