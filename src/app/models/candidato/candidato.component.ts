// import { Component, OnInit } from '@angular/core';
// import { Candidato } from './Candidato';
// import { CandidatoService } from './candidato.service';
// import { cbConhecimentos } from './cbConhecimentos/cbConhecimentos';



// export class CandidatoComponent implements OnInit {
//     candidato: Candidato = new Candidato();
//     cbConhecimentos: Array<cbConhecimentos> = new Array<cbConhecimentos>();

//     constructor(private candidatoServices: CandidatoService) {
//     }

//     ngOnInit(): void {
//         this.getAllConhecimentos();
//         this.getCandidatos();
//     }

//     cadastrarCandidato() {
//         this.candidatoServices.cadastrar(this.candidato).subscribe(candidato => {
//             this.candidato = new Candidato();
//         }, err => {
//             console.log("Erro ao cadastrar o candidato.");
//         })
//     }

//     getCandidatos() {
//         this.candidatoServices.getAllCandidatos().subscribe(candidato => {
//             this.candidato = candidato;
//         })
//     }

//     getAllConhecimentos(): Array<cbConhecimentos> {
//         this.candidatoServices.getAllConhecimentos().subscribe(conhecimentos => {
//             this.cbConhecimentos = conhecimentos;
//         }, err => {
//             console.log("Erro ao buscar os conhecimentos.")
//         })
//         return this.cbConhecimentos;
//     }

//     visualizarCandidato(candidato: Candidato) {
//         console.log(candidato);
//     }
// }