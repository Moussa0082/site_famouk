import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cta5Component } from './cta5.component';

describe('Cta5Component', () => {
  let component: Cta5Component;
  let fixture: ComponentFixture<Cta5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cta5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cta5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
