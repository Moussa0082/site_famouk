import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3ServiceComponent } from './index3-service.component';

describe('Index3ServiceComponent', () => {
  let component: Index3ServiceComponent;
  let fixture: ComponentFixture<Index3ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3ServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
