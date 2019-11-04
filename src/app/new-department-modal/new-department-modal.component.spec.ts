import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDepartmentModalComponent } from './new-department-modal.component';

describe('NewDepartmentModalComponent', () => {
  let component: NewDepartmentModalComponent;
  let fixture: ComponentFixture<NewDepartmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDepartmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDepartmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
