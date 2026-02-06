import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3BlogComponent } from './index3-blog.component';

describe('Index3BlogComponent', () => {
  let component: Index3BlogComponent;
  let fixture: ComponentFixture<Index3BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3BlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
