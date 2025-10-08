import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css'
})
export class PersonalDataComponent {

    form: FormGroup;

    regiones = ['Región Metropolitana', 'Maule', 'Bio Bio', 'Valparaiso'];
    comunas = ['talca', 'Maule', 'Curico', 'Linares','Santiago'];

    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        nombres: [''],
        apellidoPaterno: [''],
        apellidoMaterno: [''],
        telefono: [''],
        correo: [''],
        region: [''],
        comuna: ['']
      });
    }

}
