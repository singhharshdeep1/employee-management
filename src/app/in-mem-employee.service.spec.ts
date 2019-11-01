import { TestBed } from '@angular/core/testing';

import { InMemEmployeeService } from './in-mem-employee.service';

describe('InMemEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemEmployeeService = TestBed.get(InMemEmployeeService);
    expect(service).toBeTruthy();
  });
});
