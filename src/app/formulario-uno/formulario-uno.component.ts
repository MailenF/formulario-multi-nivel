import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormularioUnoService } from './formulario-uno.service';

@Component({
  selector: 'app-formulario-uno',
  templateUrl: './formulario-uno.component.html',
  styleUrls: ['./formulario-uno.component.css'],
})
export class FormularioUnoComponent implements OnInit {
  formulario: FormGroup;
  educacion: FormGroup;
  formArrayEducation: FormArray;
  formArrayExperience: FormArray;
  formArraySkills: FormArray;

  constructor(private formService: FormularioUnoService) {
    this.formulario = formService.formulario;
    this.educacion = formService.educacion;
    this.formArrayEducation = formService.formulario.get(
      'education'
    ) as FormArray;
    this.formArrayExperience = formService.formulario.get(
      'professionalExperience'
    ) as FormArray;
    this.formArraySkills = formService.formulario.get('skills') as FormArray;
  }

  ngOnInit(): void {}

  clickEducationRow(): void {
    this.formService.addEducationForm();
  }

  deleteEducation(index: number): void {
    this.formArrayEducation.removeAt(index);
  }

  clickExperienceRow(): void {
    this.formService.addExperienceForm();
  }

  deleteExperience(index: number): void {
    this.formArrayExperience.removeAt(index);
  }

  clickSkillsRow(): void {
    this.formService.addSkillsForm();
  }

  deleteSkill(index: number): void {
    this.formArraySkills.removeAt(index);
  }

  asArrayOfFormGroup(form: FormArray): FormGroup[] {
    return form.controls as FormGroup[];
  }
}
