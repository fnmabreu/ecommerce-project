import { TestBed } from '@angular/core/testing';

import { ShopFormService } from './shop-form.service';

describe('ShopFormServiceService', () => {
  let service: ShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
