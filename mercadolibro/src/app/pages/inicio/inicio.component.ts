import { CommonModule, NgIf } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {
  loginFormulario: FormGroup;
  registroFormulario: FormGroup;

  @ViewChild('exampleModal') exampleModal: ElementRef | undefined;
  private modalInstance: Modal | undefined;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginFormulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.registroFormulario = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      repetirEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repetirPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, { validators: this.matchingPasswordsValidator('password', 'repetirPassword') });
  }

  ngAfterViewInit() {
    if (this.exampleModal) {
      this.modalInstance = new Modal(this.exampleModal.nativeElement);
    }
  }

  matchingPasswordsValidator(password: string, confirmPassword: string) {
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

  //corroborar que los correos inseridos sean iguales.
  matchingEmailValidator(email: string, confirmEmail: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailControl = control.get(email);
      const confirmEmailControl = control.get(confirmEmail);

      if (!emailControl || !confirmEmailControl) {
        return null;
      }

      const isMatchingEmail = emailControl.value === confirmEmailControl.value;
      return isMatchingEmail ? null : { notMatching: true };
    };
  }


  onEnviar(event: Event) {
    event.preventDefault();
    if (this.loginFormulario.valid) {
      const email = this.loginFormulario.value.email;
      const password = this.loginFormulario.value.password;
      this.loginService.autenticarUsuario(email, password).subscribe(
        response => {
          sessionStorage.setItem('usuarioAutenticado', email);
          this.router.navigate(['/dashboard/dashboardlanding']);
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
      const username = this.registroFormulario.value.username;
      const email = this.registroFormulario.value.email;
      const password = this.registroFormulario.value.password;
      this.loginService.registrarUsuario(username, email, password).subscribe(
        response => {
          if (this.modalInstance) {
            this.modalInstance.hide();
            this.removeModalBackdrop();
          }
          this.router.navigate(['/inicio']);
        },
        error => {
          alert("El usuario ya está registrado");
        }
      );
    } else {
      this.registroFormulario.markAllAsTouched();
    }
  }

  private removeModalBackdrop() {
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }

  get Email() {
    return this.loginFormulario.get('email');
  }

  get Password() {
    return this.loginFormulario.get('password');
  }

  get Username() {
    return this.registroFormulario.get('username');
  }

  get RepetirPassword() {
    return this.registroFormulario.get('repetirPassword');
  }
}

