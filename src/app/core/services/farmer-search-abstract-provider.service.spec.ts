import { TestBed } from '@angular/core/testing';

import { FarmerSearchAbstractProviderService } from './farmer-search-abstract-provider.service';

describe('FarmerSearchAbstractProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerSearchAbstractProviderService = TestBed.get(FarmerSearchAbstractProviderService);
    expect(service).toBeTruthy();
  });
});
