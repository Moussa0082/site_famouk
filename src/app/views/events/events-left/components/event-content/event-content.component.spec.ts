import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventContentComponent } from './event-content.component';

describe('EventContentComponent', () => {
  let component: EventContentComponent;
  let fixture: ComponentFixture<EventContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
