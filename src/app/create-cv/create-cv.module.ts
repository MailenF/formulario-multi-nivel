import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { MatIconModule } from '@angular/material/icon';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ObservacionEducacionComponent } from './componentes/observacion-educacion/observacion-educacion.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { ReferenciaExperienceComponent } from './componentes/referencia-experience/referencia-experience.component';
import { SkillsComponent } from './componentes/skills/skills.component';

@NgModule({
  declarations: [
    PerfilComponent,
    EducacionComponent,
    ObservacionEducacionComponent,
    AboutComponent,
    ExperienceComponent,
    ReferenciaExperienceComponent,
    SkillsComponent,
  ],
  exports: [
    PerfilComponent,
    EducacionComponent,
    AboutComponent,
    ExperienceComponent,
  ],
  imports: [CommonModule, MatIconModule],
})
export class CreateCvModule {}
