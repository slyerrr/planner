import {
  AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output,
  ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {MatAutocompleteTrigger, MatOptionSelectionChange} from "@angular/material";
import {Observable} from "rxjs/Observable";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-projects-sidebar',
  templateUrl: './projects-sidebar.component.html',
  styleUrls: ['./projects-sidebar.component.scss']
})
export class ProjectsSidebarComponent implements OnInit, AfterViewInit {
  ownerCtrl: FormControl;
  selectedOwnerControl: FormControl;
  filterInput = new FormControl();
  filteredOwners: Observable<string[]>;

  chosenManager: any;
  chosenManagerWTF: any;
  chosenOwner: any;

  @ViewChild(MatAutocompleteTrigger) trigger;

  owners = [
    'Jakub Nowak',
    'Jan Kowalski',
    'Papilon'
  ];

  statuses = [
    'open',
    'completed',
    'canceled'
  ];

  tags = [
    'Energy',
    'IT',
    'Nuclear',
  ];

  dates = [
    'all',
    'this month',
    'next month',
    'last month',
    'this year',
    'next year'
  ];

  @Output() filterByStatus = new EventEmitter<any>();
  @Output() filterByTags = new EventEmitter<any>();
  @Output() filterByOwner = new EventEmitter<any>();
  @Output() filterByName = new EventEmitter<any>();

  activatedOwner: any = '';

  constructor() {

    // autocomplete musi byc podpiety pod effect( nie dociagamy go calego od razu)

    this.ownerCtrl = new FormControl();
    this.selectedOwnerControl = new FormControl();
    this.filteredOwners = this.ownerCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterOwners(name));
  }

  chosenStatusGroup(event) {
    console.log('event', event);
  }

  filterOwners(val: string) {
    return val ? this.owners.filter(s => new RegExp(`^${val}`, 'gi').test(s))
      : this.owners;
  }

  ngOnInit() {
    //
    // this.filteredOptions = this.myControl.valueChanges
    //   .startWith(null)
    //   .map(user => user && typeof user === 'object' ? user.name : user)
    //   .map(name => name ? this.filter(name) : this.options.slice());

    this.filteredOwners = this.selectedOwnerControl.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.owners.slice());


    this.filterInput
      .valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(data =>  this.filterByName.emit(data));

  }

  ngAfterViewInit() {
    // this.trigger.panelClosingActions
    //   .subscribe(e => {
    //     if (!(e && e.source)) {
    //       // this.stateCtrl.setValue(null);
    //       console.log('wychodzimy z a paneu z pusta wartoscia.', e);
    //       this.trigger.closePanel();
    //     }
    //   });
  }

  filter(val: string): string[] {
    return this.owners.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  selectedOwner(event: MatOptionSelectionChange, owner: string) {
    console.log('owner', owner, event);
    this.activatedOwner = owner;

  }

  selectedOwn(owner) {
    console.log('owner2', owner);
  }

  sth(event) {
    console.log('sth', event);
  }



}
