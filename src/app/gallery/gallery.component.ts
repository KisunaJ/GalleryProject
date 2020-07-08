import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { album } from '../models/album';
import { Secciones, SeccionesLabel } from '../models/enums/secciones';
import { AlbumesService } from '../services/albumes.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  titulo: string;
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

  albumesFiltrados: album[] = [];

  constructor(private activatedRoute: ActivatedRoute, private albumesServices: AlbumesService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(result => {
      let seccionUrl: string;
      seccionUrl = result['albumes'];
      this.titulo = SeccionesLabel.get(Secciones[seccionUrl]);

      var idSeccion = Secciones[seccionUrl];
      this.albumesFiltrados = this.albumes.filter(x => x.seccion == idSeccion);
    });
  }

}
