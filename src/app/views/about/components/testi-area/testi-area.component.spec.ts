import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiAreaComponent } from './testi-area.component';

describe('TestiAreaComponent', () => {
  let component: TestiAreaComponent;
  let fixture: ComponentFixture<TestiAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestiAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestiAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
