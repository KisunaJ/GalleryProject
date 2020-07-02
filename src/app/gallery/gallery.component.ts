import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { albumes} from '../models/albumes';
import { Secciones } from '../models/enums/secciones';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  titulo: string;
  album: albumes[] = [
   
    {
      id: 1,
      nombre: "Funeral peruano",
      imagen: "assets/Images/funeral peruano.jpg",
      seccion: 1,
    },
    {
      id: 2,
      nombre: "Fosas comunes",
      imagen: "assets/Images/Fosas comunes.jpg",
      seccion: 1,
    },
    {
      id: 3,
      nombre: "Hojas de coca",
      imagen: "assets/Images/hojas de coca.jpg",
      seccion: 1,
    },
    {
      id: 4,
      nombre: "Hojas de coca",
      imagen: "assets/Images/hojas de coca.jpg",
      seccion: 2,
    }
  ];
  
  albumesFiltrados: albumes[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(result => {
      this.titulo = result['albumes'];

      var idSeccion = Secciones[this.titulo];
      this.albumesFiltrados = this.album.filter(x => x.seccion == idSeccion);
    })
  }

}
