import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffDetailComponent } from './tariff-detail.component';

describe('TariffDetailComponent', () => {
  let component: TariffDetailComponent;
  let fixture: ComponentFixture<TariffDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TariffDetailComponent]
    });
    fixture = TestBed.createComponent(TariffDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
