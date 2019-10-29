import { Component, OnInit, Input } from '@angular/core';
import { DepartmentService } from '../department.service';
import Department from '../models/department';
import Employee from '../models/employee';

@Component({
  selector: 'app-department-modal',
  templateUrl: './department-modal.component.html',
  styleUrls: ['./department-modal.component.css']
})
export class DepartmentModalComponent implements OnInit {

  @Input() employee: Employee;
  departments: Department[];
  employeeDepartments: Department[];

  constructor(
    private deptService: DepartmentService
  ) { }

  ngOnInit() {
    this.departments = this.deptService.getDepartments();
    this.employeeDepartments = this.deptService.getDepartmentsByIds(this.employee.departments);
  }

}
