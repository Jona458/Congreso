import { Component, OnInit } from '@angular/core';
import { IdfotoService } from '../idfoto.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss'],
})
export class FotosComponent  implements OnInit {
  actividades:any[] =[];
  constructor(private serveactividad:IdfotoService) { }
  ngOnInit() {
    this.actividades= this.serveactividad.gedActividad();
    console.log(this.actividades);
  }
}