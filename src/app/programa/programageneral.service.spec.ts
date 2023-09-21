import { TestBed } from '@angular/core/testing';

import { ProgramageneralService } from './programageneral.service';

describe('ProgramageneralService', () => {
  let service: ProgramageneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramageneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
