import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionEducacionComponent } from './observacion-educacion.component';

describe('ObservacionEducacionComponent', () => {
  let component: ObservacionEducacionComponent;
  let fixture: ComponentFixture<ObservacionEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservacionEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservacionEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
