import { Component, OnInit } from '@angular/core';
import { FormularioUnoService } from '../../../formulario-uno/formulario-uno.service';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  name = '';
  lastName = '';
  profession = '';
  direction = '';
  phoneNumber = '';
  email = '';

  formArrayEducation: FormArray;

  constructor(private formService: FormularioUnoService) {
    this.formArrayEducation = formService.formulario.get(
      'education'
    ) as FormArray;
  }

  ngOnInit(): void {
    this.formService.formulario.valueChanges.subscribe(
      (value) => (
        (this.name = value.name),
        (this.lastName = value.lastName),
        (this.profession = value.profession),
        (this.direction = value.direction),
        (this.phoneNumber = value.phoneNumber),
        (this.email = value.email)
      )
    );
  }

  asArrayOfFormGroup(form: FormArray): FormGroup[] {
    return form.controls as FormGroup[];
  }
}
