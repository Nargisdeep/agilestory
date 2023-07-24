import { TestBed } from '@angular/core/testing';

import { AgservicesService } from './agservices.service';

describe('AgservicesService', () => {
  let service: AgservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
