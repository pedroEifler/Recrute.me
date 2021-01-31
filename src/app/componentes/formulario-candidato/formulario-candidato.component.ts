import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { cbConhecimentos } from 'src/app/models/candidato/cbConhecimentos/cbConhecimentos';
import { Candidato } from '../../models/candidato/Candidato';
import { CandidatoService } from '../../models/candidato/candidato.service';

@Component({
  selector: 'app-formulario-candidato',
  templateUrl: './formulario-candidato.component.html',
  styleUrls: ['./formulario-candidato.component.css']
})
export class FormularioCandidatoComponent implements OnInit {
  voltar = faArrowLeft
  novo = faPlus
  alterar = faPen
  deletar = faTrash
  formCandidato: FormGroup;
  candidato: Candidato;
  cbConhecimentos = [
    { checked: false, nome: "C#" },
    { checked: false, nome: "Javascript" },
    { checked: false, nome: "Nodejs" },
    { checked: false, nome: "Angular" },
    { checked: false, nome: "React" },
    { checked: false, nome: "Ionic" },
    { checked: false, nome: "Mensageria" },
    { checked: false, nome: "PHP" },
    { checked: false, nome: "Laravel" }
  ]

  constructor(
    private candidatoServices: CandidatoService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.NovoOuAtualizacao();
    this.criarFormulario(new Candidato);
  }

  criarFormulario(candidato: Candidato) {
    this.formCandidato = this.formBuilder.group({
      nome: new FormControl(candidato.nome),
      email: new FormControl(candidato.email),
      idade: new FormControl(candidato.idade),
      urlLinkedin: new FormControl(candidato.urlLinkedin),
      cbConhecimentos: this.criarConhecimento()
    })
  }

  NovoOuAtualizacao() {
    if (this.router.url.slice(21)) {
      this.visualizarCandidato();
    } else {
      document.querySelector(".alterar").remove()
      document.querySelector(".deletar").remove()
    }
  }

  visualizarCandidato() {
    document.querySelector(".cadastrar").remove()

    const id = this.router.url.slice(21);

    this.candidatoServices.listarCandidatoPorId(id).subscribe(candidato => {
      this.formCandidato.patchValue({
        nome: candidato.nome,
        email: candidato.email,
        idade: candidato.idade,
        urlLinkedin: candidato.urlLinkedin,
        cbConhecimentos: candidato.cbConhecimentos
      })
    }, err => {
      console.log("Erro ao buscar o candidato.")
    })
  }

  criarConhecimento() {
    console.log(this.cbConhecimentos);

    const valores = this.cbConhecimentos
      .map(v => new FormControl(false))
      .filter(v => v !== null);
    console.log(valores);
    return this.formBuilder.array(valores);

  }

  cadastrarCandidato() {
    this.candidato = this.converterParaObjeto()
    this.candidatoServices.cadastrar(this.candidato).subscribe(candidato => {
      this.candidato = new Candidato();
      this.router.navigate(["/tabelaCandidato"]);
    }, err => {
      console.log("Erro ao cadastrar o candidato.");
    })
  }

  atualizarCandidato() {
    const id = this.router.url.slice(21);
    this.candidato = this.converterParaObjeto()

    this.candidatoServices.atualizar(id, this.candidato).subscribe(candidato => {
      this.router.navigate(["/tabelaCandidato"]);
    }, err => {
      console.log("Erro ao atualizar o candidato.");
    })
  }

  deletarCandidato() {
    const id = this.router.url.slice(21);

    this.candidatoServices.deletar(id).subscribe(candidato => {
      this.router.navigate(["/tabelaCandidato"]);
    }, err => {
      console.log("Erro ao atualizar o candidato.");
    })
  }

  converterParaObjeto(): any {
    let valueSubmit = Object.assign({}, this.formCandidato.value);
    
    valueSubmit = Object.assign(valueSubmit, {
      cbConhecimentos: valueSubmit.cbConhecimentos
        .map((v, i) => v ? this.cbConhecimentos[i] : false)
        .filter(v => v !== false)
    });
    return valueSubmit;
  }
}
