import { Component, OnInit } from '@angular/core';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Candidato } from '../services/candidato/Candidato';
import { CandidatoService } from '../services/candidato/candidato.service';

@Component({
  selector: 'app-tabela-candidato',
  templateUrl: './tabela-candidato.component.html',
  styleUrls: ['./tabela-candidato.component.css']
})
export class TabelaCandidatoComponent implements OnInit {
  novo = faPlus;
  pesquisar = faSearch;
  candidatos: Candidato[];

  constructor() { }

  ngOnInit(): void {
    this.candidatos = new CandidatoService().GetAllCandidatos();
  }

  visualizarCandidato( candidato: Candidato) {
    console.log(candidato);
    
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
