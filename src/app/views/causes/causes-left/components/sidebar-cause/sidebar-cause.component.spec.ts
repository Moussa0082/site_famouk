import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCauseComponent } from './sidebar-cause.component';

describe('SidebarCauseComponent', () => {
  let component: SidebarCauseComponent;
  let fixture: ComponentFixture<SidebarCauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarCauseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
