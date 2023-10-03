import { TestBed } from '@angular/core/testing';

import { ProgenService } from './progen.service';

describe('ProgenService', () => {
  let service: ProgenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
