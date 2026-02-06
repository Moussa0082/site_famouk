import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3ConatctComponent } from './index3-conatct.component';

describe('Index3ConatctComponent', () => {
  let component: Index3ConatctComponent;
  let fixture: ComponentFixture<Index3ConatctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3ConatctComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3ConatctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
