import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import Department from '../models/department';

@Component({
  selector: 'app-new-department-modal',
  templateUrl: './new-department-modal.component.html',
  styleUrls: ['./new-department-modal.component.css']
})
export class NewDepartmentModalComponent implements OnInit {

  departmentName: string;

  constructor(
    private deptService: DepartmentService
  ) { }

  ngOnInit() {
  }

  createDepartment() {
    let dept = new Department(this.departmentName);
    this.deptService.create(dept).subscribe(res => {
      $('#newDepartmentModal').modal('hide');
      this.deptService.getDepartments();
      this.departmentName = '';
    });
  }

}
