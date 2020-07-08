import { Component, OnInit } from '@angular/core';
import { Imagen } from '../models/imagen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imagenes: Imagen[] = [

    {
      id: 1,
      nombre: "Funeral peruano",
      trabajo: "funeral peruano",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/funeral peruano.jpg",
    },
    {
      id: 2,
      nombre: "Fosas comunes",
      trabajo: "funeral peruano",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/Fosas comunes.jpg",
    },
    {
      id: 3,
      nombre: "Hojas de coca",
      trabajo: "funeral peruano",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/hojas de coca.jpg",
    },
    {
      id: 4,
      nombre: "Montañas de peru",
      trabajo: "funeral peruano",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/montañas de peru.jpg",
    },
    {
      id: 5,
      nombre: "Ritual de despedida",
      trabajo: "funeral peruano",
      descripcion: "En este espacio estara la descripcion de la imagen que usamos arriba",
      ruta: "assets/Images/ritual de despedida.jpg",
    },

  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    //Se agrega esta linea para solventar el error preexistente en la primeng-galleria.js
    this.router.navigate([this.router.url]);
  }

}

