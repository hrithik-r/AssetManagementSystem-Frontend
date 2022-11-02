import { TestBed } from '@angular/core/testing';

import { AssetDefintionService } from './asset-defintion.service';

describe('AssetDefintionService', () => {
  let service: AssetDefintionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetDefintionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
