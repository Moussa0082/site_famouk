import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3CtaComponent } from './index3-cta.component';

describe('Index3CtaComponent', () => {
  let component: Index3CtaComponent;
  let fixture: ComponentFixture<Index3CtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3CtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3CtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
