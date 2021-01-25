import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Recrutador } from './recrutador';

@Injectable({
  providedIn: 'root'
})
export class RecrutadorService {
   
  constructor(private http: HttpClient) { }

  GetRecrutador(): Observable<any> {
    return this.http.get("http://localhost:3000/recrutador/")
  }
}
