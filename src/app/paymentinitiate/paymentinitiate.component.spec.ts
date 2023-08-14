import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentinitiateComponent } from './paymentinitiate.component';

describe('PaymentinitiateComponent', () => {
  let component: PaymentinitiateComponent;
  let fixture: ComponentFixture<PaymentinitiateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentinitiateComponent]
    });
    fixture = TestBed.createComponent(PaymentinitiateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
