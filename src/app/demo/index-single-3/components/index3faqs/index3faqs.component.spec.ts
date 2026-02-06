import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3faqsComponent } from './index3faqs.component';

describe('Index3faqsComponent', () => {
  let component: Index3faqsComponent;
  let fixture: ComponentFixture<Index3faqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3faqsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3faqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
