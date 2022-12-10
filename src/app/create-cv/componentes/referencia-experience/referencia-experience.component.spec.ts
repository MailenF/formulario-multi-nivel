import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciaExperienceComponent } from './referencia-experience.component';

describe('ReferenciaExperienceComponent', () => {
  let component: ReferenciaExperienceComponent;
  let fixture: ComponentFixture<ReferenciaExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciaExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciaExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
