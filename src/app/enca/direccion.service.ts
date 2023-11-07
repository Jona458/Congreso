import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  accion=[
    {
      id:1,
      direccion:"/pagina1",
      imagen:"assets/cuenta.png",
      descripcion:'Cuenta'
  },
  {
    id:2, 
    direccion:"/registro-progra",
    imagen:"assets/registro.png",
    descripcion:'Registro'
  },
  {
    id:3,
    direccion:"/instituciones",
    imagen:"assets/escuela.png",
    descripcion:'Instituciones'
  },
  {
    id:4,
    direccion:"/talleristas",
    imagen:"assets/actividad.png",
    descripcion:'Talleristas'
  },
  {
    id:5,
    direccion:"/conferencistas",
    imagen:"assets/actividad.png",
    descripcion:'Conferencistas'
  },
  
]
  constructor() { }
  gedAccion(){
    return this.accion;
}
  gedinicio(id:number){
    //let i=parseInt(id);
    return this.accion[id];
  }
}