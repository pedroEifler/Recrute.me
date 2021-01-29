import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { faTintSlash } from '@fortawesome/free-solid-svg-icons';
import { Recrutador } from '../../models/recrutador/recrutador';
import { RecrutadorService } from '../../models/recrutador/recrutador.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formRecrutador: FormGroup;
  msgErro: string = "";
  recrutador

  constructor(public router: Router,
    private recrutadorService: RecrutadorService) { }

  ngOnInit(): void {
    this.criarFormulario(new Recrutador)
    this.getRecrutador()
  }

  criarFormulario(recrutador: Recrutador) {
    this.formRecrutador = new FormGroup({
      email: new FormControl(recrutador.email),
      senha: new FormControl(recrutador.senha)
    })
  }
  
  getRecrutador() {
    this.recrutadorService.GetRecrutador().subscribe(recrutador => {
      this.recrutador = recrutador[0]
    });
  }

  logar() {
    if (this.ehAutentico()) {
      this.router.navigate(['tabelaCandidato'])
      console.warn(this.recrutador);
      this.msgErro = ""
    } else {
      this.msgErro = "E-mail ou senha invalidos"
    }
  }

  ehAutentico(): Boolean {
    return (this.recrutador.email == this.formRecrutador.value.email && this.recrutador.senha == this.formRecrutador.value.senha)
  }
}
