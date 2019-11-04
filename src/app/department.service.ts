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
  idCounter = 6;

  private _result: Department[];
  result$: BehaviorSubject<Department[]>;

  constructor(private http: HttpClient) {
    this.result$ = new BehaviorSubject<Department[]>(this._result)
  }

  getDepartments(): void {
    this.http.get<Department[]>(this.url + `/departments`).subscribe(res => { 
      this._result = res;
      this.result$.next(this._result);
    });
  }

  getDepartmentsByIds(ids: string[]): Observable<Department[]> {
    return of([]);
  }

  getDepartment(id: string): Observable<Department> {
    return this.http
              .get<Department>(`${this.url}/departments/${id}`);
  }

  create(department: Department): Observable<Department> {
    department.Id = this.idCounter;
    this.idCounter++;
    console.log(department);
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
