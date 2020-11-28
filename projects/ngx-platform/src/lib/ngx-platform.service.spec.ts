import { TestBed } from '@angular/core/testing';

import { NgxPlatformService } from './ngx-platform.service';

describe('NgxPlatformService', () => {
  let service: NgxPlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
