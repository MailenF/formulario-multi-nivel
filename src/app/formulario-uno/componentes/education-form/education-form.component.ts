import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormularioUnoService } from '../../formulario-uno.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css'],
})
export class EducationFormComponent implements OnInit {
  @Input() index: any;
  @Input('form')
  set setForm(form: FormGroup) {
    this.form = form;
    this.formArray = this.formService.getSubRowEducation(form) as FormArray;
  }

  @Output() deleteEducation = new EventEmitter<any>();

  form: FormGroup = new FormGroup({});
  formArray: FormArray = new FormArray([]);
  titulo = '';

  constructor(private formService: FormularioUnoService) {}

  ngOnInit(): void {
    this.formService.valueFormEducation(this.form);
  }

  addObservation(): void {
    this.formService.clickAddObservations(this.form);
  }

  deleteObservation(index: number): void {
    this.formArray.removeAt(index);
  }

  asArrayOfFormGroup(form: FormArray): FormGroup[] {
    return form.controls as FormGroup[];
  }
}
