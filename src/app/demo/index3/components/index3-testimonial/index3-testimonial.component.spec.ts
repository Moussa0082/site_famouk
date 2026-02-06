import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3TestimonialComponent } from './index3-testimonial.component';

describe('Index3TestimonialComponent', () => {
  let component: Index3TestimonialComponent;
  let fixture: ComponentFixture<Index3TestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3TestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3TestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
