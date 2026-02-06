import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faq5Component } from './faq5.component';

describe('Faq5Component', () => {
  let component: Faq5Component;
  let fixture: ComponentFixture<Faq5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Faq5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faq5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
