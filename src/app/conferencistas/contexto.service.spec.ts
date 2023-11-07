import { TestBed } from '@angular/core/testing';

import { ContextoService } from './contexto.service';

describe('ContextoService', () => {
  let service: ContextoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
