import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
})
export class OrganizationComponent  implements OnInit {
  profesores: any[] = [
    { nombre: 'Profesor 1', imagenUrl: 'URL_IMAGEN_1' },
    { nombre: 'Profesor 2', imagenUrl: 'URL_IMAGEN_2' },
    { nombre: 'Profesor 3', imagenUrl: 'URL_IMAGEN_3' },
    // Agrega más profesores según sea necesario
    //aqui es el nombre del organizador y su imagen
  ];
  constructor() { }

  ngOnInit() {}

}
