import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioCandidatoComponent } from './componentes/formulario-candidato/formulario-candidato.component';
import { LoginComponent } from './componentes/login/login.component';
import { TabelaCandidatoComponent } from './componentes/tabela-candidato/tabela-candidato.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tabelaCandidato', component: TabelaCandidatoComponent },
  {
    path: 'formularioCandidato', component: FormularioCandidatoComponent, children: [
      { path: ':id', component: FormularioCandidatoComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
