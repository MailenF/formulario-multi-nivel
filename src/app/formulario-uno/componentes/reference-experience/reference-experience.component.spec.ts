import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceExperienceComponent } from './reference-experience.component';

describe('ReferenceExperienceComponent', () => {
  let component: ReferenceExperienceComponent;
  let fixture: ComponentFixture<ReferenceExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
