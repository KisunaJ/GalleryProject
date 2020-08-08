import { Injectable } from '@angular/core';
import { album } from '../models/album';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  albumes: album[] = [

    {
      id: 1,
      nombre: "Paisajes",
      imagen: "assets/Images/Peru/MachuPichu.jpg",
      urlTrabajos:"/trabajos/funeralperuano",
      seccion: 1,
    },
    {
      id: 2,
      nombre: "Reservas Nacionales",
      imagen: "assets/Images/Peru/Lagotiticaca.jpg",
      urlTrabajos:"/trabajos/fosascomunes",
      seccion: 1,
    },
    {
      id: 3,
      nombre: "Fauna",
      urlTrabajos:"/trabajos/hojasdecoca",
      imagen: "assets/Images/Peru/alphaca.jpg",
      seccion: 1,
    },
    {
      id: 4,
      nombre: "Paisajes",
      urlTrabajos:"/trabajos/hojasdecoca",
      imagen: "assets/Images/Guatemala/guatemala.jpg",
      seccion: 2,
    },
    {
      id: 5,
      nombre: "Reservas Nacionales",
      urlTrabajos:"/trabajos/hojasdecoca",
      imagen: "assets/Images/Guatemala/reservas.jpg",
      seccion: 2,
    },
    {
      id: 6,
      nombre: "Fauna",
      urlTrabajos:"/trabajos/fosascomunes",
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

    
    return of(this.albumes.filter(x => x.seccion == seccion)).pipe(delay(3000))

  }
}
