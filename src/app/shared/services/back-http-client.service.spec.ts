import { TestBed } from '@angular/core/testing';

import { BackHttpClientService } from './back-http-client.service';

describe('BackHttpClientService', () => {
  let service: BackHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
