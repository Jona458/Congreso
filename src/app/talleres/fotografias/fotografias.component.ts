import { ActividadService } from './../actividad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotografias',
  templateUrl: './fotografias.component.html',
  styleUrls: ['./fotografias.component.scss'],
})
export class FotografiasComponent  implements OnInit {
  actividades:any[] =[];
  constructor(private serveactividad:ActividadService) { }
  ngOnInit() {
    this.actividades= this.serveactividad.gedActividad();
    console.log(this.actividades);
  }

}
