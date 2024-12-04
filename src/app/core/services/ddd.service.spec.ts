import { TestBed } from '@angular/core/testing';

import { DddService } from './ddd.service';

describe('DddService', () => {
  let service: DddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
