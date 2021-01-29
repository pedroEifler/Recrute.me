import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from './Candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  
  constructor(private http: HttpClient) { }
  
  listarCandidatos(): Observable<any> {
    return this.http.get("http://localhost:3000/candidatos/");
  }

  listarCandidatoPorId(id: any): Observable<any> {
    return this.http.get("http://localhost:3000/candidatos/".concat(id))
  }
  
  cadastrar(candidato: Candidato): Observable<any> {
    return this.http.post("http://localhost:3000/candidatos/", candidato);
  }

  atualizar(id: any, candidato: Candidato) {
    return this.http.put("http://localhost:3000/candidatos/".concat(id), candidato);
  }

  deletar(id:any) {
    return this.http.delete("http://localhost:3000/candidatos/".concat(id));
  }
  
  listarConhecimentos(): Observable<any> {
    return this.http.get("http://localhost:3000/cbConhecimentos/");
  }
  

}
