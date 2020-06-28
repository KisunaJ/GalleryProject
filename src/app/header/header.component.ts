import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activo: boolean;

  constructor() { }

  ngOnInit(): void {

    this.activo=false;
  }

  activar(){

    this.activo= true;
  }

}
