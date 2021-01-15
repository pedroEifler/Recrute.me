import { Component, OnInit } from '@angular/core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabela-candidato',
  templateUrl: './tabela-candidato.component.html',
  styleUrls: ['./tabela-candidato.component.css']
})
export class TabelaCandidatoComponent implements OnInit {
  deletar = faTrash;
  adicionar = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
