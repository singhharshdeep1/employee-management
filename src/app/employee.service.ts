import { Injectable } from '@angular/core';
import Employee from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  idCounter = 3;

  employees = [
    {
      id: '1',
      name: "Harshdeep Singh",
      address: "ABC Street, Test City, A1A1A1",
      role: "Computer Programmer",
      dateOfBirth: '08/01/1995',
      departmentId: '1'
    },
    {
      id: '2',
      name: "Deep Patel",
      address: "ABC Street, Test City, A1A1A1",
      role: "Computer Programmer",
      dateOfBirth: '06/23/1993',
      departmentId: '1'
    }
  ];

  constructor() { }

  getEmployees(): Employee[] {
    return (<Employee[]> this.employees);
  }

  getEmployee(id: string): Employee {
    const employee = this.employees.find(emp => emp.id === id);
    return (<Employee> employee);
  }

  create(employee: Employee): Employee {
    employee.id = this.idCounter.toString();
    this.idCounter++;
    this.employees.push(employee);
    return employee;
  }

  update(employee: Employee): Employee {
    const oldEmployeeIndex = this.employees.findIndex(emp => emp.id === employee.id);
    const oldEmployee = this.employees[oldEmployeeIndex];
    this.employees[oldEmployeeIndex].name = employee.name;

    return (<Employee> oldEmployee);
  }

  delete(employeeId: string) {
    return this.employees.filter(emp => emp.id !== employeeId);
  }
}
