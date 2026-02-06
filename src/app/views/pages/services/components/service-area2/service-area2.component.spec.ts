import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceArea2Component } from './service-area2.component';

describe('ServiceArea2Component', () => {
  let component: ServiceArea2Component;
  let fixture: ComponentFixture<ServiceArea2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceArea2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceArea2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
