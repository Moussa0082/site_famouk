import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSingle2Component } from './index-single-2.component';

describe('IndexSingle2Component', () => {
  let component: IndexSingle2Component;
  let fixture: ComponentFixture<IndexSingle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSingle2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSingle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
