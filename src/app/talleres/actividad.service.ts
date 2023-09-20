import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  actividad=[
    {
      id:'1',
      nomAct:'Aplicaciones de sensores en Robótica',
      imagen:'assets/sensores.png',
      descripcion:'Mtro. Juan Francisco Meléndez Elizalde',
      escuela:"Tecnológico de Estudios Superiores de Ecatepec"
  },
  {
    id:'2',
    nomAct:'IntegrAI Nexus',
    imagen:'assets/ia.jpg',
    descripcion:'M. en I.S.C. Rubén Raya Delgado NDS Cognitive Labs del Tecnológico de Monterrey',
    escuela:"Tecnológico de Monterrey",
  },
  {
    id:'3',
    nomAct:'Introducción a ROS y PENCV',
    imagen:'assets/ROS.jpeg',
    descripcion:'Dr. Noé Velázquez López',
    escuela:"Universidad Autónoma Chapingo",
  },
  {
    id:'4',
    nomAct:'Gathering information',
    imagen:'assets/gathering.jpg',
    descripcion:'Dr. Adolfo Meléndez Ramírez',
    escuela:"Tecnológico de Estudios Superiores de Ecatepec",
  },
  {
    id:'5',
    nomAct:'Programación con Python: Nivel Básico',
    imagen:'assets/python.jpg',
    descripcion:'M. en A.D.N. Juan Manuel Stein Carrillo',
    escuela:"Tecnológico de Estudios Superiores de Ecatepec",
  },
  {
    id:'6',
    nomAct:'Análisis Forense con Kali Linux',
    imagen:'assets/kali.jpg',
    descripcion:'Ing. Eduardo Antonio Rodríguez Rosado',
    escuela:"Badak - Innovación y Desarrollo",
  },
  
]
  constructor() { }
  gedActividad(){
    return this.actividad;
}
}
