import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpAndPaymentComponent } from './sign-up-and-payment.component';

describe('SignUpAndPaymentComponent', () => {
  let component: SignUpAndPaymentComponent;
  let fixture: ComponentFixture<SignUpAndPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpAndPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpAndPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
