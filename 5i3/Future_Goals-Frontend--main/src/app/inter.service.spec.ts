import { TestBed } from '@angular/core/testing';

import { InterService } from './inter.service';

describe('InterService', () => {
  let service: InterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
