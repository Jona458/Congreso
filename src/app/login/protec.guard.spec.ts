import { TestBed } from '@angular/core/testing';

import { ProtecGuard } from './protec.guard';

describe('ProtecGuard', () => {
  let guard: ProtecGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtecGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
