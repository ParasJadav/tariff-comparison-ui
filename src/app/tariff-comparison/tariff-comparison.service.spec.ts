import { TestBed } from '@angular/core/testing';
import { TariffComparisonService } from './tariff-comparison.service';

describe('TariffComparisonService', () => {
  let service: TariffComparisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffComparisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
