import { TestBed } from '@angular/core/testing';

import { HttpinterceptorsService } from './httpinterceptors.service';

describe('HttpinterceptorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpinterceptorsService = TestBed.get(HttpinterceptorsService);
    expect(service).toBeTruthy();
  });
});
