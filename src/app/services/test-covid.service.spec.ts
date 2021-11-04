import { TestBed } from '@angular/core/testing';

import { TestCovidService } from './test-covid.service';

describe('TestCovidService', () => {
  let service: TestCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
