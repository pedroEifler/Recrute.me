import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Candidato } from '../services/candidato/Candidato';
import { CandidatoService } from '../services/candidato/candidato.service';
import { cbConhecimentos } from '../services/cbConhecimentos';

@Component({
  selector: 'app-formulario-candidato',
  templateUrl: './formulario-candidato.component.html',
  styleUrls: ['./formulario-candidato.component.css']
})
export class FormularioCandidatoComponent implements OnInit {
  formCandidato: FormGroup;
  candidado: Candidato = new Candidato();
  cbConhecimentos: cbConhecimentos

  constructor(private candidatoServices: CandidatoService) { }

  ngOnInit(): void {
    this.criarFormulario(new Candidato);
    this.getAllConhecimentos()
  }
  getAllConhecimentos() {
    this.candidatoServices.getAllConhecimentos().subscribe(conhecimentos => {
      this.cbConhecimentos = conhecimentos
    }, err => {
      console.log("Erro ao buscar os conhecimentos.")
    })
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

  cadastrarCandidato() {
    this.candidado = this.formCandidato.value
    
    if (this.formCandidato.valid) {
      console.warn(this.candidado);
      this.candidatoServices.cadastrar(this.candidado).subscribe(candidato => {
        this.candidado = new Candidato();
      }, err => {
        console.log("Erro ao cadastrar o candidato.");

      })
    }
  }
}
