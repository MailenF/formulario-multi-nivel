import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormularioUnoService } from '../../../formulario-uno/formulario-uno.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skill = '';
  constructor(private formService: FormularioUnoService) {}

  ngOnInit(): void {
    this.formService.skills
      .get('subSkillTwo')
      ?.valueChanges.subscribe((value) => (this.skill = value));
  }
}
