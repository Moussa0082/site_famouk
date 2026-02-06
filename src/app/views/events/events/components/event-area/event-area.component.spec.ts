import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAreaComponent } from './event-area.component';

describe('EventAreaComponent', () => {
  let component: EventAreaComponent;
  let fixture: ComponentFixture<EventAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
