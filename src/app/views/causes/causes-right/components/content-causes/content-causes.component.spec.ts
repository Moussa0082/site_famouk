import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCausesComponent } from './content-causes.component';

describe('ContentCausesComponent', () => {
  let component: ContentCausesComponent;
  let fixture: ComponentFixture<ContentCausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCausesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
