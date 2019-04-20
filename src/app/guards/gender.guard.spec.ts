import { TestBed, async, inject } from '@angular/core/testing';

import { GenderGuard } from './gender.guard';

describe('GenderGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenderGuard]
    });
  });

  it('should ...', inject([GenderGuard], (guard: GenderGuard) => {
    expect(guard).toBeTruthy();
  }));
});
