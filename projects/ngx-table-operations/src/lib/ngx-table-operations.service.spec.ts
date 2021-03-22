import { TestBed } from '@angular/core/testing';

import { NgxTableOperationsService } from './ngx-table-operations.service';

describe('NgxTableOperationsService', () => {
  let service: NgxTableOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTableOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
