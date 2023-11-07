import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EscuelasService {

  actividad=[
    {
      id:1,
      escuela:'TECNOLÓGICO NACIONAL DE MÉXICO',
      imagen:'assets/tecn.png',
      },
  {
      id:2,
      escuela:'TECNOLOGICO DE ESTUDIOS SUPERIORES DE ECATEPEC',
      imagen:'assets/tese.jpg',
  },
  {
      id:3,
      escuela:'BADAK - INNOVACIÓN Y DESARROLLO',
      imagen:'assets/badak1.png',
  },
  {
      id:4,
      escuela:'INSTITUTO TECNOLÓGICO DE MONTERREY',
      imagen:'assets/tecmonterrey.png',
  },
  {
      id:5,
      escuela:'INSTITUTO TECNOLÓGICO DE ZITÁCUARO',
      imagen:'assets/zita.png',
  },
  {
      id:6,
      escuela:'INSTITUTO POLITÉCNICO NACIONAL',
      imagen:'assets/ipn logo1.png',
  },
  {
      id:7,
      escuela:'TECNOLÓGICO DE ESTUDIOS SUPERIORES DE COACALCO',
      imagen:'assets/tesco.webp',
  },
  {
      id:8,
      escuela:'TECNOLÓGICO DE ESTUDIOS SUPERIORES DE CHIMALHUACÁN',
      imagen:'assets/teschi1.png',
  },
  {
      id:9,
      escuela:'UNIVERSIDAD DE SAN BUENAVENTURA',
      imagen:'assets/sanbuena.png',
  },
  
]
  constructor() { }
  gedActividad(){
    return this.actividad;
}
  gedfotoid(id:number){
    //let i=parseInt(id);
    return this.actividad[id];
  }
}
