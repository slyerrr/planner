import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCallSidebarComponent } from './team-call-sidebar.component';

describe('TeamCallSidebarComponent', () => {
  let component: TeamCallSidebarComponent;
  let fixture: ComponentFixture<TeamCallSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCallSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCallSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
