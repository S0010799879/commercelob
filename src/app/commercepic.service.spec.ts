import { TestBed, inject } from '@angular/core/testing';

import { CommercepicService } from './commercepic.service';

describe('CommercepicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommercepicService]
    });
  });

  it('should be created', inject([CommercepicService], (service: CommercepicService) => {
    expect(service).toBeTruthy();
  }));
});
