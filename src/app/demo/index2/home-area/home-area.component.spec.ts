import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAreaComponent } from './home-area.component';

describe('HomeAreaComponent', () => {
  let component: HomeAreaComponent;
  let fixture: ComponentFixture<HomeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
