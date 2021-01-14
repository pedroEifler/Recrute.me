import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Candidato } from './Candidato';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formCandidato: FormGroup;
  msgErro: string = "";

  constructor() {
  }

  ngOnInit(): void {
    this.criarFormulario(new Candidato)
  }

  criarFormulario(candidato: Candidato) {
    this.formCandidato = new FormGroup({
      email: new FormControl(candidato.email),
      senha: new FormControl(candidato.senha)
    })
  }

  onSubmit() {
    if (this.EhAutentico()) {
      console.warn(this.formCandidato.value);
      this.msgErro = ""
    } else {
      this.msgErro = "Preencha todos os campo corretamente"
    }

  }

  EhAutentico(): Boolean {
    return !(this.formCandidato.value.email == "" || this.formCandidato.value.senha == "");
  }
}
