import { TestBed } from '@angular/core/testing';

import { AdminregService } from './adminreg.service';

describe('AdminregService', () => {
  let service: AdminregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
