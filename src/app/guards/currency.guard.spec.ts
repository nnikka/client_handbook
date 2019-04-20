import { TestBed, async, inject } from '@angular/core/testing';

import { CurrencyGuard } from './currency.guard';

describe('CurrencyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyGuard]
    });
  });

  it('should ...', inject([CurrencyGuard], (guard: CurrencyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
