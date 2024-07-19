import { TestBed } from '@angular/core/testing';

import { SizImageCollageService } from './siz-image-collage.service';

describe('SizImageCollageService', () => {
  let service: SizImageCollageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizImageCollageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
