import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  selectedTab: string;
  data: any[];

  constructor(
    private sidebarService: SidebarService,
    private empService: EmployeeService,
    private deptService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sidebarService.currentTab.subscribe(tab => { 
      this.selectedTab = tab
      if (this.selectedTab === 'employees') {
        this.data = this.empService.getEmployees();
      } else {
        this.data = this.deptService.getDepartments();
      }
    });
  }

  showEmployee(id: string) {
    this.router.navigate([`employee/${id}`]);
    this.sidebarService.changeTab('');
  }

  showDepartment(id: string) {
    this.router.navigate([`department/${id}`]);
    this.sidebarService.changeTab('');
  }

}
