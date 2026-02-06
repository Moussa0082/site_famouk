import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSidebarAreaComponent } from './event-sidebar-area.component';

describe('EventSidebarAreaComponent', () => {
  let component: EventSidebarAreaComponent;
  let fixture: ComponentFixture<EventSidebarAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSidebarAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSidebarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
