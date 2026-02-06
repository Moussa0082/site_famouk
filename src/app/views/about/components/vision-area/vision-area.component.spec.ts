import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionAreaComponent } from './vision-area.component';

describe('VisionAreaComponent', () => {
  let component: VisionAreaComponent;
  let fixture: ComponentFixture<VisionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
