import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }



  obtenerUsuario: string = '';
  obtenerContrasenia: string = '';

  add(usuario:string, contrasenia:string){
    this.obtenerUsuario = usuario;
    this.obtenerContrasenia = contrasenia;
  }

  

  //Registro

  obtenerUsuarioRegistro: string = '';
  obtenerEmail: string= '';
  obtenerContraseniaRegistro: string = '';
  obtenerRepetirContrasenia: string = '';

  addNuevoRegistro(usuarioRegistro:string, emailRegistro: string, contraseniaRegistro: string, repetirContrasenia: string){
    this.obtenerUsuarioRegistro = usuarioRegistro;
    this.obtenerEmail = emailRegistro;
    this.obtenerContraseniaRegistro = contraseniaRegistro;
    this.obtenerRepetirContrasenia = repetirContrasenia;
  }


}
