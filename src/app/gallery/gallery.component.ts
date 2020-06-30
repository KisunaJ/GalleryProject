import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { albumes} from '../models/albumes';



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
    },
    {
      id: 2,
      nombre: "Fosas comunes",
      imagen: "assets/Images/Fosas comunes.jpg",
    },
    {
      id: 3,
      nombre: "Hojas de coca",
      imagen: "assets/Images/hojas de coca.jpg",
    },
    // {
    //   id: 4,
    //   nombre: "Hojas de coca",
    //   imagen: "assets/Images/montañas de peru.jpg",
    // },
   
  ]
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(result => {
      this.titulo = result['albumes'];
    })
  }

}
