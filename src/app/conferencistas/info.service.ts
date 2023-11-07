import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  accion=[
    {
      id:1,
      nomAct:'Una Introducción a los robots de servicio de propósito general',
      imagen:'assets/DR_LUIS_ANGEL_CONTRERAS_TOLEDO.jpg',
      hora:"De 10:45:00 hrs. a 11:45:00 hrs",
      dia:'28/09/2023',
      descripcion:'DR. Luis Angel Contreras Toledo',
      enlace: "/aplicaciones",
  },
  {
    id:2, 
    nomAct:'La ciencia de datos utiliza y aprovecha la inteligencia artificial',
    imagen:'assets/DR_ADOLFO_GUZMAN_ARENAS.jpg',
    descripcion:'DR. Adolfo Guzmán Arenas',
    hora:"De 11:50:00 hrs. a 12:40:00 hrs.",
    dia:'28/09/2023',
    enlace: "/integrai",
  },
  {
    id:3,
    nomAct:'Turing, ChatGPT y las promesas de la inteligencia',
    imagen:'assets/DR_LUIS_ALBERTO_PINEDA_CORTES.jpg',
    descripcion:'DR. Luis Alberto Pineda Cortes',
    hora:"De 13:15:00 hrs. a 14:05:00 hrs.",
    dia:'28/09/2023',
    enlace: "/rosypencv",
  },
  {
    id:4,
    nomAct:'Neurotechnologia del futuro y el humano 2',
    imagen:'assets/DR_CHRISTIAN_ISAAC_PEÑALOZA.jpg',
    descripcion:'DR. Christian Isaac Peñaloza',
    hora:"De 16:00:00 hrs. a 16:50:00 hrs.",
    dia:'28/09/2023',
    enlace: "/gathering",
  },
  {
    id:5,
    nomAct:'Donde están los datos para trabajar procesos',
    imagen:'assets/DRA_ALEJANDRA_CATHERINE_MONTAÑA_ACEVEDO.png',
    descripcion:'DRA. Alejandra Catherine Montaña Acevedo',
    hora:"De 09:00:00 hrs. a 09:45:00 hrs.",
    dia:'29/09/2023',
    enlace: "/python",
  },
  {
    id:6,
    nomAct:'Donde están los datos para trabajar procesos de analítica',
    imagen:'assets/ING_ALAN_RAFAEL_ARCOS_LOPEZ.png',
    descripcion:'ING. Alan Rafael Arcos López',
    hora:"De 10:00:00 hrs. a 10:35:00 hrs.",
    dia:'29/09/2023',
    enlace: "/kali",
  },
  {
    id:7,
    nomAct:'Seguridad informática: la importancia en las empresas',
    imagen:'assets/ING_EDUARDO ANTONIO RODRÍGUEZ ROSADO.png',
    descripcion:'ING. Eduardo Antonio Rodríguez Rosado',
    hora:"De 15:00:00 hrs. a 15:50:00 hrs.",
    dia:'29/09/2023',
    enlace: "/kotlin",
  },
  {
    id:8,
    nomAct:'Desmitificando la inteligencia artificial: separando la realidad de la ficción',
    imagen:'assets/ING_HUGO_GARCÍA_FLORES.jpg',
    descripcion:'ING. Hugo  García Flores',
    hora:"De 12:30:00 hrs. a 01:30:00 hrs.",
    dia:'29/09/2023',
    enlace: "/clustering",
  },
  {
    id:9,
    nomAct:'Donde están los datos para trabajar procesos de analítica',
    imagen:'assets/DR_WALTERIO_MAYOL_CUEVAS.png',
    descripcion:'DR. Walterio Mayol Cuevas',
    hora:"De 2:00:00 hrs. a 02:55:00 hrs.",
    dia:'29/09/2023',
    enlace: "/node",
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
