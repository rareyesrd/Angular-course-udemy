import { TestBed } from '@angular/core/testing';

import { AuthGuard.ServiceService } from './auth-guard.service';

describe('AuthGuard.ServiceService', () => {
  let service: AuthGuard.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuard.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
