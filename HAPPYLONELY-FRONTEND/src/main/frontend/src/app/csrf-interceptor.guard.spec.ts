import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { csrfInterceptorGuard } from './csrf-interceptor.guard';

describe('csrfInterceptorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => csrfInterceptorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
