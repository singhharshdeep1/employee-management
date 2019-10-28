import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResultsComponent } from './employee-results.component';

describe('EmployeeResultsComponent', () => {
  let component: EmployeeResultsComponent;
  let fixture: ComponentFixture<EmployeeResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
