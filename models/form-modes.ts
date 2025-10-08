export interface DatosPersonales{
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  telefono: string;
  correo: string;
  region: string;
  comuna: string;
}

export interface Estudios {
  nivelEducacional: string;
  institucion: string;
  carreraPrograma: string;
  anioInicio: string;
  anioTermino: string;
  estado: string;
  certificaciones: string;
}

export interface DatosAdicionales {
  experienciaLabotal: string;
  habilidades: string;
  idiomas: string;
  disponibilidad: string;
  expectativasSalariales: string;
}
