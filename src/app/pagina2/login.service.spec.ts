import { TestBed } from '@angular/core/testing';

import { LOGINService } from './login.service';

describe('LOGINService', () => {
  let service: LOGINService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LOGINService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
