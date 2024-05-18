import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  obtenerUsuario: string = '';
  obtenerContrasenia: string = '';

  add(usuario:string){
    this.obtenerUsuario = usuario;
  }

  addPass(contrasenia:string){
    this.obtenerContrasenia = contrasenia;
  }
}
