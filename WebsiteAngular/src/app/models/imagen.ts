import { Album } from "./album";

export class Imagen {
  id: number;
  nombre: string;
  descripcion: string;
  albumId: number;
  album: Album;
  portadaId?: number;
  portada: Album;
  ruta: string;
}
