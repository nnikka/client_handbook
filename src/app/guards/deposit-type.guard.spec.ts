import { TestBed, async, inject } from '@angular/core/testing';

import { DepositTypeGuard } from './deposit-type.guard';

describe('DepositTypeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepositTypeGuard]
    });
  });

  it('should ...', inject([DepositTypeGuard], (guard: DepositTypeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
