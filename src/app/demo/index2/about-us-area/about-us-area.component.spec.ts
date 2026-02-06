import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsAreaComponent } from './about-us-area.component';

describe('AboutUsAreaComponent', () => {
  let component: AboutUsAreaComponent;
  let fixture: ComponentFixture<AboutUsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
