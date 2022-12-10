import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormularioUnoService } from '../../formulario-uno.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-observation-education',
  templateUrl: './observation-education.component.html',
  styleUrls: ['./observation-education.component.css'],
})
export class ObservationEducationComponent implements OnInit {
  @Input('form') set setForm(form: FormGroup) {
    this.form = form;
  }

  @Output() deleteObservation = new EventEmitter<any>();
  form: FormGroup = new FormGroup({});
  observacion = '';
  constructor(private formService: FormularioUnoService) {}

  ngOnInit(): void {
    this.formService.valueFormObservation(this.form);
  }
}
