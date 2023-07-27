import { Secciones } from './enums/secciones';

export class Album {
  id: number;
  nombre: string;
  seccion: Secciones;
  portada: string;
  url: string;
}
