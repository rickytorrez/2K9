import { TestBed, inject } from '@angular/core/testing';

import { UppercaseConverterService } from './uppercase-converter.service';

describe('UppercaseConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UppercaseConverterService]
    });
  });

  it('should be created', inject([UppercaseConverterService], (service: UppercaseConverterService) => {
    expect(service).toBeTruthy();
  }));
});
