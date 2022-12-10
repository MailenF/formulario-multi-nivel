import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormularioUnoService } from '../../formulario-uno.service';

@Component({
  selector: 'app-reference-experience',
  templateUrl: './reference-experience.component.html',
  styleUrls: ['./reference-experience.component.css'],
})
export class ReferenceExperienceComponent implements OnInit {
  @Input('form') set setForm(form: FormGroup) {
    this.form = form;
  }

  @Output() deleteReference = new EventEmitter<any>();
  form: FormGroup = new FormGroup({});

  constructor(private formService: FormularioUnoService) {}

  ngOnInit(): void {
    this.formService.valueFormReference(this.form);
  }
}
