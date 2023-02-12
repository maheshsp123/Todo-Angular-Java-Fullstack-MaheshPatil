import { TestBed } from '@angular/core/testing';

import { MyAuthenticatorService } from './my-authenticator.service';

describe('MyAuthenticatorService', () => {
  let service: MyAuthenticatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAuthenticatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
