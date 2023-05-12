import { TestBed } from '@angular/core/testing';

import { WishlistpageService } from './wishlistpage.service';

describe('WishlistpageService', () => {
  let service: WishlistpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
