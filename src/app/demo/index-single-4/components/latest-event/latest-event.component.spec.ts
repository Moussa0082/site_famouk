import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestEventComponent } from './latest-event.component';

describe('LatestEventComponent', () => {
  let component: LatestEventComponent;
  let fixture: ComponentFixture<LatestEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
