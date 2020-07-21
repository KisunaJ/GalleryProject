import { Injectable } from '@angular/core';
import {Imagen} from '../models/imagen';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  imagenes: Imagen[] = [

    {
      id: 1,
      nombre: "Funeral peruano",
      trabajo: "fosascomunes",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/funeral peruano.jpg",
    },
    {
      id: 2,
      nombre: "Fosas comunes",
      trabajo: "hojasdecoca",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Fosas comunes.jpg",
    },
    {
      id: 3,
      nombre: "Hojas de coca",
      trabajo: "funeralperuano",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/hojas de coca.jpg",
    },
    {
      id: 4,
      nombre: "Montañas de peru",
      trabajo: "funeralperuano",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/montañas de peru.jpg",
    },
    {
      id: 5,
      nombre: "Ritual de despedida",
      trabajo: "fosascomunes",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/ritual de despedida.jpg",
    },

  ]

  constructor() {}

  filtraImagenesPor(trabajo:string): Observable<Imagen[]>{

    return of(this.imagenes.filter(x => x.trabajo == trabajo))
  }

  filtraImagenesHome(): Observable<Imagen[]>{

    return of(this.imagenes.filter(x => x.id %2 !=0));
    
  }


}
