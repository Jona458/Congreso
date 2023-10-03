import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../contact/images.service';
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
  institutions:any []=[];
  constructor(private serviceimages:ImagesService) {
  this.institutions=serviceimages.getInstitutions();
  console.log(this.institutions)
   }
  ngOnInit() {}

}
