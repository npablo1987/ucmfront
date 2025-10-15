import {computed, effect, Injectable, signal} from '@angular/core';
import {DatosAdicionales, DatosPersonales, Estudios} from '../models/form-modes';

import { RegistroState } from '../models/registro-state.interface';

const EMPTY: RegistroState = {
  personales: {
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    correo: '',
    region: '',
    comuna: '',
  },

  estudios: {
    nivelEducacional: '',
    institucion: '',
    carreraPrograma: '',
    anioInicio: '',
    anioTermino: '',
    estado: '',
    certificaciones: '',
  },

  adicionales: {
    experienciaLaboral: '',
    habilidades: '',
    idiomas: '',
    disponibilidad: '',
    expectativasSalariales: '',
  }
}


@Injectable({
  providedIn: 'root'
})
export class RegistroStateService {

  private readonly STORAGE_KEY = 'registro-state-v1';

  private _state = signal<RegistroState>(this.load() ?? EMPTY);

  readonly personales = computed(() => this._state().personales);
  readonly estudios = computed(() => this._state().estudios);
  readonly adicionales = computed(() => this._state().adicionales);


 setPersonales(value: DatosPersonales){

   this._state.update(state => ({...state, personales: value}))
 };

 setEstudios(value: Estudios){
   this._state.update(state => ({...state, estudios: value}))
 };

 setAdicionales(value: DatosAdicionales){
   this._state.update(state => ({...state, adicionales: value}))
 };

 reset(){
   this._state.set(EMPTY);
   localStorage.removeItem(this.STORAGE_KEY);
 };



  constructor() {
    effect(() => {
      const current = this._state();

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(current))
    });

  }

  private load(): RegistroState | null {
    try {
      const row = localStorage.getItem(this.STORAGE_KEY);

      if (!row) {
        return null;
      }

      return JSON.parse(row) as RegistroState;
    }catch {

      return null;
    }


  }



}
