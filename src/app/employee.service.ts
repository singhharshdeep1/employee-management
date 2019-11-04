import { Injectable } from '@angular/core';
import Employee from './models/employee';
import { BehaviorSubject, Observable, of } from 'rxjs';
import Department from './models/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = 'http://localhost:8080/spring-rest-demo/api';
  idCounter = 3;

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employee[]> {
    return this.http
              .get<Employee[]>(this.url + '/employees');
  }

  getEmployeesByIds(ids: number[]): Observable<Employee[]> {
    return of<Employee[]>([]);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http
              .get<Employee>(this.url + `/employees/${id}`);
  }

  create(employee: Employee): Observable<Employee> {
    employee.Employee_Id = this.idCounter;
    console.log(employee);
    this.idCounter++;
    return this.http
              .post<Employee>(this.url + `/employees`, employee);
  }

  update(employee: Employee): Observable<Employee> {
    return this.http
              .put<Employee>(this.url + `/employees`, employee);
  }

  delete(employeeId: number): Observable<Employee[]> {
    return this.http
              .delete<Employee[]>(this.url + `/employees/${employeeId}`);
  }
}
