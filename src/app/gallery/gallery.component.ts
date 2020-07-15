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
  
  albumesFiltrados: album[] = [];

  constructor(private activatedRoute: ActivatedRoute, private albumesServices: AlbumesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(result => {
      this.albumesFiltrados = [];
      let seccionUrl: string;
      seccionUrl = result['albumes'];
      this.titulo = SeccionesLabel.get(Secciones[seccionUrl]);

      var idSeccion = Secciones[seccionUrl];
      this.albumesServices.traerAlbumesPor(idSeccion).subscribe(albumes => {
        this.albumesFiltrados = albumes;
      });
    });
  }

}
