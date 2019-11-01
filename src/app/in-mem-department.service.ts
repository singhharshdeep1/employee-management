import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemDepartmentService implements InMemoryDbService {
  createDb() {
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
  
    return {departments};
  }
}
