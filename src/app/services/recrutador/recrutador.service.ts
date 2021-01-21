import { Injectable } from '@angular/core';
import { Recrutador, RECRUTADOR } from './recrutador';

@Injectable({
  providedIn: 'root'
})
export class RecrutadorService {
   

  constructor() { }

  GetRecrutador(): Recrutador[] {
    return RECRUTADOR;
  }
}
