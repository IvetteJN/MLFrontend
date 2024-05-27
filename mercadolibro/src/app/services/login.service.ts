import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  // Registro
  private usuarios: { [key: string]: { email: string, password: string } } = {};

  addNuevoRegistro(usuarioRegistro: string, emailRegistro: string, contraseniaRegistro: string) {
    if (!this.usuarios[emailRegistro]) {
      this.usuarios[emailRegistro] = { email: emailRegistro, password: contraseniaRegistro };
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
      return true;
    }
    return false;
  }

  // Login
  autenticarUsuario(email: string, contrasenia: string): boolean {
    const storedUsuarios = JSON.parse(localStorage.getItem('usuarios') || '{}');
    const usuario = storedUsuarios[email];
    if (usuario && usuario.password === contrasenia) {
      return true;
    }
    return false;
  }
}
