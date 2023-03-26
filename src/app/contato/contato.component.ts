import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required,
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required,
    ]],
    email: ["", [
      Validators.required,
      Validators.email,
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required,
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) {}

  enviarFormulario() {
    alert('Formulário foi enviado!');
    this.formContato.reset();
  }
}
