import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNews5Component } from './blog-news5.component';

describe('BlogNews5Component', () => {
  let component: BlogNews5Component;
  let fixture: ComponentFixture<BlogNews5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogNews5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogNews5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
