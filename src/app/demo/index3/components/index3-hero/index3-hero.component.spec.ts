import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3HeroComponent } from './index3-hero.component';

describe('Index3HeroComponent', () => {
  let component: Index3HeroComponent;
  let fixture: ComponentFixture<Index3HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
