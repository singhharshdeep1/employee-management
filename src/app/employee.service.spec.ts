import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';

fdescribe('EmployeeService', () => {

  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => { 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    })
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  fit('should get all employees', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    console.log(service.getEmployees());
  });
});
