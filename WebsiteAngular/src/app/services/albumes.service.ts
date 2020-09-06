import { Injectable } from '@angular/core';
import { album } from '../models/album';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  albumes: album[] = [

    {
      id: 1,
      nombre: "Paisajes",
      imagen: "assets/Images/Colombia/Paisajes/paisajes.jpg",
      urlTrabajos:"/trabajos/PaisajesColombianos",
      seccion: 1,
    },
    {
      id: 2,
      nombre: "Reservas Nacionales",
      imagen: "assets/Images/Colombia/Reservas Naturales/PARQUE NACIONAL NATURAL SERRANÍA DE CHIRIBIQUETE.jpg",
      urlTrabajos:"/trabajos/ReservasColombianas",
      seccion: 1,
    },
    {
      id: 3,
      nombre: "Fauna",
      imagen: "assets/Images/Colombia/Fauna/faunacolombia.jpg",
      urlTrabajos:"/trabajos/FaunaColombiana",
      seccion: 1,
    },
    {
      id: 4,
      nombre: "Paisajes",
      urlTrabajos:"/trabajos/PaisajesArgentinos",
      imagen: "assets/Images/Guatemala/guatemala.jpg",
      seccion: 2,
    },
    {
      id: 5,
      nombre: "Reservas Nacionales",
      urlTrabajos:"/trabajos/ReservasArgentinas",
      imagen: "assets/Images/Guatemala/reservas.jpg",
      seccion: 2,
    },
    {
      id: 6,
      nombre: "Fauna",
      urlTrabajos:"/trabajos/FaunaArgentina",
      imagen: "assets/Images/Guatemala/fauna.jpg",
      seccion: 2,
    },
    {
      id: 7,
      nombre: "Fosas comunes",
      urlTrabajos:"/trabajos/fosascomunes",
      imagen: "assets/Images/Fosas comunes.jpg",
      seccion: 5,
    },
    {
      id: 8,
      nombre: "Fosas comunes",
      urlTrabajos:"/trabajos/fosascomunes",
      imagen: "assets/Images/Fosas comunes.jpg",
      seccion: 6,
    },
  ];

  constructor() { }

  traerAlbumesPor(seccion: number): Observable<album[]> {

    
    return of(this.albumes.filter(x => x.seccion == seccion))

  }
}
