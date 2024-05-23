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
    nombre: new FormControl('', Validators.required),
    contrasenia: new FormControl('', Validators.required),
  })

  enviarDatosLogin(): void {
    console.log(this.loginFormulario.value);
  }

  get Nombre() {
    return this.loginFormulario.get('nombre');
  }

  get Contrasenia() {
    return this.loginFormulario.get('contrasenia');
  }

  constructor(public loginService: LoginService){ }

  usuarioNombre: string = '';
  usuarioContrasenia: string = '';

  addUsuario(){
    this.loginService.add(this.usuarioNombre, this.usuarioContrasenia);
    
  }

  //addContrasenia(){}





  //Elementos del registro
  registroFormulario = new FormGroup({
    nombreRegistro: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    contraseniaRegistro: new FormControl('', Validators.required),
    repetirContrasenia: new FormControl('', Validators.required),
  })

  enviarDatosRegistro(): void {
    console.log(this.registroFormulario.value);
  }
  /*
    get NombreRegistro(){
      return this.registroFormulario.get('nombreRegistro');
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

  usuarioNombreRegistro: string = '';
  usuarioEmailRegistro: string = '';
  usuarioContraseniaRegistro: string = '';
  usuarioRepetirContrasenia: string = '';
  

  addRegistroUsuario(){
    this.loginService.addNuevoRegistro(this.usuarioNombreRegistro, this.usuarioEmailRegistro,
      this.usuarioContraseniaRegistro, this.usuarioRepetirContrasenia);
  }
}