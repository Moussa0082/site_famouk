import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElearningDetailComponent } from './elearning-detail.component';

describe('ElearningDetailComponent', () => {
  let component: ElearningDetailComponent;
  let fixture: ComponentFixture<ElearningDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElearningDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElearningDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
