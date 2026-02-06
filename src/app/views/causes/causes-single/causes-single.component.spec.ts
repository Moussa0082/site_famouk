import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesSingleComponent } from './causes-single.component';

describe('CausesSingleComponent', () => {
  let component: CausesSingleComponent;
  let fixture: ComponentFixture<CausesSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CausesSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CausesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
