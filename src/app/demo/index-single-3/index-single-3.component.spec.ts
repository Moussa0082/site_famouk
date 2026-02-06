import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSingle3Component } from './index-single-3.component';

describe('IndexSingle3Component', () => {
  let component: IndexSingle3Component;
  let fixture: ComponentFixture<IndexSingle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSingle3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSingle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
