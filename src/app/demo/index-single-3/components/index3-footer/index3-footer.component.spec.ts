import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3FooterComponent } from './index3-footer.component';

describe('Index3FooterComponent', () => {
  let component: Index3FooterComponent;
  let fixture: ComponentFixture<Index3FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
