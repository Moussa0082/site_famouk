import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsblogComponent } from './newsblog.component';

describe('NewsblogComponent', () => {
  let component: NewsblogComponent;
  let fixture: ComponentFixture<NewsblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
