import { TestBed } from '@angular/core/testing';

import { CocktailsDataServiceService } from './cocktails-data-service.service';

describe('CocktailsDataServiceService', () => {
  let service: CocktailsDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailsDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
