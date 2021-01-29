import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
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
  cbConhecimentos: Array<any> = new Array();

  constructor(
    private candidatoServices: CandidatoService,
    private router: Router) { }

  ngOnInit(): void {
    this.criarFormulario(new Candidato);
    this.NovoOuAtualizacao();
    this.listarConhecimentos();
    //this.obterMarcados()
  }

  criarFormulario(candidato: Candidato) {
    this.formCandidato = new FormGroup({
      nome: new FormControl(candidato.nome),
      email: new FormControl(candidato.email),
      idade: new FormControl(candidato.idade),
      urlLinkedin: new FormControl(candidato.urlLinkedin),
      cbConhecimentos: new FormControl(candidato.cbConhecimentos)
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
      const aa = this.cbConhecimentos
        .map((checked, i) => checked ? this.formCandidato.value.cbConhecimentos[i].id : null)
        .filter(v => v !== null)
      console.log(aa);

    }, err => {
      console.log("Erro ao buscar o candidato.")
    })



  }

  listarConhecimentos() {
    this.candidatoServices.listarConhecimentos().subscribe(conhecimentos => {
      this.cbConhecimentos = conhecimentos;

    }, err => {
      console.log("Erro ao buscar os conhecimentos.")
    })
  }

  cadastrarCandidato() {

    this.candidato = this.formCandidato.value
    this.candidatoServices.cadastrar(this.candidato).subscribe(candidato => {
      this.candidato = new Candidato();
      this.router.navigate(["/tabelaCandidato"]);
    }, err => {
      console.log("Erro ao cadastrar o candidato.");
    })
  }

  atualizarCandidato() {
    const id = this.router.url.slice(21);
    let candidato: Candidato = this.formCandidato.value
    console.log(

      candidato.cbConhecimentos
    );


    this.candidatoServices.atualizar(id, candidato).subscribe(candidato => {
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


}
