import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesLeftComponent } from './causes-left.component';

describe('CausesLeftComponent', () => {
  let component: CausesLeftComponent;
  let fixture: ComponentFixture<CausesLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CausesLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CausesLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
