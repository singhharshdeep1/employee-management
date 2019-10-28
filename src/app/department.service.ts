import { Injectable } from '@angular/core';
import Department from './models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  idCounter = 3;

  departments = [
    {
      id: '1',
      name: 'Information Technology'
    },
    {
      id: '2',
      name: 'IT Support'
    }
  ];

  constructor() { }

  getDepartments(): Department[] {
    return (<Department[]> this.departments);
  }

  getDepartment(id: string): Department {
    const department = this.departments.find(dept => dept.id === id);
    return (<Department> department);
  }

  create(department: Department): Department {
    department.id = this.idCounter.toString();
    this.idCounter++;
    this.departments.push(department);
    return department;
  }

  update(department: Department): Department {
    const oldDepartmentIndex = this.departments.findIndex(dept => dept.id === department.id);
    const oldDepartment = this.departments[oldDepartmentIndex];
    this.departments[oldDepartmentIndex].name = department.name;

    return (<Department> oldDepartment);
  }

  delete(departmentId: string) {
    return this.departments.filter(dept => dept.id !== departmentId);
  }
}
