import {
  AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output,
  ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {MdAutocompleteTrigger, MdOptionSelectionChange} from "@angular/material";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'projects-sidebar',
  templateUrl: './projects-sidebar.component.html',
  styleUrls: ['./projects-sidebar.component.scss']
})
export class ProjectsSidebarComponent implements OnInit, AfterViewInit {
  ownerCtrl: FormControl;
  selectedOwnerControl: FormControl;
  filteredOwners: any;

  chosenManager: any;
  chosenManagerWTF: any;
  chosenOwner: any;

  @ViewChild(MdAutocompleteTrigger) trigger;

  owners = [
    'Jakub Nowak',
    'Jan Kowalski',
    'Papilon'
  ];

  statuses = [
    'all',
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

  activatedOwner : any = '';

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
  }

  ngAfterViewInit() {
    this.trigger.panelClosingActions
      .subscribe(e => {
        if (!(e && e.source)) {
          // this.stateCtrl.setValue(null);
          console.log('wychodzimy z a paneu z pusta wartoscia.', e);
          this.trigger.closePanel();
        }
      });
  }

  selectedOwner(event: MdOptionSelectionChange, owner: string) {
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
