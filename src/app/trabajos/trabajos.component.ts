import { Component, OnInit } from '@angular/core';
import { Imagen } from '../models/imagen';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {

  titulo:string;

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

  arraytrabajos: Imagen[] = [];
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //Se agrega esta linea para solventar el error preexistente en la primeng-galleria.js
    this.router.navigate([this.router.url]);

    this.activatedRoute.params.subscribe(result => 
      {
        // el valor que recibe suscribe se guardara en este caso en la variable "result"
        //en este caso puedo obtener el valor de "titulo" segun el "routes"
        this.titulo = result['trabajos'];
        
        this.arraytrabajos = this.imagenes.filter(x => x.trabajo == this.titulo);
      });
  }


}
