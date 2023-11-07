import { TestBed } from '@angular/core/testing';

import { PagService } from './pag.service';

describe('PagService', () => {
  let service: PagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
