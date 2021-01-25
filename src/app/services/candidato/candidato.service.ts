import { Injectable } from '@angular/core';
import { Candidato, CANDIDATOS } from './Candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor() { }

  GetAllCandidatos(): Candidato[] {
    return CANDIDATOS;
  }
}
