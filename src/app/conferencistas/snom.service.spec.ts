import { TestBed } from '@angular/core/testing';

import { SnomService } from './snom.service';

describe('SnomService', () => {
  let service: SnomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
