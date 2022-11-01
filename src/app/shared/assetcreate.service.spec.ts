import { TestBed } from '@angular/core/testing';

import { AssetcreateService } from './assetcreate.service';

describe('AssetcreateService', () => {
  let service: AssetcreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetcreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
