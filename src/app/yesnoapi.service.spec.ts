import { TestBed } from '@angular/core/testing';

import { YesnoapiService } from './yesnoapi.service';

describe('YesnoapiService', () => {
  let service: YesnoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YesnoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
