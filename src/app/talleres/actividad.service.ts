import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  prod=[
    {
      id:'1',
      nomProd:'PC',
      imagen:'assets/pc1.jpeg',
      descripcion:'LO MEJOR EN PC',
  },
  {
    id:'2',
    nomProd:'LAPTOP',
    imagen:'assets/lap1.jpeg',
    descripcion:'LO MEJOR EN LAP',
  },
  {
    id:'3',
    nomProd:'MOUSE',
    imagen:'assets/mouse1.jpeg',
    descripcion:'LO MEJOR EN MOUSE',
  },
  {
    id:'4',
    nomProd:'PC',
    imagen:'assets/audifonos1.jpg',
    descripcion:'LO MEJOR EN AUDIFONOS',
  },
  
]
  constructor() { }
}
