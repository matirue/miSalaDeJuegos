import { TestBed } from '@angular/core/testing';

import { ApiDigimonService } from './api-digimon.service';

describe('ApiDigimonService', () => {
  let service: ApiDigimonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDigimonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
