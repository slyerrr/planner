import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html'
})

export class ProjectFormComponent implements OnInit {

  public projectForm: FormGroup;
  private project;
  private name: FormControl;
  private status: FormControl;
  private desc: FormControl;
  private cost: FormControl;
  private startDate: FormControl;
  private endDate: FormControl;
  private owner: FormControl = new FormControl();
  private country: FormControl;
  private color: FormControl;
  private userCtrl: FormControl;
  private filteredUsers: any;

  managers = [
    'Patryk Zientek',
    'Marcin Swiac',
    'Michal Szafarski'
  ];

  userList = ['Patryk Zientek', 'Marcin Swiac', 'Michal Szafarski']
  countries = [

    {value: 'pl', viewValue: 'Poland'},
    {value: 'nl', viewValue: 'Netherlands'},
    {value: 'de', viewValue: 'Deutschland'},
    {value: 'se', viewValue: 'Sweden'}
  ];

  projectStatuses = [
    'open',
    'close'
  ];

  filteredOptions: Observable<string[]>;

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
    this.userCtrl = new FormControl();
    this.filteredUsers = this.userCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterUsers(name));
  }



  filterUsers(val: string) {
    return val ? this.userList.filter(s => new RegExp(`^${val}`, 'gi').test(s))
      : this.userList;
  }

  createProject() {
    // this.projectService.createProject(this.project);
    this.router.navigateByUrl('/projects');
  }

  ngOnInit() {



    this.route.params.subscribe(params => {
      if (params.id != null) {
        console.log(params);
      }

    });
    this.project = {users: []};

    this.projectForm = this.builder.group({
      name: this.name,
      desc: this.desc,
      cost: this.cost,
      status: this.status,
      startDate: this.startDate,
      endDate: this.endDate,
      owner: this.owner,
      country: this.country,
      color: this.color
    });

    this.filteredOptions = this.owner.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.managers.slice());

  }

  filter(val: string): string[] {
    return this.managers.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  submit() {
    console.log('send');
  }

}
