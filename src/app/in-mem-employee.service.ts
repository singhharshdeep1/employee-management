import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemEmployeeService implements InMemoryDbService {
  
  createDb() {
    let employees = [
      {
        id: 1,
        employee_id: 1,
        firstName: "Harshdeep",
        lastName: "Singh",
        address: "64 Laurentide Crescent, Brampton",
        role: "Computer Programmer",
        birthDate: '01/08/1995',
        department: {
          id: 1,
          name: 'Information Technology'
        }
      },
      {
        id: 2,
        employee_id: 2,
        firstName: "Deep",
        lastName: "Patel",
        address: "ABC Street, Test City, A1A1A1",
        role: "Computer Programmer",
        birthDate: '23/06/1993',
        department: {
          id: 1,
          name: 'Information Technology'
        }
      }
    ];

    let departments = [
      {
        id: '1',
        name: 'Information Technology',
        members: ['1', '2']
      },
      {
        id: '2',
        name: 'IT Support',
        members: []
      }
    ];

    return {
      employees,
      departments
    };
  }
}
