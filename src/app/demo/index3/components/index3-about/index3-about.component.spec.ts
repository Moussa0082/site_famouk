import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3AboutComponent } from './index3-about.component';

describe('Index3AboutComponent', () => {
  let component: Index3AboutComponent;
  let fixture: ComponentFixture<Index3AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
