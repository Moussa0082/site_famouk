import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Causes4Component } from './causes4.component';

describe('Causes4Component', () => {
  let component: Causes4Component;
  let fixture: ComponentFixture<Causes4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Causes4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Causes4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
