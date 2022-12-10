import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormularioUnoService } from '../../../formulario-uno/formulario-uno.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input('form')
  set setForm(form: FormGroup) {
    this.form = form;
    this.formArray = this.formService.getSubRowExperience(form) as FormArray;
  }

  form: FormGroup = new FormGroup({});
  formArray: FormArray = new FormArray([]);
  year = '';
  job = '';
  company = '';
  description = ';';
  constructor(private formService: FormularioUnoService) {}

  ngOnInit(): void {
    this.formService.experience.valueChanges.subscribe(
      (value) => (
        (this.year = value.years),
        (this.job = value.job),
        (this.company = value.company),
        (this.description = value.description)
      )
    );
  }

  asArrayOfFormGroup(form: FormArray): FormGroup[] {
    return form.controls as FormGroup[];
  }
}
