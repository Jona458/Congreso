import { Component, OnInit } from '@angular/core';
import { DireccionService } from './direccion.service';

@Component({
  selector: 'app-enca',
  templateUrl: './enca.component.html',
  styleUrls: ['./enca.component.scss'],
})
export class EncaComponent  implements OnInit {
  accion:any[] =[];
  constructor(private serveaccion:DireccionService) { }
  ngOnInit() {
    this.accion= this.serveaccion.gedAccion();
    console.log(this.accion);
  }
}