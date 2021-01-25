import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from './Candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private http: HttpClient) { }

  getAllCandidatos(): Observable<any> {
    return this.http.get("http://localhost:3001/candidatos/");
  }
  
  getAllConhecimentos(): Observable<any> {
    return this.http.get("http://localhost:3002/cbConhecimentos/");
  }
  
  cadastrar(candidato: Candidato): Observable<any> {
    return this.http.post("http://localhost:3001/candidatos/", candidato);
  }

}
