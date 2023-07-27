import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  albumes: Album[] = [
    {
      id: 1,
      nombre: "Paisajes",
      portada: "assets/Images/Colombia/Paisajes/paisajes.jpg",
      url:"/trabajos/PaisajesColombianos",
      seccion: 1,
    },
    {
      id: 2,
      nombre: "Reservas Naturales",
      portada: "assets/Images/Colombia/Reservas Naturales/PARQUE NACIONAL NATURAL SERRANÍA DE CHIRIBIQUETE.jpg",
      url:"/trabajos/ReservasColombianas",
      seccion: 1,
    },
    {
      id: 3,
      nombre: "Fauna",
      portada: "assets/Images/Colombia/Fauna/faunacolombia.jpg",
      url:"/trabajos/FaunaColombiana",
      seccion: 1,
    },
    {
      id: 4,
      nombre: "Paisajes",
      portada: "assets/Images/Argentina/Paisajes/Buenos Aires.jpg",
      url:"/trabajos/PaisajesArgentinos",
      seccion: 2,
    },
    {
      id: 5,
      nombre: "Reservas Naturales",
      portada: "assets/Images/Argentina/Reservas Naturales/argent1.jpg",
      url:"/trabajos/ReservasArgentinas",
      seccion: 2,
    },
    {
      id: 6,
      nombre: "Fauna",
      portada: "assets/Images/Argentina/Fauna/carpincho.jpg",
      url:"/trabajos/FaunaArgentina",
      seccion: 2,
    },
    {
      id: 7,
      nombre: "Fosas comunes",
      portada: "assets/Images/Fosas comunes.jpg",
      url:"/trabajos/fosascomunes",
      seccion: 5,
    },
    {
      id: 8,
      nombre: "Fosas comunes",
      portada: "assets/Images/Fosas comunes.jpg",
      url:"/trabajos/fosascomunes",
      seccion: 6,
    },
  ];

  constructor() { }

  traerAlbumesPor(seccion: number): Observable<Album[]> {    
    return of(this.albumes.filter(x => x.seccion == seccion))
  }
}
