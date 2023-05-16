import { TestBed } from '@angular/core/testing';

import { MutualFundService } from './mutual-fund.service';

describe('MutualFundService', () => {
  let service: MutualFundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutualFundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
