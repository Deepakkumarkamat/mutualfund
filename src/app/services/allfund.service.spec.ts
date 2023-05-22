import { TestBed } from '@angular/core/testing';

import { AllfundService } from './allfund.service';

describe('AllfundService', () => {
  let service: AllfundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllfundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
