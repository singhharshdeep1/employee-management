import { TestBed } from '@angular/core/testing';

import { AuhGuardService } from './auh-guard.service';

describe('AuhGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuhGuardService = TestBed.get(AuhGuardService);
    expect(service).toBeTruthy();
  });
});
