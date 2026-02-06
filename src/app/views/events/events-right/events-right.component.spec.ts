import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRightComponent } from './events-right.component';

describe('EventsRightComponent', () => {
  let component: EventsRightComponent;
  let fixture: ComponentFixture<EventsRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
