import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { SkillsGroup } from '../interfaces/skills-group';
import { DataSkills } from '../interfaces/data-skills';

@Injectable({
  providedIn: 'root',
})
export class FormularioUnoService {
  formulario: FormGroup = this.form();
  educacion: FormGroup = new FormGroup({});
  observacion: FormGroup = new FormGroup({});
  experience: FormGroup = new FormGroup({});
  reference: FormGroup = new FormGroup({});
  skills: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  form(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      lastName: new FormControl(''),
      profession: new FormControl(''),
      direction: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      perfil: new FormControl(''),
      education: this.formBuilder.array([]),
      professionalExperience: this.formBuilder.array([]),
      skills: this.formBuilder.array([]),
    });
  }

  addEducationForm(): void {
    const ctrl = this.formulario.get('education') as FormArray;
    ctrl.push(this.createFormEducation());
  }

  addExperienceForm(): void {
    const ctrl = this.formulario.get('professionalExperience') as FormArray;
    ctrl.push(this.createFormExperience());
  }

  addSkillsForm(): void {
    const ctrl = this.formulario.get('skills') as FormArray;
    ctrl.push(this.createFormSkills());
  }

  createFormEducation(): FormGroup {
    return this.formBuilder.group({
      titulo: new FormControl(),
      university: new FormControl(),
      year: new FormControl(),
      subRowArrayObservation: this.formBuilder.array([]),
    });
  }

  createFormExperience(): FormGroup {
    return this.formBuilder.group({
      job: new FormControl(),
      description: new FormControl(),
      company: new FormControl(),
      years: new FormControl(),
      getSubRowExperience: this.formBuilder.array([]),
    });
  }

  createFormSkills(): FormGroup {
    return this.formBuilder.group({
      subSkillOne: new FormControl(),
      subSkillTwo: new FormControl(),
    });
  }

  clickAddObservations(rowCtrl: FormGroup): void {
    const ctrl = this.createObservation();
    const form = this.getSubRowEducation(rowCtrl);
    form.push(ctrl);
  }

  clickAddReferece(rowCtrl: FormGroup): void {
    const ctrl = this.createRefer();
    const form = this.getSubRowExperience(rowCtrl);
    form.push(ctrl);
  }

  createObservation(): FormGroup {
    return this.formBuilder.group({ observation: new FormControl('') });
  }

  createRefer(): FormGroup {
    return this.formBuilder.group({ reference: new FormControl('') });
  }

  getSubRowEducation(ctrl: FormGroup): FormArray {
    return ctrl.get('subRowArrayObservation') as FormArray;
  }

  getSubRowExperience(ctrl: FormGroup): FormArray {
    return ctrl.get('getSubRowExperience') as FormArray;
  }

  getAllSkills(): Observable<SkillsGroup[]> {
    // Simulo proceso de llamada Http
    return from([DataSkills]);
  }

  valueFormEducation(value: FormGroup): void {
    this.educacion = value;
  }

  valueFormObservation(value: FormGroup): void {
    this.observacion = value;
  }

  valueFormExperience(value: FormGroup): void {
    this.experience = value;
  }

  valueFormReference(value: FormGroup): void {
    this.reference = value;
  }

  valueFormSkills(value: FormGroup): void {
    this.skills = value;
  }
}
