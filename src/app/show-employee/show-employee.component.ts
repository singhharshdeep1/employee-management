import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import Employee from '../models/employee';
import { ActivatedRoute } from '@angular/router';
import { SidebarService } from '../sidebar.service';
import Department from '../models/department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  selectedEmployee: Employee;
  sidebarOpen: boolean;
  departments: Department[];

  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService,
    private sidebarService: SidebarService,
    private deptService: DepartmentService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.selectedEmployee = this.empService.getEmployee(id);
    this.sidebarService.sidebarVisible.subscribe(visible => this.sidebarOpen = visible);
    this.departments = this.deptService.getDepartmentsByIds(this.selectedEmployee.departments);
  }

}
