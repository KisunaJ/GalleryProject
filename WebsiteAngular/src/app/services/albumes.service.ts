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
      nombre: "Funeral peruano",
      imagen: "assets/Images/funeral peruano.jpg",
      urlTrabajos:"/trabajos/funeralperuano",
      seccion: 1,
    },
    {
      id: 2,
      nombre: "Fosas comunes",
      imagen: "assets/Images/Fosas comunes.jpg",
      urlTrabajos:"/trabajos/fosascomunes",
      seccion: 1,
    },
    {
      id: 3,
      nombre: "Hojas de coca",
      urlTrabajos:"/trabajos/hojasdecoca",
      imagen: "assets/Images/hojas de coca.jpg",
      seccion: 1,
    },
    {
      id: 4,
      nombre: "Hojas de coca",
      urlTrabajos:"/trabajos/hojasdecoca",
      imagen: "assets/Images/hojas de coca.jpg",
      seccion: 2,
    },
    {
      id: 5,
      nombre: "Hojas de coca",
      urlTrabajos:"/trabajos/hojasdecoca",
      imagen: "assets/Images/hojas de coca.jpg",
      seccion: 3,
    },
    {
      id: 6,
      nombre: "Fosas comunes",
      urlTrabajos:"/trabajos/fosascomunes",
      imagen: "assets/Images/Fosas comunes.jpg",
      seccion: 4,
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
