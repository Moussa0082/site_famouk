import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSingle1Component } from './index-single-1.component';

describe('IndexSingle1Component', () => {
  let component: IndexSingle1Component;
  let fixture: ComponentFixture<IndexSingle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSingle1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSingle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
