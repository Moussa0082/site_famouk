import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marqee4Component } from './marqee4.component';

describe('Marqee4Component', () => {
  let component: Marqee4Component;
  let fixture: ComponentFixture<Marqee4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marqee4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marqee4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
