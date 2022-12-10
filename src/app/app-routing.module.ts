import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioUnoComponent } from './formulario-uno/formulario-uno.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioUnoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
