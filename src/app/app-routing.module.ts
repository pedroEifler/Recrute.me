import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TabelaCandidatoComponent } from './tabela-candidato/tabela-candidato.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tabelaCandidato', component: TabelaCandidatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
