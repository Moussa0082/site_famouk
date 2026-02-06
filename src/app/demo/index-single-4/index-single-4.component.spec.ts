import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSingle4Component } from './index-single-4.component';

describe('IndexSingle4Component', () => {
  let component: IndexSingle4Component;
  let fixture: ComponentFixture<IndexSingle4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSingle4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSingle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
