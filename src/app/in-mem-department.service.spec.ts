import { TestBed } from '@angular/core/testing';

import { InMemDepartmentService } from './in-mem-department.service';

describe('InMemDepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemDepartmentService = TestBed.get(InMemDepartmentService);
    expect(service).toBeTruthy();
  });
});
