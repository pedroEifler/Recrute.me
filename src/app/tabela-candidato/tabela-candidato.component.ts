import { Component, OnInit } from '@angular/core';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabela-candidato',
  templateUrl: './tabela-candidato.component.html',
  styleUrls: ['./tabela-candidato.component.css']
})
export class TabelaCandidatoComponent implements OnInit {
  novo = faPlus;
  pesquisar = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarBoxFiltro() {
    const box = document.querySelector('.boxFiltro');
    let visivel;

    (box.className == 'boxFiltro esconder') ? visivel = false : visivel = true;
  

    if (visivel) {
      box.classList.add('esconder');
      box.classList.remove('mostrar');
    }

    if (!visivel) {
      box.classList.add('mostrar');
      box.classList.remove('esconder');
    }

    console.log(box.classList)
  }
}
