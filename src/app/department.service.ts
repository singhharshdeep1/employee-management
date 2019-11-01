import { Injectable } from '@angular/core';
import Department from './models/department';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { puts } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  url: string = 'http://localhost:8080/spring-rest-demo/api';
  idCounter = 3;

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.url + `/departments`);
  }

  getDepartmentsByIds(ids: string[]): Observable<Department[]> {
    return of([]);
  }

  getDepartment(id: string): Observable<Department> {
    return this.http
              .get<Department>(`${this.url}/departments/${id}`);
  }

  create(department: Department): Observable<Department> {
    department.id = this.idCounter;
    this.idCounter++;
    return this.http
              .post<Department>(`${this.url}/departments`, department);
    
  }

  update(department: Department): Observable<Department> {
    return this.http
              .put<Department>(`${this.url}/departments`, department);
  }

  delete(departmentId: string): Observable<Department[]> {
    return this.http
              .delete<Department[]>(`${this.url}/departments/${departmentId}`);
  }
}
