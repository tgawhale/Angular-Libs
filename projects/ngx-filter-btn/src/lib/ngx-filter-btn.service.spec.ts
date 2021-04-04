import { TestBed } from '@angular/core/testing';

import { NgxFilterBtnService } from './ngx-filter-btn.service';

describe('NgxFilterBtnService', () => {
  let service: NgxFilterBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFilterBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
