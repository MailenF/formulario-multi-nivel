import { Component, OnInit } from '@angular/core';
import { FormularioUnoService } from '../../../formulario-uno/formulario-uno.service';

@Component({
  selector: 'app-referencia-experience',
  templateUrl: './referencia-experience.component.html',
  styleUrls: ['./referencia-experience.component.css'],
})
export class ReferenciaExperienceComponent implements OnInit {
  referencia = '';
  constructor(private formService: FormularioUnoService) {}

  ngOnInit(): void {
    this.formService.reference.valueChanges.subscribe(
      (value) => (this.referencia = value.reference)
    );
  }
}
