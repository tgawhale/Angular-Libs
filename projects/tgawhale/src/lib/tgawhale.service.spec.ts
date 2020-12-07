import { TestBed } from '@angular/core/testing';

import { TgawhaleService } from './tgawhale.service';

describe('TgawhaleService', () => {
  let service: TgawhaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TgawhaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
