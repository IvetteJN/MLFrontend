import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  @Input() usuario: any;
  userForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.usuario) {
      this.userForm.patchValue({
        nombre: this.usuario.nombre,
        email: this.usuario.email,
        direccion: this.usuario.direccion
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.clienteService.updateUsuario(this.usuario.id, this.userForm.value).subscribe(
        () => {
          this.successMessage = 'Datos actualizados correctamente.';
        },
        (error: any) => {
          this.errorMessage = 'Hubo un error al actualizar los datos.';
          console.error('Error al actualizar los datos:', error);
        }
      );
    }
  }
}
