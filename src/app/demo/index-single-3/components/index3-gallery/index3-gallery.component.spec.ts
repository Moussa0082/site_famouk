import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3GalleryComponent } from './index3-gallery.component';

describe('Index3GalleryComponent', () => {
  let component: Index3GalleryComponent;
  let fixture: ComponentFixture<Index3GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3GalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
