import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DepartmentService } from '../department.service';
import Department from '../models/department';
import Employee from '../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-department-modal',
  templateUrl: './department-modal.component.html',
  styleUrls: ['./department-modal.component.css']
})
export class DepartmentModalComponent implements OnInit {

  @Input() employee: Employee;
  @Output() employeeChange: EventEmitter<Employee> = new EventEmitter();
  departments: Department[];
  selectedDepartment: Department;

  constructor(
    private deptService: DepartmentService,
    private empService: EmployeeService
  ) { }

  ngOnInit() {
    this.deptService.getDepartments().subscribe(updatedDepartments => this.departments = updatedDepartments);
  }

  onRadioChange(dept) {
    this.selectedDepartment = dept;
  }

  submitChanges() {
    this.employee.department = this.selectedDepartment;
    $('#departmentModal').modal('hide');
    this.empService.update(this.employee).subscribe(emp => {
      this.empService.getEmployee(this.employee.employee_id).subscribe(emp => {
        this.employeeChange.emit(emp);
      })
    });
  }
}
