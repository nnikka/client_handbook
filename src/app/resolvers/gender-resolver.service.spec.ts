import { TestBed } from '@angular/core/testing';

import { GenderResolver } from './gender-resolver.service';

describe('GenderResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenderResolver = TestBed.get(GenderResolver);
    expect(service).toBeTruthy();
  });
});
