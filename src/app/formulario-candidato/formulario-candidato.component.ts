import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Candidato } from '../services/candidato/Candidato';

@Component({
  selector: 'app-formulario-candidato',
  templateUrl: './formulario-candidato.component.html',
  styleUrls: ['./formulario-candidato.component.css']
})
export class FormularioCandidatoComponent implements OnInit {
  formCandidato: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.criarFormulario(new Candidato);
  }
  criarFormulario(candidato: Candidato) {
    this.formCandidato = new FormGroup({
      nome: new FormControl(candidato.nome),
      email: new FormControl(candidato.email),
      idade: new FormControl(candidato.idade),
      urlLinkedin: new FormControl(candidato.urlLinkedin),
      cbConhecimento: new FormControl(candidato.cbConhecimentos)
    })
  }

}
