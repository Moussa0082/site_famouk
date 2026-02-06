import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollNavbarComponent } from './scroll-navbar.component';

describe('ScrollNavbarComponent', () => {
  let component: ScrollNavbarComponent;
  let fixture: ComponentFixture<ScrollNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
