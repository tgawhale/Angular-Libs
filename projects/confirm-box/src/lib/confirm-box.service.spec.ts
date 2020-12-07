import { TestBed } from '@angular/core/testing';

import { ConfirmBoxService } from './confirm-box.service';

describe('ConfirmBoxService', () => {
  let service: ConfirmBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
