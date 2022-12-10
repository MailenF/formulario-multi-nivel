import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormularioUnoService } from '../../formulario-uno.service';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css'],
})
export class ExperienceFormComponent implements OnInit {
  @Input() index: any;
  @Input('form')
  set setForm(form: FormGroup) {
    this.form = form;
    this.formArray = this.formService.getSubRowExperience(form) as FormArray;
  }

  @Output() deleteExpierence = new EventEmitter<any>();

  form: FormGroup = new FormGroup({});
  formArray: FormArray = new FormArray([]);

  constructor(private formService: FormularioUnoService) {}

  ngOnInit(): void {
    this.formService.valueFormExperience(this.form);
  }

  addReference(): void {
    this.formService.clickAddReferece(this.form);
  }

  deleteReference(index: number): void {
    this.formArray.removeAt(index);
  }

  asArrayOfFormGroup(form: FormArray): FormGroup[] {
    return form.controls as FormGroup[];
  }
}
