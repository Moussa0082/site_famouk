import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeDonationComponent } from './safe-donation.component';

describe('SafeDonationComponent', () => {
  let component: SafeDonationComponent;
  let fixture: ComponentFixture<SafeDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafeDonationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafeDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
