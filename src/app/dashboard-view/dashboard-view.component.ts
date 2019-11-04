import { Component, OnInit, OnDestroy, OnChanges, DoCheck } from '@angular/core';
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
  searchQuery: string;
  queryData: any[];

  constructor(
    private sidebarService: SidebarService,
    private empService: EmployeeService,
    private deptService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('Init');
    this.sidebarService.currentTab.subscribe(tab => { 
      this.selectedTab = tab;
      if (this.selectedTab === 'employees') {
        this.empService.getEmployees().subscribe(updatedEmployees => { this.data = updatedEmployees });
      } else if (this.selectedTab === 'departments') {
        this.deptService.getDepartments();
        this.deptService.result$.subscribe(res => { console.log(res); this.data = res});
      } else {
        this.sidebarService.changeTab('employees');
        this.empService.getEmployees().subscribe(updatedEmployees => { this.data = updatedEmployees });
      }
    });
  }

  showEmployee(id: string) {
    this.sidebarService.changeTab('');
    this.router.navigate([`employee/${id}`]);
  }

  showDepartment(id: string) {
    this.sidebarService.changeTab('');
    this.router.navigate([`department/${Number(id)}`]);
  }

  searchList(query: string) {
    console.log(query);
    this.queryData = this.selectedTab === 'employees' ? 
                                      this.getEmployeesFor(query) : this.getDepartmentsFor(query);
                                      console.log(this.queryData);
  }

  getEmployeesFor(query: string): any[] {
    return this.data.filter(employee => employee.firstName.includes(query) || employee.lastName.includes(query));
  }

  getDepartmentsFor(query: string): any[] {
    return this.data.filter(department => department.name.includes(query));
  }
}
