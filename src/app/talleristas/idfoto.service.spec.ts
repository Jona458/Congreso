import { TestBed } from '@angular/core/testing';

import { IdfotoService } from './idfoto.service';

describe('IdfotoService', () => {
  let service: IdfotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdfotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
