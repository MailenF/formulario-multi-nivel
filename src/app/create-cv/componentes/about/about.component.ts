import { Component, OnInit } from '@angular/core';
import { FormularioUnoService } from '../../../formulario-uno/formulario-uno.service';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  profile = '';
  formArrayExperience: FormArray;
  formArraySkills: FormArray;
  constructor(private formService: FormularioUnoService) {
    this.formArrayExperience = formService.formulario.get(
      'professionalExperience'
    ) as FormArray;
    this.formArraySkills = formService.formulario.get('skills') as FormArray;
  }

  ngOnInit(): void {
    this.formService.formulario.valueChanges.subscribe(
      (value) => (this.profile = value.perfil)
    );
  }

  asArrayOfFormGroup(form: FormArray): FormGroup[] {
    return form.controls as FormGroup[];
  }
}
