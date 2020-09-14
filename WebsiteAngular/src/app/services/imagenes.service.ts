import { Injectable } from '@angular/core';
import {Imagen} from '../models/imagen';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../models/baseUrl';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  //imagenes: Imagen[];
  imagenes: Imagen[] = [
    {
      id: 1,
      nombre: "Paramo de Santurban",
      album: "PaisajesColombianos",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Paisajes/Paramo de Santurban.jpg",
    },
    {
      id: 2,
      nombre: "Amacayacu",
      album: "ReservasColombianas",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Reservas Naturales/Parque Nacional Natural Amacayacu2.jpg",
    },
    {
      id: 3,
      nombre: "Anfibio",
      album: "FaunaColombiana",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Fauna/anfibio Hyloscirtus torrenticola.jpg",
    },
    {
      id: 4,
      nombre: "Cañon del chicamocha",
      album: "PaisajesColombianos",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Paisajes/Cañon del chicamocha.jpeg",
    },
    {
      id: 5,
      nombre: "Cultivos",
      album: "PaisajesColombianos",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Paisajes/cultivos.jpeg",
    },

    {
      id: 6,
      nombre: "Desierto de la tatacoa",
      album: "PaisajesColombianos",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Paisajes/Desierto-de-la-tatacoa.jpg",
    },

    {
      id: 7,
      nombre: "Islas rosario",
      album: "PaisajesColombianos",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Paisajes/Islas_rosario.jpg",
    },
    {
      id: 8,
      nombre: "Playa",
      album: "PaisajesColombianos",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Paisajes/playa.jpeg",
    },
    {
      id: 9,
      nombre: "Rio Sucio",
      album: "PaisajesColombianos",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Paisajes/Rio Sucio Chocó.jpeg",
    },
    {
      id: 10,
      nombre: "Parque Nacional Natural Alto Fragua Indi Wasi",
      album: "ReservasColombianas",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Reservas Naturales/Parque Nacional Natural Alto Fragua Indi Wasi.jpg",
    },
    {
      id: 11,
      nombre: "Niños Nukak",
      album: "ReservasColombianas",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Reservas Naturales/niños Nukak.jpg",
    },
    {
      id: 12,
      nombre: "Parque Nacional Natural Alto Fragua Indi Wasi1",
      album: "ReservasColombianas",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Reservas Naturales/Parque Nacional Natural Alto Fragua Indi Wasi1.jpg",
    },
    {
      id: 13,
      nombre: "Parque Nacional Natural Alto Fragua Indi Wasi3",
      album: "ReservasColombianas",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Reservas Naturales/Parque Nacional Natural Alto Fragua Indi Wasi3.jpg",
    },
    {
      id: 14,
      nombre: "Parque Nacional Natural Alto Fragua Indi Wasi4",
      album: "ReservasColombianas",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Colombia/Reservas Naturales/Parque Nacional Natural Alto Fragua Indi Wasi4.jpg",
    },
    

  ]

  constructor(private http: HttpClient) {}

  filtraImagenesPor(album: string): Observable<Imagen[]>{
    return of(this.imagenes.filter(x => x.album == album))
  }

  filtraImagenesHome(): Observable<Imagen[]>{
    return of(this.imagenes.filter(x => x.id %2 !=0));
  }

  obtenerImagenPor(id: number) : Observable<Imagen> {
    var urlDeApi = baseURL + "imagen/" + id
    var result = this.http.get<Imagen>(urlDeApi);
    return result;
  }
}
