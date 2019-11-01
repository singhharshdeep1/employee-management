import { Component, OnInit, OnChanges } from '@angular/core';
import { EmployeeService } from '../employee.service';
import Employee from '../models/employee';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private empService: EmployeeService,
    private sidebarService: SidebarService,
    private deptService: DepartmentService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.empService.getEmployee(Number(id)).subscribe(updatedEmployee => 
                                                      this.selectedEmployee = updatedEmployee );
    this.deptService.getDepartments().subscribe(departments => this.departments = departments);
    this.sidebarService.sidebarVisible.subscribe(visible => this.sidebarOpen = visible);
  }

  showDepartment(id: string) {
    this.router.navigateByUrl(`/department/${Number(id)}`);
  }

  updateEmployee(emp: Employee) {
    this.selectedEmployee = emp;
  }

}
