import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {go} from '@ngrx/router-store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects-list',
  template: `





   
     
    
    
    
    
    
    <div *ngIf="!loading">
      <mat-list>

       
    <!-- routerLink="{{project.id}} -->
    
        <mat-list-item *ngFor="let project of projects" (click)="openItem(project.id)">
          <mat-icon mat-list-icon>chrome_reader_mode</mat-icon>
          <h4 mat-line>{{project.name}}</h4>
          <p mat-line> {{project.start | date}} - {{project.end | date}}  - status: {{project.status}}</p>
        </mat-list-item>
        <!--<mat-list-item *ngFor="let project of projects  | myfilter:{filter:'name',searchPhrase:filterargs}|myfilter:{filter:'owner',searchPhrase:sideBar.chosenManager}" (click)="router.navigateByUrl('/project/'+project.name)" [@anim]="project">-->
        <!--<mat-icon mat-list-icon>chrome_reader_mode</mat-icon>-->
        <!--<h4 mat-line>{{project.name}}</h4>-->
        <!--<p mat-line> {{project.start | date}} - {{project.end | date}} </p>-->
        <!--</mat-list-item>-->
      </mat-list>

    </div>




  `,
})
export class ProjectsListComponent implements OnInit {



  @Input() loading: boolean = false;
  @Input() projects: any;




  /*
  paginacje itp loading i wszystko zrobic jako observable.combineLatest
   */


  constructor(private router: Router) {



  }



  ngOnInit() {



    // destroy it ?

  }

  openItem(id: number) {
    console.log('project', id);
    this.router.navigate(['/projects', id]);

    //this.store.dispatch(go('project/' + id));
  }


}
