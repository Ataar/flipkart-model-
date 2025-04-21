import { TestBed } from '@angular/core/testing';

import { ProductsServic } from './products.service';

describe('ProductsService', () => {
  let service: ProductsServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
