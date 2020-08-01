import { Component, OnInit } from '@angular/core';
import { Imagen } from '../models/imagen';
import { ActivatedRoute, Router } from '@angular/router';
import {ImagenesService} from 'src/app/services/imagenes.service'


@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {

  titulo:string;

  arraytrabajos: Imagen[] = [];
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private imagenesS: ImagenesService) { }

  ngOnInit(): void {
    //Se agrega esta linea para solventar el error preexistente en la primeng-galleria.js
    this.router.navigate([this.router.url]);

    this.activatedRoute.params.subscribe(result => 
      {
        // el valor que recibe suscribe se guardara en este caso en la variable "result"
        //en este caso puedo obtener el valor de "titulo" segun el "routes"
        this.imagenesS.filtraImagenesPor(result['trabajos']).subscribe(trabajos => { 
          this.arraytrabajos = trabajos;
        });
      
      });
  }


}
