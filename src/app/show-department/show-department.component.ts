import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Department from '../models/department';
import { DepartmentService } from '../department.service';
import { SidebarService } from '../sidebar.service';
import Employee from '../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {

  selectedDepartment: Department;
  sidebarOpen: boolean;
  members: Employee[];

  constructor(
    private route: ActivatedRoute,
    private deptService: DepartmentService,
    private sidebarService: SidebarService,
    private empService: EmployeeService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.selectedDepartment = this.deptService.getDepartment(id);
    this.members = this.empService.getEmployeesByIds(this.selectedDepartment.members);
    this.sidebarService.sidebarVisible.subscribe(visible => this.sidebarOpen = visible);
  }

}
