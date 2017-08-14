// import {Component, OnInit} from '@angular/core';
// import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
// import {ProjectService} from '../shared/project.service';
// import {ActivatedRoute, Router} from '@angular/router';
//
// @Component({
//   selector: 'app-new-project',
//   templateUrl: 'new-project.component.html',
//   styleUrls: ['new-project.component.scss']
// })
// export class NewProjectComponent implements OnInit {
//   public addProjectForm: FormGroup;
//   private project;
//   private name: FormControl;
//   private psp: FormControl;
//   private desc: FormControl;
//   private cost: FormControl;
//   private startDate: FormControl;
//   private endDate: FormControl;
//   private owner: FormControl;
//   private country: FormControl;
//   private color: FormControl;
//   private userCtrl: FormControl;
//   private filteredUsers: any;
//
//   constructor(private builder: FormBuilder,
//               private projectService: ProjectService,
//               private route: ActivatedRoute,
//   private router: Router) {
//     this.userCtrl = new FormControl();
//     this.filteredUsers = this.userCtrl.valueChanges
//       .startWith(null)
//       .map(name => this.filterUsers(name));
//   }
//
//   userList = ['Patryk Zientek', 'Marcin Swiac', 'Michal Szafarski']
//   countries = [
//
//     {value: 'pl', viewValue: 'Poland'},
//     {value: 'nl', viewValue: 'Netherlands'},
//     {value: 'de', viewValue: 'Deutschland'},
//     {value: 'se', viewValue: 'Sweden'}
//   ];
//
//   filterUsers(val: string) {
//     return val ? this.userList.filter(s => new RegExp(`^${val}`, 'gi').test(s))
//       : this.userList;
//   }
//
//   createProject() {
//     this.projectService.createProject(this.project);
//     this.router.navigateByUrl('/projects');
//   }
//
//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       if (params.id != null) {
//         console.log(params);
//       }
//
//     });
//     this.project = {users:[]};
//
//     this.addProjectForm = this.builder.group({
//       name: this.name,
//       psp: this.psp,
//       desc: this.desc,
//       cost: this.cost,
//       startDate: this.startDate,
//       endDate: this.endDate,
//       owner: this.owner,
//       country: this.country,
//       color: this.color
//     });
//
//   }
//
//   addUser() {
//     this.project.users.push(this.userCtrl.value);
//   }
//
// }
