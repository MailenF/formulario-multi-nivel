import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SkillsCategory } from '../../../interfaces/skills-category';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { SkillsGroup } from '../../../interfaces/skills-group';
import { FormularioUnoService } from '../../formulario-uno.service';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css'],
})
export class SkillsFormComponent implements OnInit {
  @Input() index: any;
  @Input('form')
  set setForm(form: FormGroup) {
    this.form = form;
  }

  @Output() deleteSkill = new EventEmitter<any>();

  filteredCategory$ = new Observable<SkillsGroup[]>();
  dataCache = new BehaviorSubject<SkillsGroup[]>([]);
  form: FormGroup = new FormGroup({});

  categorias: SkillsCategory[] = [
    { value: 'interpersonales', viewValue: 'Interpersonales' },
    { value: 'sociales', viewValue: 'Sociales' },
    { value: 'metódicas', viewValue: 'Metódicas' },
  ];

  constructor(private formService: FormularioUnoService) {}

  ngOnInit(): void {
    this.getValueSkillOne();
    this.getValueSkillTwo();
  }

  getValueSkillOne(): void {
    const data = this.form.get('subSkillOne')
      ?.valueChanges as Observable<string>;
    this.filteredCategory$ = data.pipe(
      switchMap((value) => this.getSkillFilteres(value))
    );
  }

  getSkillFilteres(value: string): Observable<SkillsGroup[]> {
    return this.formService.getAllSkills().pipe(
      tap((values: SkillsGroup[]) => this.dataCache.next(values)),
      map((values) => values.filter((val) => val.categoria.includes(value)))
    );
  }

  getValueSkillTwo(): void {
    this.formService.valueFormSkills(this.form);
  }
}
