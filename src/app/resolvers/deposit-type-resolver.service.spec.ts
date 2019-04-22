import { TestBed } from '@angular/core/testing';

import { DepositTypeResolver } from './deposit-type-resolver.service';

describe('DepositTypeResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepositTypeResolver = TestBed.get(DepositTypeResolver);
    expect(service).toBeTruthy();
  });
});
