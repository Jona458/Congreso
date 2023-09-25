import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-footer',
  templateUrl: './custom-footer.component.html',
  styleUrls: ['./custom-footer.component.scss'],
})
export class CustomFooterComponent  implements OnInit {
  profesores: any[] = [
    { nombre: 'Profesor 1', imagenUrl: 'URL_IMAGEN_1' },
    { nombre: 'Profesor 2', imagenUrl: 'URL_IMAGEN_2' },
    { nombre: 'Profesor 3', imagenUrl: 'URL_IMAGEN_3' },
  ];
  constructor() { }

  ngOnInit() {}

}
