import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  loginFormulario: FormGroup;
  registroFormulario: FormGroup;

  matchingPasswordsValidator(password: string, confirmPassword: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = control.get(password);
      const confirmPasswordControl = control.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      const isMatching = passwordControl.value === confirmPasswordControl.value;
      return isMatching ? null : { notMatching: true };
    };
  }

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginFormulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.registroFormulario = this.formBuilder.group({
      nombreRegistro: ['', Validators.required],
      emailRegistro: ['', [Validators.required, Validators.email]],
      contraseniaRegistro: ['', [Validators.required, Validators.minLength(8)]],
      repetirContrasenia: ['', [Validators.required, Validators.minLength(8)]]
    }, { validators: this.matchingPasswordsValidator('contraseniaRegistro', 'repetirContrasenia') });
  }

  get Email() {
    return this.loginFormulario.get('email');
  }

  get Contrasenia() {
    return this.loginFormulario.get('contrasenia');
  }

  get NombreRegistro() {
    return this.registroFormulario.get('nombreRegistro');
  }

  get EmailRegistro() {
    return this.registroFormulario.get('emailRegistro');
  }

  get ContraseniaRegistro() {
    return this.registroFormulario.get('contraseniaRegistro');
  }

  get RepetirContrasenia() {
    return this.registroFormulario.get('repetirContrasenia');
  }

  onEnviar(event: Event) {
    event.preventDefault();
    if (this.loginFormulario.valid) {
      const email = this.loginFormulario.value.email;
      const contrasenia = this.loginFormulario.value.contrasenia;
      this.loginService.autenticarUsuario(email, contrasenia).subscribe(
        response => {
          alert("Login exitoso");
        },
        error => {
          alert("Credenciales incorrectas");
        }
      );
    } else {
      this.loginFormulario.markAllAsTouched();
    }
  }

  enviarDatosRegistro(event: Event) {
    event.preventDefault();
    if (this.registroFormulario.valid) {
      const nombreRegistro = this.registroFormulario.value.nombreRegistro;
      const emailRegistro = this.registroFormulario.value.emailRegistro;
      const contraseniaRegistro = this.registroFormulario.value.contraseniaRegistro;
      this.loginService.registrarUsuario(nombreRegistro, emailRegistro, contraseniaRegistro).subscribe(
        response => {
          console.log("Respuesta del servidor:", response); // Agrega este registro para depurar
          alert("Registro exitoso");
        },
        error => {
          console.error("Error en el registro: ", error);
          alert("El usuario ya está registrado");
        }
      );
    } else {
      this.registroFormulario.markAllAsTouched();
    }
  }
}