import { TestBed } from '@angular/core/testing';

import { DepositTypeService } from './deposit-type.service';

describe('DepositTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepositTypeService = TestBed.get(DepositTypeService);
    expect(service).toBeTruthy();
  });
});
