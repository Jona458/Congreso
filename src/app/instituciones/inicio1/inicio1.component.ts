import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../informacion.service';
import { EscuelasService } from '../escuelas.service';

@Component({
  selector: 'app-inicio1',
  templateUrl: './inicio1.component.html',
  styleUrls: ['./inicio1.component.scss'],
})
export class Inicio1Component  implements OnInit {
  actividades:any[] =[];
  constructor(private serveactividad:EscuelasService) { }
  ngOnInit() {
    this.actividades= this.serveactividad.gedActividad();
    console.log(this.actividades);
  }
}
