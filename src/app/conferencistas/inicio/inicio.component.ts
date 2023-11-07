import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent  implements OnInit {
  accion:any[] =[];
  constructor(private serveaccion:InfoService) { }
  ngOnInit() {
    this.accion= this.serveaccion.gedAccion();
    console.log(this.accion);
  }
}