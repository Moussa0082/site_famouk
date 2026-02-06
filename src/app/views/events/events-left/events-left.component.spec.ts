import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsLeftComponent } from './events-left.component';

describe('EventsLeftComponent', () => {
  let component: EventsLeftComponent;
  let fixture: ComponentFixture<EventsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
