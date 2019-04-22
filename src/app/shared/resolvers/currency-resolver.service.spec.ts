import { TestBed } from '@angular/core/testing';

import { CurrencyResolver } from './currency-resolver.service';

describe('CurrencyResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyResolver = TestBed.get(CurrencyResolver);
    expect(service).toBeTruthy();
  });
});
