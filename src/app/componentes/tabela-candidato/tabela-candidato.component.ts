import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Candidato } from '../../models/candidato/Candidato';
import { CandidatoService } from '../../models/candidato/candidato.service';
import { cbConhecimentos } from '../../models/candidato/cbConhecimentos/cbConhecimentos';

@Component({
  selector: 'app-tabela-candidato',
  templateUrl: './tabela-candidato.component.html',
  styleUrls: ['./tabela-candidato.component.css']
})
export class TabelaCandidatoComponent implements OnInit {
  novo = faPlus;
  pesquisar = faSearch;
  cbConhecimentos: cbConhecimentos
  candidatos: Candidato

  constructor(
    private candidatoServices: CandidatoService,
    private router: Router) { }

  ngOnInit(): void {
    this.listarConhecimentos();
    this.listarCandidatos();
  }

  listarConhecimentos() {
    this.candidatoServices.listarConhecimentos().subscribe(conhecimentos => {
      this.cbConhecimentos = conhecimentos;
    }, err => {
      console.log("Erro ao buscar os conhecimentos.")
    })
  }

  listarCandidatos() {
    this.candidatoServices.listarCandidatos().subscribe(candidato => {
      this.candidatos = candidato;
    }, err => {
      console.log("Erro ao buscar os candidatos.")
    })
  }

  visualizarCandidato(candidato: Candidato) {
    this.router.navigateByUrl("/formularioCandidato/".concat(candidato.id.toString()))
  }

  mostrarBoxFiltro() {
    const box = document.querySelector('.boxFiltro');
    let visivel = (box.className == 'boxFiltro esconder') ? false : true;

    if (visivel) {
      box.classList.add('esconder');
      box.classList.remove('mostrar');
    }

    if (!visivel) {
      box.classList.add('mostrar');
      box.classList.remove('esconder');
    }
  }
}
