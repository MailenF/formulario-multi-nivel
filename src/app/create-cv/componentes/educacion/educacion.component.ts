import { Component, Input, OnInit } from '@angular/core';
import { FormularioUnoService } from '../../../formulario-uno/formulario-uno.service';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  @Input('form')
  set setForm(form: FormGroup) {
    this.form = form;
    this.formArray = this.formService.getSubRowEducation(form) as FormArray;
  }

  form: FormGroup = new FormGroup({});
  formArray: FormArray = new FormArray([]);
  titulo = '';
  university = '';
  year = '';

  constructor(private formService: FormularioUnoService) {
    this.formService.educacion.valueChanges.subscribe(
      (value) => (
        (this.titulo = value.titulo),
        (this.university = value.university),
        (this.year = value.year)
      )
    );
  }

  ngOnInit(): void {}

  asArrayOfFormGroup(form: FormArray): FormGroup[] {
    return form.controls as FormGroup[];
  }
}
