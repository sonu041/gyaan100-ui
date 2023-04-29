import { TestBed } from '@angular/core/testing';

import { RcasService } from './rcas.service';

describe('RcasService', () => {
  let service: RcasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RcasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
