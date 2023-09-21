import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';

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
      escuela:"Tecnológico de Estudios Superiores de Ecatepec",
      enlace: "/aplicaciones",
  },
  {
    id:'2', 
    nomAct:'IntegrAI Nexus',
    imagen:'assets/ia.jpg',
    descripcion:'M. en I.S.C. Rubén Raya Delgado NDS Cognitive Labs del Tecnológico de Monterrey',
    escuela:"Tecnológico de Monterrey",
    enlace: "/integrai",
  },
  {
    id:'3',
    nomAct:'Introducción a ROS y PENCV',
    imagen:'assets/ROS.jpeg',
    descripcion:'Dr. Noé Velázquez López',
    escuela:"Universidad Autónoma Chapingo",
    enlace: "/rosypencv",
  },
  {
    id:'4',
    nomAct:'Gathering information',
    imagen:'assets/gathering.jpg',
    descripcion:'Dr. Adolfo Meléndez Ramírez',
    escuela:"Tecnológico de Estudios Superiores de Ecatepec",
    enlace: "/gathering",
  },
  {
    id:'5',
    nomAct:'Programación con Python: Nivel Básico',
    imagen:'assets/python.jpg',
    descripcion:'M. en A.D.N. Juan Manuel Stein Carrillo',
    escuela:"Tecnológico de Estudios Superiores de Ecatepec",
    enlace: "/python",
  },
  {
    id:'6',
    nomAct:'Análisis Forense con Kali Linux',
    imagen:'assets/kali.jpg',
    descripcion:'Ing. Eduardo Antonio Rodríguez Rosado',
    escuela:"Badak - Innovación y Desarrollo",
    enlace: "/kali",
  },
  {
    id:'7',
    nomAct:'Introducción a la programación con kotlin',
    imagen:'assets/kotlin.jpg',
    descripcion:'L.I. José Alfredo Jiménez Meza',
    escuela:"Instituto Tecnológico de Zitácuaro",
    enlace: "/kotlin",
  },
  {
    id:'7',
    nomAct:'Análisis de Clustering para clasificación de clientes.',
    imagen:'assets/analisis.jpg',
    descripcion:'Dr. Francisco Jacob Ávila Camacho',
    escuela:"Tecnológico de Estudios Superiores de Ecatepec",
    enlace: "/clustering",
  },
  
]
  constructor() { }
  gedActividad(){
    return this.actividad;
}
}
