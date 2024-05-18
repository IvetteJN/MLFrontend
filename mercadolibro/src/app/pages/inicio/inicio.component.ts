import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  //Elementos del login
  loginFormulario = new FormGroup({
    usuario: new FormControl('', Validators.required),
    contrasenia: new FormControl('', Validators.required),
  })

  enviarDatosLogin(): void {
    console.log(this.loginFormulario.value);
  }

  get Usuario() {
    return this.loginFormulario.get('usuario');
  }

  get Contrasenia() {
    return this.loginFormulario.get('contrasenia');
  }

  constructor(public loginService: LoginService){ }

  usuarioNombre: string = '';
  usuarioContrasenia: string = '';

  addUsuario(){
    this.loginService.add(this.usuarioNombre);
  }

  addContrasenia(){
    this.loginService.addPass(this.usuarioContrasenia);
  }





  //Elementos del registro
  registroFormulario = new FormGroup({
    usuarioRegistro: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    contraseniaRegistro: new FormControl('', Validators.required),
    repetirContrasenia: new FormControl('', Validators.required),
  })

  enviarDatosRegistro(): void {
    console.log(this.registroFormulario.value);
  }
  /*
    get UsuarioRegistro(){
      return this.registroFormulario.get('usuarioRegistro');
    }
  
    get Email(){
      return this.registroFormulario.get('email');
    }
  
    get ContraseniaUsuario(){
      return this.registroFormulario.get('contraseniaRegistro');
    }
  
    get RepetirContrasenia(){
      return this.registroFormulario.get('repetirContrasenia');
    }
    */
}