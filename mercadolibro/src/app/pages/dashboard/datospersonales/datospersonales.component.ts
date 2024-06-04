import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-datospersonales',
  standalone: true,
  imports: [CommonModule, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css']
})
export class DatospersonalesComponent {
  direccion: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.direccion = this.formBuilder.group({
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      provincia: ['', Validators.required],
      codigo_postal: ['', [Validators.required]]
    })
  }

  get Direccion() {
    return this.direccion.get('direccion');
  }

  get Ciudad() {
    return this.direccion.get('ciudad');
  }
  get Provincia() {
    return this.direccion.get('provincia');
  }
  get CodigoPostal() {
    return this.direccion.get('codigo_postal');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.direccion.valid) {
      const direccion = this.direccion.value.direccion;
      const ciudad = this.direccion.value.ciudad;
      const provincia = this.direccion.value.provincia;
      const codigo_postal = this.direccion.value.codigo_postal;
      this.loginService.registrarDireccion(direccion, ciudad, provincia, codigo_postal).subscribe(
        response => {
          console.log("Respuesta del servidor:", response);
          alert("Registro exitoso");
        },
        error => {
          console.error("Error en el registro: ", error);
          alert("El usuario ya está registrado");
        }
      );
    } else {
      this.direccion.markAllAsTouched();
    }
  }
}