import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, EmailValidator } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Recrutador } from '../services/recrutador/recrutador';
import { RecrutadorService } from '../services/recrutador/recrutador.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formRecrutador: FormGroup;
  msgErro: string = "";
  recrutadorService: RecrutadorService;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.recrutadorService = new RecrutadorService();
    this.criarFormulario(new Recrutador)
  }

  criarFormulario(recrutador: Recrutador) {
    this.formRecrutador = new FormGroup({
      email: new FormControl(recrutador.email),
      senha: new FormControl(recrutador.senha)
    })
  }

  logar() {
    if (this.ehAutentico()) {
      this.router.navigate(['tabelaCandidato'])
      this.msgErro = ""
    } else {
      this.msgErro = "E-mail ou senha invalidos"
    }

  }

  ehAutentico(): Boolean {
    return (this.formRecrutador.value.email == this.recrutadorService.GetRecrutador()[0].email && this.formRecrutador.value.senha == this.recrutadorService.GetRecrutador()[0].senha);
  }
}
