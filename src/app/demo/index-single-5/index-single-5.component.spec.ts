import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSingle5Component } from './index-single-5.component';

describe('IndexSingle5Component', () => {
  let component: IndexSingle5Component;
  let fixture: ComponentFixture<IndexSingle5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSingle5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSingle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
