import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationFormComponent } from './componentes/education-form/education-form.component';

import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ObservationEducationComponent } from './componentes/observation-education/observation-education.component';
import { MatDividerModule } from '@angular/material/divider';
import { ExperienceFormComponent } from './componentes/experience-form/experience-form.component';
import { ReferenceExperienceComponent } from './componentes/reference-experience/reference-experience.component';
import { SkillsFormComponent } from './componentes/skills-form/skills-form.component';

@NgModule({
  declarations: [
    EducationFormComponent,
    ObservationEducationComponent,
    ExperienceFormComponent,
    ReferenceExperienceComponent,
    SkillsFormComponent,
  ],
  exports: [
    EducationFormComponent,
    ExperienceFormComponent,
    SkillsFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class FormularioUnoModule {}
