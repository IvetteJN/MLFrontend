import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        nombre: ['', [Validators.required], []],
        email: ['', [Validators.required, Validators.email], []],
        mensaje: ['', [Validators.required, Validators.maxLength(400)], []]
      }
    )
  }

  get Nombre() {
    return this.form.get('nombre');
  }

  get Mail() {
    return this.form.get('email');
  }

  get Mensaje() {
    return this.form.get('mensaje');
  }

  onEnviar(event: Event) {
    console.log(this.form.value)
  }
}

