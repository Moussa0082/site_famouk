import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesRightComponent } from './causes-right.component';

describe('CausesRightComponent', () => {
  let component: CausesRightComponent;
  let fixture: ComponentFixture<CausesRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CausesRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CausesRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
