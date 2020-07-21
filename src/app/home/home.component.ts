import { Component, OnInit } from '@angular/core';
import { Imagen } from '../models/imagen';
import { Router } from '@angular/router';
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imagenesFiltradas: Imagen[] = [];
  

  constructor(private router: Router, private imagenesService: ImagenesService) { }

  ngOnInit(): void {
    //Se agrega esta linea para solventar el error preexistente en la primeng-galleria.js
    this.router.navigate([this.router.url]);
    
    this.imagenesService.filtraImagenesHome().subscribe(imagenes => {
      
      this.imagenesFiltradas = imagenes;
    });

  }

}

