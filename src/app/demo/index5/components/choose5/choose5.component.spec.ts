import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Choose5Component } from './choose5.component';

describe('Choose5Component', () => {
  let component: Choose5Component;
  let fixture: ComponentFixture<Choose5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Choose5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Choose5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
