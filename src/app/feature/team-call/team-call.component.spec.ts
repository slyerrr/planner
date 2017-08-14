import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCallComponent } from './team-call.component';

describe('TeamCallComponent', () => {
  let component: TeamCallComponent;
  let fixture: ComponentFixture<TeamCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
