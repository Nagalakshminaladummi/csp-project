import { TestBed } from '@angular/core/testing';

import { BtechinsertService } from './btechinsert.service';

describe('BtechinsertService', () => {
  let service: BtechinsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtechinsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
