import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormularioUnoService } from '../../../formulario-uno/formulario-uno.service';

@Component({
  selector: 'app-observacion-educacion',
  templateUrl: './observacion-educacion.component.html',
  styleUrls: ['./observacion-educacion.component.css'],
})
export class ObservacionEducacionComponent implements OnInit {
  observacion = '';
  constructor(private formService: FormularioUnoService) {}

  ngOnInit(): void {
    this.formService.observacion.valueChanges.subscribe(
      (value) => (this.observacion = value.observation)
    );
  }
}
