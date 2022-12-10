import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationEducationComponent } from './observation-education.component';

describe('ObservationEducationComponent', () => {
  let component: ObservationEducationComponent;
  let fixture: ComponentFixture<ObservationEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservationEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
