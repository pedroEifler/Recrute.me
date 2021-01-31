import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { TabelaCandidatoComponent } from './componentes/tabela-candidato/tabela-candidato.component';
import { FormularioCandidatoComponent } from './componentes/formulario-candidato/formulario-candidato.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ConhecimentoFiltroPipe } from './componentes/tabela-candidato/conhecimento-filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabelaCandidatoComponent,
    FormularioCandidatoComponent,
    HeaderComponent,
    ConhecimentoFiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
